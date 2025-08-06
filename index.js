// New data structure for horoscopes: organized by day of the month, then by zodiac sign
        const horoscopes = {};

        // Function to generate sample horoscopes for 31 days for each sign
        // In a real application, this data would likely come from an API or a more extensive database.
        function generateDailyHoroscopes() {
            const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
            const baseHoroscopes = {
                Aries: [
                    "A day for bold action and new initiatives.", 
                    "Energy is high, tackle challenges head-on.", 
                    "Leadership opportunities arise, seize them.",
                    "Be mindful of impulsive decisions, channel your fire.", 
                    "A creative spark ignites, pursue your passions.", 
                    "Collaborate for unexpected success.",
                    "Reflect on your goals, adjust if needed.", 
                    "Financial matters require careful attention.", 
                    "Connect with loved ones, strengthen bonds.",
                    "A small victory brightens your day.", 
                    "Trust your instincts, they guide you well.", 
                    "Overcome a minor obstacle with ease.",
                    "Seek inspiration in unconventional places.", 
                    "Practice patience, good things are coming.", 
                    "Your determination pays off.",
                    "A new perspective opens doors.", 
                    "Embrace change, it leads to growth.", 
                    "Focus on self-care and rejuvenation.",
                    "Express gratitude for what you have.", 
                    "A surprising encounter brings joy.", 
                    "Your charisma is strong, use it wisely.",
                    "Address pending tasks, clear your plate.", 
                    "Find balance between work and play.", 
                    "A moment of clarity illuminates your path.",
                    "Share your ideas, they are well-received.", 
                    "Learn something new, expand your mind.", 
                    "A peaceful resolution to a lingering issue.",
                    "Celebrate your progress, no matter how small.", 
                    "Your resilience shines through.", 
                    "Plan for future adventures.",
                    "A day of quiet contemplation and inner peace."
                ],
                Taurus: [
                    "Stability and comfort are your focus today.", 
                    "Practical matters yield positive results.", 
                    "Enjoy the simple pleasures of life.",
                    "Financial planning looks promising, secure your resources.", 
                    "A creative project brings satisfaction.", 
                    "Patience is your greatest virtue.",
                    "Connect with nature for grounding.", 
                    "A delicious meal or treat awaits.", 
                    "Strengthen your foundations, build for the future.",
                    "A small indulgence brings joy.", 
                    "Trust your steadfast nature.", 
                    "Overcome a minor financial concern.",
                    "Seek beauty in your surroundings.", 
                    "Your persistence leads to success.", 
                    "A comfortable routine brings peace.",
                    "Embrace slow and steady progress.", 
                    "A moment of calm restores your energy.", 
                    "Focus on self-worth and appreciation.",
                    "Express your affection to those you love.", 
                    "A pleasant surprise brightens your day.", 
                    "Your reliability is valued by others.",
                    "Organize your space for greater harmony.", 
                    "Find joy in domestic activities.", 
                    "A clear vision for your material goals.",
                    "Share your resources generously.", 
                    "Learn a new practical skill.", 
                    "A stable environment fosters growth.",
                    "Celebrate your achievements, big or small.", 
                    "Your inner strength is your guide.", 
                    "Plan for long-term security.",
                    "A day of quiet reflection and contentment."
                ],
                Gemini: [
                    "Vibrant communication and new ideas abound.", "Embrace your curiosity, explore new topics.", "Connect with others, social interactions are favored.",
                    "Learning is highlighted, absorb new information.", "A quick wit and adaptability serve you well.", "Short trips or new experiences beckon.",
                    "Be open to unexpected changes.", "Your versatility is your strength.", "Engage in lively discussions.",
                    "A surprising piece of news arrives.", "Trust your intellectual agility.", "Overcome a communication misunderstanding.",
                    "Seek out diverse perspectives.", "Your charming personality opens doors.", "A day for multitasking and efficiency.",
                    "Embrace spontaneity and fun.", "A moment of insight clarifies a situation.", "Focus on mental stimulation and growth.",
                    "Express your thoughts clearly and concisely.", "A chance encounter sparks inspiration.", "Your social network provides support.",
                    "Address minor details with precision.", "Find joy in playful interactions.", "A new idea takes shape.",
                    "Share your knowledge with others.", "Learn a new language or skill.", "A dynamic environment keeps you engaged.",
                    "Celebrate your intellectual pursuits.", "Your adaptability helps you thrive.", "Plan for stimulating conversations.",
                    "A day of quiet reflection and mental clarity."
                ],
                Cancer: [
                    "Home and emotional well-being are central.", "Nurture your relationships, especially family.", "Create a comforting and secure environment.",
                    "Intuition is strong, trust your gut feelings.", "A compassionate act brings fulfillment.", "Seek solace in familiar surroundings.",
                    "Be mindful of your emotional boundaries.", "Your empathy deepens connections.", "Spend time with those who understand you.",
                    "A small gesture of kindness brightens your day.", "Trust your nurturing instincts.", "Overcome a minor emotional hurdle.",
                    "Seek comfort in creative expression.", "Your protective nature serves you well.", "A day for introspection and self-care.",
                    "Embrace the ebb and flow of emotions.", "A moment of peace calms your spirit.", "Focus on inner security and contentment.",
                    "Express your feelings openly and honestly.", "A nostalgic memory brings warmth.", "Your supportive presence is appreciated.",
                    "Address domestic matters with care.", "Find joy in simple family moments.", "A clear understanding of your emotional needs.",
                    "Share your warmth and kindness.", "Learn about your family history.", "A harmonious home environment fosters growth.",
                    "Celebrate your emotional resilience.", "Your intuition guides you wisely.", "Plan for cozy gatherings.",
                    "A day of quiet reflection and emotional renewal."
                ],
                Leo: [
                    "Today is your day to shine and express yourself.", "Embrace your creativity and leadership qualities.", "Opportunities for recognition may arise, seize them.",
                    "Enjoy the spotlight and bask in attention.", "A generous spirit brings positive returns.", "Social gatherings are lively and fun.",
                    "Be confident in your abilities.", "Your charisma attracts admiration.", "Inspire others with your passion.",
                    "A small triumph boosts your ego.", "Trust your inner strength and courage.", "Overcome a minor challenge with flair.",
                    "Seek out playful and joyful experiences.", "Your dramatic flair adds excitement.", "A day for bold decisions and self-expression.",
                    "Embrace your unique style and personality.", "A moment of inspiration sparks new ideas.", "Focus on self-love and appreciation.",
                    "Express your enthusiasm and joy.", "A surprising compliment brightens your day.", "Your leadership is natural and effective.",
                    "Address creative projects with gusto.", "Find joy in entertaining and performing.", "A clear vision for your ambitious goals.",
                    "Share your warmth and generosity.", "Learn a new artistic skill.", "A vibrant atmosphere fuels your spirit.",
                    "Celebrate your unique talents.", "Your confidence empowers others.", "Plan for grand celebrations.",
                    "A day of quiet reflection and creative contemplation."
                ],
                Virgo: [
                    "Attention to detail and practical matters are key.", "Organize your space and focus on efficiency.", "Health and well-being are highlighted.",
                    "Productivity is high, get things done.", "A methodical approach yields excellent results.", "Service to others brings satisfaction.",
                    "Be mindful of perfectionism, strive for progress.", "Your analytical skills are sharp.", "Refine your plans and processes.",
                    "A small improvement makes a big difference.", "Trust your logical mind.", "Overcome a minor organizational challenge.",
                    "Seek practical solutions to problems.", "Your diligence is highly valued.", "A day for meticulous work and planning.",
                    "Embrace simplicity and order.", "A moment of clarity helps you prioritize.", "Focus on self-improvement and growth.",
                    "Express your thoughts with precision.", "A helpful tip or advice comes your way.", "Your reliability makes you indispensable.",
                    "Address routine tasks with care.", "Find joy in a clean and organized environment.", "A clear path to achieving your goals.",
                    "Share your expertise and knowledge.", "Learn a new system or technique.", "A structured approach brings success.",
                    "Celebrate your accomplishments, no matter how small.", "Your attention to detail prevents errors.", "Plan for efficient workflows.",
                    "A day of quiet reflection and mental clarity."
                ],
                Libra: [
                    "Balance and harmony in relationships are paramount.", "Seek compromise and fairness in all interactions.", "Beauty and aesthetics bring joy to your surroundings.",
                    "Diplomacy is favored, mediate conflicts with grace.", "A charming demeanor opens doors.", "Social connections are stimulating.",
                    "Be open to new partnerships.", "Your sense of justice guides you.", "Create a peaceful atmosphere.",
                    "A small act of kindness is returned.", "Trust your intuition about people.", "Overcome a minor disagreement with tact.",
                    "Seek out artistic and cultural experiences.", "Your ability to see both sides is a gift.", "A day for collaboration and cooperation.",
                    "Embrace elegance and refinement.", "A moment of equilibrium brings inner peace.", "Focus on healthy boundaries in relationships.",
                    "Express your appreciation for others.", "A pleasant social invitation arrives.", "Your sense of style is admired.",
                    "Address any imbalances with grace.", "Find joy in shared experiences.", "A clear vision for harmonious relationships.",
                    "Share your sense of fairness.", "Learn a new art form or craft.", "A balanced approach leads to success.",
                    "Celebrate your ability to connect.", "Your diplomacy resolves tension.", "Plan for delightful social engagements.",
                    "A day of quiet reflection and inner balance."
                ],
                Scorpio: [
                    "Intensity and transformation define your day.", "Dive deep into your emotions and uncover truths.", "Powerful insights await, be receptive.",
                    "Embrace your ability to regenerate and renew.", "A passionate pursuit brings fulfillment.", "Hidden opportunities reveal themselves.",
                    "Be mindful of power dynamics.", "Your intuition is exceptionally strong.", "Confront challenges with courage.",
                    "A surprising revelation comes to light.", "Trust your inner knowing and resilience.", "Overcome a fear or old pattern.",
                    "Seek profound understanding in all matters.", "Your determination is unwavering.", "A day for deep introspection and healing.",
                    "Embrace change, even if it feels intense.", "A moment of profound realization.", "Focus on emotional release and renewal.",
                    "Express your true feelings with conviction.", "A mysterious encounter sparks curiosity.", "Your magnetic presence is undeniable.",
                    "Address any unresolved issues.", "Find joy in uncovering secrets.", "A clear vision for personal growth.",
                    "Share your insights wisely.", "Learn about psychology or metaphysics.", "A transformative experience awaits.",
                    "Celebrate your inner strength.", "Your intensity drives you forward.", "Plan for powerful personal shifts.",
                    "A day of quiet reflection and deep healing."
                ],
                Sagittarius: [
                    "Adventure and expansion beckon today.", "Seek new knowledge and broaden your horizons.", "Optimism guides your path, explore freely.",
                    "Opportunities for travel or new experiences may appear.", "A philosophical discussion stimulates your mind.", "Your adventurous spirit leads to excitement.",
                    "Be open-minded and curious.", "Your enthusiasm is contagious.", "Embrace spontaneity and fun.",
                    "A surprising discovery awaits.", "Trust your sense of freedom.", "Overcome a minor restriction with ingenuity.",
                    "Seek out new cultures and ideas.", "Your independent spirit thrives.", "A day for learning and exploration.",
                    "Embrace the unknown with excitement.", "A moment of inspiration for future plans.", "Focus on personal growth and wisdom.",
                    "Express your truth with honesty.", "A chance encounter with someone inspiring.", "Your positive outlook attracts good fortune.",
                    "Address any limitations with a growth mindset.", "Find joy in new experiences and discoveries.", "A clear vision for your future journeys.",
                    "Share your wisdom and insights.", "Learn a new skill or language for travel.", "A boundless energy fuels your pursuits.",
                    "Celebrate your spirit of adventure.", "Your optimism overcomes challenges.", "Plan for exciting new ventures.",
                    "A day of quiet reflection and philosophical thought."
                ],
                Capricorn: [
                    "Discipline and achievement are your focus today.", "Focus on your long-term goals and work diligently.", "Your efforts will be rewarded, so persist.",
                    "Obstacles can be overcome with perseverance.", "Leadership qualities shine through.", "A structured approach brings success.",
                    "Be mindful of responsibilities.", "Your practical nature is an asset.", "Build strong foundations for the future.",
                    "A small victory reinforces your dedication.", "Trust your disciplined approach.", "Overcome a minor setback with resilience.",
                    "Seek practical solutions to complex problems.", "Your ambition drives you forward.", "A day for serious work and planning.",
                    "Embrace your inner authority.", "A moment of clarity regarding your career path.", "Focus on professional growth and reputation.",
                    "Express your goals with clarity and determination.", "A valuable piece of advice comes your way.", "Your reliability makes you a pillar of strength.",
                    "Address any pending duties with efficiency.", "Find joy in accomplishing tasks.", "A clear path to achieving your aspirations.",
                    "Share your wisdom and experience.", "Learn a new business or management skill.", "A strong work ethic leads to recognition.",
                    "Celebrate your tangible successes.", "Your perseverance is inspiring.", "Plan for significant career advancements.",
                    "A day of quiet reflection and strategic planning."
                ],
                Aquarius: [
                    "Innovation and humanitarian efforts are highlighted.", "Connect with your community and embrace unique ideas.", "Friendships are emphasized, socialize and collaborate.",
                    "Unexpected insights may lead to breakthroughs.", "A progressive mindset brings new solutions.", "Your individuality is a strength.",
                    "Be open to unconventional approaches.", "Your vision inspires others.", "Engage in group activities and causes.",
                    "A surprising connection is made.", "Trust your independent spirit.", "Overcome a traditional barrier with creativity.",
                    "Seek out new technologies or concepts.", "Your altruistic nature shines.", "A day for brainstorming and future planning.",
                    "Embrace your unique perspective.", "A moment of genius sparks an idea.", "Focus on collective well-being and progress.",
                    "Express your innovative thoughts freely.", "An unexpected opportunity arises.", "Your network provides valuable support.",
                    "Address social issues with compassion.", "Find joy in contributing to a greater cause.", "A clear vision for a better future.",
                    "Share your revolutionary ideas.", "Learn about new scientific discoveries.", "A stimulating environment fuels your mind.",
                    "Celebrate your originality.", "Your forward-thinking approach is invaluable.", "Plan for impactful social change.",
                    "A day of quiet reflection and visionary thinking."
                ],
                Pisces: [
                    "Intuition and creativity guide your day.", "Connect with your inner self and compassionate nature.", "Dreams are vivid, pay attention to their messages.",
                    "Opportunities for creative pursuits or service arise.", "A gentle approach brings harmony.", "Seek serenity and peace in your surroundings.",
                    "Be mindful of boundaries, protect your energy.", "Your empathy is a powerful gift.", "Engage in artistic expression.",
                    "A surprising moment of spiritual connection.", "Trust your inner voice and psychic abilities.", "Overcome a feeling of overwhelm with self-care.",
                    "Seek inspiration in art, music, or nature.", "Your compassionate heart shines.", "A day for introspection and spiritual growth.",
                    "Embrace your sensitivity as a strength.", "A moment of profound understanding.", "Focus on emotional healing and dream work.",
                    "Express your feelings through creative outlets.", "A serendipitous encounter brings comfort.", "Your gentle presence soothes others.",
                    "Address any emotional needs with kindness.", "Find joy in quiet contemplation.", "A clear vision for your spiritual path.",
                    "Share your compassion and understanding.", "Learn about meditation or mindfulness.", "A peaceful environment fosters inner peace.",
                    "Celebrate your artistic talents.", "Your intuition guides you to truth.", "Plan for moments of quiet reflection.",
                    "A day of deep spiritual connection and renewal."
                ]
            };

            // Populate the horoscopes object with data for each day (1-31)
            for (let day = 1; day <= 31; day++) {
                horoscopes[day] = {};
                for (const sign of zodiacSigns) {
                    // Cycle through the base horoscopes to provide variety for each day
                    const index = (day - 1) % baseHoroscopes[sign].length;
                    horoscopes[day][sign] = baseHoroscopes[sign][index];
                }
            }
        }

        // Call the function to populate horoscopes when the script loads
        generateDailyHoroscopes();

        // Get references to HTML elements
        const horoscopeForm = document.getElementById('horoscopeForm');
        const usernameInput = document.getElementById('username');
        const dobInput = document.getElementById('dob');
        const zodiacSignSelect = document.getElementById('zodiacSign');
        const horoscopeResultDiv = document.getElementById('horoscopeResult');

        // Function to determine zodiac sign from date of birth (optional, as user selects it)
        function getZodiacSignFromDate(dateString) {
            const date = new Date(dateString);
            const month = date.getMonth() + 1; // getMonth() is 0-indexed
            const day = date.getDate();

            if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
            if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
            if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
            if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
            if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
            if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
            if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
            if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
            if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
            if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
            if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
            if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
            return "Unknown";
        }

        // Event listener for form submission
        horoscopeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get user inputs
            const username = usernameInput.value;
            const dob = dobInput.value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const selectedZodiacSign = zodiacSignSelect.value;
            const dayType = document.querySelector('input[name="dayType"]:checked')?.value;

            // Basic validation
            if (!username || !dob || !gender || !selectedZodiacSign || !dayType) {
                horoscopeResultDiv.classList.remove('hidden');
                horoscopeResultDiv.style.backgroundColor = '#fed7d7'; /* Light red for error */
                horoscopeResultDiv.style.borderColor = '#e53e3e'; /* Red border */
                horoscopeResultDiv.innerHTML = "Please fill in all the required fields.";
                return;
            }

            // Calculate the target date based on dayType
            const today = new Date();
            let targetDate = new Date(today); // Start with today's date

            if (dayType === 'yesterday') {
                targetDate.setDate(today.getDate() - 1);
            } else if (dayType === 'tomorrow') {
                targetDate.setDate(today.getDate() + 1);
            }
            // If dayType is 'today', targetDate is already set to today

            const dayOfMonth = targetDate.getDate(); // Get the day of the month (1-31)

            // Get the horoscope text from the new structure
            let horoscopeText = "Sorry, I couldn't find a horoscope for your selection.";
            // Check if data exists for the calculated day and selected zodiac sign
            if (horoscopes[dayOfMonth] && horoscopes[dayOfMonth][selectedZodiacSign]) {
                horoscopeText = horoscopes[dayOfMonth][selectedZodiacSign];
            }

            // Display the result
            horoscopeResultDiv.classList.remove('hidden');
            horoscopeResultDiv.style.backgroundColor = '#e6fffa'; /* Reset to light teal */
            horoscopeResultDiv.style.borderColor = '#81e6d9'; /* Reset to teal border */
            horoscopeResultDiv.innerHTML = `
                <p>Hello <strong>${username}</strong> (${gender.charAt(0).toUpperCase() + gender.slice(1)}), born on ${dob}!</p>
                <p>Your horoscope for <strong>${dayType.charAt(0).toUpperCase() + dayType.slice(1)}</strong> (Day ${dayOfMonth} of the month), as a <strong>${selectedZodiacSign}</strong>:</p>
                <p class="mt-2">${horoscopeText}</p>
            `;
        });

        // Optional: Pre-select zodiac sign based on DOB if DOB is changed
        dobInput.addEventListener('change', function() {
            if (dobInput.value) {
                const calculatedZodiac = getZodiacSignFromDate(dobInput.value);
                if (calculatedZodiac && calculatedZodiac !== "Unknown") {
                    zodiacSignSelect.value = calculatedZodiac;
                } else {
                    zodiacSignSelect.value = ""; // Clear if unknown or invalid
                }
            }
        });

        // Initial message when the page loads
        window.onload = function() {
            horoscopeResultDiv.classList.remove('hidden');
            horoscopeResultDiv.innerHTML = "Enter your details and click 'Get My Horoscope' to see your reading!";
        };