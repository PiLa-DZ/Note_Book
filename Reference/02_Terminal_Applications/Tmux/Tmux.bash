--------------------------------------------------------------------------------------
# Install tmux
	$ sudo apt install tmux

# ####################################################################################
# Sessions ###########################################################################
# Open new session -------------------------------------------------------------------
$ tmux									# Open new session by default name
$ tmux new -s "Name_"					# Open new session and name it
: new									# Open new session by default name
: new -s "Name_"						# Open new session and name it

# Open old session -------------------------------------------------------------------
$ tmux attach -t "Num_"					# Open old session
$ tmux a -t "Num_"						# Open old session 
$ tmux a								# Open last session 
C+b_w									# Session managar
C+b_s									# Session managar

# Detach session ---------------------------------------------------------------------
C+b_d									# Close session && working in the background

# Kill session -----------------------------------------------------------------------
$ tmux kill-session -t "Name_or_Num_"	# Delete session Name or Number
$ tmux kill-server						# Kill all session
C+b_w_x									# Kill session or window or pane

# Rename session ---------------------------------------------------------------------
$ tmux rename-session -t "Name_or_Num_"	# Rename session Name or Number
: rename-session "Name_"				# Rename current session


# ####################################################################################
# Windows ############################################################################
# Open new window --------------------------------------------------------------------
C+b_c									# New window
: new-window							# New window 

# Jump between windows ---------------------------------------------------------------
C+b_n									# Jump next window
C+b_p									# Jump back window
C+b_"Num"								# Jump window by nomber

# Rename window ----------------------------------------------------------------------
C+b_,									# Raname current window
: rename-window							# Raname current window

# Kill window ------------------------------------------------------------------------
C+b_&									# Kill current window

# ####################################################################################
# Panes ##############################################################################
# New pane ---------------------------------------------------------------------------
C+b_%									# Vertical pane
C+b_"									# Horizontal pane "
# Jump between panes -----------------------------------------------------------------
C+b_o									# Jump next pane
C+b "Arrow_keys_"						# Jump between panes
C+b_q									# Show pane numbers
C+b_q_"Num_"							# Jump to the pane by Number
# Resize pane ------------------------------------------------------------------------
C+b_C+ "Arrow_keys_"					# Resize pane
C+b_A+ "Arrow_keys_"					# Resize pane
C+b_A+ "Num_"							# Auto Resize pane
# Kill pane --------------------------------------------------------------------------
C+b_x									# Kill current pane

# ####################################################################################
# Copy and paste #####################################################################
C+b_[	"Arrow_keys_"					# Open copy mode]
Space_"Arrow_deys_"						# Select mode
C+w										# Copy
C+b_]									# Past

# ####################################################################################
# Commands ###########################################################################
C+b_:							# Open command line
$ tmux ls						# List sessions


# ####################################################################################
# configuration ######################################################################
$ vi ~/.tmux.conf
# Start text
	set -g prefix C-s
	# act like vim
	setw -g mode-keys vi
# End text

# ####################################################################################
# heat Sheet & Quick Reference #######################################################
https//tmuxcheatsheet.com/










