" ====================================================
"   Copyright (C)2019 All rights reserved.
"
"   Author        : Jeremy Chen
"   Email         : jeremychen@djeremychen.com
"   File Name     : .vimrc
"   Last Modified : 2019-03-27 14:41
"   Describe      : the config file of vim
"
" ====================================================


"=====================Basic option====================
    set noncompatible "not use vi feature but vim
    filetype on
    filetype plugin on "choose the plug from filetype
    let mapleader = "," "map the leader
    set t_Co=256
    set encoding=UTF-8
    set number
    set cmdheight=2
    set tabstop=4
    set shiftwidth=4
    set expandtab
    set smarttab
    set autoindent
    set cindent
    set smartindent
    filetype indent on
    set smarttab
    set background=dark
    let g:onedark_termcolors=256
    colorscheme onedark
"=====================================================
"
"=====================================================
    if has("gui_runing")
        set guifont=Droid\ Sans\ Mono\ Nerd\ Font\ Complete:h18
        set guioptions-=m
        set guioptions-=T
        set guioptions-=L
        set guioptions-=r
        set guioptions-=b
        set guioptions-=0
        set guicursor=n-v-c:ver5
    endif
"=====================================================
"
"=====================Map option======================
    map <silent> <leader>ss :source ~/.vimrc<cr>
    map <silent> <leader>ee :e ~/.vimrc<cr>
    autocmd! bufwritepost .vimrc source /.vimrc
    nnoremap <silent> <F2> :g/^\s*$/d<CR>
    nnoremap <silent> <leader><F2> gg=G
    nnoremap <silent> <F3> :./^/\/\/g
    nnoremap <silent> <leader><F3> :./\/\//^/g
    inoremap <M-cr> <esc> :split<cr>
    nnoremap <M-cr> :split<cr>
    nnoremap <M-j> <c-w>j
    nnoremap <M-k> <c-w>k
    nnoremap <M-h> <c-w>h
    nnoremap <M-l> <c-w>l
"=====================================================
"
"
"====================Plug option======================

if empty(glob('~/.vim/autoload/plug.vim'))
    silent !curl -fLo ~./vim/autoload/plug.vim --create-dirs
                \https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim




    call plug#begin('~/.vim/plugged')


    Plug 'nine2/vim-copyright'  "copy-right header of the file
    Plug 'Valloric/YouCompleteMe',{'do':'./install.py --clangd-completer --java-completer --go-completer'}
    Plug 'ryanoasis/vim-devicons'
    Plug 'scrooloose/nerdtree'
    Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
    Plug 'Xuyuanp/nerdtree-git-plugin'
    Plug 'majutsushi/tarbar'
    Plug 'jiangmiao/auto-pairs'
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    Plug 'tpope/vim-endwise'
    Plug 'godlygeek/tabular'
    Plug 'tpope/vim-fugitive'
    Plug 'junegunn/gv.vim'
    Plug 'mhinz/vim-startify'
    Plug 'haya14busa/incsearch.vim'
    Plug 'godlygeek/tabular'


    call plug#end()
"=====================================================
"
"
"====================Plug setting=====================
"
    nnoremap <leader><leader>i :PlugInstall<cr>
    nnoremap <leader><leader>u :PlugUpdate<cr>
    nnoremap <leader><leader>c :PlugClean<cr>
"
"vim-copyright
    nnoremap <leader>h :CopyrightAdd<cr>
    nnoremap <leader>H :CopyrightUpdate<cr>
    let g:file_copyright_email='jeremychen@djeremychen.com'
    let g:file_copyright_name='Jeremy Chen'
    let g:file_copyright_auto_filetype=['sh','c','h','cpp','java','vimrc']
"aireline
    let g:airline_theme="onedark"
    let g:airline_powerline_fonts=1
    let g:airline#extensions#tabline#enabled=1
    if !exists('g:airline_symbols')
        let g:airline_symbols={}
    endif
    let g:airline_left_sep=' '
    let g:airline_left_alt_sep=' '
    let g:airline_right_sep=' '
    let g:airline_right_alt_sep=' '
"YCM
    nnoremap <leader>u  :YcmCompleter GoToDeclaration<cr>
    nnoremap <leader>i  :YcmCompleter GoTodefinition<cr>
    nnoremap <leader>o  :YcmCompleter GoToInclude<cr>
    nnoremap <leader>ff :YcmCompleter FixIt<cr>
    nmap <F5>           :YcmDiags<cr>
    let g:ycm_confirm_extra_conf=0
    let g:ycm_error_symbol='!'
    let g:ycm_warning_symbol='!'
    let g:ycm_seed_identifiers_with_syntax=1
    let g:ycm_complete_in_comments=1
    let g:ycm_complete_in_strings=1
    let g:ycm_server_python_interpreter='usr/bin/python'
    let g:ycm_python_binary_path='python'
"ctags
set tags+=/usr/include/tags
set tags+=~/.vim/systags
set tags+=~/.vim/x86_64-linux-gnu-systags
let g:ycm_collect_identifiers_from_tags_files = 1
let g:ycm_semantic_triggers =  {
  \   'c' : ['->', '.','re![_a-zA-z0-9]'],
  \   'objc' : ['->', '.', 're!\[[_a-zA-Z]+\w*\s', 're!^\s*[^\W\d]\w*\s',
  \             're!\[.*\]\s'],
  \   'ocaml' : ['.', '#'],
  \   'cpp,objcpp' : ['->', '.', '::','re![_a-zA-Z0-9]'],
  \   'perl' : ['->'],
  \   'php' : ['->', '::'],
  \   'cs,java,javascript,typescript,d,python,perl6,scala,vb,elixir,go' : ['.'],
  \   'ruby' : ['.', '::'],
  \   'lua' : ['.', ':'],
  \   'erlang' : [':'],
  \ }
let g:ycm_semantic_triggers.c = ['->', '.', ' ', '(', '[', '&',']']
"nerdtree
    nnoremap <silent> <leader>n :NERDTreeToggle<cr>
    let g:NERDTreeFileExtensionHighlightFullName=1
    let g:NERDTreeExactMatchHighlightFullName=1
    let g:NERDTreePatternMatchHighlightFullName=1
    let g:NERDTreeHighlightFolders=1
    let g:NERDTreeHighlightFoldersFullName=1
    let g:NERDTreeDirArrowExpandable='>'
    let g:NERDTreeDirArrowCollapsible='|'
"nerdtree-git-plugin
let g:NERDTreeIndicatorMapCustom={
    \ "Modified" : "*",
    \ "Staged"   : "+",
    \ "Untracked": "??"
    \ "Renamed"  : "R",
    \ "Unmerged" : "=",
    \ "Deleted"  : "D",
    \ "Dirty"    : "!",
    \ "Clean"    : "C",
    \ "Ingored"  : "I",
    \ "Unkown"   : "?",
    \}
"tarbar
    nnoremap <silent> <F8> :TarbarToggle<cr>
"gv
    nnoremap <leader>g :GV<cr>
    nnoremap <leader>G :GV!<cr>
    nnoremap <leader>gg :GV><cr>
"incsearch
    map / <Plug>(incsearch-forward)
    map ? <Plug>(incsearch-backward)
    map g/ <Plug>(incsearch-stay)
"=====================================================
