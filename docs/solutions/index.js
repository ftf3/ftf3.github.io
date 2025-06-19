var out = document.getElementById("output");
        var theQuote= [
                '"You did it, goddamnit! They\'ve just invited us to dinner!"',
                '"Thank you, driver, for getting me here."',
                '"It\'s afraid. It\'s afraid!"',
                '"Gobble. Gobble-gobble."',
                '"If this is paradise, I wish I had a lawn mower."',
                '"Please, whatever they offer you, don\'t feed the plants."',
                '"Talk to the bomb. You have to talk to it, Doolittle. Teach it phenomenology."',
                '"I don\'t want to work, I want to bang on the drum all day."',
                '"Cause when love is gone, there\'s always justice. And when justice is gone, there\'s always force. And when force is gone, there\'s always mom. Hi mom!"',
                '"Who organized all of my ex-girlfriends into a choir and got them to sing?"',
                '"I\'m like a god in human clothing! Lighting bolts shoot from my fingertips!"',
                '"Heineken..."',
                '"And if California slides into the ocean, like the mystics and statistics say it will, I predict this motel will be standing, until I pay my bill."',
                '"Please interstellar policeman, won\'t you give us a sign, give us a sign that we\'ve reached you."',
                '"All in the game."',
                '"Badges? We ain\'t got no badges. We don\'t need no badges. I don\'t have to show you any stinking badges!"',
                '"A dramatic affliction has compromised our trusted department store. Get out graciously."',
                '"Excuse me, while I whip this out."',
                '"It\'s never straight up and down."',
                '"Prostrate, supine. Well-groomed, divine."',
                '"Einsten was right."',
                '"The duality of man, the Jungian thing, sir."',
                '"The perils of the nuclear age are often attributed to \'technical progress outstripping ethical progress\'. This diagnosis is all the more disheartening for the suspicion that there is no such thing as ethical progress, that bombs get bigger and people stay the same."',
                '"Não fosse o meu feitiço eu berrava em português, mas já que é pra cantar vou me acabar no tirolês."',
                '"Du musst Caligari werden!"',
                '"Rub Dean\'s head and wait under Newton."',
                '"That one that\'s shaped like a weiner, he\'s my information receiver, and everything gets relayed back to me, then back to the golden retriever."',
                '"It\'s like the thrill of being near the executioner\'s switch, knowing that at any moment you could throw it. But knowing you never will. But you could. Never isn\'t the right word because I could, and I might. I probably will."',
                '"Yesterday, I woke up sucking a lemon."',
                '"On a banana peel he slips and breaks his brain in two. The master cracks into life."',
                '"Remember to do nothing when you don\'t know what to do."',
                '"I don\'t want everything or understand anything."',
                '"I think the people of this country have had enough of experts from organisations with acronyms saying that they know what is best and getting it consistently wrong."',
                '"Well, when you\'re married you\'ll understand the importance of fresh produce."',
                '"I came here to show you my computer and my shoes, but you shot me with an arrow, that wasn\'t really cool."',
                '"Pouca tardança faz Lieu irado na vista destas cousas, mas entrando nos paços de Neptuno, que, avisado da vinda sua, o estava já aguardando, às portas o recebe, acompanhado das Ninfas, que se estão maravilhando de ver que, cometendo tal caminho, entre no reino d\'água o Rei do vinho."',
                '"There’s a mathematician, a different kind of mathematician and a statistician."',
                '"Welcome back, my friends, to the show that never ends."',
                '"Eu, você e o Zoboomafoo."',
                '"Deluxe Pain."',
                '"If our father had had his say, nobody who did not know how to fish would be allowed to disgrace a fish by catching him."',
                '"I can\'t be a hypochrist. I\'ll commit sacricide."',
                '"It\'s gold that eats the heart and leaves the bones to dry."',
                '"I\'m so cute and well adjusted."',
                '"I don\'t think I can deal with the wrath of the general public."',
                '"Please don\'t find me rude, but I don\'t eat fast food, so don\'t run too fast."',
                '"The difference between me and a dog is I’m taller."',
                '"Three times I\'ve sent you back from me, three times my boats gone dry, and three times I\'ve seen the shooting shark lighting up the sky."',
                '"I checked my bovine manual and I find no definition, even this revised edition does not mention malnutrition."',
                '"I can\'t get lost, I can\'t get confused, something is misplaced, maybe for good."',
                '"How long am I sick, before I get my fix?"',
                '"They say I got brains, but they ain\'t doing me no good."',
                '"Don\'t it feel good to ride the bus? People need to get picked up."',
                '"It is a profound and necessary truth that the deep things in science are not found because they are useful; they are found because it was possible to find them."',
                '"You\'re not half the boy that Nate was. You\'re not even half the boy that the top half of Nate was after you cut him in half."',
                '"I love you Mum."',
                '"Love taught me how to walk, it taught me how to talk, but it never taught me how to vote."',
                '"Sometimes I miss the top of the food chain, but what a perfect afternoon."',
                '"Talvez não tenha tanto medo assim de trovão."',
                '"It takes a worried man to sing a worried song, I may be worried now, but I won\'t be worried long."',
                '"There\'s a long way between chaos and creation if you don\'t say which one of these you\'re gonna choose."',
                '"Don\'t mean to be rude, but I don\'t feel super, Supergirl."',
                '"Mais il pleut sur la ville, et on le sait, l\'argile mollit."',
                '"A regular haircut, a sensible suit, a general idea, of general pursuit."',
                '"Woodwork squeaks and out come the freaks."',
                '"A lot. A great deal. More than once by a bunch."',
                '"My daddy took a look on the day that I was born and said \'He looks like corn, and his feet are made of clay\'."',
                '"My heart is open, the truth revealed, I\'ve seen the future, you die behind the wheel."',
                '"Feelin\' bad, feelin\' blue, tonight the rainbow ends with you."',
                '"And in the end, the love you take is equal to the love you make."',
                '"Be hard. Flex your muscles."',
                '"The mission statement arms race escalated until, by the end of the 2000\'s, virtually every employer in town was telling hires that designing apps put them, in terms of importance, somewhere between the United Nations and the League of Superheroes."',
                '"I don\'t know if it will take four hours there and back by train. I don\'t know if the whole wide world is gonna end while I\'m away. I don\'t know if I deserve to go. But it\'s a monday at the beach."',
                '"You spent the first five years trying to get with the plan, and the next five years trying to be with your friends again."',
                '"We thought you was a toad."',
                '"Pensa num queijo de macho, é gorgonzola."',
                '"I. Be like your ancestors or be different."',
                '"II. The fittest shall survive and the unfit may live."',
                '"IV. That your family may survive, lay a million eggs or give birth to one."',
                '"X. Wear gaudy colors or avoid display, so shall your family survive."',
                '"XII. Remember, it\'s a THEORY. Don\'t let any man see you MAKING wings out of warts or Adams out of apes."',
                '"I do not open mail, I do not answer phones, the fridge is pretty much a home for mayonnaise alone."',
                '"Beware of cats that follow you home, of pretty prizes wearing disguises."',
                '"You can\'t take a picture of this. It\'s already gone."',
                '"I don\'t want to be your buddy, Rick. I just want a little breakfast."',
                '"Success is cringe. I want to be on the fringe."',
                '"A coyote with someone\'s chihuahua in its teeth skitters \'cross my veranda in the night."',
                '"Think about it. You\'re dealing with numbers. All day long, decimal points, high frequencies. Bang, bang, bang. E-e-e-e-e."',
                '"I got wild imagination, talkin\' transubstantiation, any version will do. I got mass communication, I\'m the human corporation. I ate a rock from the moon."',
                '"10 November 1775. I was born in a bomb crater. My mother was an M16 and my father was the Devil."',
                '"Want a reason? How\'s about because? You ain\'t a has-been if you never was."',
                '"Beauty school dropout, missed your midterms and flunked shampoo."',
                '"Ficou no bolso do Dedé, éim primo?"',
                '"Empty but for us and the vomit, Elvis sitting dead on the toilet."',
                '"Hot dog. Jumping frog. Albuquerque."',
                '"40000 years of job club. 40000 years."',
                '"Mairzy doats and dozy doats and liddle lamzy divey. A kiddley divey too, wouldn\'t you?"',
                '"I got eyes for anything moving, fell in love with a tumbleweed."',
                '"Too old for dying young, too young to live alone. Sifting through centuries for moments of your own."',
                '"No hack with an army will last long before he breeds man who yearn for their own bloody glory."',
                '"Let\'s take this too far so we can see if it is far enough. I should move slower but the last year has been kind of rough."',
                '"Oh friend, oh foe, oh friend, oh foe."',
                '"The others say we\'re hiding, it\'s as forward as can be: some things I do for money, some things I do for free."',
                '"She a laughing, giggly whirlybird. She gotta be obscene to be ob-heard."',
                '"She has an IQ of 1001, she has a jumpsuit on, and she\'s also a telephone."',
                '"Thrust and twist, twist and screw, you gave me a bad review."',
                '"I\'m splitting hairs to match the faces."',
                '"But from here on it\'s got to be a simple case of them or me, if they\'re alive then I\'m dead. Pray God and eat your daily bread."',
                '"The system will provide Windows 95, Windows 95."',
                '"But oh, my God. Twenty two more minutes."',
                '"Tomorrow you\'re back for love on your lunch break."',
                '"Hey, that\'s the name of the record!"',
                '"They got a name for the winners in the world, I want a name when I lose."',
                '"Stop wasting your talent, honey, I\'ve got enough for both of us."',
                '"You will hate life more than life hates you."',
                '"They\'re turning kids into slaves just to make sneakers cheaper, but what\'s the real cost? Cause the sneakers don\'t seem that much cheaper."',
                '"Hey you!"',
                '"And I can\'t believe that anyone would wanna do such a terrible thing, but why should I care?"',];
	var theSource= [
                'Chaco, Cannibal Holocaust (1980)',
                '"Magic Bus", The Who (1968)',
                'Colonel Carl Jenkins, Starship Troopers (1997)',
                'Laura Palmer, Twin Peaks: Fire Walk with Me (1992)',
                '"(Nothing But) Flowers", Talking Heads (1988)',
                '"Finale", Little Shop of Horros (1986)',
                'Commander Powell, Dark Star (1974)',
                '"Bang On The Drum All Day", Todd Rundgren (1982)',
                '"O Superman", Laurie Anderson (1982)',
                '"Carol Brown", Flight of the Conchords (2009)',
                'Jimmy McGill, Better Call Saul, "JMM" (2020)',
                'Jeffrey Beaumont, Blue Velvet (1986)',
                '"Desperados Under The Eaves", Warren Zevon (1976)',
                '"Calling Occupants of Interplanetary Craft", Klaatu (1976)',
                'Omar Little, The Wire, "Sentencing" (2002)',
                'Gold Hat, The Treasure of the Sierra Madre (1948)',
                'Miss Luckmoore, In Fabric (2018)',
                'Sheriff Bart, Blazing Saddles (1974)',
                '"Wiggly World", Devo (1978)',
                '"The Defence", black midi (2022)',
                '"Lipstick", Ariel Pink (2014)',
                'Private Joker, Full Metal Jacket (1987)',
                'William Poundstone, Prisoner\'s Dilemma: John Von Neumann, Game Theory, and the Puzzle of the Bomb (1993)',
                'Bode Japeth, Deu a Louca na Chapeuzinho (2005)',
                'The Cabinet of Dr. Caligari (1920)',
                'Under the Silver Lake (2018)',
                '"Secret Canine Agent", Viagra Boys (2021)',
                'Dennis Reynolds, It\'s Always Sunny in Philadelphia, "The Gang Gets Analyzed" (2012)',
                '"Everything in Its Right Place", Radiohead (2000)',
                '"Black Hyena", Everything Everything (2020)',
                '"Enough Said", Devo (1981)',
                '"All Wordz Are Made Up", The Voidz (2018)',
                'Michael Gove (2016)',
                'Tony Soprano, The Sopranos, "D-Girl" (2000)',
                '"Sentinel Island", Viagra Boys (2020)',
                'Luís Vaz de Camões, Os Lusíadas (1572)',
                'Announcer, The Simpsons, "Deep Space Homer" (1994)',
                '"Karn Evil 9, 1st Impression, Part 2", Emerson, Lake & Palmer (1974)',
                'Zoboomafoo (1999)',
                '"Naysayer, Magick Obeyer", Clarence Clarity (2018)',
                'Norman Maclean, A River Runs Through It and Other Stories (1976)',
                'Xavier, Xavier: Renegade Angel, "Damnesia Vu" (2009)',
                '"The Endless Plain of Fortune", John Cale (1973)',
                '"IM A FREAK CUZ IM ALWAYS FREAKED OUT", Black Dresses (2020)',
                '"Civil Servant", Richard Dawson (2019)',
                '"Terrified", Childish Gambino (2016)',
                '"I Feel So Weird!", Cheekface (2022)',
                '"Shooting Shark", Blue Öyster Cult (1983)',
                '"Another Dead Cow", Bat Boy: The Musical (1997)',
                '"Shipyards of New Zealand", Midnight Oil (1984)',
                '"The Next Fix", Crack Clound (2020)',
                '"I Just Wasn\'t Made for These Times", The Beach Boys (1966)',
                '"Say Hey Kid", Death Grips (2014)',
                'Julius Robert Oppenheimer (n.d.)',
                'Pa Cox, Walk Hard: The Dewey Cox Story (2007)',
                '"S.A.D.", Kirin J Callinan (2017)',
                '"Politics of Love", Alex Cameron (2017)',
                '"Things It Would Have Been Helpful to Know Before the Revolution", Father John Misty (2017)',
                '"Saudade", Ana Frango Elétrico (2019)',
                '"It Takes a Worried Man", Devo (1982)',
                '"Fine Line", Paul McCartney (2005)',
                '"That\'s Really Super, Supergirl", XTC (1986)',
                '"Écran Total", Feu! Chatterton (2021)',
                '"Goon", Osees (2023)',
                '"(Return To The Valley Of) Out Come The Freaks", Was (Not Was) (1983)',
                'Harvey Birdman, Harvey Birdman, Attorney at Law, "The Dabba Don" (2002)',
                '"Knocked Down, Made Small (Treated Like a Rubber Ball)", Was (Not Was) (1983)',
                '"Young Drunk Driver", Kirin J Callinan (2023)',
                '"Hey There Fancypants", Ween (2003)',
                '"The End", The Beatles (1969)',
                '"Stay Here", Swans (1983)',
                'Max Fisher, The Chaos Machine: The Inside Story of How Social Media Rewired Our Minds and Our World (2022)',
                '"Monday At The Beach", Jeff Rosenstock (2020)',
                '"All My Friends", LCD Soundsystem (2007)',
                'Delmar O\'Donnell, O Brother, Where Art Thou? (2000)',
                'Raimundo Nonato, Estômago (2007)',
                'Bertram Henry Shadduck, Jocko-Homo, the Heavenbound King of the Zoo, 1st Ed. (1924)',
                'Bertram Henry Shadduck, Jocko-Homo, the Heavenbound King of the Zoo, 1st Ed. (1924)',
                'Bertram Henry Shadduck, Jocko-Homo, the Heavenbound King of the Zoo, 1st Ed. (1924)',
                'Bertram Henry Shadduck, Jocko-Homo, the Heavenbound King of the Zoo, 1st Ed. (1924)',
                'Bertram Henry Shadduck, Jocko-Homo, the Heavenbound King of the Zoo, 5th Ed. (1925)',
                '"Tuesday", Malibu Ken (2019)',
                '"Pretty Prizes", Daniele Luppi, Parquet Courts & Karen O (2017)',
                'Nathaniel Samuel Fisher Jr., Six Feet Under, "Everyone\'s Waiting" (2005)',
                'William Foster, Falling Down (1993)',
                '"The Fringe", Cheekface (2024)',
                '"Western Stars", Bruce Springsteen (2019)',
                'Mark Hanna, The Wolf of Wall Street (2013)',
                '"Moon Rocks", Talking Heads (1983)',
                'Generation Kill, "Bomb in the Garden" (2008)',
                '"Turnin On The Screw", Queens of the Stone Age (2007)',
                '"Beauty School Dropout", Grease (1978)',
                'Vascaíno (2011)',
                '"Buddy, Come Over", Everything Everything (2024)',
                '"The King of Rock \'N\' Roll", Prefab Sprout (1988)',
                '"I.D.S", The Moonlandingz (2017)',
                '"Mairzy Doats" (1943)',
                '"Cowboy Nudes", Geese (2023)',
                '"Capricorn", Vampire Weekend (2024)',
                '"John L", black midi (2021)',
                '"Sophie Calle Private Game", of Montreal (2018)',
                '"Beauty Towne", Xiu Xiu (2012)',
                '"Marble House", The Knife (2006)',
                '"Helicopter", XTC (1979)',
                '"Yours Truly, 2095", Electric Light Orchestra (1981)',
                '"Scum", Nick Cave & The Bad Seeds (1986)',
                '"Cygnus... Vismund Cygnus", The Mars Volta (2005)',
                '"Half Past France", John Cale (1973)',
                '"Zero Sum", The Smile (2024)',
                '"Image", Magdalena Bay (2024)',
                '"Walk Up", Geordie Greep (2024)',
                '"Smut!", Neon Indian (2015)',
                '"Deacon Blues", Steely Dan (1977)',
                '"A Star Is Born", Jerskin Fendrix (2020)',
                '"The Air-Conditioned Nightmare", Mr. Bungle (1999)',
                '"Think About It", Flight of the Conchords (2008)',
                '"Carousel", Mr. Bungle (1991)',
                '"Nothing Bad Ever Happens To Me", Oingo Boingo (1983)',];
        if(sessionStorage.getItem('theQuotes') !== null)
        {
            var seen = JSON.parse(sessionStorage.getItem("theQuotes"));
        }
        else
        {
            var seen = new Array(theQuote.length).fill(0);
        }
        if(sessionStorage.getItem('nOpens') !== null)
        {
            var numberOfOpens = JSON.parse(sessionStorage.getItem("nOpens"));
        }
        else
        {
            var numberOfOpens = 0;
        }

        function getQuote(){
            var quoteNum = Math.floor(Math.random() * theQuote.length);
            
            if(seen.reduce((a, b) => a + b, 0) !== theQuote.length)
            {
            	numberOfOpens = numberOfOpens + 1;
            }
            
            seen[quoteNum] = 1;
            
            output.textContent = theQuote[quoteNum];
            person.textContent = theSource[quoteNum];
            
            if(seen.reduce((a, b) => a + b, 0) == 1 && numberOfOpens == 1)
            {
            	howMany.textContent = "You have seen " + seen.reduce((a, b) => a + b, 0) + " unique quote out of " + theQuote.length + ". You have opened the page " + numberOfOpens + " time.";
            }
            if(seen.reduce((a, b) => a + b, 0) == 1 && numberOfOpens !== 1)
            {
            	howMany.textContent = "You have seen " + seen.reduce((a, b) => a + b, 0) + " unique quote out of " + theQuote.length + ". You have opened the page " + numberOfOpens + " times.";
            }
            if(seen.reduce((a, b) => a + b, 0) !== 1 && numberOfOpens !== 1)
            {
            	howMany.textContent = "You have seen " + seen.reduce((a, b) => a + b, 0) + " unique quotes out of " + theQuote.length + ". You have opened the page " + numberOfOpens + " times.";
            }
            
            sessionStorage.setItem("theQuotes", JSON.stringify(seen));
            sessionStorage.setItem("nOpens", JSON.stringify(numberOfOpens));
            sessionStorage.setItem("thisPage", "en");
            
            if(seen.reduce((a, b) => a + b, 0) == theQuote.length)
            {
            	document.getElementById('quotesPDF').removeAttribute("hidden");
            }
        }
        
        window.onload = getQuote;
