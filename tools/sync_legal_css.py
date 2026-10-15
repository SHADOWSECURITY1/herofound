#!/usr/bin/env python3
"""Copy the hero, water-column, Donate, and button rules from index.html into legal.css
so the legal pages share the home page's backdrops without a second hand-kept copy.

Run from the repo root after changing those rules in index.html:
    python3 tools/sync_legal_css.py

Everything between the two marker comments in legal.css is replaced; the rest of
legal.css is hand-written and left alone."""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = (ROOT / 'index.html').read_text(encoding='utf-8')
LEGAL = ROOT / 'legal.css'
START = '/* >>> synced from index.html by tools/sync_legal_css.py; do not edit by hand */'
END = '/* <<< end of synced rules */'

SELECTORS = [
    '.foundation-hero', '.foundation-hero-video', '.foundation-hero::before',
    '.foundation-hero-inner', '.foundation-hero-copy', '.site-brand', '.site-brand img',
    '.foundation-hero h1', '.foundation-hero h1 em', '.foundation-hero-sub', '.foundation-hero-actions',
    '.btn-gold', '.btn-gold:hover', '.btn-fund-ghost', '.btn-fund-ghost:hover',
    '.f-section', '.f-wrap', '.f-tag', '.f-tag::before',
    '.f-section h2, .programs-section h2', '.f-section h2 em, .programs-section h2 em',
    '.f-section p, .programs-content > p', '.f-section p strong',
    '.water-column',
    '.donate-section', '.donate-video', '.donate-section::before', '.donate-section::after',
    '.donate-copy', '.donate-copy p', '.donate-actions', '.donate-alt', '.donate-alt a', '.donate-alt a:hover',
]

def rules_for(selector):
    """Every top-level rule in index.html's style block that starts with this exact selector."""
    pat = re.compile(r'^    ' + re.escape(selector) + r' \{(?:[^\n]*\}$|.*?^    \})', re.S | re.M)
    found = [m.group(0) for m in pat.finditer(INDEX)]
    if not found:
        sys.exit(f'selector not found in index.html: {selector}')
    return found

out = [START, '/* Class names are the same as on the home page so these rules apply unchanged. */']
for sel in SELECTORS:
    for rule in rules_for(sel):
        out.append(re.sub(r'^    ', '', rule, flags=re.M))
out.append(END)
block = '\n'.join(out) + '\n'

css = LEGAL.read_text(encoding='utf-8')
if START in css and END in css:
    css = css[:css.index(START)] + block + css[css.index(END) + len(END) + 1:]
else:
    css = css.rstrip('\n') + '\n\n' + block
LEGAL.write_text(css, encoding='utf-8')
print(f'synced {len(SELECTORS)} selectors into legal.css')
