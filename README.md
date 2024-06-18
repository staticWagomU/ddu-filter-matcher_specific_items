# ddu-filter-matcher-specific-items

String Matcher starting with a specific character for ddu.vim

This matcher filters items matching a string that begins with a specific character.


## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
call ddu#custom#patch_global(#{
    \   sourceOptions: #{
    \     _: #{
    \       matchers: ['matcher_specific_items'],
    \     },
    \   }
    \ })

call ddu#custom#patch_global(#{
    \   filterParams: #{
    \     matcher_specific_items: #{
    \       startsWith: '_',
    \     },
    \   }
    \ })
```
