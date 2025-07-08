" $VIM/vimrc
" $VIMRUNTIME/defaults.vim

$ echo $VIM
$ echo $VIMRUNTIME

:version
	fall-back for $VIM: "/usr/share/vim"

$ vim -u NONE
$ vim -u NORC

:h runtimepath
:h rtp
:set rtp?

:set clipboard=unnamed
:hi

// ============================
" Ctrl+n Ctrl+p
:set wildmode=longest,list,full


