document.addEventListener('DOMContentLoaded', function() {
     // Track which letters have been opened
    let openedLetters = [false, false, false, false, false, false]; // 6 letters (index 0-5)
    let totalOpened = 0;
    const totalLetters = 6;
    const lastLetterIndex = 5; // The 6th letter (index 5) is your special letter
    
    // Get elements
    const backBtn = document.getElementById('backBtn');
    const unlockNotification = document.getElementById('unlockNotification');
    
    // Store references to all letters
    const envelopes = [];
    const letters = [];
    
    for (let i = 1; i <= totalLetters; i++) {
        envelopes.push({
            envelope: document.getElementById(`envelope${i}`),
            content: document.getElementById(`letter${i}`)
        });
    }
    
    // Function to show a letter
    function showLetter(letterIndex) {
        const letterContent = envelopes[letterIndex].content;
        if (letterContent) {
            letterContent.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Function to hide all letters
    function hideAllLetters() {
        for (let i = 0; i < envelopes.length; i++) {
            if (envelopes[i].content) {
                envelopes[i].content.classList.remove('active');
            }
        }
        document.body.style.overflow = '';
    }
    
    // Function to mark a letter as opened
    function markLetterOpened(letterIndex) {
        if (!openedLetters[letterIndex]) {
            openedLetters[letterIndex] = true;
            totalOpened++;
            
            // Check if all letters except the last one are opened
            // The last letter becomes accessible after 5 letters are opened (totalLetters - 1)
            if (totalOpened >= totalLetters - 1 && !openedLetters[lastLetterIndex]) {
                // Unlock the last letter
                const lastEnvelope = envelopes[lastLetterIndex].envelope;
                if (lastEnvelope) {
                    lastEnvelope.classList.remove('locked-envelope');
                    const envelopeIcon = lastEnvelope.querySelector('.envelope-icon');
                    const envelopeName = lastEnvelope.querySelector('.envelope-name');
                    if (envelopeIcon) envelopeIcon.textContent = '✉️';
                    if (envelopeName) envelopeName.textContent = 'From: Me (Special Letter)';
                    
                    // Show notification
                    unlockNotification.classList.add('show');
                    setTimeout(() => {
                        unlockNotification.classList.remove('show');
                    }, 3000);
                }
                openedLetters[lastLetterIndex] = true; // Mark as unlocked
            }
        }
    }
    
    // Add click handlers to envelopes
    for (let i = 0; i < envelopes.length; i++) {
        const envelope = envelopes[i].envelope;
        const letterIndex = i;
        
        if (envelope) {
            envelope.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Check if this is the last (locked) letter
                const isLastLetter = (letterIndex === lastLetterIndex);
                const isLocked = envelope.classList.contains('locked-envelope');
                
                if (isLastLetter && isLocked) {
                    // Show message that it's locked
                    unlockNotification.textContent = '🔒 Open other letters first to unlock the secret message! 🔒';
                    unlockNotification.classList.add('show');
                    setTimeout(() => {
                        unlockNotification.classList.remove('show');
                        unlockNotification.textContent = '🔓 You\'ve unlocked the secret letter! 🎁';
                    }, 2000);
                    return;
                }
                
                // Show the letter
                showLetter(letterIndex);
                
                // Mark as opened (for all except the last one if it was locked)
                if (!isLastLetter || !isLocked) {
                    markLetterOpened(letterIndex);
                }
            });
        }
    }
    
    // Add close button handlers
    for (let i = 0; i < envelopes.length; i++) {
        const letterContent = envelopes[i].content;
        if (letterContent) {
            const closeBtn = letterContent.querySelector('.close-letter');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    hideAllLetters();
                });
            }
            
            // Close when clicking outside the letter paper
            letterContent.addEventListener('click', function(e) {
                if (e.target === letterContent) {
                    hideAllLetters();
                }
            });
        }
    }
    
    // Back button to main page
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Also close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideAllLetters();
        }
    });
});