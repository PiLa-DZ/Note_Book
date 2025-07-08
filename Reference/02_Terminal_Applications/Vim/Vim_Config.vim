colorscheme zaibatsu

set ignorecase
set nowrap

set showcmd

set number relativenumber
set tabstop=3 shiftwidth=3
set splitright splitbelow

set hlsearch             " ON HighLight After Search
set incsearch            " ON HighLight In Search
set scrolloff=5
set list                 " ------

syntax on

set wildmode=longest,list,full " AutoComplate Ctrl+n Ctrl+p

set clipboard=unnamed

call plug#begin('~/.vim/plugged') " .vim/autoload/plug.vim
Plug 'sheerun/vim-polyglot'
Plug 'junegunn/seoul256.vim'
call plug#end()

" ReMap -----------------------------------------------------
" Jump Split Windows
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-h> <C-w>h
nnoremap <C-l> <C-w>l

" Jump Split Windows
inoremap <C-j> <esc><C-w>j
inoremap <C-k> <esc><C-w>k
inoremap <C-h> <esc><C-w>h
inoremap <C-l> <esc><C-w>l

" Jump Split Windows
tmap <C-j> <C-w>j
tmap <C-k> <C-w>k
tmap <C-h> <C-w>h
tmap <C-l> <C-w>l


" Open Horizontal Terminal
nnoremap <C-/> :ter <cr><C-w>:resize 5 <cr>clear<cr> 
tmap     <C-/> <C-w>:ter <cr>

" Open Vertical Terminal
nnoremap <C-S-/> :vert ter <cr>
tmap     <C-S-/> <C-w>:vert ter <cr>

" Close Terminal
tmap <C-m> <C-w>:q!<cr>


