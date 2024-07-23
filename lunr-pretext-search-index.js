var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "wb-preface",
  "level": "1",
  "url": "wb-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface to workbook",
  "body": " Preface to workbook  In 1994, my colleagues at Augsburg College and I had a vision for a new course to replace our intermediate algebra course. We wanted a college level course that would serve primarily as preparation for quantitative courses across the curriculum. The framing question that led to our curricular adventure of the past nearly two decades was   What algebra do college students need to know, and how can we make it relevant to their future studies, their lives as citizens, and their everyday life?   From these questions Just enough algebra was born.  As you will see, everything we do is in some applied context. Our choice to focus primarily on linear and exponential models; to emphasize verbal, numerical, and graphical interpretation of functions; and to include only the most essential symbolic techniques align well with curricular guides from the MAA   Curricular Guide , Committee on the Undergraduate Mathematics Program (CUPM) and Curriculum Foundations Project: Voices of the Partner Disciplines , Curriculum Renewal Across the First Two Years (CRAFTY), Mathematical Association of America (MAA), 2004 and CRAFTY's Recommendations for College Algebra , 2007  and AMATYC   Crossroads in Mathematics Standards for Introductory College Mathematics Before Calculus , American Mathematical Association of Two-Year Colleges (AMATYC), 1995 and the follow up Beyond Crossroads report, AMATYC, 2006.  . More importantly, it works. Student learn a lot in this course. They are ready for what comes next. And, they enjoy it.   To the student  This workbook is written for you. Read the narrative examples in the accompanying textbook, listen to examples in class, try the practice exercises here in the workbook, check with classmates or your instructor, then work the exercises in the textbook, then chat with classmates again, then do more problems, ... Well, you get the idea: the best way to learn mathematics is to do it yourself. I hope you enjoy the course. I know you will learn a lot of useful algebra. I believe it will change how you see mathematics.    To the instructor  At Augsburg College we usually begin class with a brief entrance quiz on the previous section or some other activity to review. Next, the instructor presents one well-chosen example illustrating the main theme of the new section and works through that problem on the board, with students helping with the calculations along the way. For me, part of the fun of teaching this course is creating lecture examples from the day's news or connected to popular culture, but in a pinch there is often an exercise in the textbook that can be used for that purpose.  Then, students work with a classmate on the practice exercises in this workbook while the instructor circulates to answer questions and help students stay on task. The first exercise in each section of the workbook parallels the main theme, but I've deliberately left some variations for students to discover in the second and third exercises. The fourth exercise varies, but often wanders a bit off the main path. We normally budget 30 minutes of class time for student work. This timing allows nearly all students to finish at least the first exercise and check their solution; most students finish two or three exercises; and even our fastest students rarely finish all four exercises in under 30 minutes.  After class students are expected to finish the section in the workbook, try the Do you know questions, read the textbook narrative example, and try some of the exercises in the textbook. Hand-written solutions to the practice exercises in this workbook are available (in electronic format) for students to check their work, whether in class or at home. Answers to the textbook exercises appear in the back of the textbook.  My greatest success in teaching this course has been to give students room to figure things out for themselves, so try to resist the temptation to show them one of everything. Listen to your students and help them understand the algebra in their own vocabulary. You will be impressed.    Acknowledgments  Thanks, first, to the thousands of students who have taken this course. Their creative approaches to learning mathematics; their unedited criticism and challenge; their often surprising enthusiasm for the course; their patience tried by countless typos and outright mistakes; and their perpetually novel insights have humbled me and challenged everything I thought I knew about teaching and learning mathematics. They have inspired me time and time again. I am grateful that they have allowed me to make a difference in their lives.  Thanks, next, to my mathematics colleagues at Augsburg: Mathew Foss (now at North Hennepin Community College), who taught from the very first edition of the textbook back in 1997 and who collaborated in writing earlier versions; Matt Haines, Alyssa Hanson, Rich Flint, and the dozens of other professors who have taught the course over the years from various earlier editions of the textbook; John Zobitz and Jody Sorensen, who edited and created more exercises for the 2012 edition; and student helpers Ashley Gruhlke and Emma Winegar.  Thanks, also, to my colleagues across campus for allowing us to try something completely different and to my mathematics colleagues nationally for spurring me on. During the first few years I taught this course from Using algebra by Ethan Bolker. Much of my approach and probably more examples or exercises than I realize are derived from his vision and from the subsequent text by his colleagues Linda Kime and Judy Clark at University of Massachusetts, Boston.  A special thanks to Dean Barbara Farley, Augsburg's Center for Teaching and Learning, and Augsburg's Undergraduate Research and Graduate Opportunity program for supporting my work through sabbaticals, travel grants, and summer research grants for both me and students.   "
},
{
  "id": "to-the-instructor-4",
  "level": "2",
  "url": "wb-preface.html#to-the-instructor-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Do you know "
},
{
  "id": "sec-Variables_and_functions",
  "level": "1",
  "url": "sec-Variables_and_functions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Variables and functions",
  "body": " Variables and functions  Things change, like the price of gasoline, and just about every day it seems. What does it mean when the price of a gallon of gas drops from $3.999\/gal to $3.299\/gal? The symbol \/ is short for per or for each, so that means each gallon costs less. Does this 70¢ truly matter?  Before we answer that question, are you wondering why there's that extra 9 at the end of the price? We might think a gallon costs $3.99 but there's really a small 9 following it. Sometimes that 9 is raised up slightly on the gas station sign. You have to read the fine print. What it means is an extra ¢ for each gallon. So the true price of a gallon gas would be $3.999. Gas costs a tiny bit more than you thought. Good grief.  Back to our question. Does 70¢ truly matter to us? Probably not. Can't even buy a bag of potato chips for 70¢. But, how often do you buy just one gallon of gas? Typically you might put five, or ten, or even twenty gallons of gas into the tank. We want to understand how the price of gasoline influences what it really costs us at the pump. To do that let's compare our costs when we buy ten gallons of gas. There's no good reason for picking ten; it's just a nice number to work with.  If gas costs $3.999\/gal and we buy 10 gallons, it costs See how we described the computation twice? First, with units, fractions, and for multiplication in what's sometimes called algebraic notation. Then, with just numbers and for multiplication - that's what you can type into a calculator.  If gas drops to $3.299\/gal and we buy 10 gallons, it costs That's $7 less. For $7 savings on gas you could buy that bag of potato chips, and an iced tea to go with it, and still have change. That amount matters. I mean, especially since it's $7 savings every time you put 10 gallons in the tank.  Gas prices have been changing wildly, and along with them, the price of 10 gallons of gas. In mathematics, things that change are called variables . The two variables we're focusing on in this story are    price of gasoline ($\/gal)    total cost ($)    Notice that we gave each variable a letter name. It is helpful to just use a single letter chosen from the word it stands for. In our example, stands for price and stands for cost . In this course we rarely use the letter simply because so few words begin with . Whenever we name a variable ( ) we also describe in words what it represents (the price of gasoline), and we state what units it's measured in ($\/gal).  In talking about the relationship between these variables we might say the cost depends on the price of gas, so depends on . That tells us that is the dependent variable and is the independent variable . In general, the variable we really care about is the dependent variable, in this case the total amount of money it costs us. The concept of dependence is so important that there's yet another word for it. We say that is a function of , as in cost is a function of price.   Knowing which variable is independent or dependent is helpful to us. To emphasize the dependence, we often make a notation next to the variable name.    price of gasoline ($\/gal) indep    total cost ($) dep    This labeling is rarely used outside this textbook, so add it in for yourself if you need it. In some situations dependency can be viewed either way; there might not be one correct way to do it. Labeling the dependence is extra important then, so anyone reading your work knows which way you are thinking of it.  Given a choice, we usually assign dependence such that given a value of the independent variable, it is easy to calculate the corresponding value for the dependent variable. In our example it's easy to use the price per gallon, , to figure out the total cost, . We can work backwards - from to - but it's not as easy.  For example, suppose we buy 10 gallons of gas and it costs $28.99. We can figure out that the price per gallon must be Notice that we use the fraction as part of the algebraic notation, but we use to indicate division on the calculator. Your calculator key for division may be instead, which we reserve as a shorthand for per.   From our experience we have a sense of what gas might cost. In my lifetime, I've seen gas prices as low as 35.9¢\/gallon in the 1960s to a high of $4.099\/gallon recently. This range of values sounds too specific, so it would sound better to say something general like   Gas prices are (definitely) between $0\/gal and $5\/gal.   The mathematical shorthand for this sentence is The inequality symbol is pronounced less than or equal to . Formally, the range of realistic values of the independent variable is called the domain of the function . In this text, we rarely write the domain because it's usually clear from the story what realistic values would be. The exercises in this section ask you to do so for practice.  Be aware that there are often many different numbers in a story. Some numbers are examples of values the variables take on, such as $3.999\/gal or $39.99 in our example. Other numbers are constants ; they do not change (at least not during the story). The one constant in our story is that we are always buying 10 gallons of gas. Occasionally there are other numbers in a story that turn out not to be relevant at all, so be on the lookout.  Back to our story. A report says that the average price of gasoline in Minnesota was $2.900\/gal in 2010 and increased approximately 20% per year for the next several years. We would like to check what that says about the average price of gasoline in 2011 and 2012, say. (It is unlikely that the price increase continued much longer at that rate.)  To understand what that report is saying, we need to remember how percents work. Luckily, the word percent is very descriptive. The cent part means hundred, like 100 cents in a dollar or 100 years in a century. And, as usual, per means for each. Together, percent means per hundred. The number 20% means 20 for each hundred. Written as a fraction it is . Divide to get the decimal  Bottom line: 20%, , and 0.20 mean exactly the same number.   To calculate the percent of a number we multiply by the decimal version. For example, The report says the price increased by 20% each year, so by 2011 the price had increased an average of $0.58. That 58 cents is not what gas cost in 2011. It's how much more gas cost in 2011 compared to 2010. To see what the report projected for the 2011 cost we need to add that increase on to the original 2010 price. Sounds about right. Expensive, to be sure, but fairly accurate.  For 2012, the price increased by 20% again. That means 20% of what it was in 2011. We can't just add $0.58 again. That was 20% of the 2010 value, and we want 20% of the 2011 value . Going to have to calculate that. so the projected 2012 value was   One last note. The number 20% in the report sounds like a rough approximation. The report probably means the increase was around 20%, maybe a little less, maybe a little more. So our answers of $3.48\/gal and $4.176\/gal could be a little less or a little more too. But they sound so perfectly correct. To be safe, we really ought to round off these answers, to something more general like around $3.50\/gal in 2011 or approximately $4.20\/gal in 2012. Using our approximately equal to symbol we write \/gal in 2011 and \/gal in 2012.   Do you know ...    The difference between a variable and a constant?    The information needed to name a variable?    Which variable is dependent and which variable is independent?    What domain means?    How to calculate percent increase?     The symbol for approximately equal to ?     Why an approximate answer is often as good as we can get?     When to round your answer up or down instead of off?     What the term precisely refers to?     How to decide how precisely to round your answer?   indicates question based on Prelude: approximation     If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Workbook problems     A 32 pound bag of dog food costs $29.97, but an 8 pound bag costs $11.28.   Identify and name the variables, including the units.   Which variable is dependent and which is independent?   What might a 16 pound bag of dog food cost? Explain the reasoning behind your guess.      Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month.    Identify and name the variables, including the units.   Explain the dependence using a sentence of the form is a function of .   Which number is a constant in this story: the percent increase (7.2) or the apartment rent (830)?   What is a realistic domain for this function? That means, for how many years might this sort of increase in rent continue? Express your answer as an inequality.   What is the average rent expected to be in 1 year? In 2 years? In 3 years? Note that . Try figuring it out.      Round each number up, down, or off to the precision indicated.    My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.   Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?   The original budget estimates for the new community center gym were rounded to the nearest hundred (that means ending in 00), so we want to round our bid of $148,214.79 to the nearest hundred.   The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately.      It's about time! In each story, time is one (or both) of the variables. Identify and name the variables, including units and dependence. (Stories also appear in 1.1 Exercises.)    The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year.   After his first beer, Stephen's blood alcohol content (BAC) was already 0.04, and as he continued to drink, his BAC level rose 45% per hour. (Story also appears in 2.4 Exercises and 3.4 #1.)    When McKenna drives 60 mph (miles per hour), it takes her 20 minutes on the highway to get between exits, but when traffic is bad, it can take her an hour.   The sun set at 6:00 p.m. today, and I heard on the radio that at this time of year, it sets about 2 minutes earlier each day. (Hint: measure the sunset time in minutes after 6:00 p.m.)      Textbook problems    It's about time! For each story, try to figure out the answer to the question(s).   Stories also appear in 1.1 #4    The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year. The tree is now 40 feet tall. How long ago did the Nussbaums plant their walnut tree?   After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. Note that What was Stephen's BAC after 1 hour? After 2 hours?   Story also appears in 2.4 Exercises and 3.4 #1    When McKenna drives 60 mph (miles per hour) it takes her 20 minutes on the highway to get between exits, but when traffic is bad it can take her an hour. How slow is McKenna driving when traffic is bad? Hint: can you figure out the distance between exits?    The sun set at 6:00 p.m. today and I heard on the radio that it sets about 2 minutes earlier each day this time of year. In how many days will the sun set at 4:30 p.m.? Bonus question: in what month is the story set?     The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. Story also appears in 1.2 and 4.1 Exercises    Which number is a constant in this story: the temperature (40) or the rate at which the temperature dropped (3)?   Name the variables, including units and dependence.   When did the temperature drop below freezing (32 F)?    Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. Story also appears in 1.2 and 5.1 Exercises    Name the variables, including units and dependence.   What was her benefit in 2012?   When will her benefit pass $900\/month? A reasonable guess is fine.    Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase. Story also appears in 3.1 Exercises    Identify and name the variables, including the units.   Which variable is dependent and which is independent?   How many stamps could I buy for $10? Try to figure it out from the story.    Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700.   Story also appears in Section 5.4    Identify and name the variables, including the units.   Explain the dependence using a sentence of the form is a function of .   What is a realistic number of miles for a car to drive? Express the domain as an inequality.   Sofía wonders when the car would be practically worthless, meaning under $500. Make a reasonable guess.    For each story, name the variables including units and dependence.   The closer you sit to a lamp, the brighter the light is.   Story also appears in 2.3 and 3.3 Exercises.    The thicker the piece of fish, the longer it takes to grill it.   Story also appears in 2.3 and 3.5 Exercises.    Wind turbines are used to generate electricity. The faster the wind, the more power they generate. Story also appears in 1.3, 2.4, and 3.3 Exercises.     "
},
{
  "id": "sec-Variables_and_functions-7",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables "
},
{
  "id": "sec-Variables_and_functions-10",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable function "
},
{
  "id": "sec-Variables_and_functions-18",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "sec-Variables_and_functions-19",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constants "
},
{
  "id": "sec-Variables_and_functions-21",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percent "
},
{
  "id": "dog-food-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#dog-food-variables-functions",
  "type": "Worksheet Exercise",
  "number": "1.1.2.1",
  "title": "",
  "body": " A 32 pound bag of dog food costs $29.97, but an 8 pound bag costs $11.28.   Identify and name the variables, including the units.   Which variable is dependent and which is independent?   What might a 16 pound bag of dog food cost? Explain the reasoning behind your guess.  "
},
{
  "id": "riverside-rent-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#riverside-rent-variables-functions",
  "type": "Worksheet Exercise",
  "number": "1.1.2.2",
  "title": "",
  "body": " Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month.    Identify and name the variables, including the units.   Explain the dependence using a sentence of the form is a function of .   Which number is a constant in this story: the percent increase (7.2) or the apartment rent (830)?   What is a realistic domain for this function? That means, for how many years might this sort of increase in rent continue? Express your answer as an inequality.   What is the average rent expected to be in 1 year? In 2 years? In 3 years? Note that . Try figuring it out.  "
},
{
  "id": "rounding-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#rounding-variables-functions",
  "type": "Worksheet Exercise",
  "number": "1.1.2.3",
  "title": "",
  "body": " Round each number up, down, or off to the precision indicated.    My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.   Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?   The original budget estimates for the new community center gym were rounded to the nearest hundred (that means ending in 00), so we want to round our bid of $148,214.79 to the nearest hundred.   The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately.  "
},
{
  "id": "time-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#time-variables-functions",
  "type": "Worksheet Exercise",
  "number": "1.1.2.4",
  "title": "",
  "body": " It's about time! In each story, time is one (or both) of the variables. Identify and name the variables, including units and dependence. (Stories also appear in 1.1 Exercises.)    The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year.   After his first beer, Stephen's blood alcohol content (BAC) was already 0.04, and as he continued to drink, his BAC level rose 45% per hour. (Story also appears in 2.4 Exercises and 3.4 #1.)    When McKenna drives 60 mph (miles per hour), it takes her 20 minutes on the highway to get between exits, but when traffic is bad, it can take her an hour.   The sun set at 6:00 p.m. today, and I heard on the radio that at this time of year, it sets about 2 minutes earlier each day. (Hint: measure the sunset time in minutes after 6:00 p.m.)   "
},
{
  "id": "time-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#time-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.5",
  "title": "",
  "body": " It's about time! For each story, try to figure out the answer to the question(s).   Stories also appear in 1.1 #4    The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year. The tree is now 40 feet tall. How long ago did the Nussbaums plant their walnut tree?   After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. Note that What was Stephen's BAC after 1 hour? After 2 hours?   Story also appears in 2.4 Exercises and 3.4 #1    When McKenna drives 60 mph (miles per hour) it takes her 20 minutes on the highway to get between exits, but when traffic is bad it can take her an hour. How slow is McKenna driving when traffic is bad? Hint: can you figure out the distance between exits?    The sun set at 6:00 p.m. today and I heard on the radio that it sets about 2 minutes earlier each day this time of year. In how many days will the sun set at 4:30 p.m.? Bonus question: in what month is the story set?   "
},
{
  "id": "mpls-temp-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#mpls-temp-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.6",
  "title": "",
  "body": " The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. Story also appears in 1.2 and 4.1 Exercises    Which number is a constant in this story: the temperature (40) or the rate at which the temperature dropped (3)?   Name the variables, including units and dependence.   When did the temperature drop below freezing (32 F)?  "
},
{
  "id": "social-security-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#social-security-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.7",
  "title": "",
  "body": " Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. Story also appears in 1.2 and 5.1 Exercises    Name the variables, including units and dependence.   What was her benefit in 2012?   When will her benefit pass $900\/month? A reasonable guess is fine.  "
},
{
  "id": "stamps-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#stamps-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.8",
  "title": "",
  "body": " Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase. Story also appears in 3.1 Exercises    Identify and name the variables, including the units.   Which variable is dependent and which is independent?   How many stamps could I buy for $10? Try to figure it out from the story.  "
},
{
  "id": "car-value-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#car-value-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.9",
  "title": "",
  "body": " Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700.   Story also appears in Section 5.4    Identify and name the variables, including the units.   Explain the dependence using a sentence of the form is a function of .   What is a realistic number of miles for a car to drive? Express the domain as an inequality.   Sofía wonders when the car would be practically worthless, meaning under $500. Make a reasonable guess.  "
},
{
  "id": "name-vars-variables-functions-tx",
  "level": "2",
  "url": "sec-Variables_and_functions.html#name-vars-variables-functions-tx",
  "type": "Worksheet Exercise",
  "number": "1.1.2.10",
  "title": "",
  "body": " For each story, name the variables including units and dependence.   The closer you sit to a lamp, the brighter the light is.   Story also appears in 2.3 and 3.3 Exercises.    The thicker the piece of fish, the longer it takes to grill it.   Story also appears in 2.3 and 3.5 Exercises.    Wind turbines are used to generate electricity. The faster the wind, the more power they generate. Story also appears in 1.3, 2.4, and 3.3 Exercises.   "
},
{
  "id": "sec-Tables_and_graphs",
  "level": "1",
  "url": "sec-Tables_and_graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Tables and graphs",
  "body": " Tables and graphs  Lung cancer, chronic bronchitis, bad breath, stains on your clothes, and the expense. These are just a few of the consequences of smoking cigarettes. With what we know now about the dangers of smoking, are people smoking more or less than they were ten years ago, fifty years ago, or even one hundred years ago?  Reality is, we don't have information on each individual person's smoking rate, so we can't answer this question exactly. We do have information on the total number of cigarettes sold each year. So maybe we should look at that total. Uh oh, that isn't going to work. There are way more people now than there were fifty or a hundred years ago. So, even if the same percentage of people smoke, and even if they each smoke the same amount as their predecessors did, we would have a much bigger number of cigarettes smoked now just because there are more people now.  Turns out a reasonable measure is to compare the number of cigarettes smoked per year per person . By taking into account the number of people we will be able to see whether people are smoking more or less, on average. That's what we want.  The table showing the smoking rate for select years. The smoking rate is the average cigarettes per year per person (adults).    Year  1900  1915  1930  1940  1950  1965  1975  1990  2000  2006    Smoking rate  54  285  1,485  1,976  3,552  4,258  4,122  2,834  2,049  1,619     Source: Center for Disease Control and Prevention   To make sense of these numbers, suppose there are five friends. Three don't smoke at all, so that is 0 cigarettes in a year. Another smokes only occasionally, maybe 100 cigarettes a year. The fifth smokes a pack a day, which adds up to 7,300 cigarettes in a year because (Not sure about this calculation? Not to worry. More about unit conversions in §1.4.) These five people smoke a total of so when we divide by the number of people we get which is less than the average of 1,619 cigarettes per year per person for 2006 (the last year the CDC published the data), which is the way things seem to be heading.  We can tell a lot of information from this table. For example, what was the smoking rate in 1965, and how does that compare to 2006? The answers appears in the table, a whopping 4,258 cigarettes per person in 1965 and 1,619 cigarettes per person in 2006.  When did the consumption first pass 3,000? That answer does not appear in the table, but we can use the information in the table to make a good guess. In 1940, there were an average of 1,976 cigarettes per person per year and by 1950, there were 3,552. Somewhere between 1940 and 1950 the number first climbed above 3,000. More specifically, the number we're looking for (3,000) is a lot closer to the 1950 figure (3,552) than to the 1940 figure (1,976). So, it would be reasonable to guess close to 1950. I'd say 1947. Of course, you might guess 1946 or 1948, or even 1949 and those would be good guesses too.  When did the consumption drop below 3,000 again? This answer also does not appear in the table, but falls somewhere between 1975 when consumption was 4,122 and 1990 when consumption was 2,834. Here I'd guess just before 1990, say in 1989.  What's changing are the number of cigarettes smoked per person per year and the year. Those are our variables. The smoking rate is a function of year, and it's what we care about, so it's the dependent variable. Time, as measured in years, is the independent variable.    smoking rate (cigarettes per year per person) dep    year (years since 1900) indep    Quick note on how we deal with actual years. Since the year 0 doesn't make sense in this problem, it is convenient to measure time in years since 1900, since that's the earliest year mentioned. Officially we should rewrite our table as:     1900  1915  1930  1940  1950  1965  1975  1990  2000  2006     54  285  1,485  1,976  3,552  4,258  4,122  2,834  2,049  1,619    Notice where the variable names are listed in the table. In a horizontal format like this table, the independent variable ( ) is in the top row, with the dependent variable ( ) is in the bottom row. If you want to write your table in a vertical format, that's okay too. Just put the independent variable in the left column, with the dependent variable in the right column. It might help to remember that the independent variable goes first (either top or left) and the dependent variable follows (either bottom or right).  Where the variables go in a table is not something you can figure out. It's a convention - a custom, practice, or standard used within the mathematical community. Though based on reason, it often involves some arbitrary choice, which is why we can't figure it out. So, whenever some practice is introduced to you as a convention, you need to memorize it.    Horizontal table format:    indep        dep          Vertical table format:    indep  dep                       Tables are useful because they contain specific numbers, but it can be difficult to guess or see general trends. For that, a picture is worth a thousand words - or numbers, in this case. By picture we mean a graph of the function.  Throughout this text, we draw graphs by hand. On graph paper. Seriously. You might wonder why we do that when graphing calculators, spreadsheet programs, graphing apps, or computer algebra systems all can draw graphs for us. The answer is we want to understand graphs better, and I promise that drawing them by hand will help you do that. (Different instructors have different opinions on the importance of graphing by hand, so be sure to ask your instructor what you are expected to do. Even if you're allowed to use some type of graphing technology, I strongly encourage you to practice drawing graphs by hand as well.)  There is a standard set-up for a graph.   The graph is based on a horizontal line and vertical line, called the axes . Where they cross is a point called the origin . It represents where each variable is 0. By convention, the independent variable is measured along the horizontal axis, with larger values progressing to the right of the origin, and negatives to the left. Similarly, the dependent variable is measured along the vertical axis, with larger values progressing up from the origin, and negatives down. Each gridline counts the same number, called the scale , but the scale for the vertical may be different from the scale for the horizontal. Each pair of values of the independent and dependent variable from our table correspond to a point on our graph.  In the graph of smoking rates, the independent variable is , the year, so that goes on the horizontal axis for our graph. Our dependent variable is , the smoking rate, so that goes on the vertical axis. For the scale, it works nicely to count by 10s for years and count by 500s for the smoking rate.  There's a certain amount of guess and check involved in figuring out a good scale for each axis. As a general rule of thumb we would like the graph to be as large as possible so we can see all of its features clearly. But, not so big that it runs off the graph paper. What matters is that the gridlines are evenly scaled and that they can handle large enough numbers. Speaking of which, it's a good idea to leave a little room to extend the graph a little further than the information we have in the table, in case we get curious about values beyond what we have already.  With realistic numbers it's normal to have numbers in the table that are not exactly where the gridlines are. It is very helpful to count by round numbers (2s, 5s, 10s, etc.) because it makes guessing in between easier. Easier for you drawing the graph. Easier for someone reading your graph.     To plot each point, we start at the origin and move right to that -value, and then up to that -value. When a value doesn't land exactly on a grid mark, we have to guess in between. For example, in 1900, when so we don't move right at all, just up to . The first labeled gridline on our graph is 500. Where's 54? It's between 0 and 500, very close to 0. Our point is just a tiny bit above the origin. In 1915 we have . Our labeled gridlines are for 10 and 20, so 15 must land halfway in between. The smoking rate to 285, which is around halfway between 0 and 500. Etc.  What we have so far is a scatter plot of points. Can you see why it's called that? Anyway, our whole goal here was to be able to understand smoking rates better by having a graph. You may already begin to see a curve suggested by the points. Time to draw it in. I don't mean drawing a line between each pair of points, like you do in the children's game connect the dots. That isn't quite right. It was probably more of a continuous trend and so the graph should be smoother.     When we draw in this smooth curve for the graph, what we are really doing is making a whole lot of guesses all at once. For example, from the table we guessed that the smoking rate passed 3,000 in around 1947, and dropped back to that level in around 1989. What does the graph show? If we look where the horizontal gridline for 3,000 crosses our graph, it crosses in two places. First, between the vertical gridlines for 40 and 50, and perhaps slightly closer to 50. I'd say , in the year 1947. Sure. The second time is between the gridlines for 80 and 90, much closer to 90. Looks like , in the year 1988. We guessed 1989. Close enough.  Don't forget that when we drew in that curve it was really just a guess. We're sure about the points we plotted, but we're only guessing about where to draw the curve in. That means we're not sure about the other points. If we knew a lot more points we could have a more accurate graph.  Turns out more data is available from the CDC. The full table of data from the CDC shows that consumption first topped 3,000 as early as 1944. Here's an example where the history tells you more than the mathematics as cigarette consumption rose sharply during World War II. Our guess about 1988 or 1989 was spot on. Look at how the graph from the full data (the dotted line) compares to our guess.      Do you know ...    Where the independent and dependent variables appear in a table and in a graph?    How to guess values from a table or from a graph?    How to make a graph from a table?    Why we start each axis at 0?    What we mean by scaling an axis evenly?    How to make a table and then a graph from a story?    Why we draw in a smooth line or curve connecting the points?    What type of graphing technology, if any, you're allowed to use? Ask your instructor.     If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Workbook exercises     My grandfather had $200 in savings bonds that matured in 1962 when he gave them to me. The bonds continue to earn interest at a fixed rate so I have yet to cash them in. The table shows some values.     year  1962  1970  1980  1990  2000  2010     0  8  18  28  38  48     200.00  318.77  570.87  1,022.34  1,830.85  3,278.77     What do and stand for? Include the units and dependence.   What were the savings bonds worth in 1970?   When were the savings bonds worth $1,022.34?   Approximately when were the savings bonds worth $1,500?   What do you expect the savings bonds would be worth in 2020?   Graph the function using the information given in the table.    Use the graph to check your answers to the questions.      How cold is it? An air temperature of 10 F is cold but manageable. But add a 30 miles per hour wind and, brrr, it feels like it is -12 F (12 below zero). We say the wind chill of 10 F with a 30 mph wind is -12 F. The table lists the wind chill for various wind speeds at an air temperature of 10 F.  Source: National Weather Service      Wind (mph)  0  5  10  15  20  25  30  35  40  45  50  55  60    Wind chill ( F)  10  1  -4  -7  -9  -11  -12  -14  -15  -16  -17  -18  -19     Name the variables, including units and dependence.   At an air temperature of 10 F with a 20 mph wind, what is the wind chill?   A cold advisory is issued whenever the wind chill falls below 0 F. How fast does the wind need to be at an air temperature of 10 F to issue a cold advisory?   Between a wind chill of 0 F and -15 F, schools in our district are open but kids may not go outside for recess. What is the corresponding range of wind speeds at an air temperature of 10 F?   Draw a graph showing how wind chill depends on wind speed and use it to check your answers. To graph both positive and negative numbers on the vertical axis, put the horizontal axis somewhere in the middle of the graph paper.       Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and $92 per person.    Identify and name the variables, including units.   Explain the dependence using a sentence of the form is a function of .   Make a table showing the cost for 20, 50, 75, 100, or 150 people.   If Tony and Tina's budget is $8,000, about how many people can they invite to their wedding reception? Give a rough estimate from your table.   Graph the function.    Does your estimate agree with your graph? If not, revise.   Can you figure out from the story exactly how many guests Tony and Tina can invite to their wedding reception and stay within their $8,000 budget?      A mug of coffee costs $3.45 at Juan's favorite cafe.    Juan buys coffee on the way to work every day. How much does Juan spend on coffee in a month? Let's say that's 22 workdays.   If Juan pays $10 for a discount card, then coffee costs $2.90\/mug instead. How much (total) would Juan spend on coffee in a month if he buys the discount card first? Still use 22 workdays. Include the $10.   Does the card pay for itself within the month? That means, is the total with the card (including the $10 for the card) less than the total without the card?   Complete the table, where is the number of mugs of coffee Juan buys and is the total cost, in dollars.     0  10  22  50    (regular)        (with card)         Draw a graph illustrating both functions.     What does the point where the two lines cross mean in terms of the story?     Textbook exercises    The table lists estimates of Earth's population, in billions, for select years since 1800.    Year  1800  1850  1900  1950  1970  1990  2000    Population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Source: The World at Six Billion United Nations report    Story also appears in 1.3 Exercises   Use the table to find or reasonably guess the answers to the following questions.   What was the population of Earth in 1850?   What do you think the population of Earth was in 1860?   What do you think the population of Earth was in 1960?   In what year do you think the population of Earth first exceeded 2 billion?   In what year do you think the population of the world will exceed 7 billion?   Identify the variables, including units and dependence.    Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     Story also appears in 1.3 and 4.4 Exercises   Use the table to find or reasonably guess the answers to the following questions.   How much does it cost to rent a truck if you drive it 100 miles?   How many miles did you drive a truck costing $90.00 to rent?   If you rent a truck and drive it 75 miles, how much do you think it will cost?   If you rent a truck and drive it 10 miles, how much do you think it will cost?   If you rent a truck and it costs $60.00, about how many miles was it driven?   Identify the variables, including units, realistic domain, and dependence.   Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.   Use your graph to check your answers to the questions. Modify, if necessary.    The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. Story also appears in 1.1 and 4.1 Exercises    Make a table of reasonable values.   Draw a graph illustrating the dependence. Count time in hours after noon.   According to your table and graph, when did the temperature drop below freezing (32 F)?   According to your graph, when did the temperature drop below 0 F. Does that seem realistic? Here in the midwest there are no oceans or mountains to moderate large temperature changes.     Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. Story also appears in 1.1 and 5.1 Exercises    Make a table of reasonable values using for Mrs. Nystrom's benefits (in dollars) and for time (in years since 2009).   Draw a graph illustrating the dependence. Scale your graph to show up through the year 2020 and $1,200.   According to your table and graph, when did her benefit pass $900\/month?   If you extend your graph to 2020, what would you estimate Mrs. Nystrom's benefit will be then, assuming these increases continue?    The table shows the heat index as a function of humidity at an air temperature of 88 F. With up to about 40% humidity, 88 F feels like it's 88 F. But if the humidity rises to 60%, then it feels like it is 95 F; that is, the heat index is 95 F.   Source: National Oceanic and Atmospheric Administration     Humidity (%)  50  60  70  85  90  95    Heat index ( F)  91  95  100  110  113  117    All of the following questions refer to situations when the air temperature is 88 F.   What is the heat index when the humidity level is 70%?   At what humidity level does it feel more like 98 F?   Heat exhaustion is likely to occur when the heat index reaches 105 F. At what humidity level will heat exhaustion likely occur?   The heat index is considered danger in the range from 105 F to 129 F. What range of humidity levels are considered dangerous?   What do you think the heat index would be at 99% humidity?   Identify the variables, including units, realistic domain, and dependence.   Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.   Use your graph to check your answers to the questions. Modify, if necessary.    "
},
{
  "id": "sec-Tables_and_graphs-17",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convention "
},
{
  "id": "sec-Tables_and_graphs-22",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axes origin scale "
},
{
  "id": "sec-Tables_and_graphs-28",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatter plot "
},
{
  "id": "grandfather-bonds-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#grandfather-bonds-tables-graphs",
  "type": "Worksheet Exercise",
  "number": "1.2.2.1",
  "title": "",
  "body": " My grandfather had $200 in savings bonds that matured in 1962 when he gave them to me. The bonds continue to earn interest at a fixed rate so I have yet to cash them in. The table shows some values.     year  1962  1970  1980  1990  2000  2010     0  8  18  28  38  48     200.00  318.77  570.87  1,022.34  1,830.85  3,278.77     What do and stand for? Include the units and dependence.   What were the savings bonds worth in 1970?   When were the savings bonds worth $1,022.34?   Approximately when were the savings bonds worth $1,500?   What do you expect the savings bonds would be worth in 2020?   Graph the function using the information given in the table.    Use the graph to check your answers to the questions.  "
},
{
  "id": "wind-chill-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#wind-chill-tables-graphs",
  "type": "Worksheet Exercise",
  "number": "1.2.2.2",
  "title": "",
  "body": " How cold is it? An air temperature of 10 F is cold but manageable. But add a 30 miles per hour wind and, brrr, it feels like it is -12 F (12 below zero). We say the wind chill of 10 F with a 30 mph wind is -12 F. The table lists the wind chill for various wind speeds at an air temperature of 10 F.  Source: National Weather Service      Wind (mph)  0  5  10  15  20  25  30  35  40  45  50  55  60    Wind chill ( F)  10  1  -4  -7  -9  -11  -12  -14  -15  -16  -17  -18  -19     Name the variables, including units and dependence.   At an air temperature of 10 F with a 20 mph wind, what is the wind chill?   A cold advisory is issued whenever the wind chill falls below 0 F. How fast does the wind need to be at an air temperature of 10 F to issue a cold advisory?   Between a wind chill of 0 F and -15 F, schools in our district are open but kids may not go outside for recess. What is the corresponding range of wind speeds at an air temperature of 10 F?   Draw a graph showing how wind chill depends on wind speed and use it to check your answers. To graph both positive and negative numbers on the vertical axis, put the horizontal axis somewhere in the middle of the graph paper.   "
},
{
  "id": "wedding-rental-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#wedding-rental-tables-graphs",
  "type": "Worksheet Exercise",
  "number": "1.2.2.3",
  "title": "",
  "body": " Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and $92 per person.    Identify and name the variables, including units.   Explain the dependence using a sentence of the form is a function of .   Make a table showing the cost for 20, 50, 75, 100, or 150 people.   If Tony and Tina's budget is $8,000, about how many people can they invite to their wedding reception? Give a rough estimate from your table.   Graph the function.    Does your estimate agree with your graph? If not, revise.   Can you figure out from the story exactly how many guests Tony and Tina can invite to their wedding reception and stay within their $8,000 budget?  "
},
{
  "id": "juan-coffee-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#juan-coffee-tables-graphs",
  "type": "Worksheet Exercise",
  "number": "1.2.2.4",
  "title": "",
  "body": " A mug of coffee costs $3.45 at Juan's favorite cafe.    Juan buys coffee on the way to work every day. How much does Juan spend on coffee in a month? Let's say that's 22 workdays.   If Juan pays $10 for a discount card, then coffee costs $2.90\/mug instead. How much (total) would Juan spend on coffee in a month if he buys the discount card first? Still use 22 workdays. Include the $10.   Does the card pay for itself within the month? That means, is the total with the card (including the $10 for the card) less than the total without the card?   Complete the table, where is the number of mugs of coffee Juan buys and is the total cost, in dollars.     0  10  22  50    (regular)        (with card)         Draw a graph illustrating both functions.     What does the point where the two lines cross mean in terms of the story?  "
},
{
  "id": "earth-population-tables-graphs-tx",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#earth-population-tables-graphs-tx",
  "type": "Worksheet Exercise",
  "number": "1.2.2.5",
  "title": "",
  "body": " The table lists estimates of Earth's population, in billions, for select years since 1800.    Year  1800  1850  1900  1950  1970  1990  2000    Population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Source: The World at Six Billion United Nations report    Story also appears in 1.3 Exercises   Use the table to find or reasonably guess the answers to the following questions.   What was the population of Earth in 1850?   What do you think the population of Earth was in 1860?   What do you think the population of Earth was in 1960?   In what year do you think the population of Earth first exceeded 2 billion?   In what year do you think the population of the world will exceed 7 billion?   Identify the variables, including units and dependence.  "
},
{
  "id": "truck-rental-tables-graphs-tx",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#truck-rental-tables-graphs-tx",
  "type": "Worksheet Exercise",
  "number": "1.2.2.6",
  "title": "",
  "body": " Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     Story also appears in 1.3 and 4.4 Exercises   Use the table to find or reasonably guess the answers to the following questions.   How much does it cost to rent a truck if you drive it 100 miles?   How many miles did you drive a truck costing $90.00 to rent?   If you rent a truck and drive it 75 miles, how much do you think it will cost?   If you rent a truck and drive it 10 miles, how much do you think it will cost?   If you rent a truck and it costs $60.00, about how many miles was it driven?   Identify the variables, including units, realistic domain, and dependence.   Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.   Use your graph to check your answers to the questions. Modify, if necessary.  "
},
{
  "id": "temp-mpls-tables-graphs-tx",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#temp-mpls-tables-graphs-tx",
  "type": "Worksheet Exercise",
  "number": "1.2.2.7",
  "title": "",
  "body": " The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. Story also appears in 1.1 and 4.1 Exercises    Make a table of reasonable values.   Draw a graph illustrating the dependence. Count time in hours after noon.   According to your table and graph, when did the temperature drop below freezing (32 F)?   According to your graph, when did the temperature drop below 0 F. Does that seem realistic? Here in the midwest there are no oceans or mountains to moderate large temperature changes.   "
},
{
  "id": "social-security-tables-graphs-tx",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#social-security-tables-graphs-tx",
  "type": "Worksheet Exercise",
  "number": "1.2.2.8",
  "title": "",
  "body": " Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. Story also appears in 1.1 and 5.1 Exercises    Make a table of reasonable values using for Mrs. Nystrom's benefits (in dollars) and for time (in years since 2009).   Draw a graph illustrating the dependence. Scale your graph to show up through the year 2020 and $1,200.   According to your table and graph, when did her benefit pass $900\/month?   If you extend your graph to 2020, what would you estimate Mrs. Nystrom's benefit will be then, assuming these increases continue?  "
},
{
  "id": "heat-index-tables-graphs-ex",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#heat-index-tables-graphs-ex",
  "type": "Worksheet Exercise",
  "number": "1.2.2.9",
  "title": "",
  "body": " The table shows the heat index as a function of humidity at an air temperature of 88 F. With up to about 40% humidity, 88 F feels like it's 88 F. But if the humidity rises to 60%, then it feels like it is 95 F; that is, the heat index is 95 F.   Source: National Oceanic and Atmospheric Administration     Humidity (%)  50  60  70  85  90  95    Heat index ( F)  91  95  100  110  113  117    All of the following questions refer to situations when the air temperature is 88 F.   What is the heat index when the humidity level is 70%?   At what humidity level does it feel more like 98 F?   Heat exhaustion is likely to occur when the heat index reaches 105 F. At what humidity level will heat exhaustion likely occur?   The heat index is considered danger in the range from 105 F to 129 F. What range of humidity levels are considered dangerous?   What do you think the heat index would be at 99% humidity?   Identify the variables, including units, realistic domain, and dependence.   Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.   Use your graph to check your answers to the questions. Modify, if necessary.  "
},
{
  "id": "sec-Rate_of_change",
  "level": "1",
  "url": "sec-Rate_of_change.html",
  "type": "Section",
  "number": "1.3",
  "title": "Rate of change",
  "body": " Rate of change  A diver bounces on a 3-meter springboard. Up she goes. A somersault, a twist, then whoosh, into the water. The table shows the diver's height as a function of time,     0  0.2  0.4  0.6  0.8  1.0  1.2  1.4     3.00  3.88  4.38  4.48  4.20  3.52  2.45  1.00    where    diver's height (meters) dep    time (seconds) indep    In case you're wondering, 3 meters is nearly 10 feet up and the highest height listed, 4.48 meters, is close to 15 feet above the water. More on how we figured those numbers out in the next section, but thought you might like to know.  How fast is she moving? The diver starts at 3 meters, which is the height of the springboard, and 0.2 seconds later she's up to 3.88 meters. That means during the first 0.2 seconds, the diver went up Her speed is   What about during the next 0.2 seconds? Does she move faster, slower, or the same? During this time, her height changed from 3.88 meters to 4.38 meters. In these 0.2 seconds she rose That's less than before (since ), which means so she is going slower. Let's double check by calculating her speed. Yup, slower.  Let's take a look at this calculation again. Here's what we did. There is a way to do the entire calculation at once on your calculator. See how we put parentheses around both the top and bottom of the fraction? We needed them to force the calculator to do the subtractions first and division second. The usual order of operations would do it the other way around: multiplication and division before addition and subtraction. (If you need a reminder, the full list of the order of operations appears later, in Section 1.5.) Because the top and bottom of the fraction each have meaning in the story, we continue to calculate them separately, but feel free to do the whole calculation at once if you prefer.  Notice that we are subtracting like terms : meters from meters and then seconds from seconds. It would not make sense to mix. Think: so we don't want to mix units because that would be like taking cookies away from children.  In our story, we calculated the speed of the diver. In general, that number is the rate of change of the function over that interval of values.   Rate of change formula        Notice how the change in dependent variable (height, in meters) is on top of the fraction and the change in independent variable (time, in seconds) is on the bottom. That makes sense in our example because speed is measured in meters\/second. The units can help you keep that straight.   Back to our diver. During the next time interval she's moving even slower. And look what happens when we calculate her speed during the next time interval. What does a negative speed mean? During this time interval her height drops. She's headed down towards the water. Her speed is 1.4 meters\/sec downward. The negative tells us her height is falling. What goes up, must come down. Sure enough.  You may notice that the signs for subtraction and negation each look like . On the calculator these are two different keys. The subtraction key reads just . The negation key often reads and is done before the number. This does not mean you type in parentheses, just hit the one key that is labeled already. (If your calculator does not have a key labeled (-), look for a key labeled instead. That is not three keys, just one labeled Often that key needs to follow the number, so enter You should get -1.4 meters\/sec again.)  Here are the speeds included in our table.     0  0.2  0.4  0.6  0.8  1.0  1.2  1.4     3  3.88  4.38  4.48  4.20  3.52  2.45  1    Speed   4.4  2.5  0.5  -1.4  -3.4  -5.35  -7.25    Let's graph our function. Notice that time is on the horizontal axis because it's the independent variable and height is on the vertical axis because it's our dependent variable: height depends on time.     As usual we drew in a smooth curve connecting the points, which illustrates our best guesses for the points we don't know and we continued the graph until the height was zero (when the diver hits the water). The values from our table are indicated with big points to help explain what's going on.  There is a way to see the rate of change from the graph. In the case of our diver, the graph looks like a hill. The curve goes uphill at first. Between the first two points it is rather steep and the rate of change is 4.4 meters\/sec there. The next segment is less steep and that's where the rate of change is less, down to 2.5 meters\/sec. The third line segment is almost flat and that's where the rate of change is only 0.5 meters\/sec. Aha. The rate of change corresponds to how steep the curve is.  We notice the same connection between the rate of change and steepness of the curve for the downhill portion, only this time all the rates of change are negative. The first downhill segment is not very steep and the rate of change is -1.4 meters\/sec there. The next downhill segment has rate of change -3.4 meters\/sec and the graph is steeper. The next two downhill segments are steeper and steeper yet and this time with rates of change -5.35 and -7.25 meters\/sec.  A little more vocabulary here. For the uphill portion of the graph, from 0 to just before 0.6 seconds, the rate of change is positive. The function is increasing there: as the independent variable gets larger, so does the dependent variable. After about 0.6 seconds, the graph is downhill and the rate of change is negative. The function is decreasing there: as the independent variable gets larger, the dependent variable gets smaller.  When does the diver's height stop increasing and start decreasing? When she's at the highest height, some time just before 0.6 seconds into her dive. Before then her rate of change is positive. After that time her rate of change is negative. So, at the highest height her rate of change is probably equal to zero. Does that make sense? Think about watching a diver on film in very slow motion. Up, up she goes, then almost a pause at the top, and then down, down, into the water. At the top of her dive it's as if she stands still for an instant. That would correspond to zero speed.   Do you know ...    How to calculate rate of change between two points? Ask your instructor if you need to remember the formula or if it will be provided during the exam.     What the rate of change means in the story?    How we can use the rate of change to estimate values?    When a function is increasing or decreasing, and the connection to the rate of change?    Why the rate of change is zero at the maximum (or minimum) value of a function?    What the connection is between rate of change and the steepness of the graph?    If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Workbook problems     Sweet Rose Bakery makes cakes and cupcakes. Here are their prices.    Cake prices    Servings  10  20  50    Cost  $11.95  $19.95  $40.95      Cupcake prices    Servings  12  24  48    Cost  $6.95  $13.90  $27.80       Calculate the rate of change for cake prices, in $\/person, if there are between 10 and 20 people. Repeat for between 20 and 50 people.   Calculate the rate of change for cupcake prices, in $\/person, if there are between 12 and 24 people. Repeat for between 24 and 48 people.   On the same set of axes, graph how the price depends on the number of people for cake and also for cupcakes. Connect each line or curve smoothly.    The rate of change for cupcakes is constant. Any idea why?   The rate of change for cakes is not constant. Any idea why?      Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and then $92 per person.    Make a table showing the cost for 20, 50, 75, or 100 people.   Calculate the extra cost for each additional person between 20 and 50 people.   Calculate the extra cost for each additional person between 75 and 100 people.   What do you notice?   Explain why the graph of this cost function is a straight line.   Is the cost function increasing, decreasing, or neither?      Rashad measured his heart rate several times after football practice. Right after practice his heart rate was 178 beats per minute. Two minutes later, it had dropped to 153 beats per minute, and by ten minutes after practice it was down to 120 beats per minute.   Make a table showing Rashad's heart rate at each time.   Identify the variables, including units and dependence.   How quickly was Rashad's heart rate dropping during the first two minutes following practice? Hint: the units are beats per minute per minute.    How quickly was his heart rate dropping during the next time period?   Rashad does not like hitting the showers until his heart rate is close to normal, or at least below 100. He usually waits 15 minutes after practice. Do you think that's long enough? Explain.   During the time in this table, did Rashad's heart rate increase, decrease, or neither?      Teen pregnancy rates for Minneapolis, measured in pregnancies per thousand teens, are summarized in the graph and table. Source: Minnesota Department of Health     Year  1999  2000  2001  2002  2003  2004  2005  2006  2007  2008  2009    Teen preg  76.0  73.5  54.9  58.2  55.7  49.9  45.1  53.3  49.4  43.5  34.0      What was the teen pregnancy rate in 2003?   Did the teen pregnancy rate increase or decrease from 2003 to 2004?   While the teen pregnancy rate has generally decreased, from 2001 to 2002 it actually increased. Were there other times when it increased?   When did the teen pregnancy rate first fall below 60 pregnancies per thousand teens?   How fast was the teen pregnancy rate dropping on average per year from 2002 to 2005? How does that compare to 2006 to 2009?     Textbook problems    Look back at the springboard diver example in this section.   Check the other rates of change given in the table.   Approximately how fast is the diver moving as she enters the water? Use that her height at 1.4 seconds is 1 foot above water (given earlier), but also her height at 1.5 seconds is just 0.12 feet above water.    Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     Story also appears in 1.2 and 4.4 Exercises    Calculate the rate of change for each time period.   Can you use figure out what it probably costs to rent a truck to drive 75 miles?   There must be some sort of fixed price plus a per mile price. Can you figure out what that fixed price must be?    Wind turbines are used to generate electricity. A few values are recorded in the table.    wind speed (mph)  0  10  20  30    electricity (watts)  0  2,400  19,200  64,800     Story also appears in 1.1, 2.4, and 3.3 Exercises    Name the variables, including units and dependence.   Plot the points from the table on a graph.   Calculate the rate of change in electricity as a function of wind speeds from 0 to 10 mph. Sketch in the line segment connecting those two points on the graph.   Repeat for wind speeds from 10 to 20 mph. Is the electricity produced increasing faster or increasing slower than for lower wind speeds.   Repeat for wind speeds from 20 to 30 mph. Comment again on how the rate of change compares to earlier rates of change.    The table lists estimates of Earth's population, in billions, for select years since 1800.   Source: The World at Six Billion United Nations report, 1999     year  1800  1850  1900  1950  1970  1990  2000    population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Story also appears in 1.2 Exercises   During which period of time was the Earth's population increasing the fastest? Calculate the rates of change for each time period to decide. (Or, explain some other way of deciding.)    A company produces backpacks. The more they make, the less it costs for each one. For example, if they produce 10 backpack it would cost $39 each. For 40 backpacks, they would cost $18 each. By 70 backpacks, the unit cost is down to $15 each. At 100 backpacks, the unit cost is $30 each. Story also appears in 3.5 Exercises    Name the variables and summarize the information in a table.   Calculate the rates of change between 10 and 40 backpacks, between 40 and 70 backpacks, and between 70 and 100 backpacks.   For which range of values does the cost per backpack decrease?   Any ideas why the cost might increase?   Draw a graph illustrating the dependence. Try for a nice, smooth curve.   Approximately how many backpacks does the company have to make to keep the cost per backpack as small as possible?    The public beach near Paloma's house has lost depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. The table shows a few values. There is the depth of the beach in feet, and is the year, measured since 60 years ago.    year  60 years ago  30 years ago  10 years ago   now       0  30  50  60     435  322.5  247.5  210     Story also appears in 4.3 Exercises    Calculate the rates of change for each time period.   Explain why the rates of change should be negative.   Approximately how many feet a year is the beach eroding?   Draw a graph showing how the beach depth has changed over the past 60 years.    "
},
{
  "id": "sec-Rate_of_change-10",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like terms "
},
{
  "id": "sec-Rate_of_change-11",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate of change "
},
{
  "id": "def-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#def-rate-of-change",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Rate of change formula.",
  "body": " Rate of change formula       "
},
{
  "id": "sec-Rate_of_change-23",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "increasing decreasing "
},
{
  "id": "bakery-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#bakery-rate-of-change",
  "type": "Exercise",
  "number": "1.3.2.1",
  "title": "",
  "body": " Sweet Rose Bakery makes cakes and cupcakes. Here are their prices.    Cake prices    Servings  10  20  50    Cost  $11.95  $19.95  $40.95      Cupcake prices    Servings  12  24  48    Cost  $6.95  $13.90  $27.80       Calculate the rate of change for cake prices, in $\/person, if there are between 10 and 20 people. Repeat for between 20 and 50 people.   Calculate the rate of change for cupcake prices, in $\/person, if there are between 12 and 24 people. Repeat for between 24 and 48 people.   On the same set of axes, graph how the price depends on the number of people for cake and also for cupcakes. Connect each line or curve smoothly.    The rate of change for cupcakes is constant. Any idea why?   The rate of change for cakes is not constant. Any idea why?  "
},
{
  "id": "wedding-rental-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#wedding-rental-rate-of-change",
  "type": "Exercise",
  "number": "1.3.2.2",
  "title": "",
  "body": " Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and then $92 per person.    Make a table showing the cost for 20, 50, 75, or 100 people.   Calculate the extra cost for each additional person between 20 and 50 people.   Calculate the extra cost for each additional person between 75 and 100 people.   What do you notice?   Explain why the graph of this cost function is a straight line.   Is the cost function increasing, decreasing, or neither?  "
},
{
  "id": "heart-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#heart-rate-of-change",
  "type": "Exercise",
  "number": "1.3.2.3",
  "title": "",
  "body": " Rashad measured his heart rate several times after football practice. Right after practice his heart rate was 178 beats per minute. Two minutes later, it had dropped to 153 beats per minute, and by ten minutes after practice it was down to 120 beats per minute.   Make a table showing Rashad's heart rate at each time.   Identify the variables, including units and dependence.   How quickly was Rashad's heart rate dropping during the first two minutes following practice? Hint: the units are beats per minute per minute.    How quickly was his heart rate dropping during the next time period?   Rashad does not like hitting the showers until his heart rate is close to normal, or at least below 100. He usually waits 15 minutes after practice. Do you think that's long enough? Explain.   During the time in this table, did Rashad's heart rate increase, decrease, or neither?  "
},
{
  "id": "teen-pregnancy-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#teen-pregnancy-rate-of-change",
  "type": "Exercise",
  "number": "1.3.2.4",
  "title": "",
  "body": " Teen pregnancy rates for Minneapolis, measured in pregnancies per thousand teens, are summarized in the graph and table. Source: Minnesota Department of Health     Year  1999  2000  2001  2002  2003  2004  2005  2006  2007  2008  2009    Teen preg  76.0  73.5  54.9  58.2  55.7  49.9  45.1  53.3  49.4  43.5  34.0      What was the teen pregnancy rate in 2003?   Did the teen pregnancy rate increase or decrease from 2003 to 2004?   While the teen pregnancy rate has generally decreased, from 2001 to 2002 it actually increased. Were there other times when it increased?   When did the teen pregnancy rate first fall below 60 pregnancies per thousand teens?   How fast was the teen pregnancy rate dropping on average per year from 2002 to 2005? How does that compare to 2006 to 2009?  "
},
{
  "id": "diver-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#diver-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.5",
  "title": "",
  "body": " Look back at the springboard diver example in this section.   Check the other rates of change given in the table.   Approximately how fast is the diver moving as she enters the water? Use that her height at 1.4 seconds is 1 foot above water (given earlier), but also her height at 1.5 seconds is just 0.12 feet above water.  "
},
{
  "id": "truck-rental-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#truck-rental-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.6",
  "title": "",
  "body": " Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     Story also appears in 1.2 and 4.4 Exercises    Calculate the rate of change for each time period.   Can you use figure out what it probably costs to rent a truck to drive 75 miles?   There must be some sort of fixed price plus a per mile price. Can you figure out what that fixed price must be?  "
},
{
  "id": "wind-turbine-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#wind-turbine-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.7",
  "title": "",
  "body": " Wind turbines are used to generate electricity. A few values are recorded in the table.    wind speed (mph)  0  10  20  30    electricity (watts)  0  2,400  19,200  64,800     Story also appears in 1.1, 2.4, and 3.3 Exercises    Name the variables, including units and dependence.   Plot the points from the table on a graph.   Calculate the rate of change in electricity as a function of wind speeds from 0 to 10 mph. Sketch in the line segment connecting those two points on the graph.   Repeat for wind speeds from 10 to 20 mph. Is the electricity produced increasing faster or increasing slower than for lower wind speeds.   Repeat for wind speeds from 20 to 30 mph. Comment again on how the rate of change compares to earlier rates of change.  "
},
{
  "id": "earth-population-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#earth-population-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.8",
  "title": "",
  "body": " The table lists estimates of Earth's population, in billions, for select years since 1800.   Source: The World at Six Billion United Nations report, 1999     year  1800  1850  1900  1950  1970  1990  2000    population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Story also appears in 1.2 Exercises   During which period of time was the Earth's population increasing the fastest? Calculate the rates of change for each time period to decide. (Or, explain some other way of deciding.)  "
},
{
  "id": "backpacks-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#backpacks-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.9",
  "title": "",
  "body": " A company produces backpacks. The more they make, the less it costs for each one. For example, if they produce 10 backpack it would cost $39 each. For 40 backpacks, they would cost $18 each. By 70 backpacks, the unit cost is down to $15 each. At 100 backpacks, the unit cost is $30 each. Story also appears in 3.5 Exercises    Name the variables and summarize the information in a table.   Calculate the rates of change between 10 and 40 backpacks, between 40 and 70 backpacks, and between 70 and 100 backpacks.   For which range of values does the cost per backpack decrease?   Any ideas why the cost might increase?   Draw a graph illustrating the dependence. Try for a nice, smooth curve.   Approximately how many backpacks does the company have to make to keep the cost per backpack as small as possible?  "
},
{
  "id": "beach-erosion-rate-of-change-tx",
  "level": "2",
  "url": "sec-Rate_of_change.html#beach-erosion-rate-of-change-tx",
  "type": "Exercise",
  "number": "1.3.2.10",
  "title": "",
  "body": " The public beach near Paloma's house has lost depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. The table shows a few values. There is the depth of the beach in feet, and is the year, measured since 60 years ago.    year  60 years ago  30 years ago  10 years ago   now       0  30  50  60     435  322.5  247.5  210     Story also appears in 4.3 Exercises    Calculate the rates of change for each time period.   Explain why the rates of change should be negative.   Approximately how many feet a year is the beach eroding?   Draw a graph showing how the beach depth has changed over the past 60 years.  "
},
{
  "id": "sec-Units",
  "level": "1",
  "url": "sec-Units.html",
  "type": "Section",
  "number": "1.4",
  "title": "Units",
  "body": " Units  We know 5 city blocks and 5 miles are very different lengths to walk; $5 and 5 are very different values of money; 5 minutes and 5 years are very different amounts of time to wait - even though all of these quantities are represented by the number 5. Every variable is measured in terms of some unit. Since there are often several different units available to use it is important when naming a variable to state which units we are choosing to measure it in.  In the last section we examined the height of a springboard diver and her speed in the air. But, how high is 3 meters? How fast is 4.4 meters per second?  The metric unit of length called a meter is just over 3 feet (a yard). Let's use We can use this conversion to change 3 meters to feet. Since our conversion is just approximate, we rounded off our answer too.  See that fraction? The 3.281 feet on the top and the 1 meter on the bottom are just two different ways of saying approximately the same distance. In other words, A fraction where the top and bottom are equal quantities expressed in different units is sometimes called a unit conversion fraction . Because it's equal to 1 (or at least very close to 1), multiplying by the unit conversion fraction doesn't change the value, just the units.  You might wonder how we knew to put the feet on the top and the meters on the bottom. One reminder for how this works is to think fractions. It's like the meters on the top and bottom cancel, leaving the units as feet.   One more idea to keep in mind when converting units: a few large things equals a lot of small things. Instead of buying a lot of small bags of ice to fill your cooler, you can buy a few larger bags of ice instead. In our example, a meter is much bigger than a foot. So it makes sense that a small number of meters (3 meters) equalled a larger number of feet (9.8 feet). That might seem backwards, but that's how it works.  Of course, 9.8 feet might sound like a funny answer. We're much more used to a whole number of feet and then the fraction in inches. It's 9 feet and some number of inches. To figure out the inches we look at the decimal part . That's the part we need to convert to inches. Since there are 12 inches in a foot, we use the (exact) conversion to get   Quick caution here. We rounded off 9.843 to get 9.8 and then just used the 0.8 to find the extra inches. Maybe we should have used the 0.843 instead. Here's what happens. Phew! Either way, the board is about 9 feet and 10 inches high. The common shorthand for this answer is 9'10\". (That's pronounced 9 foot 10 , as in our team's new center is 6 foot 7 .) The ' symbol indicates feet and \" indicates inches.  The highest height we had recorded for the diver was 4.48 meters. Now we know that's In feet and inches, that's about 14 feet, 8 inches because The diver's highest height was around 14'8\".  You might have guessed that 14.7 feet would be 14'7\". I mean, that sort of looks obvious. The reason it's not is because decimal numbers are based on 10. The 0.7 really means . But inches are based on 12. Seven inches means We wanted 0.7 so that's not it. Our answer of 8\" worked just fine since   What about the diver's speed? During the first 0.2 seconds we calculated her speed as 4.4 meters per second. How fast is that? We can certainly convert to feet per second. Does that help us understand how fast she's going? Maybe a little. But, we're probably most familiar with speeds measured in miles per hour, that's what mph stands for.  Let's convert to miles per hour. First, use that to get The larger number makes sense here because she can go more feet in a minute than in just one second.  Next, use that to get Again, the larger number makes sense because she can go more feet in an hour than in just one minute.  Last, we need to convert to miles. Turns out that and so This time we got a smaller number because she can go a lot fewer miles in an hour compared to feet in an hour. Notice how we needed to divide by . Numbers on top of the fraction multiply. Those on the bottom divide.  We can do this entire calculation all at once. Notice how all of the units cancel to leave us with miles per hour.    Right before the diver hit the water she was going around 7.25 meters per second. How fast is that in mph? Ready for it all in one line? Here it is.    If you're having trouble setting up unit conversions, remember to write down the units so you can see how they cancel. If you can't remember a number for a unit conversion, like feet for one mile, try searching online.   Do you know ...    How to convert from one unit of measurement to another?    What a unit conversion fraction is?    Why multiplying by a unit conversion fraction doesn't change the amount, just the units?    How to connect repeated conversions into one calculation?    Why if we convert an amount to a larger unit, we use a smaller number?    How many seconds in a minute, minutes in an hour, hours in a day, days in a year, inches in a foot, feet in a mile, and other common conversions?   Ask your instructor which common conversions you need to remember, and whether any conversion formulas will be provided during the exam.     How to convert between English and metric measurements?   Again, ask your instructor which metric conversions you need to remember, and whether any conversion formulas will be provided during the exam.     If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Workbook exercises      Compare centimeters (cm) and inches, using that 1 inch 2.54 cm.   Which is longer: 1 inch or 1 centimeter?   Kamari is shopping at an internationally-based retail store. She is looking at a curtain rod that projects 10 cm from the wall. What is that in inches?   She also wants a basket no more than 1 foot wide or long to fit on her bookcase. How many centimeters are in a foot?   Compare meters (m) and yards using that 1 yard 0.9144 m.   Which is longer: 1 yard or 1 meter?   Princeton was watching the Olympics and noticed everything was measured in meters. He is curious how long a football field (100 yards) is in meters.   Kamari found a really big bath towel she likes. It is 1 meter wide and 1.5 meters long. What are the dimensions in inches? Use that 1 yard = 3 feet.   Compare kilometers (km) and miles using that 1 mile 1.609 km.   Which is longer: 1 mile or 1 kilometer?   This weekend Princeton and Kamari are doing a 5K run. How many miles long is that? Note: 5K is short for 5 kilometers.   Princeton is actually in training for a marathon. How many kilometers is that? Note: a marathon is approximately 26.2 miles.       Yesterday Cameron worked for 2 hours and 15 minutes (that's 2:15) and then went home and studied for 7 hours and 57 minutes (that's 7:57). Convert each time into decimal hours.   Ephraim works at a plant that produces very delicate electronic switches. He measured the lifetime for one switch at 4.18 hours. Another had lifetime 19.50 hours. Convert each time into hours and minutes. That means H:MM format.    Phillip measured his office using a digital measure. One wall is 21.8 feet. The other is 10.2 feet. How long is each wall measured in the more usual feet and inches?   The couch Stetson wanted to buy is 92\" long and 44\" tall. Convert the length and height to feet and inches.   Abdi volunteers at a food bank. He noticed that the shelf on the back wall was bending so he measured its length at 12'5\". The formula for load needs the length written as a decimal. Convert the length to a decimal number of feet.      Some people say we should drink 8 glasses of water (or other liquids) every day, where a glass is defined as 8 (liquid) ounces.   Ingrid uses a 20 ounce unbreakable plastic bottle. How many of those bottles full of water does she need to drink each day?   Siri carries around a insulated water bottle that holds 0.6 liters. How many of those bottles full of water does she need to drink each day? Use that 1 liter 1.057 quarts and 1 quart = 32 (liquid) ounces.   To meet the recommendation, how much water would one person drink in an entire year? Give the answer in gallons. Use 1 gallon = 4 quarts.      Jenna is studying in Finland this term and rented an older car to drive.   She learns that no matter what the road signs might say, the maximum speed limit in Finland in winter is never more than 100 km\/hr. How fast is that in miles per hour (mph)? Use 1 mile 1.609 km.   Jenna's car holds 62 liters of gasoline in its tank. How many gallons is that? Use 1 liter 1.057 quarts and 1 gallon = 4 quarts.   Her car gets 7.6 km\/liter. Convert to miles per gallon (mpg).   Gas prices in Finland were 1.658 €\/liter. What's the equivalent price in $\/gal? The symbol € stands for euro. Use 1 € $1.23.   What would it cost Jenna, in euros, for a full tank of gas? How much is that in dollars?     Textbook exercises    In August 2008, United States swimmer Michael Phelps set the world record for the 200 meter individual medley swimming it in 1 minute, 54.80 seconds.   Source: Wikipedia (World record progression 200 metres IM)    Convert Phelps's time into minutes.   How fast did Phelps swim, as measured in meters\/min?   Convert Phelps's speed to mph. Use .    In August 2012, Phelps improved his time and won Olympic gold, but failed to break the world record his teammate Ryan Lochte has set a year earlier of 1 minute, 54 seconds.   Convert Lochte's time into minutes.   How fast did Lochte swim, as measured in meters\/min?   Convert Lochte's speed to mph.    The typical weight limit for a suitcase on flights within Africa is 20 kg. How many pounds is that? Use .   How many servings are in a 20 ounce package of cookies where a serving size is 3 cookies and each cookie weighs 11 grams? Use .   My corner convenience store sells a thirst quencher size of soft drink; it holds 64 (fluid) ounces. If a can of soft drink is 12 (fluid) ounces, how many cans are in the thirst quencher ?    The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. How many yards are in three-quarters of a mile?   The quilt pattern calls for 0.375 yards of calico fabric. How many feet is 0.375 yards?   The website said that basil plants should be 0.35 feet tall a month after germinating. How many inches is 0.35 feet?    Authorities are tracking down the source of a pollution spill on a nearby river. They suspect that the local plant is inadvertently leaking waste water. Last week they found 35 minutes of waste water flow on Monday, 1 hour and 11 minutes on Tuesday, 1\/4 hour on Wednesday (that's 0.25 hours in decimal), none on Thursday, and then 98 minutes Friday.   Convert units as needed to complete the following table showing each time in minutes, each time in hours, and each time in hours and minutes (H:MM format).   Hint: 15 minutes in H:MM format would be 0:15     Day  Mon  Tue  Wed  Thu  Fri    Minutes  35    0  98    Hours        .25          H:MM   1:11          Calculate the total waste water flow measured last week.    If your heart beats around 70 times a minute, how many times does it beat in a week? A year?    Harold's Physics textbook says an object is thrown into the air at 36 feet per second. To understand how fast that is, convert to mph.   Harold's History textbook mentions that in 1800 the city encompassed about 6,000 acres. How many square miles is that? Use .   Harold's Economics textbooks lists the recent high price of crude oil at $100 per barrel. He'd like to know what that means in $\/gallon of gasoline. It turns out that 1 barrel of crude oil produces about 19.4 gallons of gasoline.    "
},
{
  "id": "sec-Units-5",
  "level": "2",
  "url": "sec-Units.html#sec-Units-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit conversion fraction "
},
{
  "id": "sec-Units-12",
  "level": "2",
  "url": "sec-Units.html#sec-Units-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mph "
},
{
  "id": "compare-lengths-units",
  "level": "2",
  "url": "sec-Units.html#compare-lengths-units",
  "type": "Exercise",
  "number": "1.4.2.1",
  "title": "",
  "body": " Compare centimeters (cm) and inches, using that 1 inch 2.54 cm.   Which is longer: 1 inch or 1 centimeter?   Kamari is shopping at an internationally-based retail store. She is looking at a curtain rod that projects 10 cm from the wall. What is that in inches?   She also wants a basket no more than 1 foot wide or long to fit on her bookcase. How many centimeters are in a foot?   Compare meters (m) and yards using that 1 yard 0.9144 m.   Which is longer: 1 yard or 1 meter?   Princeton was watching the Olympics and noticed everything was measured in meters. He is curious how long a football field (100 yards) is in meters.   Kamari found a really big bath towel she likes. It is 1 meter wide and 1.5 meters long. What are the dimensions in inches? Use that 1 yard = 3 feet.   Compare kilometers (km) and miles using that 1 mile 1.609 km.   Which is longer: 1 mile or 1 kilometer?   This weekend Princeton and Kamari are doing a 5K run. How many miles long is that? Note: 5K is short for 5 kilometers.   Princeton is actually in training for a marathon. How many kilometers is that? Note: a marathon is approximately 26.2 miles.  "
},
{
  "id": "decimal-hours-lengths-units",
  "level": "2",
  "url": "sec-Units.html#decimal-hours-lengths-units",
  "type": "Exercise",
  "number": "1.4.2.2",
  "title": "",
  "body": " Yesterday Cameron worked for 2 hours and 15 minutes (that's 2:15) and then went home and studied for 7 hours and 57 minutes (that's 7:57). Convert each time into decimal hours.   Ephraim works at a plant that produces very delicate electronic switches. He measured the lifetime for one switch at 4.18 hours. Another had lifetime 19.50 hours. Convert each time into hours and minutes. That means H:MM format.    Phillip measured his office using a digital measure. One wall is 21.8 feet. The other is 10.2 feet. How long is each wall measured in the more usual feet and inches?   The couch Stetson wanted to buy is 92\" long and 44\" tall. Convert the length and height to feet and inches.   Abdi volunteers at a food bank. He noticed that the shelf on the back wall was bending so he measured its length at 12'5\". The formula for load needs the length written as a decimal. Convert the length to a decimal number of feet.  "
},
{
  "id": "drink-water-units",
  "level": "2",
  "url": "sec-Units.html#drink-water-units",
  "type": "Exercise",
  "number": "1.4.2.3",
  "title": "",
  "body": " Some people say we should drink 8 glasses of water (or other liquids) every day, where a glass is defined as 8 (liquid) ounces.   Ingrid uses a 20 ounce unbreakable plastic bottle. How many of those bottles full of water does she need to drink each day?   Siri carries around a insulated water bottle that holds 0.6 liters. How many of those bottles full of water does she need to drink each day? Use that 1 liter 1.057 quarts and 1 quart = 32 (liquid) ounces.   To meet the recommendation, how much water would one person drink in an entire year? Give the answer in gallons. Use 1 gallon = 4 quarts.  "
},
{
  "id": "finland-units",
  "level": "2",
  "url": "sec-Units.html#finland-units",
  "type": "Exercise",
  "number": "1.4.2.4",
  "title": "",
  "body": " Jenna is studying in Finland this term and rented an older car to drive.   She learns that no matter what the road signs might say, the maximum speed limit in Finland in winter is never more than 100 km\/hr. How fast is that in miles per hour (mph)? Use 1 mile 1.609 km.   Jenna's car holds 62 liters of gasoline in its tank. How many gallons is that? Use 1 liter 1.057 quarts and 1 gallon = 4 quarts.   Her car gets 7.6 km\/liter. Convert to miles per gallon (mpg).   Gas prices in Finland were 1.658 €\/liter. What's the equivalent price in $\/gal? The symbol € stands for euro. Use 1 € $1.23.   What would it cost Jenna, in euros, for a full tank of gas? How much is that in dollars?  "
},
{
  "id": "phelps-units-tx",
  "level": "2",
  "url": "sec-Units.html#phelps-units-tx",
  "type": "Exercise",
  "number": "1.4.2.5",
  "title": "",
  "body": " In August 2008, United States swimmer Michael Phelps set the world record for the 200 meter individual medley swimming it in 1 minute, 54.80 seconds.   Source: Wikipedia (World record progression 200 metres IM)    Convert Phelps's time into minutes.   How fast did Phelps swim, as measured in meters\/min?   Convert Phelps's speed to mph. Use .  "
},
{
  "id": "lochte-units-tx",
  "level": "2",
  "url": "sec-Units.html#lochte-units-tx",
  "type": "Exercise",
  "number": "1.4.2.6",
  "title": "",
  "body": " In August 2012, Phelps improved his time and won Olympic gold, but failed to break the world record his teammate Ryan Lochte has set a year earlier of 1 minute, 54 seconds.   Convert Lochte's time into minutes.   How fast did Lochte swim, as measured in meters\/min?   Convert Lochte's speed to mph.  "
},
{
  "id": "assorted-1-units-tx",
  "level": "2",
  "url": "sec-Units.html#assorted-1-units-tx",
  "type": "Exercise",
  "number": "1.4.2.7",
  "title": "",
  "body": " The typical weight limit for a suitcase on flights within Africa is 20 kg. How many pounds is that? Use .   How many servings are in a 20 ounce package of cookies where a serving size is 3 cookies and each cookie weighs 11 grams? Use .   My corner convenience store sells a thirst quencher size of soft drink; it holds 64 (fluid) ounces. If a can of soft drink is 12 (fluid) ounces, how many cans are in the thirst quencher ?  "
},
{
  "id": "assorted-2-units-tx",
  "level": "2",
  "url": "sec-Units.html#assorted-2-units-tx",
  "type": "Exercise",
  "number": "1.4.2.8",
  "title": "",
  "body": " The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. How many yards are in three-quarters of a mile?   The quilt pattern calls for 0.375 yards of calico fabric. How many feet is 0.375 yards?   The website said that basil plants should be 0.35 feet tall a month after germinating. How many inches is 0.35 feet?  "
},
{
  "id": "pollution-spill-units-tx",
  "level": "2",
  "url": "sec-Units.html#pollution-spill-units-tx",
  "type": "Exercise",
  "number": "1.4.2.9",
  "title": "",
  "body": " Authorities are tracking down the source of a pollution spill on a nearby river. They suspect that the local plant is inadvertently leaking waste water. Last week they found 35 minutes of waste water flow on Monday, 1 hour and 11 minutes on Tuesday, 1\/4 hour on Wednesday (that's 0.25 hours in decimal), none on Thursday, and then 98 minutes Friday.   Convert units as needed to complete the following table showing each time in minutes, each time in hours, and each time in hours and minutes (H:MM format).   Hint: 15 minutes in H:MM format would be 0:15     Day  Mon  Tue  Wed  Thu  Fri    Minutes  35    0  98    Hours        .25          H:MM   1:11          Calculate the total waste water flow measured last week.  "
},
{
  "id": "heart-beats-units-tx",
  "level": "2",
  "url": "sec-Units.html#heart-beats-units-tx",
  "type": "Exercise",
  "number": "1.4.2.10",
  "title": "",
  "body": " If your heart beats around 70 times a minute, how many times does it beat in a week? A year?  "
},
{
  "id": "assorted-3-units-tx",
  "level": "2",
  "url": "sec-Units.html#assorted-3-units-tx",
  "type": "Exercise",
  "number": "1.4.2.11",
  "title": "",
  "body": " Harold's Physics textbook says an object is thrown into the air at 36 feet per second. To understand how fast that is, convert to mph.   Harold's History textbook mentions that in 1800 the city encompassed about 6,000 acres. How many square miles is that? Use .   Harold's Economics textbooks lists the recent high price of crude oil at $100 per barrel. He'd like to know what that means in $\/gallon of gasoline. It turns out that 1 barrel of crude oil produces about 19.4 gallons of gasoline.  "
},
{
  "id": "sec-Metric_system_and_scientific_notation",
  "level": "1",
  "url": "sec-Metric_system_and_scientific_notation.html",
  "type": "Section",
  "number": "1.5",
  "title": "Metric prefixes and scientific notation",
  "body": " Metric prefixes and scientific notation  Tara is working on a big project at work. She wants to back up her files to her online drop box. The site says she has 72 GB of memory remaining. Tara has about 200 files at an average of 42.3 MB each that she would like to upload. Will she have room?  To answer Tara's question we need to know that GB is short for gigabyte and MB is short for megabyte. A byte is a very small unit of computer memory storage space just enough for about one letter. You may have heard the word mega used to mean really big. There's a reason for that. Mega is short for 1 million. That's pretty big. But giga stands for 1 billion, so that's even bigger. (Maybe it's time for a gigamall?)    mega   1 million      giga   1 billion      What all this means is Tara has of memory remaining. She would like to save 200 files at 42.3 MB each which comes to which is really Finding it hard to compare all those zeros? Try this. So Tara wants to store less than 9 GB of information and she has 72 GB remaining. She has plenty of room. Save away.  Tara also needs to download about 700 MB of rather high quality photos. Her computer downloads photos at 187 kbps. How long will it take? (And does she have time to run for a coffee?) The mysterious kbps stands for kilobits (Kb) per second. Like mega and giga, the word kilo stands for a large number, in this case .    kilo   1 thousand      That's the same word kilo as in kilometer (about mile) or kilogram (about pound) and there's good reason for that as    kilometer        kilogram        Perhaps you've seen the letter K as short for a thousand? That's where it comes from.  (Okay, I have to mention something here. Kilo by itself is pronounced KEE-loh, but kilogram is pronounced KIL-uh gram, and kilometer is pronounced ki-LOM-i-ter. Well, around these parts at least.)  Back to Tara. Her download speed is 187 kilobits per second. Perhaps this is the right moment to mention that a bit is even smaller than a byte . How long will it take Tara to download 700 MB? We can think of this calculation as a unit conversion by imagining Watch.  Let's convert to a more reasonable unit.  It will take Tara over 8 hours to download those photos. Perhaps Tara should compress the photos into a zip file or use lower resolution or find a way to download faster. Or, she can just set it up to download overnight.  Quick note. The metric system of measurement , or international system of units (ISU) , is the official system of nearly all countries, the United States being a notable exception. Science, international trade, and most international sporting events like the Olympics are based in the metric system. In the United States system (known officially at the British system or, since the British stopped using it, the imperial system of measurement ), we have all sorts of difficult to remember conversions. One notable feature of the metric system is that most units come in sizes ranging from small to large: the (metric) prefixes like kilo, mega, or giga tell us which size.  Really large numbers, like , are awkward to read and awkward to work with. We have seen how metric prefixes allow us to rewrite these large numbers in a way that's much easier both to read and to work with. There's another option that's used often in the sciences (and by your calculator). To explain it we need to understand powers of 10.  Perhaps you know what happens when we multiply a number by 10, like or, more appropriate to our example, The effect of multiplying by 10 is to move the decimal point one place to the right. When we multiply by we get or, for our example, The effect of multiplying by is to move the decimal point three places to the right. The connection is that Each has the effect of moving the decimal point one place to the right so has the same effect as multiplying by 10 three times, so the decimal point moves three places to the right. That means   Since we're multiplying by the same number (10) over and over again, it's easier to use exponential notation . Here 10 is the base and 9 is the exponent (or power ). In this context, the exponent is also called the order of magnitude .  The point of this calculation was that This shorthand is called scientific notation . The base is always 10. The exponent is always a whole number. The number out front, like 8.46 in our example, is always between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). It is customary to use instead of in scientific notation, so we should write As another example, we saw earlier that   Most calculators use the symbol for exponents, as do most computer software packages. Two other notations calculators sometimes use are or . Sometimes that operation is accessible through the 2nd or shift key; something like SHIFT . If you're not sure, ask a classmate or your instructor. For practice, check that Notice that the order of operations is exactly what we wanted here: first raises 10 to the power and then multiplies by 5. So we can enter it all at once without needing parentheses.  Here's the full list of the order of operations , the priority ranking for arithmetic operations.   Order of operations      First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.       We highlighted the letters PEMDAS which often helps people remember this order. ( Please Excuse My Dear Aunt Sally is how I learned it.) The good news is that your calculator does the operations in exactly this order. And if you want something in a different order, all you need to do is use parentheses around quantities you want calculated first.  Back to our large number. Enter What do you see? Some calculators correctly list out while others report the number back in scientific notation, which is not particularly useful. (Sigh.)  Let's try a number so big that (nearly) every calculator will switch to scientific notation. Enter Look carefully at the screen. Your calculator might display something like Whatever shorthand your calculator uses, you should write   Interested in what that number is in our usual decimal notation? It's   Enough of that. Poor Tara is pulling her hair out over this project. Well, not literally, but she is quite frustrated over how slowly the project is going. She wonders: how thick is a human hair? And, how many hairs would you need to lay out to span an inch?  Turns out that a typical human hair is about meters across. Very small numbers are also awkward to read and awkward to work with. In this section, we write where the strange-looking space is to help you read the number. Of course, a better solution is to use metric prefixes to get more appropriate units, just as we did for large numbers.  For example, centi is short for 1 in a hundred, or . Not surprising since one cent is $0.01, or one percent is 1%=0.01. That's the same word centi as in centimeter (about inch) and there's good reason for that as      100 centimeter      Similarly, milli is short for 1 in a thousand and micro is short for 1 in a million.    centi   1 in a hundred   0.01    milli   1 in a thousand   0.001    micro   1 in a million   0.000 001    What about that human hair? It is convenient to measure in micrometers using that The width of a human hair in micrometers (abbreviated in the sciences) is The symbol is the Greek letter mu , but we'll just read as micrometers.  To answer Tara's question about how many hairs in an inch, we recall that where cm is short for centimeter. Ready to convert?    We can also describe really small numbers using scientific notation. Perhaps you know what happens when we divide a number by 10, like or, more appropriate to our example, The effect of dividing by 10 is to move the decimal point one place to the left. If we divide by instead, we get The connection is that and so dividing by moves the decimal point six places to the left. Notice that we have to introduce zeros as placeholders.  The width of a hair was 0.00012 meters. To get that number from 1.2, we need to move the decimal point 4 places to the left. The shorthand for dividing by a power is to use negative exponents. For example It has nothing to do with negative numbers. It's just a shorthand. The point of this calculation was that   Once again we have scientific notation. The base is still 10. The exponent is still a whole number, although now it's negative. The number out front, like 1.2 in our example, is still between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). As before it customary to use instead of in scientific notation, so we should write When you see a number written in scientific notation, the power of 10 tells you a lot. For example, and . A positive power of 10 says you have a big number, and a negative power of 10 says you're dealing with a very small number.   Do you know ...    How to calculate powers on your calculator?    What million, billion, and trillion mean?    Why metric prefixes are used?    What common metric prefixes (mega, giga, kilo, centi, milli, micro, nano) mean?   Ask your instructor which prefixes you need to remember, and whether any prefixes will be provided during the exam.     Why scientific notation is used?    The standard format for scientific notation?    What kinds of numbers have a positive order of magnitude, and which have a negative order of magnitude?    How to convert between decimal notation and scientific notation?    How your calculator reports numbers in scientific notation, and what (might be) different when you're reporting that number?    The usual order of operations (PEMDAS) and how to use parentheses when you want a different order?       Workbook exercises     The GDP (gross domestic product) of the United States was approximately $15,596 billion in 2011 and the population of the United States was approximately 0.313 billion that year. Source: U.S. Bureau of Economic Analysis, U.S. Census Bureau     Writing the population as 0.313 billion seems strange. A more natural unit would be millions. Rewrite the population in millions of people.   Rewrite the population in people, both in normal decimal notation (that means with all the 0s) and in scientific notation.   It also seems strange to write the GDP as $15,596 billion. A more natural unit would be trillions , where 1 trillion = 1,000,000,000,000. Rewrite the GDP in trillions of dollars.   Rewrite the GDP in dollars, both in normal decimal notation and in scientific notation.   Calculate the GDP per capita (meaning per person) by dividing the GDP in dollars by the population in people. Express your answer in $\/person.   For practice, repeat your calculation using the numbers in scientific notation.   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.       Edgar recently changed the cleaning bag on his vacuum cleaner. He became curious about how many particles of dust were in the bag. Edgar did a little research online and found out that the mass of a dust particle is 0.000 000 000 753 kilograms.   (The strange-looking spaces are to help you see that there are 9 zeros in the number.)   Write the mass of a dust particle in scientific notation.   Recall that    kilo   1 thousand        milli   1 in a thousand   0.001      micro   1 in a million   0.000001      nano   1 in a billion   0.000 000 001      Express the mass of a dust particle in each of the given units:   grams   milligrams (mg)   micrograms ( g)   nanograms (ng)   Edgar determined that the full vacuum bag weighed 5 pounds. How many dust particles were in the bag? (I am already sneezing.) Use . Express your answer in scientific notation.      The list shows the (approximate) mass of the planets in our solar system. Source: Wikipedia (Solar System)      Earth  kg    Jupiter  kg    Mars  kg    Mercury  kg    Neptune  kg    Saturn  kg    Uranus  kg    Venus  kg     Write the mass of Earth and the mass of Mars in standard decimal notation. Which is heavier?   List the planets from heaviest (largest mass) to lightest (smallest mass).   The mass of astronomical bodies are sometimes measured in Jupiter mass , abbreviated , where kg. Express Earth's mass in .   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.       Souksavanh is setting up a patient's intravenous (IV) medication. She sets the drip at 42 drops\/minute. The drip chamber size is 20 drops\/mL. Recall    milli   1 in a thousand   0.001      micro   1 in a million   0.000001       At what rate is the IV fluid being delivered to Souk's patient? Answer in mL\/min (millileters per minute).   How fast is the drip measured in L\/sec (microliters per second)?   If the drip bag holds 1 liter, how long will it take the drip to run? Express your answer in hours and minutes.   The concentration of medication is 1.7 mg\/mL (milligrams per milliliter). How much medication is in the 1 liter bag? Convert your answer to grams. Explain what you notice.   At what rate is the medication being delivered to Souk's patient? Answer in g\/min (grams per minute).     Textbook exercises    How many files at an average of 42.3 MB each can each gig (1 GB) of computer memory hold?   Tara's coworker Brandon has a much faster Internet connection on his computer at 1,500 kbps. How long would it take Brandon to download 700 MB?   At that rate, how much information could Brandon upload in 8 hours? Express your answer in kilobytes (KB).    Convert each of these amounts of time into an understandable unit of time: 1 million seconds, 1 billion seconds, 1 trillion seconds.   Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?    Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!  Source: Mathew Foss, North Hennepin Community College    A proton has mass of about kg, while an electron has mass of about kg.   Write out the mass of a proton and that of an electron in normal decimal notation.   Which is heavier (has greater mass)?   How many times heavier is it? To calculate the answer take the mass of the heavier particle and divide it by the mass of the lighter particle.   How many protons would it take to weigh an ounce? Use and, as always, 1 kg = 1,000 grams. Because and are at the same level in the order of operations, you should put parentheses around each number in scientific notation before dividing.     How many servings are in:   A 2-liter bottle of a soft drink where the serving size is 250 mL?   A 750 mL bottle of wine where a serving size is 5 (fluid) ounces? Use and .    Rayka weighs 140 pounds. She would like to approximate how many cells are in her body. Use the following information: , , and, as always, 1 kg = 1,000 g.   How many cells are in Rayka's body? Write your answer in scientific notation.   Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).     Body Mass Index (BMI) is one indicator of whether a person is a healthy weight. BMI are between 18.5 and 24.9 are considered normal . Jared is 6'4\" and weighs 200 pounds. He would like to calculate his BMI from this guide:    Source: Center for Disease Control and Prevention    Check that Jared is around 1.93 meters tall and weighs around 90.91 kilograms. Use and    Jared entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?   Suppose Jared had rounded off his height to 1.9 meters and his weight to 91 kilograms. Calculate his BMI by entering the following keystrokes your calculator: What do you get? Round your answer to one decimal place. Is Jared's BMI considered normal ?   What would you tell Jared?    "
},
{
  "id": "sec-Metric_system_and_scientific_notation-3",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "byte Mega giga "
},
{
  "id": "sec-Metric_system_and_scientific_notation-6",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kbps "
},
{
  "id": "sec-Metric_system_and_scientific_notation-10",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "K "
},
{
  "id": "sec-Metric_system_and_scientific_notation-12",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bit byte "
},
{
  "id": "sec-Metric_system_and_scientific_notation-13",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric system of measurement international system of units (ISU) British system imperial system of measurement (metric) prefixes "
},
{
  "id": "sec-Metric_system_and_scientific_notation-16",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential notation base exponent power order of magnitude "
},
{
  "id": "sec-Metric_system_and_scientific_notation-17",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scientific notation "
},
{
  "id": "sec-Metric_system_and_scientific_notation-19",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order of operations "
},
{
  "id": "def-order-operations",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#def-order-operations",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Order of operations.",
  "body": " Order of operations      First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.      "
},
{
  "id": "sec-Metric_system_and_scientific_notation-27",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centi "
},
{
  "id": "sec-Metric_system_and_scientific_notation-29",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "milli micro "
},
{
  "id": "gdp-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#gdp-scientific-notation",
  "type": "Exercise",
  "number": "1.5.2.1",
  "title": "",
  "body": " The GDP (gross domestic product) of the United States was approximately $15,596 billion in 2011 and the population of the United States was approximately 0.313 billion that year. Source: U.S. Bureau of Economic Analysis, U.S. Census Bureau     Writing the population as 0.313 billion seems strange. A more natural unit would be millions. Rewrite the population in millions of people.   Rewrite the population in people, both in normal decimal notation (that means with all the 0s) and in scientific notation.   It also seems strange to write the GDP as $15,596 billion. A more natural unit would be trillions , where 1 trillion = 1,000,000,000,000. Rewrite the GDP in trillions of dollars.   Rewrite the GDP in dollars, both in normal decimal notation and in scientific notation.   Calculate the GDP per capita (meaning per person) by dividing the GDP in dollars by the population in people. Express your answer in $\/person.   For practice, repeat your calculation using the numbers in scientific notation.   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.   "
},
{
  "id": "dust-particle-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#dust-particle-scientific-notation",
  "type": "Exercise",
  "number": "1.5.2.2",
  "title": "",
  "body": " Edgar recently changed the cleaning bag on his vacuum cleaner. He became curious about how many particles of dust were in the bag. Edgar did a little research online and found out that the mass of a dust particle is 0.000 000 000 753 kilograms.   (The strange-looking spaces are to help you see that there are 9 zeros in the number.)   Write the mass of a dust particle in scientific notation.   Recall that    kilo   1 thousand        milli   1 in a thousand   0.001      micro   1 in a million   0.000001      nano   1 in a billion   0.000 000 001      Express the mass of a dust particle in each of the given units:   grams   milligrams (mg)   micrograms ( g)   nanograms (ng)   Edgar determined that the full vacuum bag weighed 5 pounds. How many dust particles were in the bag? (I am already sneezing.) Use . Express your answer in scientific notation.  "
},
{
  "id": "planet-weight-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#planet-weight-scientific-notation",
  "type": "Exercise",
  "number": "1.5.2.3",
  "title": "",
  "body": " The list shows the (approximate) mass of the planets in our solar system. Source: Wikipedia (Solar System)      Earth  kg    Jupiter  kg    Mars  kg    Mercury  kg    Neptune  kg    Saturn  kg    Uranus  kg    Venus  kg     Write the mass of Earth and the mass of Mars in standard decimal notation. Which is heavier?   List the planets from heaviest (largest mass) to lightest (smallest mass).   The mass of astronomical bodies are sometimes measured in Jupiter mass , abbreviated , where kg. Express Earth's mass in .   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.   "
},
{
  "id": "iv-drip-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#iv-drip-scientific-notation",
  "type": "Exercise",
  "number": "1.5.2.4",
  "title": "",
  "body": " Souksavanh is setting up a patient's intravenous (IV) medication. She sets the drip at 42 drops\/minute. The drip chamber size is 20 drops\/mL. Recall    milli   1 in a thousand   0.001      micro   1 in a million   0.000001       At what rate is the IV fluid being delivered to Souk's patient? Answer in mL\/min (millileters per minute).   How fast is the drip measured in L\/sec (microliters per second)?   If the drip bag holds 1 liter, how long will it take the drip to run? Express your answer in hours and minutes.   The concentration of medication is 1.7 mg\/mL (milligrams per milliliter). How much medication is in the 1 liter bag? Convert your answer to grams. Explain what you notice.   At what rate is the medication being delivered to Souk's patient? Answer in g\/min (grams per minute).  "
},
{
  "id": "file-size-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#file-size-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.5",
  "title": "",
  "body": " How many files at an average of 42.3 MB each can each gig (1 GB) of computer memory hold?   Tara's coworker Brandon has a much faster Internet connection on his computer at 1,500 kbps. How long would it take Brandon to download 700 MB?   At that rate, how much information could Brandon upload in 8 hours? Express your answer in kilobytes (KB).  "
},
{
  "id": "billion-seconds-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#billion-seconds-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.6",
  "title": "",
  "body": " Convert each of these amounts of time into an understandable unit of time: 1 million seconds, 1 billion seconds, 1 trillion seconds.   Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?    Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!  Source: Mathew Foss, North Hennepin Community College  "
},
{
  "id": "proton-mass-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#proton-mass-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.7",
  "title": "",
  "body": " A proton has mass of about kg, while an electron has mass of about kg.   Write out the mass of a proton and that of an electron in normal decimal notation.   Which is heavier (has greater mass)?   How many times heavier is it? To calculate the answer take the mass of the heavier particle and divide it by the mass of the lighter particle.   How many protons would it take to weigh an ounce? Use and, as always, 1 kg = 1,000 grams. Because and are at the same level in the order of operations, you should put parentheses around each number in scientific notation before dividing.   "
},
{
  "id": "serving-size-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#serving-size-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.8",
  "title": "",
  "body": " How many servings are in:   A 2-liter bottle of a soft drink where the serving size is 250 mL?   A 750 mL bottle of wine where a serving size is 5 (fluid) ounces? Use and .  "
},
{
  "id": "cells-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#cells-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.9",
  "title": "",
  "body": " Rayka weighs 140 pounds. She would like to approximate how many cells are in her body. Use the following information: , , and, as always, 1 kg = 1,000 g.   How many cells are in Rayka's body? Write your answer in scientific notation.   Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).  "
},
{
  "id": "bmi-scientific-notation-tx",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#bmi-scientific-notation-tx",
  "type": "Exercise",
  "number": "1.5.2.10",
  "title": "",
  "body": "  Body Mass Index (BMI) is one indicator of whether a person is a healthy weight. BMI are between 18.5 and 24.9 are considered normal . Jared is 6'4\" and weighs 200 pounds. He would like to calculate his BMI from this guide:    Source: Center for Disease Control and Prevention    Check that Jared is around 1.93 meters tall and weighs around 90.91 kilograms. Use and    Jared entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?   Suppose Jared had rounded off his height to 1.9 meters and his weight to 91 kilograms. Calculate his BMI by entering the following keystrokes your calculator: What do you get? Round your answer to one decimal place. Is Jared's BMI considered normal ?   What would you tell Jared?  "
},
{
  "id": "sec-First_look_linear",
  "level": "1",
  "url": "sec-First_look_linear.html",
  "type": "Section",
  "number": "2.1",
  "title": "A first look at linear equations",
  "body": " A first look at linear equations  You're expecting family for dinner in a few hours and, wouldn't you know it, but your kitchen sink is clogged. The bottle of drain opener didn't clear it out. Your brother-in-law has offered to help, but last time he tried he only made it worse. The plumber will charge you $100 just to come to your house. In addition, there will be a charge of $75 per hour for the service. If you decide to call the plumber, what will it cost?  For example, if the plumber takes one hour, then he'll charge you $100 for showing up and $75 for the one hour of work. So, the total plumber's bill will be For two hours, there's still the $100 charge, but also $75 for each of the two hours. That's an additional charge of So, the total plumber's bill will be Try this calculation all at once. Let's hope it wouldn't take the plumber as long as three hours, but if it did, we can do a similar calculation. Add the fixed charge of $100 to the additional charge of $75 for each of the three hours. The plumber's bill would be   What would it cost if the plumber takes only hour? The plumber's bill would be Notice we used . Bet you knew that.  What would happen if the plumber was taking so long that before he got there you dumped another bottle of drain opener in the sink and that did the trick. But before you could call and cancel the plumber, wouldn't you know it, there he was. What do you owe him for that 0 hours of work? Probably $100. Unless your plumber says to forget it.   We see that the plumber's charge depends on the amount of time it takes to unclog the sink. We can name these variables.    time plumber takes (hours) indep    total plumber's charge ($) dep    Look at the the relationship between and by making a table to describe how the plumber's bill is a function of the time.     0  0.5  1  2  3      100  137.50  175  250  325     Each time we knew how long the plumber spent and calculated the plumber's bill by starting with the trip charge of $100 and adding in $75 times the number of hours. For example, for 3 hours we calculated We have a name for the number of hours in general; it is . So for hours, we would calculate See how we just put the in for $325 and where the 3 hours was? We're just generalizing from our example. Drop the units and we have our equation. If the plumber works for hours, then the cost is $ where We started the equation because it is a convention to begin equations with the dependent variable, when possible.  An equation is a formula that shows how the value of the dependent variable (like ) depends on the value of the independent variable (like ). We usually write an equation in the form The equation is another way to describe a function, and efficient one - an equation carries a lot of information in only a few symbols.  There is a mathematical convention that we write numbers before letters in an equation. So, instead of we should write . There's a conventional shorthand for this product: when a number and letter are next to each other, it means that they are multiplied. So, instead of we should write . Thus our equation is normally written as You'll have to remember the hidden multiplication when you're calculating.  If you wanted to write the equation as that would be okay too. We can add the $100 trip charge first, like we did in our examples, or at the end. Same answer.  Suppose the plumber shows up at your house and fixed the sink in 25 minutes. Whew! No sooner do you pay your bill than your first dinner guest arrives. How much do you owe the plumber? Notice that Therefore for 25 minutes we have   Using our equation we get It was important that we rounded off our final answer because we had rounded off to get 0.4166 along the way. We could have done the entire calculation at once (avoiding the round off error) as Either way, we owe the plumber $131.25.  If we plot the points from the table of values in a graph, we see that the points lie on a line. In Chapter 1 we highlighted the points from our table on the graph. It is more common to just show the smooth curve or line.     Why is the graph a straight line? Remember that the rate of change tells us how steep the graph is. For example, let's find the rate of change between 1 hour and 2 hours. Sure! We knew that. The plumber charges an extra $75 for each extra hour he works. The rate of change is precisely $75\/hour, no matter where we calculate it. Since the rate of change is constant, the graph is the same steepness everywhere. So, the graph is a line, and the function is linear . Another way to say this is a function with constant rate of change is linear . The plumber's total charge is a linear function of time.  Look back at our equation. Any linear equation fits this template.   Linear equation template   dep = start + slope indep    Notice our two variables are in our equation and there are two constants . Each constant has its own meaning. The first constant is 100 and it is measured in dollars. It is the trip charge, the fixed amount we would owe the plumber even if he does 0 hours work. In our standard form we refer to this quantity as the starting value (or start for short), but it's official name is intercept . On the graph it's where the line crosses the vertical axis. Think of a football player (running along the vertical axis) intercepting a pass (coming in the line). We can find the intercept from our equation by plugging in so that   The second constant is 75 and though it's tempting to say it is measured in dollars, it is really measured in $ per hour. This number is the rate of change and in the context of linear equations it gets its own name too. Its called the slope . Since the rate of change measures the steepness of any curve or line, the word slope , like mountain slope, makes sense. In our plumber example the intercept was $100 and the slope was $75\/hour.  "
},
{
  "id": "sec-First_look_linear-11",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equation "
},
{
  "id": "sec-First_look_linear-18",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear linear "
},
{
  "id": "def-linear-eq-template",
  "level": "2",
  "url": "sec-First_look_linear.html#def-linear-eq-template",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Linear equation template.",
  "body": " Linear equation template   dep = start + slope indep   "
},
{
  "id": "sec-First_look_linear-21",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constants starting value start intercept "
},
{
  "id": "sec-First_look_linear-22",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope "
},
{
  "id": "sec-First_look_exponential",
  "level": "1",
  "url": "sec-First_look_exponential.html",
  "type": "Section",
  "number": "2.2",
  "title": "A first look at exponential equations",
  "body": " A first look at exponential equations  Jocelyn got a job right out of college, as an administrative assistant earning $28,000 a year. The position turned out to be a great fit for her, and after one year she was promoted to data analyst with a 15% raise. The next year Joceyln was promoted again, to senior data analyst along with a 21% raise. Not bad, her friend Audun said, a 36% raise in two years. But Jocelyn quickly corrected him. Audun, it's even better than that! It's over 39%   After the first year, Jocelyn's salary of $28,000 was increased by 15%. Remember that means 15% of $28,000 more. To calculate 15% of $28,000 we multiply using the decimal form to get That's how much Jocelyn's raise was that first year. By adding that amount to the original salary we get After one year Jocelyn's salary was $32,200.  After the second year, Jocelyn got a 21% raise. This means her salary rose by 21% from what it was just before the raise, that is, from the $32,200. (The 21% does not refer back to the original $28,000 value.) So, to calculate the increase, we take 21% of $32,200, which is By adding on this raise we get After the second year Jocelyn was earning $38,962.  Since Jocelyn's original salary was $28,000, the net increase in her salary is the difference The corresponding percentage increase was As Jocelyn said, that's over 39% increase.  What's going on here? Audun thought that 15% and 21% would be 36% because . The reason it doesn't work that was is that while the 15% is of the original $28,000, the 21% was actually calculated on the $32,200. So, we can't just combine percentages by adding.  Each time we figured out Jocelyn's salary, we did a two-step process. First, we calculated the amount of the increase and second, we found the new value by adding on. There's actually an easier way.  Jocelyn's salary was $28,000 and then went up by 15%. For her new salary we want to add her old salary (all of it) plus 15%. So we want 100% plus 15%, or 115% of her old salary. That works in general. When we increase a number by 15%, we end up with 100% of what we started with plus 15% more, for a grand total of 115% of what we started with. So we can just multiply by 1.15, which is 115% written in decimal, since Looks weird, works great.  That means all we have to do to find Jocelyn's salary is We can do the same thing for the next calculation Here we multiplied by 1.21 because after a 21% increase you have 121% of what you started with. And 121% in decimal form is just 1.21.  Now hang on to your hat, because we can combine these parts together. In our example, we started with $28,000. Then we multiplied by 1.15, which gave us $32,200. And then we multiplied that answer by 1.21, to get our final answer of $28,962. So really we just did Same answer. A lot less effort. And, check it out That's where the 39.15% increase is hidden. Cool.  A little terminology before we move on. A percentage increase is known as the growth rate and the number we multiply in the one-step method is called the growth factor . For example, in calculating 15% increase, the growth rate was in decimal, and so the growth factor was If you're into formulas here it is.   Percent change formula   If a quantity increases by a percentage corresponding to growth rate , then the growth factor is     We had and so   Jocelyn's most recent assignment has been analyzing information on rising health care costs. In 2007 the United States spent $2.26 trillion on health care. Written out with all its zeros that's Health care costs were projected to increase at an average of 6.7% annually. That means we have and So, to find the effect of a 6.7% increase, we can just multiply by 1.067. Again, that's the 100% of what we started with plus 6.7% more for a grand total of .  We are ready to do some examples. In 2007 the United States spent $2.26 trillion on health care. The projection for one year later is Another year later, projected health care costs are And so on. For each year we multiply by another 1.067.  For example, by 2017 (ten years later), health care costs are projected to be I don't know about you, but I would rather not type that all into a calculator. Luckily, multiplying by 1.067 ten times is the same as multiplying by . Recall that the base  is the number we multiply by and the exponent (or power ) tells us how many times. So we can calculate Notice that the order of operations is exactly what we wanted here: first raise 1.067 to the 10 power, then multiply by 2.26. So we can enter it all at once without needing parentheses. Bottom line: health care costs are expected to be around $4.32 trillion by the year 2017. Oh my!  We're so close to the equation now, we can smell it. Our variables are    health care costs ($ trillions) dep    time (years since 2007) indep    We just found the cost after 10 years was We can generalize to get the equation by putting in (instead of 10) and for the (instead of $4.32 trillion). When we do we get Rewriting the equation to begin with the dependent variable we get By the way, there are two other standard ways of writing this equation   For example, in 2027 we have years and our equation projects health care cost at Not sure it's realistic to expect that steady an increase for 20 years, but that is what the equation projects, so let's work with it for now.  What does the graph of this function look like? Here are the values we found so far. That should be enough.    year  2007  2008  2009  2017  2027     0  1  2  10  20     2.26  2.41  2.57  4.32  8.82       Can you see that the graph curves slightly? It's not a line. That's because this function isn't linear.  Look back at our equation This type of equation is called an exponential equation because the independent variable is in the exponent. Any exponential equation fits this template.   Exponential equation template      Notice our two variables are in our equation and there are two constants. Each constant has its own meaning. The first constant is 2.26 and it is measured in trillions of dollars. It is the amount spent on health care in the starting year of 2007. In our standard form we refer to this quantity as the starting value (or start for short). As with linear equations, it's official name is intercept and it's the value where the curve crosses the vertical axis on the graph.  The second constant is the growth factor 1.067, and is the decimal equivalent of the 106.7%. The growth factor for an exponential equation is similar to the slope of a linear equation because both tell us how fast the function is increasing. But the slope measures the rate of change - how much is added at each step, while the growth factor corresponds to the percent increase. Another way to say that is linear functions correspond to situations where we are adding the same amount each time and exponential functions correspond to situations where we are adding the same percentage each time (or, equivalently, multiplying by the same amount each time).  Sometimes the graph of an exponential equation looks a lot like a line, especially if you only plot a few points. So, be sure to plot five or more points to see the curve in the graph of an exponential equation.  "
},
{
  "id": "sec-First_look_exponential-11",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "growth rate growth factor "
},
{
  "id": "def-percent-change-formula",
  "level": "2",
  "url": "sec-First_look_exponential.html#def-percent-change-formula",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Percent change formula.",
  "body": " Percent change formula   If a quantity increases by a percentage corresponding to growth rate , then the growth factor is    "
},
{
  "id": "sec-First_look_exponential-16",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base exponent power "
},
{
  "id": "sec-First_look_exponential-25",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential equation "
},
{
  "id": "def-exp-eqn-template",
  "level": "2",
  "url": "sec-First_look_exponential.html#def-exp-eqn-template",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Exponential equation template.",
  "body": " Exponential equation template     "
},
{
  "id": "sec-First_look_exponential-27",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "starting value start intercept "
},
{
  "id": "sec-Using_equations",
  "level": "1",
  "url": "sec-Using_equations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Using equations",
  "body": " Using equations  The Cadillac Escalade is a cross between a sports utility vehicle (SUV) and luxury car. Either way, it's a big car. And it takes awhile to stop. One study showed that the 2010 Escalade traveling at 60 miles per hour takes about 144 feet to come to a complete stop from when the driver first hits the brakes. In fact, the braking distance of any car depends on how fast it is going. If someone is driving slowly they can stop in shorter distance than if they are driving fast. Which is why you should drive slowly on residential streets.  We would like to be able to calculate the braking distances at other speeds, so our two variables are    speed (mph) indep    braking distance (feet) dep    Using the data and equations from physics, automobile analysts were able to determine that the equation relating these two variables is Remember that the 0.04 written next to the means they are multiplied. We might equally well have written   You may be a little surprised to see the variable  squared (raised to the 2nd power) or wonder what the number 0.04 means. This equation is not something we can figure out because it relies both on the data and knowledge of the physics involved. But, we can still work with this equation to find the braking distances at any speed. (If you must know, this equation is only approximate since things like tire and road conditions are a factor, but for what we want it is good enough.)  Although in the last couple of sections we were able to find equations by generalizing examples, there are actually many different mathematical and statistical techniques for finding equations. A scientist might use lab experiments and some theory to figure it out. An economist might recognize that the equation fits a certain template because of the underlying economics. A store manager might know from years of experience that a certain equation works well to predict sales. It can be comforting to know where an equation comes from but whether we find an equation for ourselves or get it from an expert, we can use it to answer our questions and make predictions.  Now that we have an equation we should check the reported stopping distance at 60 mph. We have so we substitute 60 in place of in the equation to get   Quick bit of terminology. When we know the independent variable, like and we substitute into the equation to find the dependent variable, like , we say we evaluate the function at . You might have noticed that the 60 was underlined in the calculation above. In this book we underline the value of the independent variable when we are evaluating. That way it's easier to see which numbers come from the equation and which number we're plugging in. Feel free to do the same. Or not.  Let's use our equation to calculate the braking distance for a Cadillac Escalade traveling 30, 50, 70 or 90 miles per hour. For 30 miles per hour, we have . So, we evaluate at to get At 30 mph, it takes the Cadillac Escalade 36 feet to stop. As we expected, it doesn't take nearly as far to stop as it did at 60 mph. For the other speeds we do the same thing: evaluate at the appropriate value of . When mph we get When mph we get When mph we get And, what does our equation tell us when the speed is 0 mph? We evaluate at mph to get Well, sure! If the car isn't moving, then it won't need any distance to stop. Here's what we've found so far, displayed in a table.     0  30  50  60  70  90     0  36  100  144  196  324    My neighbor Jeff happens to drive a 2010 Cadillac Escalade. The other day he almost was in an accident on the highway. Luckily no one was hurt, but he had to slam on the brakes to stop. The police report mentioned they believe it took his car 183 feet to stop. Jeff says he was not driving over the posted speed limit of 65 mph. Should we believe him?  We can see from the table that braking distance of 183 feet falls in between the 144 and 196 on our table which leads us to believe that Jeff was traveling faster than 60 mph and slower than 70 mph. We can figure out if Jeff were driving at 65 mph, then his braking distance would have been That's less than the 183 feet Jeff took to stop. So, it appears that Jeff was driving faster than 65 mph.  But wait a minute. The braking distance is just the time it takes from when the driver's foot hits the brake until the car stops. That distance doesn't take into account the driver's reaction time - how long between when the driver thinks to stop and when the driver's foot actually hits the brake. We have a new dependent variable    total stopping distance (feet) dep    speed (mph) indep as before    How can we include this reaction time into an equation? Suppose it takes 1 second to react. We would like to know how many feet that adds to the equation. This is something we can figure out. We know the speed and the time, so multiply them to get the distance, right? One small snag: the speed is in mph (miles per hour). We need to convert units. added to the stopping distance. Notice the fancy fraction work with the units? What all this mess means is that we should add 1.47 feet for every mph of speed. So mph adds feet to the stopping distance. Long story short, our new equation is   Something interesting about this equation. The independent variable appears twice; first for the braking distance and again because of the reaction time. When we evaluate the equation we need to plug in the value of in two places. Check it out. When mph we have That's a lot further than just the braking distance of 36 feet. When mph we have again, much more than the braking distance of 100 feet. Here's the revised table of values.     0  30  50  60  70  90     0  80  174  232  299  456    These numbers make us rethink Jeff's assertion. Given that he stopped in 183 feet, which is much less than the 232 feet it takes to stop at 60 mph, it looks like Jeff was driving less than 60 mph. To be sure, calculate that at 65 mph, it would have taken Jeff Again, we should believe Jeff. And, be glad nobody was hurt.  A quick glance at the graph confirms our findings.     The distance of 183 feet falls just above the unlabeled gridline for 175 and below the gridline for 200. Looking at the corresponding point on the braking distance curve, it looks like it falls around 67 mph, but looking at the corresponding point on the stopping distance curve, it looks like just over 50 mph.  By the way, our first equation is a power equation because the independent variable is being raised to a power, , and then scaled by a proportionality constant , . Any power equation fits this template.   Power equation template      Our second equation is a polynomial equation because includes both a linear and powers. The exercises introduce more polynomial equations. Polynomials can have any powers, but in this equation the highest power happens to be 2. This type of polynomial equation has a special name. It is a quadratic equation . Any quadratic equation fits this template.   Quadratic equation template      For our equation , , and the mysteriously missing .  "
},
{
  "id": "sec-Using_equations-6",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squared "
},
{
  "id": "sec-Using_equations-9",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluate "
},
{
  "id": "sec-Using_equations-23",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power equation proportionality constant "
},
{
  "id": "def-power-equation-template",
  "level": "2",
  "url": "sec-Using_equations.html#def-power-equation-template",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Power equation template.",
  "body": " Power equation template     "
},
{
  "id": "sec-Using_equations-25",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial equation quadratic equation "
},
{
  "id": "def-quadratic-equation-template-2-3",
  "level": "2",
  "url": "sec-Using_equations.html#def-quadratic-equation-template-2-3",
  "type": "Definition",
  "number": "2.3.2",
  "title": "Quadratic equation template.",
  "body": " Quadratic equation template     "
},
{
  "id": "sec-Approx_solutions",
  "level": "1",
  "url": "sec-Approx_solutions.html",
  "type": "Section",
  "number": "2.4",
  "title": "Approximating solutions of equations",
  "body": " Approximating solutions of equations  Which country on Earth has the most people? If you guess China and India, in that order, you'd be right. And by a lot compared to other countries. A very distant third is the United States, with several countries close on our heels. Here are the population and growth rates estimates made in 2011.  Source: CIA Factbook      1.  China  population 1.343 billion  growth rate 0.48%    2.  India  population 1.205 billion  growth rate 1.31%    3.  United States  population 0.313 billion  growth rate 0.90%    India's population is growing fastest of these top three, so let's take a closer look. In the exercises you can explore China and other countries. Let's tackle this question: when is India's population projected to pass 1.5 billion?  Start by writing an equation. The variables are    population of India (billion people) dep    time (years since 2011) indep    Since there is a fixed percentage growth, or at least that's what we're assuming, the population grows exponentially. The template for an exponential equation is For India's population, we know that the growth rate is so the corresponding growth factor is We also know that the starting population is 1.205 billion in 2011. We're good to go. The equation is   We want to know when India's population will pass 1.5 billion people. That means we are looking for the value of that corresponds to . That answer is called the solution of our equation. In other words, a solution to an equation is the value of the independent variable we plug in to get the desired value of the dependent variable. It's not always easy to find a solution; but it's easy to check - just evaluate.  Since we can easily check and see if any number is a solution, one way to find the solution is to guess and check . Let's try that to determine when India's population will pass 1.5 billion people. Since we're not sure where to start, let's see what the equation projects for 2012, when . Hardly budged. Well, comparatively.  What about in 5 years? The corresponding population is Less than 1.5 billion. Let's try . The equation gives us Still much less than 1.5 billion  This is going slowly. We would really like to find a point at which the equation gives us more than 1.5 billion. Then we can work backwards from there to narrow things down. How about 50 years? That's too much, but the good news is now we know the solution is between 10 years and 50 years.  Let's summarize what we have so far in a table. Notice how we've added a third row to keep track of our progress for our goal.     0  1  5  10  50         1.205  1.221  1.287  1.373  2.312        vs.1.5  low  low  low  low  high        We know the solution is between 10 and 50 years, and it seems closer to 10, so let's guess 20 years. In 20 years, the population should be around 1.564 billion. Where's that 1.564 from? Just our equation again. It would be good practice for you to evaluate at to check.  The 10 year estimate is too low and the 20 year estimate is too high. That means the solution is between 10 years and 20 years, so let's split the difference and guess 15 years which gives 1.465 billion. (Check again, for practice.) Ooooh, we're getting close. The population should pass 1.5 billion some time between 15 and 20 years, and likely closer to 15 so let's guess 17 years. Estimate is 1.504 billion. Would 16 years have been enough? That gives 1.484 billion, not quite enough. Let's add these numbers to our table.     0  1  5  10  50  20  15  17  16     1.205  1.221  1.287  1.373  2.312  1.564  1.465  1.504  1.484    vs.1.5  low  low  low  low  high  high  low  high  low    According to our equation, the population of the India should pass 1.5 billion after 17 years, which would be in the year 2028. By the way, it works to add the year and number.   The strategy we used to find the solution of our equation is successive approximation . Essentially it's just the guess and check method, but it's called successive because we're trying to get a closer guess each time. Typically once we have a value that's too big and one that's too small, we guess a value in between (for example, their average). This sort of splitting the difference method of guessing is a rough version of the bisection method . Now you know.  You might be surprised that you're supposed to guess the solution at this point in the course. I mean, in the beginning of the course we didn't have equations, just tables and graphs, and so guessing was all we had to work with. But now we have actual equations, right? In previous courses your instructor or textbook might have emphasized getting the exact solution.  Here's why it's different in this course. First, in almost every story in this book the numbers in the problem are approximations, or at least rounded off. If you start with approximations, no matter how exact your mathematics is, the solutions will still be approximate. Second, even if our numbers started out precisely exact, chances are that the equation is only approximating reality. Do we really know what the population growth rate will be in India over the next twenty years? And, if the equation is just approximate, then no matter how exact the numbers or the mathematics, the solution will again still be approximate. Last, and this is good news - we really just want approximations. Do you really need to know that a sandwich has 427.2889 calories? Isn't 430 calories close enough? (Sound familiar? These ideas were discussed in more detail in the prelude on approximation, before Section 1.1.)  In previous mathematics courses you may have seen ways to solve equations exactly, and we will talk about those methods in the next chapters of this text. It is true that successive approximations can take a long time and, because of that, is a bit annoying. Solving techniques we'll learn later are much, much quicker.  There are two important reasons for using successive approximations, even if you know quicker solving techniques. First, the method of successive approximations works in most situations for any type of equation. Solving methods that we will see later on just work for one type of an equation or another - one technique for linear equations, a different technique for exponential equations, etc. That's a lot of different methods to know. Second, even if you're going to use a formal equation-solving technique to solve a problem it's a good habit to guess-and-check a bit first to make sure your solution is reasonable. It is easy to make mistakes when using those formal techniques. Remember,   I'd rather be approximately right than precisely wrong.   Okay, enough digression. Let's check our answer using the graph.     It looks like 1.5 billion corresponds to just before the unlabeled gridline halfway between 15 and 20. That line would be 17.5, so the answer of 17 (which was year 2028) looks perfect.  "
},
{
  "id": "sec-Approx_solutions-8",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "sec-Approx_solutions-9",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "guess and check "
},
{
  "id": "sec-Approx_solutions-18",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "successive approximation bisection method "
},
{
  "id": "sec-Finance",
  "level": "1",
  "url": "sec-Finance.html",
  "type": "Section",
  "number": "2.5",
  "title": "Finance formulas",
  "body": " Finance formulas  Hector is trying to figure out his finances - finding a good investment for his tax refund, saving for a down payment on a house, and dealing with his student loans. While there are various online tools that will do the math for him, Hector would really like to work out the formulas for himself.  First that tax refund. What a relief: $1,040 back this year. Much as Hector is tempted to spend the money on something fun, he knows he should save it. His local bank offers him two choices: a savings account paying 1.2% interest compounded monthly or a 3-year certificate of deposit paying 3% interest compounded monthly.  The description compounded monthly means that the bank will pay him of the annual interest each month, and then use that new balance in computing his interest in the month that follows. For example, that savings account would pay 1.2% interest compounded monthly, so that's interest each month. Rather than figuring out Hector's balance one month at a time, we can use this formula.   Compound Interest Formula    where    = account balance ($)     = time invested (years)     = initial deposit or principal      = interest rate compounded monthly (as a decimal)       If you're curious, this equation fits the template for an exponential equation. The starting amount is . The annual growth rate is , which means the monthly growth rate is , and so the monthly growth factor is Since the interest is added each month, it would make sense to measure time in months. It is customary, however, to measure time in years instead. No big deal. After 3 years, for example, we have Yup, just multiply the years by 12 to get the months. In the general formula, the number of years is and so the number of months is .  Let's figure out how much Hector would have in his account for each choice. For the savings account we have , , and years so we use the Compound Interest Formula to get See the parentheses? The parentheses around the base were already in the equation. They make sure that the inside quantity gets calculated before it's raised to the power. We inserted the parentheses around the exponent to override the order of operations again. This time we wanted the product ( ) calculated first.  Of course, Hector might want to choose that certificate of deposit instead. That pays 3% interest compounded monthly, so the only change is . Your turn. Check that using the Compound Interest Formula you get $.  It looks like the certificate of deposit is a clear winner, but there is a catch. If Hector wants his money before the three year term is up, he loses all (or most) of the interest earned. Ouch. So Hector should decide not only based on what the accounts pay: $1,078.10 in the savings account versus $1,137.81 in the certificate of deposit, but also on whether he is comfortable leaving the money alone for three years or not.  Unimpressed by the $59.71 difference and uncomfortable locking his money in for that long, Hector decides on the savings account. When he reads the account information carefully he is surprised to see the account pays 1.207% APR. What does that mean?  The acronymn APR stands for annual percentage rate . It means that 1.2% interest compounded monthly has the same net effect as paying 1.207% at the end of each year. where does that number come from? Imagine $1 in the account ( ) for one year ( ) with at 1.2% interest (so again). Silly, yes, but watch what we learn. The balance from the Compound Interest Formula would be around $1.01207, as you can (and should) check. That means the annual growth factor is which corresponds to the equivalent of annual growth rate of There's a formula for this too.   Equivalent APR Formula    where = interest rate compounded monthly (as a decimal)    For example, the CD pays 3% compounded monthly, so . Using the Equivalent APR Formula we get   All this thinking about savings reminds Hector that he wants to own his own place someday. He promised himself that he would start putting away some money each month to save for a down payment on a condo, or maybe even a house. Sharing an apartment with three friends, postponing buying his first car, and bringing lunch from home most days leaves Hector nearly $1,000 per month to save. His bank offers a special savings account paying 4.5% compounded monthly if he commits to making a deposit every month for at least two years.  Suppose Hector deposits $1,000 to the account at the end of every month. Two things happen at the end of each month - first, the interest is added to the account and, second, Hector puts another $1,000 into the account. Let's do a couple quick examples. At the end of the first month he just has the $1,000. What is his balance at the end of the second month? From the Compound Interest Formula (with , , and ) he has $1,003.75 to which he adds another $1,000 for a grand total of At the end of the third month from the Compound Interest Formula (now with but still and ) he has $2,011.26 to which he adds another $1,000 for a grand total of   It would take too long to keep calculating one month at a time. Any sequence of regular deposits is an annuity . Luckily there's a formula for the (future) value of an annuity.   Future Value Annuity Formula    where    = account balance ($)     = time invested (years)     = regular (monthly) deposits ($)     = interest rate compounded monthly (as a decimal)       Notice that now represents the regular, monthly deposit instead of the initial deposit. In either case think: stands for put in. In Hector's situation, we have and . To check his balance after 3 months, we need to convert to years. Here goes. so . From the Future Value Annuity Formula , his balance is as we expected.  Notice how we need parentheses not only where they appear in the formula, but also around the entire numerator (top) of the fraction, around the entire denominator (bottom) of the fraction, and around the exponent. That's going to take some practice to get used to. Especially since there are actually two open parentheses in a row.  And how much will Hector have if he continues to save for a full 2 years? Use the Future Value Annuity Formula (now with ) to get the answer of $25,064. Wow. He'll be buying his own house in no time. By the way, if he just stuck that $1,000 in a shoebox under his bed (meaning earning no interest) he'd have The $25,064 in his account represents a total of $1,064 in interest. The bank is better than the shoebox.  Oh, but wait, there's those looming student loans. Hector currently owes $16,700 at 5.75% interest compounded monthly. He's ready to start paying some of that loan off every month, which means this loan repayment is another example of an annuity. Again, two things happen at the end of each month - first, the interest is added to the account and, second, the payment is subtracted. Instead of trying examples by hand, let's fast forward to the formula. The formula that gives the (monthly) payment for a loan (or any annuity) is   Loan Payment Formula        = loan amount ($)     = time invested (years)     = regular (monthly) payment ($)     = interest rate compounded monthly (as a decimal)       Notice that now represents the regular, monthly payment and is the loan amount. In Hector's situation and . he would like to pay off the student loan in the next two years before he buys that house, so years. The monthly payment from the Loan Payment Formula would be Oh boy. If Hector has to pay $738.28 per month for his student loan, that's really going to cut into how much he can save for that down payment on a condo. (And forget about a house.) Know why we round up? Banks always do, and then the very last payment is a tiny bit less to make up for all that round up.  This calculation is our most complicated so far. See the negative in the exponent? Look closely at where we added parentheses - top of fraction, bottom of fraction, exponent. Same as before. It's going to take practice but once you get the hang of it, it is the same steps. One suggestion: write down what you plan to enter into your calculator. That helps you get it correct and, in case you mess up, someone else can at least see what your plan was.  Back to poor Hector. Luckily the student loan is not due in 2 years. He's allowed 10 years to pay it back. Let's recalculate his monthly payment assuming he takes the full 10 years instead. From the Loan Payment Formula (now with instead), we find his new monthly payment would be $183.32. (Check!) Much more realistic. That means he would have to save each month towards that condo. Two years probably isn't going to be enough time, so suppose he saves for three years instead. Notice that now we're saving money so we went back to the Future Value Annuity Formula with the regular deposit of , monthly interest rate of , and years. Go for it. Did you get ? Good. And, great news for Hector.  There are four different formulas in this section. Each has a different purpose. The exercises say which formula to use, but in subsequent courses you would have to choose for yourself.  A short disclaimer is in order. These formulas only work if the interest is compounded monthly . Can you guess how to change the formulas if the interest is paid at some other interval? Just trade out the 12s for monthly and use how ever many times per year the interest is paid instead, usually called in other textbooks.  "
},
{
  "id": "sec-Finance-4",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compounded monthly "
},
{
  "id": "def-compound-interest-formula",
  "level": "2",
  "url": "sec-Finance.html#def-compound-interest-formula",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Compound Interest Formula.",
  "body": " Compound Interest Formula    where    = account balance ($)     = time invested (years)     = initial deposit or principal      = interest rate compounded monthly (as a decimal)      "
},
{
  "id": "sec-Finance-11",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "APR annual percentage rate "
},
{
  "id": "def-equivalent-apr-formula",
  "level": "2",
  "url": "sec-Finance.html#def-equivalent-apr-formula",
  "type": "Definition",
  "number": "2.5.2",
  "title": "Equivalent APR Formula.",
  "body": " Equivalent APR Formula    where = interest rate compounded monthly (as a decimal)   "
},
{
  "id": "sec-Finance-16",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "def-future-value-annuity-formula",
  "level": "2",
  "url": "sec-Finance.html#def-future-value-annuity-formula",
  "type": "Definition",
  "number": "2.5.3",
  "title": "Future Value Annuity Formula.",
  "body": " Future Value Annuity Formula    where    = account balance ($)     = time invested (years)     = regular (monthly) deposits ($)     = interest rate compounded monthly (as a decimal)      "
},
{
  "id": "def-loan-payment-formula",
  "level": "2",
  "url": "sec-Finance.html#def-loan-payment-formula",
  "type": "Definition",
  "number": "2.5.4",
  "title": "Loan Payment Formula.",
  "body": " Loan Payment Formula        = loan amount ($)     = time invested (years)     = regular (monthly) payment ($)     = interest rate compounded monthly (as a decimal)      "
},
{
  "id": "sec-Solving_linear_equations",
  "level": "1",
  "url": "sec-Solving_linear_equations.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solving linear equations",
  "body": " Solving linear equations  Your kitchen sink keeps getting clogged. Very annoying. Last time the plumber was able to fix it pretty quickly. But now the sink is clogged again. This time when the plumber comes and unclogs the sink, he suggests redoing the trap and a few other things that were causing the problem. You are pretty tired of it clogging up and tell him to go ahead. While you're glad that the sink works when he's done, you're a bit shocked when his bill arrives a few days later for parts plus $278.75 in labor. Does that seem right?  Remember our plumber charged $100 for just showing up and then $75 per hour for the service. Using the variables    time plumber takes (hours) indep    total plumber's charge ($) dep    we found that the equation was   Let's figure out how many hours of work would add up to a bill of $278.75. Our first approach might be to look at a table. From earlier we had     0  1\/2  1  2  3      100.00  137.50  175.00  250.00  325.00     Since $278.75 is between $250.00 and $325.00, we see that the time must be between 2 and 3 hours. You remember the plumber being there over 2 hours, so this is certainly a reasonable answer. Well, a lot of money, but mathematically it makes sense.  Still curious, you'd like to know exactly how many hours and minutes he worked. We could use successive approximations. For example, for 2.5 hours the bill would have been which is more than the charge. Continuing to guess and check we get     2  3  2.5  2.3  2.4  2.35  2.37  2.38     250.00  325.00  287.50  272.50  280.00  276.25  277.75  278.50    vs.  low  high  high  low  high  low  low  close enough    The plumber worked approximately 2.38 hours. Converting units we calculate The plumber took about 2 hours, 23 minutes. Thinking back, the plumber had arrived around 10:30 in the morning and stayed past lunch, probably until around 1:00 p.m. That's about right.  Wait a minute! We could have figured this out much more quickly. If the labor cost was $278.75, we know the first $100 was the trip charge. That leaves in hourly charges. At $75 per hour that comes to which comes to around 2 hours, 23 minutes as before. See how we used the $75\/hour as a unit conversion here? Very clever.  That worked well. But, can we figure out this sort of calculation in other problems? What is the general method we're using? Can we write down our method in an organized fashion so that someone else could follow our thinking here? Turns out there is a formal way to show this calculation, called (symbolically) solving the equation. Officially any method of getting a solution to an equation is considered solving the equation, but in the rest of this book, and in most places that use algebra, when we refer to solving the equation or give the instruction to solve , we mean symbolically .  Here's how it works. We want to figure out when . We know from our equation that . So we want to find the time where Remember that the equal sign indicates that the two sides are the same number. On the left-hand side we have . On the right-hand side we have . Looks different, but same thing. We are looking for the value of that makes these two sides equal.  The first thing we did was subtract the $100 trip charge. In this formal method, we subtract 100 from each side of our equation. If the left-hand side and the right-hand side are the same number, then they will still be equal when we take away 100 from each side. We get    which simplifies to because the and cancelled.  The next thing we did to figure out the answer was divide by the $75\/hour charge. In this formal method, we can divide each side of our equation by 75. Again, if the left-hand side and right-hand side are the same number, then they will still be equal when we divide by 75. Here goes. Notice that we wrote the division in fraction form (instead of using ). To understand why the 75's cancelled, remember that is short for and so because the and cancelled. So we have as before. Yet again, our answer is around 2 hours, 23 minutes.  Let's practice working with this symbolic way of solving equations. Suppose instead the plumber went to my neighbor's house and billed her for $160 in labor costs. How long did the plumber work at my neighbor's? As before, we begin with our equation and we are looking for . Put these together to get Subtract 100 from each side to get which simplifes to Last, divide each side by 75 to get which simplifies to   We have solved the equation, but it would make more sense to report our answer in minutes so we convert The plumber worked for 48 minutes at my neighbor's house.  Let's quick check. Since is measured in hours we need to go back and use hours, not 48 which is in minutes. Evaluating in our original equation we get   You might be wondering how we knew to subtract the 100 first and then later divide by 75. In this particular situation we had figured it out already and knew it made sense to take the $100 right off the top. But, in general, how would we know?  It turns out that when solving an equation we do the opposite operations in the reverse order from the usual order of operations for evaluating. To evaluate a linear equation we would first multiply and then add. To solve a linear equation we first subtract (that is the opposite of adding) and then we divide (that is the opposite of multiplying).  "
},
{
  "id": "sec-Solving_linear_equations-13",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#sec-Solving_linear_equations-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(symbolically) solving solve "
},
{
  "id": "sec-Solving_linear_inequalities",
  "level": "1",
  "url": "sec-Solving_linear_inequalities.html",
  "type": "Section",
  "number": "3.2",
  "title": "Solving linear inequalities",
  "body": " Solving linear inequalities  In the United States temperatures for everyday things like the weather or cooking are given in Fahrenheit, denoted F. In this system, water freezes into ice at F and boils into steam at F. A common setting for room temperature is F whereas average human body temperature is around F. And, most importantly, chocolate brownies bake at F.  In the sciences, medicine, and most other countries, temperatures are measured in Celsius, denoted C. (For those of us who grew up in the 1960s or earlier, Celsius is the temperature scale formerly known as centigrade. ) For comparison's sake, it's useful to know that water freezes at C and boils at C. Not coincidentally - it was set up that way. Room temperature is C whereas now average human body temperature is C. And those brownies?  A common conversion is given by the equation where    Fahrenheit temperature ( F) dep    Celsius temperature ( C) indep    You may have seen this equation before with fractions in it: . Just another way to write the equation, since . For example, when we have You can (and should check) the other examples in our story.  What about those chocolate brownies? We are looking for . That's the dependent variable, so you can practice your linear equation solving skills to find the independent variable, . It turns out that chocolate brownies bake at around .  But, actually, chocolate brownies just need to bake in a moderate oven , which means between and . Let's first figure out when the oven temperature is under . We want to know when so we have an inequality instead of an equation. Remember stands for less than or equal to . Using we get We're looking for values of that make the left-hand side a number that's smaller than, or maybe as large as, 375, but no larger. Quick vocabulary: equations have equal signs (=). When we have inequality signs ( , , , or ), it's called an inequality instead.  To solve this inequality we begin the same way as we would if we were solving the equation, by subtracting 32 from each side to get   which simplifes to   To understand why the inequality stays the same when we subtract, think of the inequality as little   big. If one number is smaller than the other, the same will be true if we subtract the same amount from each number. For example, . To make it real, suppose I have $18 and you have $21. Then imagine we each buy a movie ticket for $12. I would have and you would have . And still .  Back to our example. We had . Divide each side by 1.8 to get which simplifies to The oven should be set at most . We rounded down because we do not want the brownies to burn.  To understand why the inequality stays the same when we divide, again think of the inequality as little   big. If one number is littler than the other, the same will be true when we divide each number by the same divisor. For example, , which we imagined as my having $6 and your having $9 after we each bought a movie ticket. While we're making up stories, suppose we each have three children who want some money from us for treats. We each divide our remaining cash among our three children, respectively. My kids each get and your kids each get . And still.  There is a bit of caution when solving inequalities. When symbolically solving an equation, any operation you do to each side preserves the equality: start with equal amounts, do the same thing to each, end with equal amounts. But, when symbolically solving an inequality, only some operations you do to each side preserves the inequality: add or subtract from each side or multiply or divide each side by the same (positive) number. But other operations can reverse the inequality.  For example, we can swap sides of an equation, but if we swap sides of an inequality then the direction of the sign reverses. In this brownie example, we want Remember stands for greater than or equal to . That's like big   little. We can rewrite that inequality as little  `̀big,” or equivalently In each case, is little and is big . Make sense?  Multiplying or dividing each side of an inequality by a negative number switches the inequality sign as well. Watch out for that with decreasing functions because that's where the slope is negative. And the number we're dividing by is actually the slope.  Remember that the recipe for chocolate brownies says to bake in a moderate oven, between and . We just figured out that corresponds to . But that's only half of the story. We also wanted . While we could solve that inequality separately, it turns out there's an easier way.  Inequalities are a very useful notation for indicating between . We want between and to bake the brownies. We can write which is read   is between 325 and 375 (inclusive)   The word inclusive indicates that we're allowing or .  The good news is that we can solve this chain of inequalities all at once using the same steps as before but now being sure to do the same thing to all three sides. Three sides? you ask. Yes, three, I confirm. Watch how this works. Start with Using we get Subtract 32 from each of the three sides to get which simplifies to   Next, divide all three sides by 1.8 to get which simplifies to so, Probably best to say Chocolate brownies bake between and . Oven actually aren't that precise, so somewhere between and should do the job.  If we graph our linear function , we can check our answer for the right temperature range for our brownies. Since we want between 325 and 375 we start on the vertical axis and then use the graph to find the right range on the horizontal axis. You can see from the highlighted region that our answer is reasonable. Now, who wants brownies?     "
},
{
  "id": "sec-Solving_linear_inequalities-8",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moderate oven less than or equal to inequality "
},
{
  "id": "sec-Solving_linear_inequalities-15",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "greater than or equal to "
},
{
  "id": "sec-Solving_linear_inequalities-20",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inclusive "
},
{
  "id": "sec-Solving_power_equations",
  "level": "1",
  "url": "sec-Solving_power_equations.html",
  "type": "Section",
  "number": "3.3",
  "title": "Solving power equations (and roots)",
  "body": " Solving power equations (and roots)  There's an old saying - when life gives you lemons, make lemonade. But how many lemons do you need? It turns out a reasonable equation describing the juice from a single lemon is given by where    juice (tablespoons) dep    circumference (inches) indep    In case you've forgotten, the circumference is the distance around the lemon. Think of taking wrapping a piece of string around the middle part of the lemon. Then stretch it out on a ruler to see how long it is.  Recipes for lemonade vary widely, but for my recipe calls for 4 tablespoons of lemon juice for each 12 ounce glass. The rest is a syrup made of hot water and sugar, mulled with a sweet herb like basil or mint, then finished with ice and cold water. Yum.  So, how large a lemon would yield 4 tablespoons of juice? Let's try to guess the answer. For example, a small lemon 7 inches in circumference would yield A medium size lemon 8 inches in circumference would yield Bet 9 inches is a good next guess. We get That was quick! A lemon 9 inches around should produce just over 4 tablespoons of juice.  Much as we have learned to love successive approximation, this chapter is all about solving equations. Remember, is a power equation because it fits the template with power and proportionality constant . Turns out we can solve any power equation symbolically.  Here's how. We're looking for . Use our equation to get We want to find the value of , so we can divide both sides by 0.0056 to get which simplifies to   We have found . How can we undo the to find ? The answer: take the cube root of each side. (More about roots at the end of this section.) That means   which simplifies to as expected, just under 9 inches. (More about the key later too.)  A look at the graph confirms our result.     Now, what goes better with lemonade than lemon cheesecake? For that we need lemon zest. Zest is what you get when you grate the lemon peel in long skinny strips. As with juice, the amount of lemon zest depends on the size of the lemon. Our variables are    amount of lemon zest (tablespoons) dep    circumference (inches) indep as before    and an equation is We have another power equation, this time with power and proportionality constant .  My lemon cheesecake recipe calls for tablespoons of zest. There are various sized lemons at the store. How large a lemon should I buy? A small lemon of circumference 7 inches produces less than 1 tablespoon of zest because so that's not large enough.  Let's use successive approximations, summarizing our guesses in a table. Of course, we don't really need this precise an answer, but it's good practice. Notice .     7  8  9  10  9.5  9.3  9.2  9.1     0.882  1.152  1.458  1.8  1.6245  1.55682  1.52352  1.49058    vs. 1.5  low  high  low  high  high  high  high  low    We need a large lemon, somewhere between 9.1 and 9.2 inches around. Truth is, I'll just buy the biggest lemon I can find because extra lemon zest looks wonderful on top of the cheesecake.  We are supposed to be practicing solving the equation. Here goes. We want . Use our equation to get We want to find the value of , so we can divide both sides by 0.018 to get which simplifies to Take the square root of each side to get which simplifies to as expected, between 9.1 and 9.2 inches.  As when solving linear equations, notice that we do the opposite operation in reverse order from the usual order of operations. To evaluate a power equation we would first raise to the power and then multiply. To solve a power equation we first divide (that is the opposite of multiplying) and then we take a root (that is the opposite of raising to a power).  As promised, a brief discussion of roots is in order. Here's the deal. Roots essentially undo powers. What this means is, for example, we know but it's quicker to calculate it using powers as We say 10 squared is 100. The square root of a number is just whatever number you would square to get that number. So, for example, because you would square 10 to get 100. Many calculators have a special square root key that looks like so we get Your calculator might insert a parenthesis with the square root, in which case you should (but don't need to) close it before hitting , like this Your calculator might not have this key, or might need the square root after the number. Ask a classmate or your instructor or search online if you can't figure it out.  The same idea works for higher powers. Like That's really and we say 10 cubed is . The cube root of a number is whatever number you would cube to get that number. So, for example, . Many calculators have a special root key that looks like . That looks similar to multiplication ( ), but it isn't. The is like a placeholder for the real root you want - for a cube root is just 3.  Here's how to use that root key. First you type in the root you want (3), second you use that key ( ), and last you type in the number you're taking the root of () like this Like with squareroots, your calculator might introduce a parenthesis, or you might do a slightly different order. You might have to use a shift or second key to get to the root key. On many graphing calculators the key is one of the MATH functions, so you have to type something like MATH 5 to get it. Again, ask if you need help figuring it out.  There is a small chance that your calculator doesn't have roots. In that case there is a strange-looking alternative Note the necessary parentheses. This process works for square roots too.   Bet you see how this idea of roots generalizes. The th root of a number is whatever number you would raise to the th power to get the number. Stated in terms of equations we have   Root Formula   The equation has solution     "
},
{
  "id": "sec-Solving_power_equations-4",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circumference "
},
{
  "id": "sec-Solving_power_equations-13",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Zest "
},
{
  "id": "sec-Solving_power_equations-22",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squared square root "
},
{
  "id": "sec-Solving_power_equations-23",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cubed cube root "
},
{
  "id": "sec-Solving_power_equations-26",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "th root "
},
{
  "id": "def-root-formula",
  "level": "2",
  "url": "sec-Solving_power_equations.html#def-root-formula",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Root Formula.",
  "body": " Root Formula   The equation has solution    "
},
{
  "id": "sec-Solving_exponential_equations",
  "level": "1",
  "url": "sec-Solving_exponential_equations.html",
  "type": "Section",
  "number": "3.4",
  "title": "Solving exponential equations (and logs)",
  "body": " Solving exponential equations (and logs)  Remember Jocelyn? She was asked to analyze information on rising health care costs. In 2007 the United States spent $2.26 trillion on health care and costs were projected to increase at an average of 6.7% annually for the subsequent decade. For the variables    health care costs ($ trillions) dep    time (years since 2007) indep    she found the exponential equation   In what year did health care costs first pass $3 trillion? We can use successive approximation to find the answer, starting with the values she found earlier.    year  2007  2008  2009  2017  2027     0  1  2  10  20     2.26  2.41  2.57  4.32  8.82    vs. 3  low  low  low  high  high    The answer must be between 2009 and 2017. Let's split the difference and guess 2013. For that year, and so which is already over $3 trillion. What about 2011? Use to check that , which is almost, but not quite there. Must be 2012 was the year. Sure enough when we get . That's it. Health care costs first passed $3 trillion in 2012. Well, at least according to our equation. As usual, we summarize the numbers in a table.    year  2009  2017  2013  2011  2012     2  10  6  4  5     2.57  4.32  3.33  2.93  3.12    vs. 3  low  high  high  low  high    Successive approximation gives us the answer fairly quickly. But there is an even quicker way - solving the exponential equation. Start with what we're looking for, which is . Use the equation to get We want to find the value of , so divide each side by 2.26 to get which simplifies to When the dust settles we're left with   Hmm. How do we find here? We saw how to use roots to solve power equations. In our lemonade example we had . We knew the exponent (3) and wanted to find the number being raised to that power ( ). That's when we took the cube root to get That approach is not going to work here because it's backwards now - we know the number being raised to a power (1.067) and are on the hunt for the exponent ( ) instead.  Turns out there's a different formula for solving for the exponent that uses logarithms (nickname: logs ). More about logs in a minute, but first let's write down the formula and practice working with it. The formula is   Log-Divides Formula   The equation has solution     Quick aside about the name. Some formulas have well-known names. Not this one. We call it the Log-Divides Formula because it has logs and divides in it. Perhaps you already guessed that. Other math books do not have an name for this formula, although it is related to something called the change of base formula .  Okay. Back to solving our equation. We got stuck trying to solve We have growth factor and value . So the formula says Your calculator should have a key that says log or maybe LOG . Try typing A small note here about parentheses. Some calculators give the first parenthesis for free when you type log but you have to type the closing parenthesis in yourself.  This answer of 4.37 means that costs are projected to exceed $3 trillion just over 4 years after 2007. That's some time during 2011, or by 2012 for sure. Same answer as before.  Let's practice. Suppose instead we want to know when health care costs would exceed $10 trillion instead. (By the way - wow!) That means . Using our equation we get Before we can use the Log-Divides Formula, we need to get rid of that 2.26. To do so, we can divide both sides by 2.26 That means Now our equation fits the format for the Log Divides Formula with new value (and the growth factor is still). So the answer is Want to avoid typing in the number 4.424778761…? Depending on your calculator, you might try this instead: where ANS stands for answer .  Again that means 23 years after 2007, or 2007 + 23 = 2030. Health care costs are projected to exceed $10 million in the year 2030. Well, unless we do something about that. (Helps explain why government folks are often discussing how to contain health care costs.)  Time to fill you in a bit more about logs. Look at these examples. Don't take my word for it; calculate them yourself.   What do you see? In each case the logarithm is the number of zeros. For example, has 4 zeros and . Another way to think of this connection is In other words, the logarithm is picking off the power of 10.  Wait a minute. The Log-Divides formula helped us find the value of which was an exponent. And now we see that the log of a power of 10 is that exponent. So a logarithm is just an exponent. And logarithms help us find the exponent. Makes sense.  What about logs of numbers that aren't just powers of 10? Here are some examples.   To see what's happening we want to involve powers of 10. Scientific notation will do that for us. Let's write these numbers in scientific notation and see what we learn. For example. We are back to the power of 10. Well, approximately. Let's check another number.     and     Before we write down a general rule, let's check more numbers.     and      and      and     In every case we are rounding down, but it's always the same.  log(number) power of 10 in the scientific notation for that number.  "
},
{
  "id": "sec-Solving_exponential_equations-11",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#sec-Solving_exponential_equations-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithms logs "
},
{
  "id": "def-log-divides-formula",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#def-log-divides-formula",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Log-Divides Formula.",
  "body": " Log-Divides Formula   The equation has solution    "
},
{
  "id": "sec-Solving_exponential_equations-16",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#sec-Solving_exponential_equations-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ANS "
},
{
  "id": "sec-Solving_quadratic_equations",
  "level": "1",
  "url": "sec-Solving_quadratic_equations.html",
  "type": "Section",
  "number": "3.5",
  "title": "Solving quadratic equations",
  "body": " Solving quadratic equations  Claude likes to juggle. As he throws a beanbag up in the air, the height changes over time as described by the equation where    = height of beanbag (feet) dep    = time (seconds) indep    Let's make a table and graph this function. For example, when seconds we have and when second we have   Huh? I thought the beanbag went up in the air. What's happening here? Oh, I know. The beanbag must be falling down by then. As we fill in the table with intermediate values we see how Claude's beanbag went up in the air and then back down.     0  0.1  0.2  0.3  0.4  0.5  0.6  0.7  0.8  0.9  1  1.1  1.2     3  4.34  5.36  6.06  6.44  6.50  6.34  5.66  4.76  3.54  2  0.14     Notice by seconds we got feet. We can't have negative feet. The beanbag must hit the ground before 1.2 seconds. From the graph I'd say in just over 1.1 seconds.     Of course, we can refine our answer by successive approximations. The beanbag hits the ground when its height is 0 feet. Looks a little strange but we want . We expect the answer is just a little bigger than 1.1, so we start our guess optimistically with 1.11.     1.1  1.11  1.105  1.107  1.106     0.14   0.0368   0.018    vs. 0  high  low  high  low  good    The beanbag was in the air for approximately 1.106 seconds.  In this chapter we've seen how to solve linear, power, and exponential equations. Let's solve this equation too. By the way, our function is quadratic because fits the template for a quadratic equation.   Quadratic equation template      with constants (More on how we found those numbers in a moment.)  Back to our juggler. We are trying to figure out when . Using our equation , we get We want to solve for . Notice that because occurs twice in the equation, nothing we have seen to do to each side of the equation can knock it down to just one . That means none of our methods so far work. Luckily there's a way to solve any quadratic equation using the aptly-named Quadratic Formula .    The equation has solutions     Oh my! First thing to understand in this complicated formula is that we actually get two possible answers Sometimes one answer makes sense in the story, other times they both might. Stay tuned.  For Claude's situation we had To fit the formula, we need the first, the second, and then the constant. No sweat, just reorder to get Notice how subtracting became adding when we rearranged? That lines up perfectly with That's how we knew the constants were   The first fraction in the formula is As usual, we needed parentheses around the denominator (bottom) of our fraction to override the normal order of operations. As a reminder, refers to negation. Remember, this does not mean you type in parentheses, just hit the one key that is labeled already.  The second fraction is Check out the parentheses now. Three sets here. First, around the quantity we're taking the square root of. Maybe your calculator included the open parentheses along with the square root, but either way we need them. Second, around the number (15) that we are squaring. That didn't matter here but if were negative it would have. Last, we added parentheses around the bottom of the fraction, as always.  Oh, and we're not done yet. Remember there are two possible answers. One is the sum of these two numbers which doesn't make any sense because time is never negative. The other is the difference We had guessed around 1.106 seconds, so that is definitely the right answer: Claude's beanbag will hit the ground after 1.10689 seconds. Yeah, too precise. But you get the idea.  Wait a minute! Any good juggler isn't about to let the beanbag fall on the ground. He's going to catch it again, perhaps at about feet above ground. That means we're looking for . Using our equation , we get The Quadratic Formula only works if the equation has , but we have . It might seem that we're out of luck, but it's an easy fix. Just subtract 3.5 from each side. which simplifies to So now we have . Yes!  We can write the new equation as from which we see that as before, but now we have a new value We're all set to use the Quadratic Formula .  The first fraction is No surprise here. We used the same values of and as before, so we should have the same number here. The second fraction is   Don't forget we need to put together these parts to find the possible answers. The sum gives us and the difference gives us   Both answers seem to make sense. Let's look at the graph to confirm that they're reasonable. We first find while the beanbag is going up in the air, just before the unlabeled gridline for 0.05 (midway between 0 and 0.1) so an answer of makes sense. Then, on the way back down, the beanbag is 3.5 feet up at what looks like 0.9 seconds, so our answer of makes sense too. Since Claude catches the beanbag on the way down, we want that second answer, after 0.90289 seconds (which is just before 1.106 seconds when it hits the ground, by the way).  One interesting note. What happens in the story at the point where the beanbag stops going up in the air and starts falling down? That must be when the beanbag is at its highest point. What is the speed at that highest point? Well, I guess 0. For a split second it's almost frozen in midair, neither rising nor falling. (If we were able to compute the rate of change for a really, really small interval of time then we would find the rate of change .)  Turns out it's easy to find that point for a quadratic equation, just plug in the first fraction from the Quadratic Formula! Check it out. When we get Claude throws the beanbag about 6.516 feet up. Converting to more normal units we get The beanbag goes up to about 6'6\". You can check that the graph shows just over 6.5 feet.  In general, the graph of is a parabola . The two solutions from the Quadratic Formula are both places where and, so, the graph crosses the -axis there. Might not make sense in the real problem, but the equation and formula don't know that. (Okay, equations and formulas don't actually know anything. But you get my point.) Turns out the graph is symmetric about the highest point, so that must be midway in between the roots which is exactly where Because is negative, the answer we got by adding is to the left and the answer we got by subtracting is to the right.     Our graph was a shaped parabola and so we found a maximum value. The graph of a quadratic function might be shaped instead. In that case evaluating at would give the minimum value.  "
},
{
  "id": "def-quadratic-equation-template",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#def-quadratic-equation-template",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Quadratic equation template.",
  "body": " Quadratic equation template     "
},
{
  "id": "sec-Solving_quadratic_equations-15",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#sec-Solving_quadratic_equations-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quadratic Formula "
},
{
  "id": "def-quadratic-formula",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#def-quadratic-formula",
  "type": "Definition",
  "number": "3.5.2",
  "title": "",
  "body": "  The equation has solutions    "
},
{
  "id": "sec-Solving_quadratic_equations-29",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#sec-Solving_quadratic_equations-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabola "
},
{
  "id": "sec-Modeling_linear_equations",
  "level": "1",
  "url": "sec-Modeling_linear_equations.html",
  "type": "Section",
  "number": "4.1",
  "title": "Modeling with linear equations",
  "body": " Modeling with linear equations  A family with one full-time worker earning minimum wage cannot afford the local fair-market rent for a two-bedroom apartment anywhere in the United States. Even families earning above minimum can struggle to rent an apartment for less than 30% of their income. As a result, many people need affordable housing. There are various local, state, and federally funded programs as well as non-profit agencies working to increase availability.  Source: U.S. Department of Housing and Urban Development    In our city there are about 64,100 apartments considered affordable. So the city partnered with local developers to build more apartments each year. Our variables are    affordable housing (apartments) dep    time (years from now) indep    Assuming things proceed as planned, after 5 years there would be Generalizing, we get our equation which can be rewritten as This equation fits our template for a linear equation   Quick recap. A function is linear if its graph is a line, and nonlinear otherwise. The rate of change measures the steepness of the graph for any function, but a line is the same steepness everywhere, so the rate of change, or slope of a line is constant. Our example is linear because the slope of apartments per year is constant. Our starting or fixed amount is the intercept . In our example it's apartments. The dependent variable and the intercept always have the same units - apartments in our example. But so, in our example slope is measured in apartments per year . These units can help you identify the slope and intercept in a story - so keep a look out.  How many years will it take the city to reach apartments at this rate? After ten years, for example, there would still not be enough affordable apartments because Continuing successive approximation we get     0  5  10  11  12     64,100  103,100  142,100  149,900  157,700    vs.   low  low  low  low  high    This city will reach 150,000 affordable apartments within 12 years.  Of course, we could solve a linear equation instead. We want . Using our equation we get However, since we want at least 150,000 affordable apartments, an inequality is even better. Let's practice that. Subtract from each side to get which simplifies to Divide each side by to get which simplifies to To be sure we need to round up to get   Let's confirm our findings on the graph.     As expected, the graph is a line. And we see that the city should reach its goal of affordable apartments in 12 years, or slightly before then.  "
},
{
  "id": "sec-Modeling_linear_equations-6",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#sec-Modeling_linear_equations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear nonlinear slope intercept "
},
{
  "id": "sec-Systems_linear_equations",
  "level": "1",
  "url": "sec-Systems_linear_equations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations  A local factory produces small locks for industrial use. The old machine has seen better days and Quia Xun, the manager, is shopping around for a new machine. She's narrowed it down to two options. The first option is replace the old machine with a new model (Machine #1) for $3,200. The second is a larger unit (Machine #2) priced at $5,400. In each case, the price includes installation and the standard service contract. The reason she is considering the more expensive machine is Machine #2 runs at a cost of only $0.80 per lock, whereas the replacement Machine #1 runs at a cost of $1.25 per lock.  Since Machine #1 is less expensive, Quia Xun knows it is the right choice if the factory only produces a small number of locks. But since Machine #2 costs less per lock to run, she knows it will pay off if the factory makes a large number of locks. She would like to understand the total expenditure better, particularly the number of locks at which it would be worthwhile to invest in the more expensive machine.  Since Quia Xun is interested in how the total expenditure, including both the purchase price and the running cost, depend on the number of locks produced, the variables are    amount produced (locks) indep    total expenditure ($) dep    She recognizes that total expenditure is a linear function of the purchase price and the running cost for each machine. In each case, the starting amount (intercept) is the purchase price: $3,200 for Machine #1 and $5,400 for Machine #2. The slope (rate of change) is the constant running cost: $0.80 per lock for Machine #1 and $1.25 per lock for Machine #2. Using the template for a linear equation she writes the equations    Machine #1:     Machine #2:     Since there are two linear equations and we are interested in a comparison, we have a system (of linear equations) .  To begin the comparison, Quia Xun starts with figuring out what the expenditure to produce 2,000 locks would be for each machine.    Machine #1:     Machine #2:     If the factory were only going to make only 2,000 locks, then Machine #2 would not be worth it. She calculates a few more examples to see what the cutoff would be.     2,000  4,000  6,000  8,000  10,000    Machine #1: E  5,700  8,200  10,700  13,200  15,700    Machine #2: E  7,000  8,600  10,200  11,800  13,400    Even at 4,000 locks, Machine #1 is the better deal. By 6,000 locks, Machine #2 becomes the better deal. Somewhere in between it switches.  Quia Xun makes a quick graph to see what's going on. On the graph, whichever line is lower corresonds to the lower total expenditure and whichever line is higher corresponds to the higher total expenditure. As suspected, for a smaller number of locks the line for Machine #1 is lower on the graph, so that's the better deal. For a larger number of locks it switches and the line for Machine #2 is lower on the graph, since that's the better deal instead. Where they switch corresponds to the point on the graph where the two lines cross, somewhere around 5,000 locks.     A quick successive approximation narrows down the answer.     4,000  6,000  5,000  4,500  4,800  4,900    (for Machine #1)  8,200  10,700  9,450  8,825  9,200  9,325    (for Machine #2)  8,600  10,200  9,400  9,000  9,240  9,320    Less expensive option  #1  #2  #2  #1  #1  #2    So the choice changes somewhere between 4,800 and 4,900 locks.  There is a way for Quia Xun to solve the problem symbolically; we refer to this process as solving the system . She wants to find the number of locks where Using her equations for Machine #1 and for Machine #2 she has She wants to find the value of that makes both sides the same number. To solve, Quia Xun subtracts 3,200, the smaller of the two purchase prices, from each side to get which simplifies to Pause for a minute. What does that $2,200 mean in the story? It's the extra cost of buying Machine #2 because .  What next? This equation has the variable on each side. Quia Xun needs to combine them somehow. Here's how to do that. Subtract from each side. Look closely. She is subtracting , not just . We get How do we simplify ? Think about what these numbers represent in the story. The cost was $1.25 per lock versus $0.80 per lock. The difference is $1.25-$0.80 = $0.45 per lock. So that means Think: 125 apples 80 apples 45 apples. She can now simplify her equation to get Ah, she can solve this equation just by dividing each side by 0.45 to get which simplifies to If they plan to produce 4,889 locks or more, Quia Xun should go ahead and buy the more expensive machine, Machine #2. Yeah, that's what we guessed – just under 4,900 locks is the payoff.  She solved an equation here, but Quia Xun really wanted to know when so she could have solved the inequality instead. Check that the same steps give .  "
},
{
  "id": "sec-Systems_linear_equations-8",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#sec-Systems_linear_equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system (of linear equations) "
},
{
  "id": "sec-Systems_linear_equations-19",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#sec-Systems_linear_equations-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solving the system "
},
{
  "id": "sec-Intercepts",
  "level": "1",
  "url": "sec-Intercepts.html",
  "type": "Section",
  "number": "4.3",
  "title": "Intercepts and direct proportionality",
  "body": " Intercepts and direct proportionality  Kaleb runs 8 minute miles, which means it takes him around 8.5 minutes to run each mile. Yesterday he was out for about 30 minutes and ran the 2.8 mile loop by our house. That strikes me as curious because if he ran 2.8 miles at minutes per mile that should take But Kaleb took 30 minutes. That's 6 minutes longer than expected. Well, technically 6.2 minutes since but let's work with 6 since the 30 was only approximate to begin with.  The point is, what's up with that missing 6 minutes? Oh, I bet I know what it is. Ever since Kaleb turned fifty years old, he's been having trouble with his knees. I bet he's finally stretching like his doctor ordered. Must be around 6 minutes of stretches after each run.  Since Kaleb's total time is function of how far he runs, our variables are    total time (minutes) dep    distance (miles) indep    Notice that we are determining how the time depends on the distance, so the time is our dependent variable. Often time is the independent variable, but not so here.  For the sake of this problem, we assume Kaleb runs a steady 8.5 minutes per mile so the rate of change is constant. The equation must be linear and so it fits the template The slope is 8.5 minutes per mile. The 6 minutes Kaleb spends stretching is the intercept, even though it's named start in the template and Kaleb is actually stretching at the end of his run. A better name might be fixed. Whatever you call it, the equation is As a quick check, for that 2.8 mile run we have and so   By the way, there's a shorter way to find the intercept. The intercept is the starting value, or in this case the time spent stretching. So we take the total time and then subtract out the time spent running In general,   Kaleb's daughter Muna runs considerably faster, 7 minute miles, and she's not into stretching at all. For her to run the 2.8 mile loop by our house, it would take That means while her dad would take 30 minutes to run the loop and do his stretches, Muna can run it in just under 20 minutes.  The equation for Muna is The slope is 7 minutes per mile. What's the intercept for this equation? There's no time for stretching in her equation, so it's like . The intercept is 0 minutes.  Compare the graphs. Each intercept shows where that line meets the vertical axis. Kaleb's crosses at 6 minutes, but Muna's crosses at 0 minutes, at the origin (where the two axes cross).     By the way, Muna's equation is a direct proportionality because the only thing happening is that the independent variable is being scaled by a proportionality constant , . Any direct proportionality fits this template.   Direct proportionality template      To understand the proportionality, recall that Muna can run 2.8 miles in 19.6 minutes. What happens if she goes for a run twice as long? Then she would be running miles. Her time would be Notice that . So, it would take her twice the time to run twice the distance. This general idea - that you get twice the value of the dependent variable if you have twice the value of the independent variable - characterizes direct proportions. We sometimes say that Muna's time is proportional to how far she runs. Nothing special about twice here, as it would take her three times the time to run three times the distance, etc.  Not so for Kaleb. Remember it takes him 29.8 minutes to run that 2.8 miles. If he runs twice the distance, which is 5.6 miles, it takes which is not quite twice the time, since . The key is that Kaleb does not stretch twice, only once, for the longer run so double the distance does not count the 6 minutes again. Kaleb's equation is not a direct proportionality. Another way to say that is that Kaleb's time is not proportional to how far he runs. It is a function of how far he runs, yes, but not proportionally so.  "
},
{
  "id": "sec-Intercepts-13",
  "level": "2",
  "url": "sec-Intercepts.html#sec-Intercepts-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proportionality proportionality constant "
},
{
  "id": "def-direct-prop-template",
  "level": "2",
  "url": "sec-Intercepts.html#def-direct-prop-template",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Direct proportionality template.",
  "body": " Direct proportionality template     "
},
{
  "id": "sec-Intercepts-15",
  "level": "2",
  "url": "sec-Intercepts.html#sec-Intercepts-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proportional "
},
{
  "id": "sec-Slopes",
  "level": "1",
  "url": "sec-Slopes.html",
  "type": "Section",
  "number": "4.4",
  "title": "Slopes",
  "body": " Slopes  Last week our supplier delivered 13 cases of paper for the office and charged us $534.87. This week, they delivered 20 cases of paper for $814.80. We assume that their charge includes a fixed delivery fee and per case cost, so the dependence must be linear. We would like to understand their pricing scheme better by writing the equation.  What to do? We can name the variables and put the information we are given into a table. That's a start. The variables must be    total charge ($) dep    number of cases delivered (cases) indep    and we know     13  20     534.87  814.80    Let's see. The fixed delivery fee that we don't know is the intercept. The per case cost that we also don't know is the slope. To write the linear equation we need to know both.  The slope is just the rate of change, so we can figure out the slope just from the information in our table. or, all at once, as   Either way, each case costs $39.99 and the slope is $39.99 per case.  Now that we know the slope, we can find the intercept. At $39.99 per case we would expect 13 cases to cost But the story tells us 13 cases cost $534.87. The difference must be the delivery fee which is the intercept. Remember   Why did we use 13 cases? No good reason. Look what happens if we use 20 cases at $814.80 instead. Yup. Still $15 delivery fee.  The equation is linear so it fits our template and now that we know the slope and intercept, we can put those in to get our equation. Let's check. When we get and when we get You can also check that the graph goes through the original two points we were given. The intercept is $15, but because of the scale it shows up as barely above $0 on our graph.     The supplier also picks up recyclable paper and boxes. The normally charge $18 per pickup but under a new reuse incentive program, they discount a little for each box that's in good enough condition to use again. This week's recycling charge was only $7.60 because we returned the previous 13 boxes all in good shape.  Now we're interested in how the recycling charge depends on the number of boxes in good condition that we return. The new variables are    recycling charge ($) dep    number of boxes returned (boxes) indep    and we know     0  13     18  7.60    See how we used for the situation where no boxes are returned? Clever.  We can draw the graph using just these two points. (But we'll check later, once we have the equation, to be sure.)     Since there is a fixed discount per box, we again have a linear function. We know the intercept is the normal recycling fee of $18. We need to find the slope. It might look funny to get a negative, but it's to be expected. They are subtracting for each good box returned. The discount is 80¢ per box and so the equation is Check when we have   What's the most boxes you could get credit for? Probably the most they discount is the full $18, which would mean that . That means we want to solve . Check that we get , which means that 22 boxes would be almost $0 and for 23 boxes, they should pick up for free. We can check that 22 boxes gives and 23 boxes gives Well, unless they're nice and give us cash back.  "
},
{
  "id": "sec-Fitting_lines_to_data",
  "level": "1",
  "url": "sec-Fitting_lines_to_data.html",
  "type": "Section",
  "number": "4.5",
  "title": "Fitting lines to data",
  "body": " Fitting lines to data  Thanh has an internship studying road salt usage in a northern metropolitan area. Road salt is used to melt ice and snow on paved streets. Because it can damage vegetation and influence both surface water (lakes) and ground water, and because it costs money to run the trucks that apply the salt, people are interested in the amount of road salt used.  One data set compares road salt usage per county. Thanh learned from county officials that road salt use varies widely from county to county, but, not surprisingly, it depends heavily on the length of road in the county. So, the variables are    road length (lane miles) indep    road salt applied (tons per year) dep    A lane mile is the area of road one mile long and one lane wide. Now you know.  Thanh also learned that while road salt use is a function of lane miles, it is not proportional as there are more complicated factors involved. Still, he would like to model road salt use as a function of road length. Here are the data for counties in the metro area.    County  A  C  D  H  R  T  W     710  420  800  1,420  720  510  480     14,700  3,900  11,600  15,500  9,400  5,000  9,700    To develop his model Thanh imagined a new county, County X, that had 600 lane miles of road. In looking at the data, he finds two counties with close to 600 lane miles: County T and County A.     County T  County X  County A     510  600  710     5,000  ?  14,700    Based on this data, Thanh expects County X would use between 5,000 and 14,700 tons\/year of road salt. Since 600 is closer to 510 than to 710, he starts with a guess of around 9,000 tons\/year of road salt.  To improve this estimate, Thanh decides to use a linear model, hoping that will account for both road length influence and fixed factors. He begins by finding the slope.   Next he calculates the intercept. He was not expecting a negative value but decides to use it anyway. Using the template for a linear equation Thanh gets which he rewrites as As a check, for lane miles, he gets   More importantly, for 600 miles his equation gives the estimate of Thanh rounds this estimate to 9,400 tons\/year of road salt for County X, which is close to his initial guess of 9,000 tons\/year.  Next, Thanh imagines another new county, County Y, that has 500 lane miles of road. He looks to the data for counties with close to 500 lane miles.     County W  County Y  County T     480  500  510     9,700  ?  5,000    Wait a minute. The county with fewer roads used more salt? That doesn't make sense.  Thanh decides to look at all the data at once in a scatter plot.     When Thanh was using the nearby points to estimate for Counties X and Y, it's as if he were connecting the dots with line segments on the graph. Notice that the line that goes through 500 lane miles is decreasing, just like Thanh saw in his table.     Thanh suspects that this connect-the-dots model is too heavily influenced by individual county road-salting habits. He would like a way to get one line to use for everything, knowing full well that one line cannot possibly go through all of the data points.  Which line to use? One option would be to stick with the line he found through the points for Counties T and A: He redraws the scatter plot to show that line. Because the intercept is negative, it doesn't show up on his graph. The line seems to be too low at first and too high later. The problem is that this line is too steep (has too large a slope).      Thanh decides to try a line that is less steep. After drawing in a few lines, he decides to try the line between the points for Counties C and D instead, which has equation Unfortunately this line seems too low. (Again the negative intercept isn't visible.)     Neither of these lines came close to the point for County H on the far right, so Thanh considers one more line, this time through County H and County R, which has equation This line has a positive intercept just above 3,000 tons\/year, as you can see on the graph.      Thanh thinks the H-R line is reasonable, but it makes him wonder how to decide if one line is better than another. Generally speaking the best fitting line makes the space between the line and the data points as small as possible. (There is actually a much more official definition.) After using a little statistical software, Thanh determines that for this data set, the official best fitting line has equation   Thanh wants to add this line to his graph so first he calculates a few values. While it's true that any two points would do, he played it safe and plotted three points, being sure to use 0 in order to find the intercept.     0  600  1,500     2,741  8,741  17,741    He graphs this line and notices it is very similar to the H-R line, just a tiny bit higher and a tiny bit steeper. The points from the table are highlighted on the graph just to help you see how we graphed the line. Remember, those aren't actual data points.     Thanh is bothered by the fact that County H seems to be off on its own. The largest city in this area is in County H. Between the budget crunch and the nature of the urban landscape, the city tends to use much less road salt than the surrounding areas. So County H really isn't very typical at all. In statistics, this sort of value is known by the descriptive term outlier (as in it lies way out there. )  So Thanh decides to look at the statistically best-fitting line ignoring County H this time. Back to his software and he finds This line is less steep than the T-A line and higher than the C-D line. Seems perfect.     "
},
{
  "id": "sec-Fitting_lines_to_data-5",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lane mile "
},
{
  "id": "sec-Fitting_lines_to_data-28",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "best fitting line "
},
{
  "id": "sec-Fitting_lines_to_data-33",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outlier "
},
{
  "id": "sec-Modeling_exponential_equations",
  "level": "1",
  "url": "sec-Modeling_exponential_equations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Modeling with exponential equations",
  "body": " Modeling with exponential equations  My grandmother was born in eastern Europe at the end of the 1800s. When she was eight years old her parents brought her and her younger sister and brother to the United States to escape harsh treatment by the government. Both her parents had to work, so my grandmother dropped out of school when she was thirteen years old to take care of the children, which now included another brother and sister.  Time passed and she married a handsome young veteran of World War I, who had also immigrated to the country as a young child. For her wedding dowry his parents bought my grandmother a set of sterling silverware, valued at $800 in 1920. My grandmother was very proud of her sterling and used it often.  Over the years, the sterling has increased in value, let's say by around 3% per year. In 1957, my grandmother handed it down to my mother as a wedding present. In 1990, I married and my mother handed the sterling down to me. What was it was it worth at those times, and how much should it be insured for through 2015?  Let's write the equation to answer these questions. The variables should be    value of sterling ($) dep    time (years since 1920) indep    We're saying that the sterling increased 3% per year in value. For example, in 1921, the sterling was worth Remember the shortcut here? The idea is after one year we have the original $800 plus 3% more for a grand total of 103% of what we had before. And 103% = 1.03.  After 5 years, the sterling was worth since multiplying by 1.03 five times is the same as multiplying by . On the calculator we do   Generalizing, we get our equation which can be rewritten as This equation fits our template for an exponential equation   Quick recap. A function is exponential if it corresponds to a fixed percent increase (or decrease). The percent increase is the growth rate ; in our example, the growth rate is . The number we multiply by is the growth factor and it is also the base of the power in the equation; in our example, the growth factor is . The Percent Change Formula from Section 2.2 reminds us that   Let's answer those questions. In 1957, we had years and so By 1990, we had years and so By 2015, we have years and so   Let's summarize this information in a table and draw a graph.    year  1920  1921  1925  1957  1990  2015     0  1  5  37  70  95     800  824  927  2,388  6,334  13,262       Actually, the insurance policy allows for up to $20,000. The curve we drew suggests that the value will be $20,000 just past (the year 2020), probably somewhere around (the year 2030).  We can use successive approximation to improve our answer.    year  2020  2030  2029  2028     100  110  109  108     15,375  20,663  20,061  19,476    vs. 20,000  low  high  high  low    Seems to be around the year 2029, where , as we had guessed.  Of course, we can solve the exponential equation instead. To find when we use our equation to get Divide each side by 800 to get and so Since we want to solve for the exponent, we use the Log-Divides Formula with growth factor and the value to get We rounded up to make sure it would reach the full $20,000. Since 1920 + 109 = 2029, we see (again) that the value should reach $20,000 in the year 2029.  As an aside, look what happens when we calculate the rate of change for this function. For example, during the first five years, and from 1925 to 1957, In the first few years, the value increased an average of $25.40 a year, but from 1925 to 1957 it increased an average of about $45.66 per year.  Were we supposed to get different numbers here? Well, the graph's not a line and it's not a linear equation. That tells us the rate of change isn't going to be constant. So, sure, different numbers are fine. Does it make sense that the rate of change would itself increase? That the value increases at an increasing rate? Yes. Although we are always just adding on 3%, we're taking 3% of larger numbers each year. So more is added each year.  "
},
{
  "id": "sec-Modeling_exponential_equations-10",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#sec-Modeling_exponential_equations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential growth rate growth factor "
},
{
  "id": "sec-Exp_growth_decay",
  "level": "1",
  "url": "sec-Exp_growth_decay.html",
  "type": "Section",
  "number": "5.2",
  "title": "Exponential growth and decay",
  "body": " Exponential growth and decay  It is 2:00 a.m. and Joe is up studying. The dorm has quieted down, but Joe's feeling mighty jittery. He drank 5 large mugs of coffee in the past few hours and all that caffeine is peaking in his system now. At around 200 mg per mug, Joe wonders when his caffeine levels will drop down to where he can sleep a little.  First things first: staying up that late to study is probably a bad idea. I mean, who can think properly at 2:00 in the morning? And, how tired is Joe going to be by the time his test rolls around? Plus, we know that which is a lot of caffeine, probably more than he needed to stay awake.  At this point Joe is stuck so let's help him. Let's say that at 2:00 a.m. he has 1,000 mg of caffeine in his blood. Joe searches online and discovers that 13% of the caffeine should leave his body each hour and below 300 mg he should be fine. When will that happen?  We know how percent increase works, but here the caffiene is leaving his body according to a percent decrease . I guess we need to figure it out one step at a time. After one hour (by 3:00 a.m.), Joe will have By 4:00 a.m. (after 2 hours), Joe will have   Wait a minute. When we calculated 13% decrease on 1,000 mg we got 870 mg. That's 87% of 1,000. Yeah, that's right, take off 13% and you should be left with 87% of what you started with because . So we could have calculated and then Aha, to find the amount after a 13% decrease we just multiply by 0.87.  Still nowhere near 300 mg so fast-forward. For example, after 5 hours (at 7:00 a.m.), we need to multiply 1,000 by 0.87 five times where we use a power to abbreviate repeatedly multiplying. So   The bad news is that it's 7:00 a.m. and Joe is still too jittery to sleep. The good news is that we can write the equation. The variables are !-- div attr= class=\"center\"-->   Joe's caffeine level (mg) dep    time (hours since 2:00 a.m.) indep    Our equation must be Notice this equation fits our template for an exponential equation.   A little terminology here. When a function is exponential but decreasing, it's called exponential decay . It sounds a little odd to say growth factor if the quantity is getting smaller so we sometimes say decay factor instead. We know from the Percent Change Formula that the growth factor ( ) can be found from the growth rate (r) by the formula . If we think of 13% decrease as negative growth rate, , then the formula still works to find the decay factor ( )   Back to jittery Joe. Let's summarize what we've found and add a few more times to see when Joe's caffeine level should fall below 300 mg. !-- div attr= class=\"center\"-->   time  2:00  3:00  4:00  5:00  6:00  7:00  8:00  9:00  10:00  11:00     0  1  2  3  4  5  6  7  8  9     1,000  870  756.9  658.5  572.9  498.4  433.6  377.3  328.2  285.5    vs. 300  high  high  high  high  high  high  high  high  high  low    That means Joe should be able to fall asleep by around 11:00 a.m. Exactly when his exam starts. Sorry, Joe.  We could have solved the equation instead. We were looking for . Using our equation we get Divide each side by 1,000 to get which simplifies to   We find ourselves in the familiar situation – solving to find the exponent. Logs to the rescue. By the The Log-Divides Formula with growth factor and value we get which corresponds to 11:00 a.m. Same answer. Much quicker.  Quick side note. We could have rounded to 8.64 hours and then converted units to get Counting from 2:00 a.m., we see that Joe's caffeine levels drop below 300 mg at 10:39 a.m. Since we are approximating throughout the problem, we should round to 11:00 a.m. anyway.  Let's calculate the rate of change and think about what it means. During the first hour, Was the rate of change supposed to be negative? Sure. Joe's caffeine level is dropping. Any decreasing function has a negative rate of change. And, as exam time approaches, Joe's caffeine level was dropping faster at first and is not dropping as fast now.  A glance at the graph confirms our findings.     One last thing. There's another way to describe the decrease here. When our story began Joe's caffeine level was around 1,000 mg and after 5 hours it was at 498.4 mg. That's just about 500 mg, or half of what he started with. We say the half-life of caffeine is around 5 hours.  Doesn't sound very important but check this out. Start with 1,000 mg. After 5 hours, there's 500 mg left. (Okay, approximately.) Now go another 5 hours, which means 10 hours total. Evaluate our equation when to get That means half of what was left is now gone. Go another 5 hours. Lose another half. Check for yourself: And so on. Cool.  "
},
{
  "id": "sec-Exp_growth_decay-11",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#sec-Exp_growth_decay-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential decay decay factor "
},
{
  "id": "sec-Exp_growth_decay-21",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#sec-Exp_growth_decay-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "half-life "
},
{
  "id": "sec-Growth_factor",
  "level": "1",
  "url": "sec-Growth_factor.html",
  "type": "Section",
  "number": "5.3",
  "title": "Growth factors",
  "body": " Growth factors  Obesity among children ages 6-11 continues to increase. From 1994 to 2010, the proportion of children classified as obese rose from an average of 1.1 out of every ten children in 1994 to around 2 out of every ten children in 2010.  Source: Center for Disease Control and Prevention    Assuming that the prevalence of childhood obesity increases exponentially, what is the annual percent increase and what does the equation project for the year 2020? Well, unless we are able to make drastic improvements in how children eat and how much they exercise.  Because we are told obesity is increasing exponentially we can use the template for an exponential equation. The variables are    obese children (out of every ten) dep    year (years since 1994) indep    The starting amount is 1.1 children out of every ten in 1994 so our equation is of the form Trouble is we don't actually know what the growth factor is. Yet.  We do know that in 2010 we have years and . We can put those values into our equation to get No good reason for switching sides, just wanted to have the variable on the left. That's supposed to be true but we don't know what number is so we can't check. Argh.  Oh, wait a minute. The only unknown in that equation is the growth factor . What if we solve for ? First, divide each side by 1.1 to get which simplifies to Since we want to solve for the base (not the exponent), we have a power equation. We use the Root Formula with power and value to get   Want a quicker way to find the growth factor? Forget the entire calculation we just did. It all boils down to two steps: and then We can even do this calculation all at once as Notice we added parentheses because the normal order of operations would do the root first and division second. We wanted the division calculated before the root.  Here's the easy version in a formula.   Growth Factor Formula   If a quantity is growing (or decaying) exponentially, then the growth (or decay) factor is where is the starting amount and is the amount after time periods.    We knew from the beginning that our equation was in the form . Now that we found the growth factor we get our final equation For example, we can check that in 2010, we have still and so   You might wonder why we didn't just round off and use the equation Look what happens when we evaluate at then. We would get Not a big difference (2.1 vs. 2.0) but enough to encourage us to keep extra digits in the growth factor in our equation. Lesson here is: don't round off the growth factor too much.   Back to the more reliable equation We can now answer the two questions. First, in 2020 we have and so According to our equation, by 2020 there would be approximately 2.9 obese children for every ten children.  The other question was what the annual percent increase is. Think back to an earlier example. Remember that Jocelyn was analyzing health care costs in Section 2.2? They began at $2.26 million and grew 6.7% per year. She had the equation So the growth factor in the equation came from the growth rate . Our equation modeling childhood obesity is The growth factor of in our equation must come must come from the growth rate . Think of it as converting to percent and then ignoring the 100% to see the 3.81% increase. Childhood obesity has increased around 3.81% each year. Well, on average.  Here's the general formula relating the growth rate and growth factor.   Percent Change Formula (updated version)      If a quantity changes by a percentage corresponding to growth rate , then the growth factor is     If the growth factor is , then the growth rate is        Let's check. We have and so the growth rate is Not sure we really need these formulas, but there you have it.  By the way, formula works just fine if a quantity decreases by a fixed percent. One example we saw was Joe, who drank too much coffee. The growth (or should I say decay) factor was . That corresponds to a growth (decay) rate of Again, the negative means that we have a percent decrease.  "
},
{
  "id": "def-growth-factor-formula",
  "level": "2",
  "url": "sec-Growth_factor.html#def-growth-factor-formula",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Growth Factor Formula.",
  "body": " Growth Factor Formula   If a quantity is growing (or decaying) exponentially, then the growth (or decay) factor is where is the starting amount and is the amount after time periods.   "
},
{
  "id": "def-percent-change-formula-2",
  "level": "2",
  "url": "sec-Growth_factor.html#def-percent-change-formula-2",
  "type": "Definition",
  "number": "5.3.2",
  "title": "Percent Change Formula (updated version).",
  "body": " Percent Change Formula (updated version)      If a quantity changes by a percentage corresponding to growth rate , then the growth factor is     If the growth factor is , then the growth rate is       "
},
{
  "id": "sec-Linear_vs_exponential",
  "level": "1",
  "url": "sec-Linear_vs_exponential.html",
  "type": "Section",
  "number": "5.4",
  "title": "Linear vs. exponential models",
  "body": " Linear vs. exponential models  Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700. She wonders when the car would be practically worthless, meaning under $500.  We can describe the variables in this story. !-- div attr= class=\"center\"-->   mileage (thousand miles) indep    value of car ($) dep    Notice we are measuring the mileage in thousands. The information we are given is     0  109     22,500  5,700    But what's the equation? Hmm. Don't know for sure what type of equation might work here. Tell you what, let's compare what a linear and exponential model would tell us about the value of the car.  First, linear. The template is The starting value of Sofía's car is $22,500 so we just need to find the slope. We expect the slope to be negative because her car is worth less the more she drives it. Her car loses value at a rate of around $154 for each thousand miles she drives.  We are ready to write the linear equation. As usual we wrote this with subtraction instead of adding the negative slope. Quick check: when we get Remember we don't expect the exact answer because we rounded off the slope.  When will Sofía's car be worth under $500 according to this linear equation? Let's solve to find out. When , use our linear equation to get Subtract 22,500 from each side and simplify to get Now divide each side by -154 and simplify to get According to the linear equation, Sofía's car will be worth under $500 at about 143,000 miles. Since her car already has 109,000 miles on it, that means in another . For a typical driver that's two or three more years.  Next, let's take a look at the exponential model. Here goes. The template is We know everything except the growth factor. We expect it to be less than 1 because her car is worth less the more she drives it. Perhaps we should say decay factor here since the function is decreasing. The starting amount is and the ending amount is after thousand miles. By the Growth Factor Formula we have   We are ready to write the exponential equation. Quick check: when we get Again, we don't expect the exact answer because we rounded off the decay factor.  When will Sofía's car be worth under $500 according to this exponential equation? Let's solve to find out. When , use our exponential equation to get Divide each side by 22,500 and simplify to get By the The Log-Divides Formula with growth factor and the value we get According to the exponential equation, Sofía's car will be worth under $500 at about 300,000 miles. Hard to imagine the car would last that long. Essentially the exponential model says the car will always be worth at least $500, if only for parts, I guess. Quite different from our answer from the linear equation.  Time to compare models. Which one makes more sense? First things first, the car already has a lot of miles on it. Don't know what make or model the car is, but another couple of years seems a reasonable time until is worth under $500. That's what the linear equation projects. On the other hand, the exponential model project it will hold that value for a long time, essentially for parts. That makes sense too.  Wait a minute. Does a car lose the same value for each thousand miles it's driven? That's what it means to be linear. Every thousand miles, same decrease. Nah, that's not right. Once the car is old, another 1,000 miles or so probably won't affect the value at all. Also, when a car is new, once you drive it off the lot and then that strange vinyl smell wears off and it's officially used, the car is worth a lot less. Even if it hasn't been driven much at all. What would each model say the car was worth soon after Sofía bought it, say with 10,000 miles on it? With , the estimates are !-- div attr= class=\"center\"-->   linear:     exponential:     The lower value, from the exponential equation, seems more reasonable.  Here are a few more values and the graph. The graph is shows both the line and exponential curve have intercept just over $22,000, which should be $22,500. The line and curve intersect again between 100,000 and 120,000 miles (close to the exact mileage of 109,000) at right under $6,000 (close to the exact value of $5,700). !-- div attr= class=\"center\"-->    0  10  50  80  109  200  250    (if linear)  22,500  20,960  14,800  10,180  5,714      (if exponential)  22,500  19,841  11,996  8,225  5,711  1,818  969   !-- div attr= class=\"center\"-->    There's no way of knowing whether the function is linear or exponential. It is probably not exactly either one. But if we have to pick, the exponential model seems closer to reality.  "
},
{
  "id": "sec-Logistic_growth",
  "level": "1",
  "url": "sec-Logistic_growth.html",
  "type": "Section",
  "number": "5.5",
  "title": "Logistic and other growth models",
  "body": " Logistic and other growth models  A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing rapidly. After 2 weeks, there were 64 students with the flu. We are interested in predicting how many students will catch the flu over the next 6 weeks or so. To get a sense of scale, there are students currently living in the dorms.  The variables are    time since first cases (days) indep    total number of students with the flu (students) dep    One model estimates that the number of students diagnosed with the flu was growing 16% per day. (If this story sounds familiar, it's because the story also appears in the practice exercises 2.2 #3 and 5.1 #2.) The corresponding equation is As a check, at 14 days there were We rounded the numbers in our table to the nearest person.     0  7  14  21  28  35  42    ( exponential )  8  23  64  181  510  1,442  4,077    While at first the exponential model seems reasonable, it quickly gets too large to make sense. After all, there are only students currently living in the dorms so the numbers we found at 5 and 6 weeks (also known as 35 and 42 days) are totally unrealistic. The exponential model is based on the assumption that the rate of change of the number of new cases is proportional to the number of infected students: those who already have the flu.  There are both advantages and disadvantages of the exponential model. To it's credit, the exponential model captures the reality of the first few weeks, where the flu spreads very rapidly. But, the exponential model misses several basic facts. First, as more students catch the flu, the number of new cases decreases in part because sick people are already surrounded by sick people so there aren't new people to get sick. Second, for whatever reasons, not everyone is going to catch the flu no matter how exposed they are. We would like to have an alternative model that keeps what works (rapid increase at first) but deals better with the long term (the growth slows down and not everyone catches the flu). There are two different models we consider that have these properties: saturation and logistic.  The first example is a saturation model. Basically it assumes that the rate of change of the number of new cases is proportional to the number of susceptible students: those who are likely to catch the flu but haven't already. Since at the beginning many susceptible students don't have the flu, it spreads very quickly, even faster than the exponential does. But once most susceptible students have caught the flu, the number of new cases dwindles.  Leaving out the details of how we found it, a possible saturation equation for our example is As a check, initially there were and at 14 days there were We rounded the numbers in our table to the nearest person.     0  7  14  21  28  35  42    ( saturation )  8  43  64  77  85  89  92    The saturation model predicts that 92 students (total) will have (or have had) the flu over the next 6 weeks.  The second example is a logistic (or S-curve ) model. Basically it assumes that the rate of change of the number of new cases is jointly proportional to the number of infected students and the number of susceptible students. It acknowledges the heavy influence the number of infected students have initially on the growth, but balances it with the limiting influence of the diminishing number of susceptible students over time.  It turns out that a possible logistic equation for our example is For example, initially there were and at 14 days there were Notice how we need parentheses around the bottom of our fraction, as usual, to override the normal order of operations. We rounded the numbers in the table to the nearest person.     0  7  14  21  28  35  42    ( logistic )  8  26  64  102  121  127  128    The logistic model projects that 128 students (total) will have (or have had) the flu over the next 6 weeks, considerably more than projected by the saturation model.  Here are all three models on the same graph.     As you can see from the graph, both the saturation and logistic curves level off as expected. One way to estimate those limiting values (or carrying capacity ) is to evaluate the functions at large values, say 60 days, 100 days, and (the unrealistic) days.     60  100  1,000    ( exponential )       ( saturation )  94.86  95.94  96.00    ( logistic )  128.98  128.99  129.00    We crossed out the unrealistic values from the exponential equation. So, if the saturation model is accurate, then we should expect around 96 total cases. But, if the logistic model is accurate, then we should expect around 129 total cases instead.  Look back at the equations: The limiting values were there all along!  "
},
{
  "id": "sec-Logistic_growth-7",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infected "
},
{
  "id": "sec-Logistic_growth-9",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saturation susceptible "
},
{
  "id": "sec-Logistic_growth-13",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic S-curve "
},
{
  "id": "sec-Logistic_growth-19",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limiting values carrying capacity "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
