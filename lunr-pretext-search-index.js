var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thanks, first, to the thousands of students who have taken this course. Their creative approaches to learning mathematics; their unedited criticism and challenge; their often surprising enthusiasm for the course; their patience tried by countless typos and outright mistakes; and their perpetually novel insights have humbled me and challenged everything I thought I knew about teaching and learning mathematics. They have inspired me time and time again. I am grateful that they have allowed me to make a difference in their lives.  Thanks, next, to my mathematics colleagues at Augsburg: Mathew Foss (now at North Hennepin Community College), who taught from the very first edition of the textbook back in 1997 and who collaborated in writing earlier versions; Matt Haines, Alyssa Hanson, Rich Flint, and the dozens of other professors who have taught the course over the years from various earlier editions of the textbook; John Zobitz and Jody Sorensen, who edited and created more exercises for this 2012 edition; and student helpers Ashley Gruhlke and Emma Winegar.  Thanks, also, to my colleagues across campus for allowing us to try something completely different and to my mathematics colleagues nationally for spurring me on. During the first few years I taught from Using algebra by Ethan Bolker. Much of my approach and probably more examples or exercises than I realize are derived from his vision and from the subsequent text by his colleagues Linda Kime and Judy Clark at University of Massachusetts, Boston.  A special thanks to Dean Barbara Farley, Augsburg's Center for Teaching and Learning, and Augsburg's Undergraduate Research and Graduate Opportunity program for supporting my work through sabbaticals, travel grants, and summer research grants for both me and students.   Dr. Suzanne Dorée, Augsburg University   "
},
{
  "id": "preface-why-this-book-web",
  "level": "1",
  "url": "preface-why-this-book-web.html",
  "type": "Preface",
  "number": "",
  "title": "Why <em class=\"emphasis\">Just Enough Algebra<\/em>?",
  "body": " Why Just Enough Algebra ?  In 1994, my colleagues at Augsburg College and I had a vision for a new course to replace our intermediate algebra course. We wanted a college level course that would serve primarily as preparation for quantitative courses across the curriculum. The framing question that led to our curricular adventure of the past three decades was   What algebra do college students need to know, and how can we make it relevant to their future studies, their lives as citizens, and their everyday life?   From these questions Just enough algebra was born.  As you will see, everything we do is in some applied context. Our choice to focus primarily on linear and exponential models; to emphasize verbal, numerical, and graphical interpretation of functions; and to include only the most essential symbolic techniques align well with curricular guides from the MAA   Curricular Guide , Committee on the Undergraduate Mathematics Program (CUPM) and Curriculum Foundations Project: Voices of the Partner Disciplines , Curriculum Renewal Across the First Two Years (CRAFTY), Mathematical Association of America (MAA), 2004 and CRAFTY's Recommendations for College Algebra , 2007  and AMATYC   Crossroads in Mathematics Standards for Introductory College Mathematics Before Calculus , American Mathematical Association of Two-Year Colleges (AMATYC), 1995 and the follow up Beyond Crossroads report, AMATYC, 2006.  . More importantly, it works. Student learn a lot in this course. They are ready for what comes next. And, they enjoy it.   Dr. Suzanne Dorée, Augsburg University   "
},
{
  "id": "preface-for-students-web",
  "level": "1",
  "url": "preface-for-students-web.html",
  "type": "Preface",
  "number": "",
  "title": "Students! Read this!",
  "body": " Students! Read this!  This textbook is written for you.  Read the narrative examples, listen to examples in class, try the practice exercises, check with classmates or your instructor, then work the exercises in this textbook, then chat with classmates again, then do more problems Well, you get the idea: the best way to learn mathematics is to do it yourself.  I hope you enjoy the course. I know you will learn a lot of useful algebra. I believe it will change how you see mathematics.   Dr. Suzanne Dorée, Augsburg University   "
},
{
  "id": "preface-for-instructors-web",
  "level": "1",
  "url": "preface-for-instructors-web.html",
  "type": "Preface",
  "number": "",
  "title": "Instructors! Read this!",
  "body": " Instructors! Read this!  This textbook is written for students. That means you won't find list of student learning objectives anywhere, although I'm sure you can infer them from the student-focused Do you know questions in each section. While the narrative examples develop the main theme of each section, I've deliberately left some variations for the practice exercises (#1-4 in each section). These practice exercises are designed to be started during class and are printed in a separate workbook for that purpose. Hand-written solutions to the practice exercises are available (in electronic format) for students to check their work, whether in class or at home.  At Augsburg College we usually begin class with a brief entrance quiz on the previous section or some other activity to review. Next, the instructor presents one well-chosen example illustrating the main theme of the new section and works through that problem on the board, with students helping with the calculations along the way. For me, part of the fun of teaching this course is creating lecture examples from the day's news or connected to popular culture, but in a pinch there is often an exercise in the textbook that can be used for that purpose.  Then, students work with a classmate on the practice exercises (#1-4 in each section) while the instructor circulates to answer questions and help students stay on task. The first exercise in each section of the workbook parallels the main theme, but I've deliberately left some variations for students to discover in the second and third exercises. The fourth exercise varies, but often wanders a bit off the main path. We normally budget 30 minutes of class time for student work. This timing allows nearly all students to finish at least the first exercise and check their solution; most students finish two or three exercises; and even our fastest students rarely finish all four exercises in under 30 minutes.  My greatest success in teaching this course has been to give students room to figure things out for themselves, so try to resist the temptation to show them one of everything. Listen to your students and help them understand the algebra in their own vocabulary. You will be impressed.   Dr. Suzanne Dorée, Augsburg University   "
},
{
  "id": "sec-Approximation_and_rounding",
  "level": "1",
  "url": "sec-Approximation_and_rounding.html",
  "type": "Section",
  "number": "0.1",
  "title": "Prelude: Approximation &amp; rounding",
  "body": " Prelude: Approximation & rounding   How tall is that maple tree? If you think about it, it is not obvious how to measure the height of a tree. We could measure to the highest leaf, but it seems odd to say that the tree is shorter if a leaf falls off. Or we could measure to the top of a branch, but it might bend lower in the wind. Or we could measure to the top of a thick enough branch, whatever that means. The point is that we don't know how to measure the height of a tree that precisely. By the way, the word precisely refers to the number of decimal digits.  Could the maple tree be 93.2 feet tall? No way. That's too precise. Is 93 feet tall correct? Maybe, but we could be off by a couple of feet depending on where we measure. Perhaps we can hedge slightly and call it 95 feet tall. Hopefully that's reasonable. Or maybe we should play it really safe and say it is not quite 100 feet tall. The point is: there is no such thing as the right answer. When we ask a real world question, we want a real world answer. The answer depends on the question.   While it is good to keep as many digits as possible during calculations, at the end of a problem you should approximate the answer by rounding – finding the closest number of a given precision. The height of 93.2 feet was likely rounded to the nearest tenth (one decimal place). We rounded to the nearest whole number to get 93 feet. The point is that 93.2 is closer to 93.0 than it is to 94.0, so our answer is 93.0 or 93 feet.  Perhaps this is a good place to mention the notation. We write to indicate that we have rounded. The symbol means approximately equal to .  How much to round off the answer depends on the question. To begin you should apply your common sense. Your answer should definitely sound natural, something you might actually say to a friend or your boss. But there's also one more rule to know: Your answer should not be more precise than the information in the problem.   For example, suppose we read that the comprehensive fee at a local university is around $23,000 and projected to increase by 12% per year. We want to calculate the comprehensive fee in 4 years. As we'll learn later in this course, the answer is The dots indicate that we have not copied all the digits from the calculator. We could round to the nearest penny and say around $36,190.95. Or, we could round to the nearest dollar and say around $36,191. The numbers we are given ($23,000 and 12%) have only two digits that matter, however, so we should actually round off and say just over $36,000.   By the way, when we refer to digits that matter, we are really referencing significant digits . That theory explains how combining numbers influences the number of digits in the answer that are accurate, which is why we wait until our final answer to round. In this text we do not follow those rules exactly, but you should be aware that some areas of study, such as Chemistry, do.  You might be surprised to learn that approximate answers are not only good enough; they are often best. For one thing, in practice we want a round number so it is easy to understand and work with our answer. A rounded answer is just approximate. Also often the numbers we are given in a problem were rounded or approximated – for the record, that fee was really $23,058, not $23,000. When we start with approximate numbers, then no matter how precise the mathematics we use, we can only get approximate answers. Also, in much of this course the methods we will use to calculate answers are, themselves, approximate. We might suppose that tuition increases exactly 12% each year, when we know in reality that the percent will likely vary. That is an example of using an approximate model . Last, we might have an actual model but use some numerical or graphical technique for solving. That is an example of using an approximation technique. In either case, if the model or technique we use is approximate, then our answer can only be either. There is an old saying we try to live by in this course.   I'd rather be approximately right than precisely wrong.   One more subtlety. We have been rounding to the nearest number of a given precision. That process is also known as rounding off . There are times when we will need to round up – to the next highest number of a given precision, or round down – to the next lowest number of a given precision.  For example, during Happy Hour at a local restaurant, buffalo wings sell for 60¢ per wing. Your buddy only has $7. After a quick calculation on his cell phone he decides to order a dozen wings. Your buddy probably calculated Trouble is he cannot afford a dozen wings, because they would cost $7.20. (Check .) Not to mention the tax, tip, and that beer he drank. Good thing you can point him to the bank machine so he can get cash and you won't have to pay his tab (again). What's the trouble here? Besides ignoring tax, tip, and that beer he rounded off when he should have rounded down : It should be clear from the story whether you will need to round off, round up, or round down. Again, our mantra is: the answer depends on the question.    Do you know     What the symbol for approximately equal to is?    Why an approximate answer is often as good as we can get?    What the term precisely refers to?    What the saying I'd rather be approximately right than precisely wrong means?    What the difference is between rounding off, rounding up, and rounding down?    When to round your answer, and when to round your answer up or down (instead of off)?    How to round a decimal to the nearest whole number? To one decimal place? To two decimal places?    How precisely to round an answer?    How to compare sizes of decimal numbers?    What the symbol for greater than is?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.      Round each number up, down, or off to the precision indicated.   Stories also appear in      My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.      Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?      The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately. What if a different estimate was 4,890,225? Would that change your answer?         The answer to the question should we round up, down, or off? is usually it depends!      Callista needs $117 cash for a mani-pedi at the local salon. The ATM allows her to withdraw multiples of $20. How much money should she withdraw and how many $20 bills is that? Did you round up, down, or off?      Bahari is buying some 8-packs of sparkling water for today's community hour. He expects up to 23 people to be there. He calculates that he will need 8-packs. How many 8-packs should he bring? Did you round up, down, or off?      Tzuf has $20 to buy apples for the new year's celebration. A bag of apples costs $3.49. Tsuf calculates that they can afford bags. How many bags can they buy? Did you round up, down, or off?      Eiji read that life expectancy in the United States is 77.28 years whereas in Japan it is 84.62 years. How might he describe these life expectancies in (whole) years? Did you round up, down, or off?         Round off the calculated numbers to give an answer that is reasonable and no more precise than the information given.     The snow removal budget for the city is currently at $8.3 million but the city council is requesting a reduction of $1.15 million per year. We calculate that after three years of cuts, the snow removal budget will be million.      A cup of cooked red lentils has around 190 calories and 6.4 grams of dietary fiber, while a cup of cooked chickpeas has around 172 calories and 12.0 grams of dietary fiber. We calculate that lentils provide grams per calorie whereas chickpeas provide grams per calorie.      Hibbing, Minnesota is the hometown of baseball star Roger Maris, basketball great Kevin McHale, the Greyhound Bus lines, the Hull-Rust-Mahoning Open Pit Iron Mine and, perhaps most famously, songwriter Bob Dylan. It is not a big town.  In 2000 the population of Hibbing, Minnesota was reported at just over 17,000 residents. Based on a projected 0.4% decrease per year, the 2010 population was calculated to be people.         It is easiest to compare the size of decimal numbers when they are written the same precision. For example, $1.7 million is more money than $1.34 million because when we write both numbers to two decimal places we see The symbol means greater than; it points to the smaller number. Alternatively, when we expand both numbers we see In each story, write all of the decimal numbers given to the same precision and list the numbers from largest to smallest using signs.     Dawn tested a water sample from her apartment and found 21.19 ppm of sulfate. She volunteers at a local soup kitchen where the water sample tested at 21.3 ppm. (The abbreviation ppm stands for parts per million . Not to worry - sulfate levels below 250 are considered safe for human consumption.)      There are approximately 1.084 million quarters in circulation in the United States, compared to 1.786 million dimes, 1.6 million $5 bills, and 1.42 million $10 bills.        The original budget estimate for the new community center gym is $148,214.779. Round this value:     To the nearest penny (two decimal places).      To the nearest dollar.      To the nearest thousand.      To the nearest ten thousand. That means ending in 0,000        Anwar measured that he has 23 feet and 9 inches of space for string lights for his bedroom. He calculates that's 23.75 feet.     Approximately how many feet should he buy? Did you round up, down, or off?      Uh oh, lights only come in packs with 10 feet of string lights per pack. How many packs of string lights should Anwar buy if he wants to fit the whole space? Did you round up, down, or off?      Packs of string lights cost $12 each and Anwar has $30 to spend. How many packs of string lights can he afford to buy? Did you round up, down, or off?      How do we describe the precision of the answer in part (a)? Your answer should be in the form to the nearest       How do we describe the precision of the answer in part (b)? Your answer should be in the form to the nearest        Body Mass Index (or BMI for short) is one indicator of whether a person is a healthy weight. BMI between 18.5 and 24.9 are considered normal . Jarron is 6 foot 4 inches tall, which he calculated is approximately 1.93 meters. He weighs 202 pounds, which he calculated was approximately 91.625 kilograms. He would like to calculate his BMI directly using the formula he found online.   Story also appears in      Jarron entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?   More later on where this calculation comes from. If your calculator does not have the key, look for key instead.       Suppose Jarron had rounded off his height to 1.9 meters and his weight to 92 kilograms. Calculate his BMI by entering the following keystrokes on a scientific calculator: What do you get? Round your answer to one decimal place. Is Jarron's BMI considered normal ?      What would you tell Jarron?      What lesson did we just learn about rounding in the middle of the problem versus waiting until the end?       Linnea is trying to plot points on a graph and needs numbers rounded to the nearest $10. For example, she needs to know that $247 $250 while $73 $70. Round each number to the nearest $10:     $589      $41      $190      $2       Souksavanh is trying adjust a patient's medication to deliver 15 g\/min. If she runs the drip at 9.1 mL\/hour, medication will be delivered at 14.76 g\/min which is too low. If she runs the drip at 9.3 mL\/hour, medication will be delivered at 15.09 g\/min which is too high.   (Story also appears in )      Which of these values are between 9.1 and 9.3 mL\/hour:  9.18 mL\/hour, 9.22 mL\/hour, 9.07 mL\/hour, 9.41mL\/hour?      If she runs the drip at 9.2 mL\/hour, medication will be delivered at 14.93 g\/min which is still too low. Souk would like to try a rate between 9.2 and 9.3 mL\/hour. What rate can she try? That means, identify a number between 9.2 and 9.3. Hint: Try thinking of them as 9.20 and 9.30.       She has narrowed it down to between 9.24 and 9.25 mL\/hour (though perhaps the drip can't be controlled that precisely). What can she try? That means, identify a number between 9.24 and 9.25. Hint: Try thinking of them to three decimal places.       "
},
{
  "id": "sec-Approximation_and_rounding-2-1",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "precisely "
},
{
  "id": "sec-Approximation_and_rounding-2-3",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rounding "
},
{
  "id": "sec-Approximation_and_rounding-2-4",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "approximately equal to "
},
{
  "id": "sec-Approximation_and_rounding-2-7",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "significant digits "
},
{
  "id": "sec-Approximation_and_rounding-2-8",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "approximate model approximation technique. "
},
{
  "id": "sec-Approximation_and_rounding-2-10",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#sec-Approximation_and_rounding-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rounding off round up round down "
},
{
  "id": "up-down-off-approx-round",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#up-down-off-approx-round",
  "type": "Exercise",
  "number": "0.1.1",
  "title": "",
  "body": "  Round each number up, down, or off to the precision indicated.   Stories also appear in      My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.      Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?      The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately. What if a different estimate was 4,890,225? Would that change your answer?    "
},
{
  "id": "depends-appprox-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#depends-appprox-rounding",
  "type": "Exercise",
  "number": "0.1.2",
  "title": "",
  "body": "  The answer to the question should we round up, down, or off? is usually it depends!      Callista needs $117 cash for a mani-pedi at the local salon. The ATM allows her to withdraw multiples of $20. How much money should she withdraw and how many $20 bills is that? Did you round up, down, or off?      Bahari is buying some 8-packs of sparkling water for today's community hour. He expects up to 23 people to be there. He calculates that he will need 8-packs. How many 8-packs should he bring? Did you round up, down, or off?      Tzuf has $20 to buy apples for the new year's celebration. A bag of apples costs $3.49. Tsuf calculates that they can afford bags. How many bags can they buy? Did you round up, down, or off?      Eiji read that life expectancy in the United States is 77.28 years whereas in Japan it is 84.62 years. How might he describe these life expectancies in (whole) years? Did you round up, down, or off?    "
},
{
  "id": "round-calculated-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#round-calculated-approx-rounding",
  "type": "Exercise",
  "number": "0.1.3",
  "title": "",
  "body": "  Round off the calculated numbers to give an answer that is reasonable and no more precise than the information given.     The snow removal budget for the city is currently at $8.3 million but the city council is requesting a reduction of $1.15 million per year. We calculate that after three years of cuts, the snow removal budget will be million.      A cup of cooked red lentils has around 190 calories and 6.4 grams of dietary fiber, while a cup of cooked chickpeas has around 172 calories and 12.0 grams of dietary fiber. We calculate that lentils provide grams per calorie whereas chickpeas provide grams per calorie.      Hibbing, Minnesota is the hometown of baseball star Roger Maris, basketball great Kevin McHale, the Greyhound Bus lines, the Hull-Rust-Mahoning Open Pit Iron Mine and, perhaps most famously, songwriter Bob Dylan. It is not a big town.  In 2000 the population of Hibbing, Minnesota was reported at just over 17,000 residents. Based on a projected 0.4% decrease per year, the 2010 population was calculated to be people.    "
},
{
  "id": "round-compare-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#round-compare-approx-rounding",
  "type": "Exercise",
  "number": "0.1.4",
  "title": "",
  "body": "  It is easiest to compare the size of decimal numbers when they are written the same precision. For example, $1.7 million is more money than $1.34 million because when we write both numbers to two decimal places we see The symbol means greater than; it points to the smaller number. Alternatively, when we expand both numbers we see In each story, write all of the decimal numbers given to the same precision and list the numbers from largest to smallest using signs.     Dawn tested a water sample from her apartment and found 21.19 ppm of sulfate. She volunteers at a local soup kitchen where the water sample tested at 21.3 ppm. (The abbreviation ppm stands for parts per million . Not to worry - sulfate levels below 250 are considered safe for human consumption.)      There are approximately 1.084 million quarters in circulation in the United States, compared to 1.786 million dimes, 1.6 million $5 bills, and 1.42 million $10 bills.    "
},
{
  "id": "budget-estimate-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#budget-estimate-approx-rounding",
  "type": "Exercise",
  "number": "0.1.5",
  "title": "",
  "body": "  The original budget estimate for the new community center gym is $148,214.779. Round this value:     To the nearest penny (two decimal places).      To the nearest dollar.      To the nearest thousand.      To the nearest ten thousand. That means ending in 0,000     "
},
{
  "id": "string-lights-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#string-lights-approx-rounding",
  "type": "Exercise",
  "number": "0.1.6",
  "title": "",
  "body": "  Anwar measured that he has 23 feet and 9 inches of space for string lights for his bedroom. He calculates that's 23.75 feet.     Approximately how many feet should he buy? Did you round up, down, or off?      Uh oh, lights only come in packs with 10 feet of string lights per pack. How many packs of string lights should Anwar buy if he wants to fit the whole space? Did you round up, down, or off?      Packs of string lights cost $12 each and Anwar has $30 to spend. How many packs of string lights can he afford to buy? Did you round up, down, or off?      How do we describe the precision of the answer in part (a)? Your answer should be in the form to the nearest       How do we describe the precision of the answer in part (b)? Your answer should be in the form to the nearest     "
},
{
  "id": "bmi-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#bmi-approx-rounding",
  "type": "Exercise",
  "number": "0.1.7",
  "title": "",
  "body": "  Body Mass Index (or BMI for short) is one indicator of whether a person is a healthy weight. BMI between 18.5 and 24.9 are considered normal . Jarron is 6 foot 4 inches tall, which he calculated is approximately 1.93 meters. He weighs 202 pounds, which he calculated was approximately 91.625 kilograms. He would like to calculate his BMI directly using the formula he found online.   Story also appears in      Jarron entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?   More later on where this calculation comes from. If your calculator does not have the key, look for key instead.       Suppose Jarron had rounded off his height to 1.9 meters and his weight to 92 kilograms. Calculate his BMI by entering the following keystrokes on a scientific calculator: What do you get? Round your answer to one decimal place. Is Jarron's BMI considered normal ?      What would you tell Jarron?      What lesson did we just learn about rounding in the middle of the problem versus waiting until the end?    "
},
{
  "id": "round-ten-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#round-ten-approx-rounding",
  "type": "Exercise",
  "number": "0.1.8",
  "title": "",
  "body": "  Linnea is trying to plot points on a graph and needs numbers rounded to the nearest $10. For example, she needs to know that $247 $250 while $73 $70. Round each number to the nearest $10:     $589      $41      $190      $2    "
},
{
  "id": "iv-drip-approx-rounding",
  "level": "2",
  "url": "sec-Approximation_and_rounding.html#iv-drip-approx-rounding",
  "type": "Exercise",
  "number": "0.1.9",
  "title": "",
  "body": "  Souksavanh is trying adjust a patient's medication to deliver 15 g\/min. If she runs the drip at 9.1 mL\/hour, medication will be delivered at 14.76 g\/min which is too low. If she runs the drip at 9.3 mL\/hour, medication will be delivered at 15.09 g\/min which is too high.   (Story also appears in )      Which of these values are between 9.1 and 9.3 mL\/hour:  9.18 mL\/hour, 9.22 mL\/hour, 9.07 mL\/hour, 9.41mL\/hour?      If she runs the drip at 9.2 mL\/hour, medication will be delivered at 14.93 g\/min which is still too low. Souk would like to try a rate between 9.2 and 9.3 mL\/hour. What rate can she try? That means, identify a number between 9.2 and 9.3. Hint: Try thinking of them as 9.20 and 9.30.       She has narrowed it down to between 9.24 and 9.25 mL\/hour (though perhaps the drip can't be controlled that precisely). What can she try? That means, identify a number between 9.24 and 9.25. Hint: Try thinking of them to three decimal places.     "
},
{
  "id": "sec-Arithmetic_operations",
  "level": "1",
  "url": "sec-Arithmetic_operations.html",
  "type": "Section",
  "number": "0.2",
  "title": "Prelude: Arithmetic operations",
  "body": " Prelude: Arithmetic operations   Numbers, numbers everywhere – how do we put them together to get a final answer?  As a first example, Zahra needs to complete 200 hours of classroom observation before she is eligible to student teach. She logged 45 hours last spring, another 42 hours this past fall, and is on pace to finish 51 hours this spring. How many more hours will she need next fall to finish here 200 hours?  Let's begin by figuring out how many hours Zahra finished before this semester. She did 45 hours and then another 42 hours. We add to get the total number of hours. If we add in the number of hours from this spring, her total will be   We assume you are using a calculator to add these numbers. It is a good habit to write down the keystrokes you do. Perhaps you did this sequence of keystrokes. and then That works, but it is not necessary to type the 87 in yourself. Instead try this sequence of keystrokes. Did you get 138 again? When you typed that first equal sign the calculator should have displayed 87, and after the second equal sign, the final answer of 138. That works too, but the first equal sign is not needed. Try this shortest (best!) sequence of keystrokes. Hopefully you got 138 again.  How many more hours does Zahra need to reach the goal of 200 hours? We are looking for the number of hours where We find the missing time by subtracting You can check that or, starting from the beginning Any way you calculate it, Zahra is going to have a busy fall.  Here's another example. Cole was shocked by his credit card bill. It shows a previous balance of $529.16, credit for a payment of $200, finance charge of $42.78, a late fee of $30 (ouch!), a credit for $17.43 for a return he made, and $618.25 in new charges.  Cole would like to practice his math and check the balance on his bill. One way to calculate his balance is to add the charges while subtracting the credits. Cole calculates   Sometimes credits are represented by negative numbers. Another way Cole could calculate the answer is to add the mix of positive numbers (charges) and negative numbers (credits). You may notice that the sign used for subtraction and - used for negation look very similar. On the calculator these are two different keys. The subtraction key reads just . The negation key often reads (-) and is done before the number. This does not mean you type in parentheses, just hit the key that is labeled (-) already. In this notation, we can write what Cole entered as Try it.  (If your calculator does not have a key labeled (-) , look for a key labeled +\/- instead. That is not three keys, just one labeled +\/- . To emphasize that it is one key, we just write ± . Often that key needs to follow the number, so enter the following keystrokes. You should get $1002.76 again.)  There are times when it is convenient to rewrite a sum in a different order. That can get tricky if there are both + and -. Rewriting each subtraction as addition of a negative keeps the minus signs where they belong. For example, Cole might have calculated Notice how the subtractions stay with the payment of $200 and credit of $17.43.  Another example. There was a lot of snow this winter and the rainiest May anyone can remember. So now the river has been rising rapidly, 10 inches a day some say, for the past 3 weeks. How much has the river risen in total?  We need to deal with some units here. How many days is 3 weeks? There are 7 days in a week so in three weeks there are Since multiplication is short for addition, we can calculate this number more quickly. (Most calculators have a key, but in some computer programs * is used instead.)  At 10 inches per day, the river has risen which we calculate as The river has risen 210 inches.  The river has risen 210 inches, you say? Hmm. How many feet is that? There are 12 inches in a foot so we want We find the missing rise by dividing   (Many calculators use a key labeled instead of the more old fashioned . We use the notation since the slash has so many different meanings and is easily misread. Just remember to do whenever you see in this book. Try You should get 17.5 again.)  Any way you calculate it, the river has risen 17.5 feet, or nearly 18 feet. Sadly it turns out that is 6 feet above flood stage for this stretch of river, so the flooding is causing a lot of damage.  Two more examples. There are two other situations in which we divide. The first is fractions. If we are given a fraction, like of residents have Internet access, we might want to have a decimal approximation to do further calculations. We find it by dividing The bar in between the 2 and 3 in the fraction stands for division. It might help to remember this connection visually. So if there are 14,573 residents, and have Internet access, then we can multiply to find the number of residents with Internet access. Since 0.67 only has two digits that matter (and we rounded up to get it), we would round our answer down to compensate and say there were around 9700.  Can we say that there 9,764 residents with Internet access? If we had used 0.666666666 instead we would have calculated Sounds like we should play it safe and say over 9,700 residents have internet access. The most accurate calculation would be to do the multiplication and division all at once. It would be acceptable to estimate at 9,715 residents.  Another cause for division is the word per . What is her pace, in minutes per mile, if Karleen runs 6.3 miles in 50 minutes? With the units we would write Karleen runs just under 8 minutes per mile.    Do you know     When to add, subtract, multiply, or divide numbers?    What is the difference between subtraction and negation?    How to add, subtract, negate, multiply, and divide on a calculator?    How multiplication is related to addition?    What the term per indicates?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.    On each problem, write down what you enter into your calculator and don't forget to write the units on your final answer. You are welcome to calculate the answer step-by-step but challenge yourself to figure out the answer all at once, not hitting = on your calculator until the very end.      Tensia loves to garden but can't quite keep up with how many cucumbers are growing.    At the start of the week she had 8 cucumbers in her refrigerator.    Her son, Néstor took 3 home with him after dinner on Monday.    Tensia harvested another 7 cucumbers on Wednesday.    Her neighbor Sarah graciously took 4 cucumbers to make pickles.    Tensia herself ate 2 cucumbers during the week.    How many cucumbers does she have left over?      Brent's landlord charges $15 per day for late rent.     What will Brent's late fee be if he is 6 days late paying his rent?      If Brent got a bill showing $195 in late fees, how many days late did he pay his rent?         There are 2,624 students at a local university.     About of those students live on or within a mile of campus. How many students live on or within a mile of campus?      The university wants to support 40 hours a week of onsite tutoring (in mathematics, writing, etc.) for each the 32 weeks that classes are in session. It costs about $18\/hour to pay the tutors and staff administrators. What is the total cost of tutoring?      The university is considering adding a tutoring fee to cover the cost of tutoring. If they wanted to cover the total cost of tutoring, what would the cost per student be?       A truck hauling grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The gross weight of the truck is the total weight including the truck and the bags of seed. (Story also appears in , , and )      How much does 1,300 bags of grass seed weigh?      What is the gross weight of the truck if it carries 1,300 bags of grass seed?      You probably entered this calculation as . What happens if you skip the middle = sign and enter instead?      What answer does your calculator give you if you enter instead?      What does part (d) tell you about which operation your calculator did first: the or the ?        Mrs. Nystrom gets $1,453.46 per month in Social Security benefits and another $1,250 per month from a life annuity. She pays $540.60 per month in taxes and $1,749 each month for rent and utilities. How much does she have left each month for food, entertainment, and other expenses?   Story also appears in , , and        McKenna drives 60 miles per hour on the highway. How far does she drive in two and a half hours (that's 2.5 hours)? How far does she drive in 45 minutes (that's of an hour)? Story also appears in       Nhia drove to visit his cousin in Detroit, which is 690 miles from where he lives in Saint Paul. If he spent 10 and a half hours driving (that's 10.5 hours), how fast was Nhia driving (on average)? Round your answer to the nearest whole number.       When the Nussbaums planted a walnut tree it was 5 feet tall. It has grown around 2 feet a year.   (Story also appears in and )      How tall was the tree 1, 2, and 3 years after they planted it?      How tall is the tree now, 18 years after they planted it?       The public beach near Paloma's house 60 years ago was 435 feet long and now is only 210 feet long due to erosion. The length of the beach is measured from the dunes to the high water mark. Story also appears in and      How many feet shorter is the beach now, compared to 60 years ago?      Approximately how many feet per year is the beach eroding?       Each yard of fabric is 3 feet long.     Virgil needs 4 yards of fabric to sew a prototype of a new suit. How many feet of fabric does Virgil need?      If there are 15 feet of fabric left on the bolt, how many yards of fabric is that?       There are 60 minutes in an hour. (I bet you knew that!)     Nala has been helping her sister with her homework for 2 hours, 15 minutes (that's 2.25 hours). How many minutes has Nala been helping her sister?      Yesterday Nala helped her dad at the restaurant for 50 minutes, which is of an hour. If Nala hopes her dad will pay her $11 per hour, how much should she ask her dad for?      "
},
{
  "id": "cucumbers-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#cucumbers-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Tensia loves to garden but can't quite keep up with how many cucumbers are growing.    At the start of the week she had 8 cucumbers in her refrigerator.    Her son, Néstor took 3 home with him after dinner on Monday.    Tensia harvested another 7 cucumbers on Wednesday.    Her neighbor Sarah graciously took 4 cucumbers to make pickles.    Tensia herself ate 2 cucumbers during the week.    How many cucumbers does she have left over?   "
},
{
  "id": "late-rent-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#late-rent-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  Brent's landlord charges $15 per day for late rent.     What will Brent's late fee be if he is 6 days late paying his rent?      If Brent got a bill showing $195 in late fees, how many days late did he pay his rent?    "
},
{
  "id": "students-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#students-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  There are 2,624 students at a local university.     About of those students live on or within a mile of campus. How many students live on or within a mile of campus?      The university wants to support 40 hours a week of onsite tutoring (in mathematics, writing, etc.) for each the 32 weeks that classes are in session. It costs about $18\/hour to pay the tutors and staff administrators. What is the total cost of tutoring?      The university is considering adding a tutoring fee to cover the cost of tutoring. If they wanted to cover the total cost of tutoring, what would the cost per student be?    "
},
{
  "id": "truck-grass-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#truck-grass-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.4",
  "title": "",
  "body": "  A truck hauling grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The gross weight of the truck is the total weight including the truck and the bags of seed. (Story also appears in , , and )      How much does 1,300 bags of grass seed weigh?      What is the gross weight of the truck if it carries 1,300 bags of grass seed?      You probably entered this calculation as . What happens if you skip the middle = sign and enter instead?      What answer does your calculator give you if you enter instead?      What does part (d) tell you about which operation your calculator did first: the or the ?    "
},
{
  "id": "social-security-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#social-security-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.5",
  "title": "",
  "body": "  Mrs. Nystrom gets $1,453.46 per month in Social Security benefits and another $1,250 per month from a life annuity. She pays $540.60 per month in taxes and $1,749 each month for rent and utilities. How much does she have left each month for food, entertainment, and other expenses?   Story also appears in , , and    "
},
{
  "id": "driving-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#driving-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.6",
  "title": "",
  "body": "   McKenna drives 60 miles per hour on the highway. How far does she drive in two and a half hours (that's 2.5 hours)? How far does she drive in 45 minutes (that's of an hour)? Story also appears in       Nhia drove to visit his cousin in Detroit, which is 690 miles from where he lives in Saint Paul. If he spent 10 and a half hours driving (that's 10.5 hours), how fast was Nhia driving (on average)? Round your answer to the nearest whole number.    "
},
{
  "id": "walnut-tree-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#walnut-tree-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.7",
  "title": "",
  "body": "  When the Nussbaums planted a walnut tree it was 5 feet tall. It has grown around 2 feet a year.   (Story also appears in and )      How tall was the tree 1, 2, and 3 years after they planted it?      How tall is the tree now, 18 years after they planted it?    "
},
{
  "id": "beach-erosion-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#beach-erosion-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.8",
  "title": "",
  "body": "  The public beach near Paloma's house 60 years ago was 435 feet long and now is only 210 feet long due to erosion. The length of the beach is measured from the dunes to the high water mark. Story also appears in and      How many feet shorter is the beach now, compared to 60 years ago?      Approximately how many feet per year is the beach eroding?    "
},
{
  "id": "fabric-yards-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#fabric-yards-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.9",
  "title": "",
  "body": "  Each yard of fabric is 3 feet long.     Virgil needs 4 yards of fabric to sew a prototype of a new suit. How many feet of fabric does Virgil need?      If there are 15 feet of fabric left on the bolt, how many yards of fabric is that?    "
},
{
  "id": "minutes-arithmetic-operations",
  "level": "2",
  "url": "sec-Arithmetic_operations.html#minutes-arithmetic-operations",
  "type": "Exercise",
  "number": "0.2.10",
  "title": "",
  "body": "  There are 60 minutes in an hour. (I bet you knew that!)     Nala has been helping her sister with her homework for 2 hours, 15 minutes (that's 2.25 hours). How many minutes has Nala been helping her sister?      Yesterday Nala helped her dad at the restaurant for 50 minutes, which is of an hour. If Nala hopes her dad will pay her $11 per hour, how much should she ask her dad for?    "
},
{
  "id": "sec-Percentages",
  "level": "1",
  "url": "sec-Percentages.html",
  "type": "Section",
  "number": "0.3",
  "title": "Prelude: Percentages",
  "body": " Prelude: Percentages   In a recent basketball game against the Dallas Wings, Minnesota Lynx star Napheesa Collier took 16 free throws and made 11 of them. The fraction, or proportion, of free throws she made is   To calculate Collier's free throw percentage, we need to remember how percents work. Luckily, the word percent is very descriptive. The cent part means hundred, like 100 cents in a dollar or 100 years in a century. And, as usual, per means for each. Together, percent means per hundred. For example, the number 20% means 20 for each hundred. Written as a fraction it is . Divide to get the decimal  Bottom line: 20%, , and 0.20 mean exactly the same number. Since we divided by 100 to go from percentage to decimal, we can reverse this process and go from decimal to percentage by multiplying by 100. Check it out:   Back to Collier. She made 11 out of 16 free throws, which was of her free throws. Now we know Her free throw percentage that game was 68.8%. Collier's free throw percentage for the season is actually much lower, at 48.1%. How many free throws out of 16 would we have expected she would make? We need to figure out what 48.1% of 16 is. First, we convert 48.1 to decimal by dividing by 100: Next, we multiply that proportion by 16: We can even do this calculation in just one step: Either way, would have expected Collier to make 7 or 8 of her free throws. So, 11 was a really good night. Turns out she scored 29 points that game with 7 rebounds.  Thang attended that Lynx-Wings game and ordered the hot chicken sandwich with pickles for $14.59. When she tapped her debit card to pay, the machine offered her three choices for tip: 10%, 15% or 20%. As you can check, the machine calculated that 10% tip would add $1.46, the 15% tip would add $2.19, and the 20% tip would add $2.92. Knowing that the concession staff that night was fundraising for a group she supports, Thang selected 20% and her total bill was .  Thang's ticket was good for 10% off the purchase of Lynx merchandise from their website and there was free shipping, so she decided to buy a jersey normally priced at $99. Since 10% of $99 is she knows that her discount will be $9.90. (I added the extra 0 at the end because $9.9 looked strange.) The net price for the jersey will be With the discount, Thang can buy the jersey for $89.10.  In general, we can find the result of a percent increase , like Thang's sandwich plus tip, by calculating the percent and adding it to the original amount. And we can find the result of a percent decrease , like Thang's on-sale jersey, by calculating the percent and subtracting it from the original amount.    Do you know     What the words per and cent mean in the word percent?     How to convert a fraction or decimal to a percent?    How to convert a percent to a decimal?    How to calculate a percentage of a number?    How to calculate the result of a percent increase or a percent decrease?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.    On each problem, write down what you enter into your calculator and don't forget to write the units on your final answer. You are welcome to calculate the answer step-by-step but challenge yourself to figure out the answer all at once, not hitting on your calculator until the very end.      As I write this problem, the population of the world is 8,056,959,718 people (just over 8 billion). It changes by the second, so let's use the round figure of 8,100,000,000. (Story also appears in )      I read that the population of Brazil accounts for 2.69% of the world's population. According to that report, what is the population of Brazil? Round your answer to the nearest million.      If the population of the United States is currently around 334,000,000, what percentage of the world's population is in the United States?       In Minneapolis, apartment rent is expected to increase by 16% next year.   (Story also appears in and )      Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. If their rent increased by 16% what would their new rent be?      Lucky for Astra, their building is subject to rent stabilization laws and so their rent cannot increase by more than 3%. What would their new rent be?         The intersection by my house is dangerous. One year there were 14 accidents there. The neighbors got together and petitioned to have 4-way stop signs installed.     The city estimated that the installed stop signs would reduce accidents at least 40%. If that happens, how many accidents would we expect the next year?      The national average shows that the new signs could reduce accidents up to 62%. If that happens instead, how many accidents would we expect the next year?      If there were 6 accidents the next year, is that in the range you figured out? What percent decrease does that correspond to?       My savings account earns a modest amount of interest, the equivalent of 0.75% annually. I have $12,392.18 in the account now. (Story also appears in )      How much interest will I earn this year?      How much will my account balance be at the end of the year?         Check for yourself that the tip of Thang's $14.59 sandwich would be $1.46 if she had chosen 10%, $2.19 if she had chosen 15%, and $2.92 when she chose 20%.      What would the net cost of Thang's jersey be if she had a 20% discount (off the $99 price) instead?       Donations to a local food shelf have increased 35% over last year. There were 3,400 pounds of food donated last year. How many pounds of food were donated this year?   (Story also appears in and )       Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at the rate of 12% each hour. How much caffeine is left in her blood after 1 hour?   (Story also appears in )       Too much salt can be difficult for your body. The Centers for Disease Control and Prevention (CDC) suggest that adults limit their daily intake of Sodium to a maximum of 2,300 mg per day.     Omer ate a snack sized bag of chili-flavored corn chips containing 9% of the daily maximum allowance of Sodium. How many milligrams of Sodium did he eat?      Selu ate the lightly salted corn chips instead containing 80 mg Sodium. What percentage of the daily maximum allowance of Sodium is in the lightly salted corn chips?       Tenzin bought a house for $291,900 but the housing market collapsed and his house value dropped 4.1% since he bought it. What is Tenzin's house worth now?   (Story also appears in )        Story also appears in      Mai's salary was $78,000 before she got a 6% raise. What was her salary after the raise?      The following year Mai only got a 1.5% raise. What was her salary after this second raise? Be careful to use your answer to part (a) to compute the 1.5% increase.      "
},
{
  "id": "sec-Percentages-2-2",
  "level": "2",
  "url": "sec-Percentages.html#sec-Percentages-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percent "
},
{
  "id": "sec-Percentages-2-6",
  "level": "2",
  "url": "sec-Percentages.html#sec-Percentages-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percent increase percent decrease "
},
{
  "id": "world-population-percentages",
  "level": "2",
  "url": "sec-Percentages.html#world-population-percentages",
  "type": "Exercise",
  "number": "0.3.1",
  "title": "",
  "body": "  As I write this problem, the population of the world is 8,056,959,718 people (just over 8 billion). It changes by the second, so let's use the round figure of 8,100,000,000. (Story also appears in )      I read that the population of Brazil accounts for 2.69% of the world's population. According to that report, what is the population of Brazil? Round your answer to the nearest million.      If the population of the United States is currently around 334,000,000, what percentage of the world's population is in the United States?    "
},
{
  "id": "astra-rent-percentages",
  "level": "2",
  "url": "sec-Percentages.html#astra-rent-percentages",
  "type": "Exercise",
  "number": "0.3.2",
  "title": "",
  "body": "  In Minneapolis, apartment rent is expected to increase by 16% next year.   (Story also appears in and )      Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. If their rent increased by 16% what would their new rent be?      Lucky for Astra, their building is subject to rent stabilization laws and so their rent cannot increase by more than 3%. What would their new rent be?    "
},
{
  "id": "intersection-percentages",
  "level": "2",
  "url": "sec-Percentages.html#intersection-percentages",
  "type": "Exercise",
  "number": "0.3.3",
  "title": "",
  "body": "  The intersection by my house is dangerous. One year there were 14 accidents there. The neighbors got together and petitioned to have 4-way stop signs installed.     The city estimated that the installed stop signs would reduce accidents at least 40%. If that happens, how many accidents would we expect the next year?      The national average shows that the new signs could reduce accidents up to 62%. If that happens instead, how many accidents would we expect the next year?      If there were 6 accidents the next year, is that in the range you figured out? What percent decrease does that correspond to?    "
},
{
  "id": "savings-interest-percentages",
  "level": "2",
  "url": "sec-Percentages.html#savings-interest-percentages",
  "type": "Exercise",
  "number": "0.3.4",
  "title": "",
  "body": "  My savings account earns a modest amount of interest, the equivalent of 0.75% annually. I have $12,392.18 in the account now. (Story also appears in )      How much interest will I earn this year?      How much will my account balance be at the end of the year?    "
},
{
  "id": "check-thang-percentages",
  "level": "2",
  "url": "sec-Percentages.html#check-thang-percentages",
  "type": "Exercise",
  "number": "0.3.5",
  "title": "",
  "body": "   Check for yourself that the tip of Thang's $14.59 sandwich would be $1.46 if she had chosen 10%, $2.19 if she had chosen 15%, and $2.92 when she chose 20%.      What would the net cost of Thang's jersey be if she had a 20% discount (off the $99 price) instead?    "
},
{
  "id": "food-shelf-percentages",
  "level": "2",
  "url": "sec-Percentages.html#food-shelf-percentages",
  "type": "Exercise",
  "number": "0.3.6",
  "title": "",
  "body": "  Donations to a local food shelf have increased 35% over last year. There were 3,400 pounds of food donated last year. How many pounds of food were donated this year?   (Story also appears in and )    "
},
{
  "id": "caffeine-percentages",
  "level": "2",
  "url": "sec-Percentages.html#caffeine-percentages",
  "type": "Exercise",
  "number": "0.3.7",
  "title": "",
  "body": "  Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at the rate of 12% each hour. How much caffeine is left in her blood after 1 hour?   (Story also appears in )    "
},
{
  "id": "salt-intake-percentages",
  "level": "2",
  "url": "sec-Percentages.html#salt-intake-percentages",
  "type": "Exercise",
  "number": "0.3.8",
  "title": "",
  "body": "  Too much salt can be difficult for your body. The Centers for Disease Control and Prevention (CDC) suggest that adults limit their daily intake of Sodium to a maximum of 2,300 mg per day.     Omer ate a snack sized bag of chili-flavored corn chips containing 9% of the daily maximum allowance of Sodium. How many milligrams of Sodium did he eat?      Selu ate the lightly salted corn chips instead containing 80 mg Sodium. What percentage of the daily maximum allowance of Sodium is in the lightly salted corn chips?    "
},
{
  "id": "house-value-percentages",
  "level": "2",
  "url": "sec-Percentages.html#house-value-percentages",
  "type": "Exercise",
  "number": "0.3.9",
  "title": "",
  "body": "  Tenzin bought a house for $291,900 but the housing market collapsed and his house value dropped 4.1% since he bought it. What is Tenzin's house worth now?   (Story also appears in )    "
},
{
  "id": "raises-percentages",
  "level": "2",
  "url": "sec-Percentages.html#raises-percentages",
  "type": "Exercise",
  "number": "0.3.10",
  "title": "",
  "body": "   Story also appears in      Mai's salary was $78,000 before she got a 6% raise. What was her salary after the raise?      The following year Mai only got a 1.5% raise. What was her salary after this second raise? Be careful to use your answer to part (a) to compute the 1.5% increase.    "
},
{
  "id": "sec-Order_of_operations",
  "level": "1",
  "url": "sec-Order_of_operations.html",
  "type": "Section",
  "number": "0.4",
  "title": "Prelude: Order of operations",
  "body": " Prelude: Order of operations   Remember Cole who was shocked by his credit card bill? His bill showed a previous balance of $529.16, credit for a payment of $200, finance charge of $42.78, a late fee of $30 (ouch!), a credit for $17.43 for a return he made, and $618.25 in new charges. How can we help Cole check his balance?  The most direct way to calculate Cole's balance would be step-by-step.   The underlined numbers are what the calculator will show. Cole doesn't type those numbers.  We can avoid typing in answers (which can lead to errors) by continuing one big calculation instead.   Cole found an even quicker way to check the balance. He did not hit until the very end of the calculation. He just did the calculation all in one line.   Notice that there are both addition ( ) and subtraction ( ) operations in this one-line calculation. These two operations ( and ) are tied for priority in the order of operations, so the calculator works from left to right. This one line calculation is equivalent to doing the much slower step-by-step process!  By the way, the word priority means of higher importance and, therefore, coming before. For example, doing your math homework should be a higher priority than watching random videos online. But getting a good night's sleep should be a higher priority than studying for a test. (You'll have to trust me on that one.)  Earlier we heard about the Nussbaums who planted a walnut tree. The tree was 5 feet tall when the planted it. It has grown around 2 feet a year. According to this information, the tree was feet tall after one year, feet tall after two years, feet tall after three years, and so on. We wanted to know how tall the tree was after 18 years.  One way to calculate the answer is to first figure out how much the tree grew in 18 years. That is which we calculate as Next, we add the original height plus how much the tree grew to get The tree was 41 feet tall after 18 years.  Inspired by Cole's one-line calculation, let's do this calculation all in one line. One option is Notice we are only hitting the key at the end. We get 41 feet, again.  But wait! What if I wanted to enter the starting height first (5 feet) and then add on how much the tree grew (36 feet). I should be able to do that because also. What happens when you enter You should get 41 again.  Something strange is happening. Either the calculator is reading your mind (probably not possible yet, but Artificial Intelligence is making great progress), or the calculator has a secret order of operations. The calculator is not just working from left to right because that would be   That is not what the calculator did. The calculator first did the multiplication ( ) and then did the addition ( ). It turns out that multiplication ( ) is higher priority than addition ( ) and subtraction ( ) in the order of operations.  You will need to know the full order of operations so that you know when the calculator is doing what you want. Here's the full list of the order of operations , the priority ranking for arithmetic operations.   Order of operations     First, calculate anything inside P arentheses.    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.      We highlighted the letters PEMDAS which often helps people remember this order. ( Please Excuse My Dear Aunt Sally is how I learned it.) Outside of the United States this rule has names such as BEDMAS, BIDMAS, BODMAS, PODMAS, PIDMAS, or even GEMDAS. Notice that multiplication ( ) and division ( ) are tied for priority just like addition ( ) and subtraction ( ) were.  The good news is that your calculator does the operations in exactly this order. For example, remember Jarron who was calculating his BMI? He entered which is in the range considered healthy. Of course, there are many more factors to health besides height and weight. Like getting enough exercise is really important. But, back to the calculation, how did that work?  According to the order of operations, the calculator did the exponent ( ) first and then the division ( ) second. Let's check it out:   That's correct because exponents ( ) are higher priority in the order of operations than the other arithmetic operations ( ).  Remember that is short for . Don't believe me? Try both on your calculator to see. Your calculator may have a key marked or it might be marked . We will come back to exponents in more depth later.  What can we do if we want the calculator to work in a different order? For example, suppose in the Asian student association that there are 3 Chinese students, 15 Hmong students, 11 Vietnamese students, and 5 students who do not identify with any of these ethnicities. We'd like to report the percentage of students in the group who are Hmong.  First we need to calculate the total number of students There are 34 students and 15 identify as Hmong. That means the proportion of Hmong students is and so the percentage of students in the group who are Hmong is Notice we can do these last two calculations in one line as because multiplication ( ) and division ( ) are tied for priority in the order of operations.  Can we do the entire calculation in one line? Sure, but it does not work to do What did the calculator do? Since multiplication ( ) and division ( ) are higher priority than addition ( ), the calculator first figured out that and and then it calculated . Argh.  We wanted the calculator to do the addition ( ) first. That's not the order of operations the calculator will use. What can we do to fix that? Parentheses to the rescue! Parentheses have the highest priority in the order of operations, meaning the calculator will evaluate inside the parentheses before doing any other operations. So we can do this calculation all in one line by using parentheses as   As you work through the exercises, challenge yourself to find one-line calculations to use. You are always welcome to do the slower step-by-step method to check.    Do you know     How a calculator will evaluate an expression that has several different operations, such as ?    What is the order of operations in general?    A good way to remember PEMDAS?    Why you need to know what the order of operations is?    When might you need to override the order of operations?    How to override the order of operations using parentheses?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.    On each problem, write down what you enter into your calculator and don't forget to write the units on your final answer. Challenge yourself to use one-line calculations. You are welcome to calculate the answer step-by-step to check.       (Story also appears in , , and )      A mug of coffee costs $3.45 at Juan's favorite cafe. If Juan orders 25 coffees each month, how much will he pay (total) for the month?      The cafe offers a deal each month, where if you buy their $10 discount card, then you only pay $2.90 per mug of coffee during the month. If Juan buys the discount card and orders 25 coffees, how much will he pay (total) for the month?      Comparing answers to parts (a) and (b), is it worthwhile for Juan to buy the card? Explain.        Rose gold is a mix of gold and copper.   (Story also appears in , , and )      If we mix 2 grams of gold with 2 grams of copper, what is the percentage of gold in the resulting alloy?      If instead we mix 2 grams of gold with 7 grams of copper, what is the percentage of gold in the resulting alloy?          (Stories also appear in and )      Vanessa's doctor put her on a sensible diet and exercise plan to get her back to a healthy weight. She currently weighs 213 pounds. She will need to lose an average of 1.25 pounds a week to reach her goal weight in a year. What is her goal weight? Use 1 year = 52 weeks.      Since she has been pregnant, Zoe has gained the recommended pound per week. She weighed 153 at the start of her pregnancy. What does she weigh now at 30 weeks pregnant?         (Stories also appear in and )      Jerome has gained weight since he took his power training to the next level ten weeks ago, at the rate of around 1 pound a week. He is now 198 pounds. What was his original weight?      After the past 6 weeks of terrible migrane headaches, Carlos is down to 158 pounds. He has lost 4 pounds a week. What did Carlos weigh 6 weeks ago before the migraines started?        Recall that in the Asian student association there were 3 Chinese students, 15 Hmong students, 11 Vietnamese students, and 5 students who do not identify with any of these ethnicities. What percentage of students in the group identify as Vietnamese?      Patience has been saving for a trip. She started her savings account with a deposit of $300. For the past 18 months she's been adding $250 per month. Unfortunately she needed to withdraw $1,080 for an unexpected car repair. She has earned a total of $43 interest. How much is in Patience's account now?      Mike Powell has held the men's long jump record since 1991. He jumped an amazing 29 feet, 4 inches. We would like to write this length as a decimal number of feet.     First, write 4 inches as a decimal number of inches. Note that this length means .      Next, convert your answer into feet by dividing by 12, since there are 12 inches in a foot.      Last, add your answer to 29 feet and round to the nearest two decimal places.      Valentina was trying to figure out the answer in one line on his calculator. He tried What answer does Valentina get? Oops!      Add one set of parentheses to correct Valentina's work.       My house gets super dry in the winter, especially if we are away not cooking or using the shower. Last January I left a 5 quart pot full of water on my living room radiator for a week and when I got home there was perhaps 1 cup of water left.     How many cups of water are in 5 quarts? There are 4 cups in every quart.      How many cups of water evaporated?      How fast was the water evaporating, measured in cups per day? (Hint: use that there are 7 days in a week.)      Cadde was trying to figure out the answer in one line on his calculator. He tried What answer did Cadde get? Oops!      Add one set of parentheses to correct Cadde's work.      "
},
{
  "id": "sec-Order_of_operations-2-9",
  "level": "2",
  "url": "sec-Order_of_operations.html#sec-Order_of_operations-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "priority "
},
{
  "id": "sec-Order_of_operations-2-17",
  "level": "2",
  "url": "sec-Order_of_operations.html#sec-Order_of_operations-2-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order of operations "
},
{
  "id": "order-operations-2",
  "level": "2",
  "url": "sec-Order_of_operations.html#order-operations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "P E M D A S "
},
{
  "id": "juan-coffee-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#juan-coffee-order-operations",
  "type": "Exercise",
  "number": "0.4.1",
  "title": "",
  "body": "   (Story also appears in , , and )      A mug of coffee costs $3.45 at Juan's favorite cafe. If Juan orders 25 coffees each month, how much will he pay (total) for the month?      The cafe offers a deal each month, where if you buy their $10 discount card, then you only pay $2.90 per mug of coffee during the month. If Juan buys the discount card and orders 25 coffees, how much will he pay (total) for the month?      Comparing answers to parts (a) and (b), is it worthwhile for Juan to buy the card? Explain.    "
},
{
  "id": "rose-gold-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#rose-gold-order-operations",
  "type": "Exercise",
  "number": "0.4.2",
  "title": "",
  "body": "   Rose gold is a mix of gold and copper.   (Story also appears in , , and )      If we mix 2 grams of gold with 2 grams of copper, what is the percentage of gold in the resulting alloy?      If instead we mix 2 grams of gold with 7 grams of copper, what is the percentage of gold in the resulting alloy?    "
},
{
  "id": "weight-change-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#weight-change-order-operations",
  "type": "Exercise",
  "number": "0.4.3",
  "title": "",
  "body": "   (Stories also appear in and )      Vanessa's doctor put her on a sensible diet and exercise plan to get her back to a healthy weight. She currently weighs 213 pounds. She will need to lose an average of 1.25 pounds a week to reach her goal weight in a year. What is her goal weight? Use 1 year = 52 weeks.      Since she has been pregnant, Zoe has gained the recommended pound per week. She weighed 153 at the start of her pregnancy. What does she weigh now at 30 weeks pregnant?    "
},
{
  "id": "ex-Order_of_operations-5-2",
  "level": "2",
  "url": "sec-Order_of_operations.html#ex-Order_of_operations-5-2",
  "type": "Exercise",
  "number": "0.4.4",
  "title": "",
  "body": "    (Stories also appear in and )      Jerome has gained weight since he took his power training to the next level ten weeks ago, at the rate of around 1 pound a week. He is now 198 pounds. What was his original weight?      After the past 6 weeks of terrible migrane headaches, Carlos is down to 158 pounds. He has lost 4 pounds a week. What did Carlos weigh 6 weeks ago before the migraines started?    "
},
{
  "id": "asian-students-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#asian-students-order-operations",
  "type": "Exercise",
  "number": "0.4.5",
  "title": "",
  "body": "  Recall that in the Asian student association there were 3 Chinese students, 15 Hmong students, 11 Vietnamese students, and 5 students who do not identify with any of these ethnicities. What percentage of students in the group identify as Vietnamese?   "
},
{
  "id": "savings-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#savings-order-operations",
  "type": "Exercise",
  "number": "0.4.6",
  "title": "",
  "body": "  Patience has been saving for a trip. She started her savings account with a deposit of $300. For the past 18 months she's been adding $250 per month. Unfortunately she needed to withdraw $1,080 for an unexpected car repair. She has earned a total of $43 interest. How much is in Patience's account now?   "
},
{
  "id": "long-jump-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#long-jump-order-operations",
  "type": "Exercise",
  "number": "0.4.7",
  "title": "",
  "body": "  Mike Powell has held the men's long jump record since 1991. He jumped an amazing 29 feet, 4 inches. We would like to write this length as a decimal number of feet.     First, write 4 inches as a decimal number of inches. Note that this length means .      Next, convert your answer into feet by dividing by 12, since there are 12 inches in a foot.      Last, add your answer to 29 feet and round to the nearest two decimal places.      Valentina was trying to figure out the answer in one line on his calculator. He tried What answer does Valentina get? Oops!      Add one set of parentheses to correct Valentina's work.    "
},
{
  "id": "water-radiator-order-operations",
  "level": "2",
  "url": "sec-Order_of_operations.html#water-radiator-order-operations",
  "type": "Exercise",
  "number": "0.4.8",
  "title": "",
  "body": "  My house gets super dry in the winter, especially if we are away not cooking or using the shower. Last January I left a 5 quart pot full of water on my living room radiator for a week and when I got home there was perhaps 1 cup of water left.     How many cups of water are in 5 quarts? There are 4 cups in every quart.      How many cups of water evaporated?      How fast was the water evaporating, measured in cups per day? (Hint: use that there are 7 days in a week.)      Cadde was trying to figure out the answer in one line on his calculator. He tried What answer did Cadde get? Oops!      Add one set of parentheses to correct Cadde's work.    "
},
{
  "id": "sec-Fractions",
  "level": "1",
  "url": "sec-Fractions.html",
  "type": "Section",
  "number": "0.5",
  "title": "Prelude: Fractions",
  "body": " Prelude: Fractions   Piadina's Restaurant specializes in flatbreads. My favorite is the grilled vegetable flatbread with smoked almond muhammara (a sauce made from almonds, red bell peppers, red chili peppers, pomegranate molasses, cumin, lemon juice, and olive oil). Last night I ordered that flatbread and a salad for dinner. They serve each flatbread cut into 5 equal slices.     Turns out the salad was pretty big and so I only ate 3 slices of flatbread. One way to describe how much of the flatbread I ate is using the fraction .  When I mentioned my dinner to my friend Hayfa she had a strange response: Last time I ate a flatbread at Piadina's I only ate of what you ate. I quickly figured it out that since I ate 3 slices and she ate of that, she must have eaten 2 slices, which we can calculate as   I started to obsesses over these fractions. Remember that I ate of the flatbread and Hayfa ate of what I ate. So she must have eaten of , right? That means Ah yes! She ate 2 out of 5 slices, or of the flatbread. That's correct.  You might remember that we multiply fractions by multiplying the numerator (top) and the denominator (bottom). Let's do that Uh oh. We got a different answer.  Wait a minute. Check it out: Whew! The fractions and are equal.  To see why, consider what happens when I cut the flatbread the other direction twice. Now the entire flatbread has 15 squares. Hayfa ate 2 slices out of the original 5 slices total. Or, equivalently, she ate 6 squares out of 15 original squares. You may have heard of reducing or cancelling fractions, which is a way to remember what's happening here:        In practice when we have to evaluate a product of fractions we can do it a couple of ways. One way is to deal with each fraction separately:     Another way is to calculate the top and bottom of the fraction and divide. Notice how we need to use parentheses around the top and bottom of the fraction.     By the way, flatbreads at Piadina's are pricey: $17.49 each. At that rate, what does each slice cost? We can use a fraction Notice that the units on my answer are dollars per slice: the units of the numerator (top) per the units of the denominator (bottom). We sometimes even write the units themselves as a fraction:   There will be a few times during this course where you encounter fractions. Mostly we'll switch to decimal approximations right away.    Do you know     How we represent a part of a whole as a fraction?    How to multiply fractions?    What canceling a factor means?    How fractions are related to division?    How to calculate the decimal approximation of a fraction?    How to compare two fractions using their decimal approximations?    How the units of a fraction are determined?    When we need to use parentheses around the top (numerator) and bottom (denominator) to evaluate a fraction?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.    On each problem, write down what you enter into your calculator and don't forget to write the units on your final answer. Challenge yourself to use one-line calculations. You are welcome to calculate the answer step-by-step to check.      There are 2,624 students at a local university.     Of those students, 673 of those students placed into this algebra class. What fraction of students placed into algebra?      The Dean said that approximately 1 in 4 students, or of all students, placed into algebra. Is that correct? Check by determining if your answer to part (a) by comparing decimal approximations.       Gas mileage is usually rounded down to the nearest one decimal place. Gas mileage is measured in miles per gallon (mpg).     Xu does gig work delivering take-out food from local restaurants. He started the week with a full tank of gas and drove 319 miles. When he went to fill the tank, he needed 11.3 gallons. What was Xu's gas mileage?      Margaret and Cathy are on a cross-country trip. They've driven from Minnesota to Maine (approximately 1,430 miles). They have bought gas a few times along the way: 12.7 gallons, then 14.0 gallons, then 13.1 gallons, and then 12.4 gallons. What was Margaret and Cathy's gas mileage?      How could you do the calculation in part (b) in one line on your calculator by using parentheses?         In January 2015, Graham had 47 albums in his vinyl collection. By September 2023 (that's 8 years, 9 months later), he had 783 albums. Approximately how many albums per month did Graham buy?     Figure out the answer step by step.      Now try to combine all of your calculations into one line on your calculator. Hint: write as a fraction first.       It took Mariam 3 hours to complete the reading for her Religion class. The reading was 102 pages long.     How fast did she read measured in pages per hour? Write the answer as a fraction and as a decimal.      Reading speed is often measured in words per minute. Assuming there are approximately 500 words per page, calculate Mariam's reading speed step by step.      How could you do the calculation in part (b) one line on your calculator by using parentheses? Hint: the hours cancel!        In our flatbread example, the flatbread was served cut into 5 slices and we cut it lengthwise into 15 squares.     Use our flatbread example to explain why and confirm by calculating the decimals.      Use our flatbread example to explain why (hint: think of very long strips!) and confirm by calculating the decimals.       Auriel is making porridge but doesn't want too much. Last time she cut the recipe in half, but that was too little. Auriel has decided that making of the recipe will be just right. Figure out how much of each ingredient Auriel needs. Report each answer as both a fraction and a decimal.     The original recipe calls for 5 ounces of skim milk.      The original recipe calls for cup of oats.      The original recipe calls for cup of water.      The original recipe calls for cup of raisins.       A diver bounces on a 3-meter springboard. Up she goes. A somersault, a twist, and then whoosh, into the water. (Story also appears in )      At 0.2 seconds after take-off she was 3.88 meters above the water. Her initial speed can be calculated as Find the diver's speed and don't forget the units.      At 0.4 seconds after take-off she was 4.38 meters above the water. Her speed then can be calculated as Find the diver's speed and don't forget the units.      Which speed is larger? Explain why that might make sense in the story.       The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. (Story also appears in )      Find the number of yards by calculating       Approximately how many times will the players need to run up and back on the field? The field is 100 yards long so up and back is 200 yards.      "
},
{
  "id": "students-fractions",
  "level": "2",
  "url": "sec-Fractions.html#students-fractions",
  "type": "Exercise",
  "number": "0.5.1",
  "title": "",
  "body": "  There are 2,624 students at a local university.     Of those students, 673 of those students placed into this algebra class. What fraction of students placed into algebra?      The Dean said that approximately 1 in 4 students, or of all students, placed into algebra. Is that correct? Check by determining if your answer to part (a) by comparing decimal approximations.    "
},
{
  "id": "gas-mileage-fractions",
  "level": "2",
  "url": "sec-Fractions.html#gas-mileage-fractions",
  "type": "Exercise",
  "number": "0.5.2",
  "title": "",
  "body": "  Gas mileage is usually rounded down to the nearest one decimal place. Gas mileage is measured in miles per gallon (mpg).     Xu does gig work delivering take-out food from local restaurants. He started the week with a full tank of gas and drove 319 miles. When he went to fill the tank, he needed 11.3 gallons. What was Xu's gas mileage?      Margaret and Cathy are on a cross-country trip. They've driven from Minnesota to Maine (approximately 1,430 miles). They have bought gas a few times along the way: 12.7 gallons, then 14.0 gallons, then 13.1 gallons, and then 12.4 gallons. What was Margaret and Cathy's gas mileage?      How could you do the calculation in part (b) in one line on your calculator by using parentheses?    "
},
{
  "id": "vinyl-fractions",
  "level": "2",
  "url": "sec-Fractions.html#vinyl-fractions",
  "type": "Exercise",
  "number": "0.5.3",
  "title": "",
  "body": "  In January 2015, Graham had 47 albums in his vinyl collection. By September 2023 (that's 8 years, 9 months later), he had 783 albums. Approximately how many albums per month did Graham buy?     Figure out the answer step by step.      Now try to combine all of your calculations into one line on your calculator. Hint: write as a fraction first.    "
},
{
  "id": "reading-fractions",
  "level": "2",
  "url": "sec-Fractions.html#reading-fractions",
  "type": "Exercise",
  "number": "0.5.4",
  "title": "",
  "body": "  It took Mariam 3 hours to complete the reading for her Religion class. The reading was 102 pages long.     How fast did she read measured in pages per hour? Write the answer as a fraction and as a decimal.      Reading speed is often measured in words per minute. Assuming there are approximately 500 words per page, calculate Mariam's reading speed step by step.      How could you do the calculation in part (b) one line on your calculator by using parentheses? Hint: the hours cancel!    "
},
{
  "id": "flatbread-squares-fractions",
  "level": "2",
  "url": "sec-Fractions.html#flatbread-squares-fractions",
  "type": "Exercise",
  "number": "0.5.5",
  "title": "",
  "body": "  In our flatbread example, the flatbread was served cut into 5 slices and we cut it lengthwise into 15 squares.     Use our flatbread example to explain why and confirm by calculating the decimals.      Use our flatbread example to explain why (hint: think of very long strips!) and confirm by calculating the decimals.    "
},
{
  "id": "porridge-fractions",
  "level": "2",
  "url": "sec-Fractions.html#porridge-fractions",
  "type": "Exercise",
  "number": "0.5.6",
  "title": "",
  "body": "  Auriel is making porridge but doesn't want too much. Last time she cut the recipe in half, but that was too little. Auriel has decided that making of the recipe will be just right. Figure out how much of each ingredient Auriel needs. Report each answer as both a fraction and a decimal.     The original recipe calls for 5 ounces of skim milk.      The original recipe calls for cup of oats.      The original recipe calls for cup of water.      The original recipe calls for cup of raisins.    "
},
{
  "id": "diver-fractions",
  "level": "2",
  "url": "sec-Fractions.html#diver-fractions",
  "type": "Exercise",
  "number": "0.5.7",
  "title": "",
  "body": "  A diver bounces on a 3-meter springboard. Up she goes. A somersault, a twist, and then whoosh, into the water. (Story also appears in )      At 0.2 seconds after take-off she was 3.88 meters above the water. Her initial speed can be calculated as Find the diver's speed and don't forget the units.      At 0.4 seconds after take-off she was 4.38 meters above the water. Her speed then can be calculated as Find the diver's speed and don't forget the units.      Which speed is larger? Explain why that might make sense in the story.    "
},
{
  "id": "football-field-fractions",
  "level": "2",
  "url": "sec-Fractions.html#football-field-fractions",
  "type": "Exercise",
  "number": "0.5.8",
  "title": "",
  "body": "  The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. (Story also appears in )      Find the number of yards by calculating       Approximately how many times will the players need to run up and back on the field? The field is 100 yards long so up and back is 200 yards.    "
},
{
  "id": "sec-Powers_and_roots",
  "level": "1",
  "url": "sec-Powers_and_roots.html",
  "type": "Section",
  "number": "0.6",
  "title": "Prelude: Powers and roots",
  "body": " Prelude: Powers and roots   Noah is very proud of his sobriety. He credits some of his success to handicrafts, like beading. He finds the steady, repetitive work of stringing beads one by one (or, actually, Noah prefers two by two) to be a calming practice and he enjoys flexing his artistic creativity.  Noah's mom also enjoys handicrafts and would like to build a small glass box to hold some of Noah's beads. To keep things simple she has decided that the box will be a cube, meaning it will have the same length, width, and height. Plus, the cube has long been the symbol of regeneration and stability but also of limitations and boundaries – a fitting recovery gift.  She could make a small box that's . That's pronounced 2 by 2 by 2 and means 2 inches long, 2 inches wide, and 2 inches tall. Such a small box would hold cubic inches of beads, which is around 2\/3rd of a cup (not much).  What if Noah's mom made a box that was instead? That box would hold cubic inches of beads, which is just over 2 liters of beads. Similarly a box would hold cubic inches of beads, or about 4 gallons of beads. In case you're curious about the units here, there's about 14.4 cubic inches per cup, 61 cubic inches per liter, and 231 cubic inches per gallon.  When we multiply a number by itself, like we say that we are raising 2 to the power of 3. The number 3, which counts how many times we multiply 2 by itself, is called the power or exponent .  On a calculator we can use the key. Try for yourself:   No key marked ? Look for a key marked or instead. Can't find that either? Ask a classmate or your instructor for help.  We can even do higher powers for practice:    Speaking of which, Noah thought it was fitting it is that his mom was using mathematical higher powers to build the glass box since learning to trust in a spiritual higher power was so important to his recovery.  Noah would like the box to hold 1 gallon of beads which is about 231 cubic inches. What size cube box should his mom make? She wants a number, let's call it , so that an box will hold 231 cubic inches. That means she needs or, equivalently,   Noah's mom can try to guess what number should be. She wants a box that's bigger than but smaller than . Her first guess is inches, meaning the box will be . That box would hold which is too big. How about inches so the box would hold which is still too big. After a few more guesses she tries so the box would hold Aha! She will make a box that's approximately .  That was a lot of guessing. Turns out there's a name for the answer. We write and say that the dimension we are looking for is the 3rd root of 231.  We can use our calculator to find roots. For example, if you have a key that says then you can enter Different calculators label the roots key differently. For example, you may have to use one of the 2nd, Shift, or Inv key with the , , or key. On a graphing calculator, you may have to enter MATH mode.  For practice, try evaluating the following roots on your calculator. Feel free to ask a classmate or your instructor for help if you can't figure it out.        By the way, is sometimes called  cubed and is referred to as the cube root . That terminology comes from the fact that the cube has volume , as in our example. Also note that the units on volume which are inches inches inches are called cubic inches .  Similarly, is called  squared and (which is shorthand for ) is referred to as the square root . Some calculators have a separate key for the square root. That terminology comes from the fact that an square has area . And a square that was in inches would have area measured in inches inches, which are called square inches .    Do you know     What the square, cube, or higher power of a number means?    How to calculate powers of a number using a calculator?    What the square root, cube roots, or higher root of a number means?    How to calculate roots of a number using a calculator?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      Jody is using small wooden balls to make noses for her knitted gnomes. She figured out that she can calculate the weight of each ball (in ounces) as where is the diameter of the ball (in inches). (Story also appears in )      What does a 2.5 inch diameter wooden ball weigh?      Jody is considering building a giant gnome for her office. The nose will be a wooden ball weighing 1 pound. She calculates that the diameter of the ball will be . How big is that?       The size of a round pizza is described by its diameter. It turns out that we can calculate how many people are served by a pizza of diameter inches as . For example, a 16-inch diameter pizza serves people. (The mysterious number 0.015625 comes from a little geometry and pizza science.)   (Story also appears in , , and )      How many people would be served by a 12-inch pizza?      A personal pizza is designed to serve one person. It turns out the diameter of a personal pizza is . Calculate the diameter of a personal pizza using the square root key (or just the root key) on your calculator.      An extra large pizza serves 6 people. It turns out the diameter of an extra large pizza is . Calculate the diameter of a personal pizza using the square root key (or just the root key) on your calculator.         A signal sent down a fiber optic cable decreases by 2% per mile. That means after miles, its strength is . What is the signal strength after 10 miles? After 20 miles? Note: your answers should be decimal numbers less than 1. (Story also appears in and )       Otis invested $500,000 and estimates his investment will double in value every 10 years.     Calculate the value of Otis's investment after 10, 20, 30, and 40 years.      If Kricia invested $230,000 instead, what would her investment be worth after 40 years? Try to use a power to help answer the question. Hint: how many times will the value of her investment double?        Remember Noah's mom from our story? She was making a glass box that is where the length is measured in inches.     How many cubic inches of beads would the box hold if it's ? What if the box were instead? You can first find the answers by multiplying on your calculator, but then challenge yourself to use the power key.      Use guessing to approximate the dimension of a box that would hold 400 cubic inches of beads. Just guess to the nearest one decimal place. Again, practice using the power key.      Use cube roots and your calculator to figure out the dimension of a box that would hold 400 cubic inches of beads, to the nearest one decimal place. Does your answer agree with part (b)? (It should.)       Creeping Charlie is a low-growing weed that spreads quickly, doubling the area it covers each year. If there are 7 square feet of Creeping Charlie in my lawn now, how much of my lawn will be covered by Creeping Charlie in 1 year? In 2 years? In 10 years? (Try to answer that last one using powers.)      Saboor is working on a needlepoint that will be a 1 foot by 1 foot square. The mesh grid comes in different sizes. For example, a 13-count mesh has 13 holes per inch which is holes per foot. If she uses a 13-count mesh, then the piece will have holes.   (Story also appears in )      How many holes does a 1 foot by 1 foot square mesh grid have if she uses a 10-count mesh instead which has 10 holes per inch?      What count mesh will have 10,000 holes? First find the holes per foot by calculating . Then divide by 12 to find the holes per inch.       A set of sterling silverware was valued at $800 in 1920, and the value increased by around 3% per year thereafter.   (Story also appears in and )      What was the value in 1921? Remember, to find 3% of a number we multiply by .      What was the value in 1922? Don't forget to use your answer to part (a) to calculate the new increase in value.      It turns out there's a quicker way to find the answers to parts (a) and (b). Calculate and . Note: we will discuss this shortcut in greater detail in .      In general, we can find the value of the silverware after years by calculating Use this powers method to find the value of the sterling in 1957. Hint: years.      Use this powers method to find the value of the sterling in 1990.      Use this powers method to find the value of the sterling in 2023.      "
},
{
  "id": "sec-Powers_and_roots-2-5",
  "level": "2",
  "url": "sec-Powers_and_roots.html#sec-Powers_and_roots-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "to the power of power exponent "
},
{
  "id": "sec-Powers_and_roots-2-11",
  "level": "2",
  "url": "sec-Powers_and_roots.html#sec-Powers_and_roots-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "root "
},
{
  "id": "sec-Powers_and_roots-2-15",
  "level": "2",
  "url": "sec-Powers_and_roots.html#sec-Powers_and_roots-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cubed cube root cubic inches "
},
{
  "id": "sec-Powers_and_roots-2-16",
  "level": "2",
  "url": "sec-Powers_and_roots.html#sec-Powers_and_roots-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squared square root square inches "
},
{
  "id": "wooden-balls-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#wooden-balls-powers-roots",
  "type": "Exercise",
  "number": "0.6.1",
  "title": "",
  "body": "  Jody is using small wooden balls to make noses for her knitted gnomes. She figured out that she can calculate the weight of each ball (in ounces) as where is the diameter of the ball (in inches). (Story also appears in )      What does a 2.5 inch diameter wooden ball weigh?      Jody is considering building a giant gnome for her office. The nose will be a wooden ball weighing 1 pound. She calculates that the diameter of the ball will be . How big is that?    "
},
{
  "id": "pizza-diameter-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#pizza-diameter-powers-roots",
  "type": "Exercise",
  "number": "0.6.2",
  "title": "",
  "body": "  The size of a round pizza is described by its diameter. It turns out that we can calculate how many people are served by a pizza of diameter inches as . For example, a 16-inch diameter pizza serves people. (The mysterious number 0.015625 comes from a little geometry and pizza science.)   (Story also appears in , , and )      How many people would be served by a 12-inch pizza?      A personal pizza is designed to serve one person. It turns out the diameter of a personal pizza is . Calculate the diameter of a personal pizza using the square root key (or just the root key) on your calculator.      An extra large pizza serves 6 people. It turns out the diameter of an extra large pizza is . Calculate the diameter of a personal pizza using the square root key (or just the root key) on your calculator.    "
},
{
  "id": "fiber-optic-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#fiber-optic-powers-roots",
  "type": "Exercise",
  "number": "0.6.3",
  "title": "",
  "body": "  A signal sent down a fiber optic cable decreases by 2% per mile. That means after miles, its strength is . What is the signal strength after 10 miles? After 20 miles? Note: your answers should be decimal numbers less than 1. (Story also appears in and )    "
},
{
  "id": "investment-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#investment-powers-roots",
  "type": "Exercise",
  "number": "0.6.4",
  "title": "",
  "body": "  Otis invested $500,000 and estimates his investment will double in value every 10 years.     Calculate the value of Otis's investment after 10, 20, 30, and 40 years.      If Kricia invested $230,000 instead, what would her investment be worth after 40 years? Try to use a power to help answer the question. Hint: how many times will the value of her investment double?    "
},
{
  "id": "bead-cube-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#bead-cube-powers-roots",
  "type": "Exercise",
  "number": "0.6.5",
  "title": "",
  "body": "  Remember Noah's mom from our story? She was making a glass box that is where the length is measured in inches.     How many cubic inches of beads would the box hold if it's ? What if the box were instead? You can first find the answers by multiplying on your calculator, but then challenge yourself to use the power key.      Use guessing to approximate the dimension of a box that would hold 400 cubic inches of beads. Just guess to the nearest one decimal place. Again, practice using the power key.      Use cube roots and your calculator to figure out the dimension of a box that would hold 400 cubic inches of beads, to the nearest one decimal place. Does your answer agree with part (b)? (It should.)    "
},
{
  "id": "creeping-charlie-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#creeping-charlie-powers-roots",
  "type": "Exercise",
  "number": "0.6.6",
  "title": "",
  "body": "  Creeping Charlie is a low-growing weed that spreads quickly, doubling the area it covers each year. If there are 7 square feet of Creeping Charlie in my lawn now, how much of my lawn will be covered by Creeping Charlie in 1 year? In 2 years? In 10 years? (Try to answer that last one using powers.)   "
},
{
  "id": "needlepoint-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#needlepoint-powers-roots",
  "type": "Exercise",
  "number": "0.6.7",
  "title": "",
  "body": "  Saboor is working on a needlepoint that will be a 1 foot by 1 foot square. The mesh grid comes in different sizes. For example, a 13-count mesh has 13 holes per inch which is holes per foot. If she uses a 13-count mesh, then the piece will have holes.   (Story also appears in )      How many holes does a 1 foot by 1 foot square mesh grid have if she uses a 10-count mesh instead which has 10 holes per inch?      What count mesh will have 10,000 holes? First find the holes per foot by calculating . Then divide by 12 to find the holes per inch.    "
},
{
  "id": "sterling-silver-powers-roots",
  "level": "2",
  "url": "sec-Powers_and_roots.html#sterling-silver-powers-roots",
  "type": "Exercise",
  "number": "0.6.8",
  "title": "",
  "body": "  A set of sterling silverware was valued at $800 in 1920, and the value increased by around 3% per year thereafter.   (Story also appears in and )      What was the value in 1921? Remember, to find 3% of a number we multiply by .      What was the value in 1922? Don't forget to use your answer to part (a) to calculate the new increase in value.      It turns out there's a quicker way to find the answers to parts (a) and (b). Calculate and . Note: we will discuss this shortcut in greater detail in .      In general, we can find the value of the silverware after years by calculating Use this powers method to find the value of the sterling in 1957. Hint: years.      Use this powers method to find the value of the sterling in 1990.      Use this powers method to find the value of the sterling in 2023.    "
},
{
  "id": "sec-Algebraic_notation",
  "level": "1",
  "url": "sec-Algebraic_notation.html",
  "type": "Section",
  "number": "0.7",
  "title": "Prelude: Algebraic notation",
  "body": " Prelude: Algebraic notation   Minnesota had 35.5 inches of precipitation (rain and snow) in 2022, setting a new record. It is difficult to predict the weather.  One report estimated that precipitation would increase an average of 0.2 inches per year. If that report is accurate then in 2032 (after 10 years) we would expect total precipitation to be around We can use the letter to represent the number of years in the future (since 2022).  After years, we would expect total precipitation (in inches) to be around This expression generalizes our earlier calculation, replacing the 10 years by the years. This expression is often written as Notice that we are writing the number (0.2) before the letter ( ). Also, we are not writing the multiplication symbol ( ) at all! It is something you just need to know: that really means . That shorthand is an example of algebraic notation.  Another report estimated that precipitation would increase about 0.5% per year. Notice that percentage is less than 1%. It is a bit more complicated to figure out what to expect in 2032 (after 10 years), but following some examples we saw in the last section, it turns out that we can calculate the predicted precipitation to be   After years, we would expect total precipitation (in inches) to be around This expression generalizes our earlier calculation, replacing the 10 years by the years. This expression is often written as Notice that we are writing the exponent as a superscript (meaning raised up and a little smaller). Also notice that we have replaced the usual multiplication symbol with an alternative symbol . That's because looks like the letter which is sometimes used in algebra. This shorthand is another example of algebraic notation. The expression can also be written without the symbol as where now we need to know that the number before the parentheses is multiplied.  For a little more practice with algebraic notation, recall that Piadina's flatbread cost $17.49 and is usually cut into 5 slides. At that rate it cost per slice. If there were slices, then we can replace the 5 slices by slices and calculate that the flatbread cost in dollars per slice. In algebraic notation, we write the division as a fraction instead   One more piece of terminology. When we have an expression, like , and we want to know the value when is a particular value, we say that we are evaluating the expression. Suppose we want to know the price per slice if Piadina's cut their flatbread into 4 slices instead. That means we want to evaluate the expression when slices.  The first step in the evaluation process is to replace the letter by its value and we write that value in parentheses. Thus we would have The second step is to replace the algebraic notation with the arithmetic notation, which is usually what we enter into the calculator: It turns out that we do not need the parentheses around the 4 so we can simply calculate     Do you know     Where multiplication can be hidden in algebraic notation?    How powers are written in algebraic notation?    How division is written in algebraic notation?    What the word evaluate means?    How to evaluate an algebraic expression on your calculator?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      Since she has been pregnant, Zoe has gained the recommended pound per week. She weighed 153 pounds at the start of her pregnancy. That means when she is weeks pregnant, that Zoe weighs What does this expression say Zoe will weigh when she's 40 weeks pregnant?   (Story also appears in and )       Jody is using small wooden balls to make noses for her knitted gnomes. She figured out that she can calculate the weight of each ball (in ounces) as . Write this expression in algebraic notation. (Story also appears in )         Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. Thanks to new rent stabilization laws, Astra's rent can only increase 3% per year. That means after years, their rent will be at most What does this expression say her rent could be in 5 years?   (Story also appears in and )        Rose gold is a mix of gold and copper. If we mix 2 grams of gold with grams of copper, the percentage of the resulting alloy that is gold is given by the expression What does this expression say the percentage of gold will be if we add 7 grams of copper? (Story also appears in , , and 4.1 Exercises)        There were two different predictions of total precipitation.     What does the first report predict for total precipitation in 2042 (when ) using the expression ?      What does the second report predict for total precipitation in 2042 (when ) using the expression ?       When the Nussbaums planted a walnut tree it was 5 feet tall. It has grown around 2 feet a year. If we know that it's been years since they planted the tree, we can figure out that the height of the tree is feet.   Story also appears in , , and .      Use this expression to figure out the height of the tree after 18 years.      What does mean in the expression ?   Hint: It doesn't mean 2 years !        A set of sterling silverware was valued at $800 in 1920, and the value increased around 3% per year thereafter. We can calculate the value of the silverware after years as .   (Story also appears in and )      Use this expression to calculate the value of the silverware in 1990. (Use )      What does the mean in the expression ?      What does the symbol mean in the expression ?      There are other ways to write this expression including and . Evaluate each of these expressions at . You might not need to type in the multiplication. Experiment to see what your calculator needs.       The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced.   (Story also appears in and )      One potential expression for the number of bass after years is What does this equation say the number of bass should be now? Hint: that means years.      Another potential expression for the number of bass after years is What does this equation say the number of bass should be now? Since we're using a very different equation, we will get a very different answer. Don't forget to put parentheses around the bottom of the fraction.      If there are actually 2500 fish in the lake now, which expression is closer to correct?       Zahra needs to complete 62 more hours of classroom observation before she is eligible to student teach. She plans to observe at a local school on Thursdays from 8:00 AM-1:30 PM, which is 5.5 hours\/week. After weeks, Zahra will have hours left.   (Story also appears in )      How many hours will Zahra have left after 4 weeks? Evaluate this expression to find the answer.      What does the mean in the expression ?      What does the mean in the expression ? Remember there are two similar looking operations: subtraction and negation.       Saboor is working on a needlepoint that will be 1 foot by 1 foot square. The mesh grid comes in different sizes. For example, a 13-count mesh has 13 holes per inch which is holes per foot. If she uses a 13-count mesh, then the piece will have holes. There are other sizes mesh to choose from. A -count mesh has holes per foot and holes total.   (Story also appears in )      Evaluate the expression when . Don't forget the units.      Evaluate the expression when to count the total number of holes in a 10-count mesh.      What does the mean in the expression ?      If we forgot the parentheses and typed in , what answer would we get and what is the calculator doing differently?      "
},
{
  "id": "sec-Algebraic_notation-2-7",
  "level": "2",
  "url": "sec-Algebraic_notation.html#sec-Algebraic_notation-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluating "
},
{
  "id": "weight-change-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#weight-change-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.1",
  "title": "",
  "body": "  Since she has been pregnant, Zoe has gained the recommended pound per week. She weighed 153 pounds at the start of her pregnancy. That means when she is weeks pregnant, that Zoe weighs What does this expression say Zoe will weigh when she's 40 weeks pregnant?   (Story also appears in and )    "
},
{
  "id": "wooden-balls-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#wooden-balls-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.2",
  "title": "",
  "body": "  Jody is using small wooden balls to make noses for her knitted gnomes. She figured out that she can calculate the weight of each ball (in ounces) as . Write this expression in algebraic notation. (Story also appears in )    "
},
{
  "id": "astra-rent-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#astra-rent-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.3",
  "title": "",
  "body": "  Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. Thanks to new rent stabilization laws, Astra's rent can only increase 3% per year. That means after years, their rent will be at most What does this expression say her rent could be in 5 years?   (Story also appears in and )    "
},
{
  "id": "rose-gold-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#rose-gold-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.4",
  "title": "",
  "body": "   Rose gold is a mix of gold and copper. If we mix 2 grams of gold with grams of copper, the percentage of the resulting alloy that is gold is given by the expression What does this expression say the percentage of gold will be if we add 7 grams of copper? (Story also appears in , , and 4.1 Exercises)    "
},
{
  "id": "precip-predict-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#precip-predict-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.5",
  "title": "",
  "body": "  There were two different predictions of total precipitation.     What does the first report predict for total precipitation in 2042 (when ) using the expression ?      What does the second report predict for total precipitation in 2042 (when ) using the expression ?    "
},
{
  "id": "walnut-tree-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#walnut-tree-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.6",
  "title": "",
  "body": "  When the Nussbaums planted a walnut tree it was 5 feet tall. It has grown around 2 feet a year. If we know that it's been years since they planted the tree, we can figure out that the height of the tree is feet.   Story also appears in , , and .      Use this expression to figure out the height of the tree after 18 years.      What does mean in the expression ?   Hint: It doesn't mean 2 years !     "
},
{
  "id": "sterling-silver-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#sterling-silver-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.7",
  "title": "",
  "body": "  A set of sterling silverware was valued at $800 in 1920, and the value increased around 3% per year thereafter. We can calculate the value of the silverware after years as .   (Story also appears in and )      Use this expression to calculate the value of the silverware in 1990. (Use )      What does the mean in the expression ?      What does the symbol mean in the expression ?      There are other ways to write this expression including and . Evaluate each of these expressions at . You might not need to type in the multiplication. Experiment to see what your calculator needs.    "
},
{
  "id": "bass-fishing-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#bass-fishing-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.8",
  "title": "",
  "body": "  The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced.   (Story also appears in and )      One potential expression for the number of bass after years is What does this equation say the number of bass should be now? Hint: that means years.      Another potential expression for the number of bass after years is What does this equation say the number of bass should be now? Since we're using a very different equation, we will get a very different answer. Don't forget to put parentheses around the bottom of the fraction.      If there are actually 2500 fish in the lake now, which expression is closer to correct?    "
},
{
  "id": "classroom-observation-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#classroom-observation-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.9",
  "title": "",
  "body": "  Zahra needs to complete 62 more hours of classroom observation before she is eligible to student teach. She plans to observe at a local school on Thursdays from 8:00 AM-1:30 PM, which is 5.5 hours\/week. After weeks, Zahra will have hours left.   (Story also appears in )      How many hours will Zahra have left after 4 weeks? Evaluate this expression to find the answer.      What does the mean in the expression ?      What does the mean in the expression ? Remember there are two similar looking operations: subtraction and negation.    "
},
{
  "id": "needlepoint-algebraic-notation",
  "level": "2",
  "url": "sec-Algebraic_notation.html#needlepoint-algebraic-notation",
  "type": "Exercise",
  "number": "0.7.10",
  "title": "",
  "body": "  Saboor is working on a needlepoint that will be 1 foot by 1 foot square. The mesh grid comes in different sizes. For example, a 13-count mesh has 13 holes per inch which is holes per foot. If she uses a 13-count mesh, then the piece will have holes. There are other sizes mesh to choose from. A -count mesh has holes per foot and holes total.   (Story also appears in )      Evaluate the expression when . Don't forget the units.      Evaluate the expression when to count the total number of holes in a 10-count mesh.      What does the mean in the expression ?      If we forgot the parentheses and typed in , what answer would we get and what is the calculator doing differently?    "
},
{
  "id": "sec-Scientific_notation",
  "level": "1",
  "url": "sec-Scientific_notation.html",
  "type": "Section",
  "number": "0.8",
  "title": "Prelude: Scientific notation",
  "body": " Prelude: Scientific notation   Tara is working on a big project at work. She wants to back up her files to her online drop box. The site says she has 72 GB of memory remaining. Tara has about 200 files at an average of 42.3 MB each that she would like to upload. Will she have room?  To answer Tara's question we need to know that GB is short for gigabyte and MB is short for megabyte. A byte is a very small unit of computer memory storage space just enough for about one letter. You may have heard the word mega used to mean really big. There's a reason for that. Mega is short for 1 million. That's pretty big. But giga stands for 1 billion, so that's even bigger. So, really What all this means is Tara has of memory remaining. She would like to save 200 files at 42.3 MB each which comes to which is really So Tara wants to store less than 9 GB of information and she has 72 GB remaining. She has plenty of room. Save away!  Really large numbers, like 8,460,000,000, are awkward to read and awkward to work with. Words like million and billion or metric prefixes (words like mega and giga) allow us to rewrite these large numbers in a way that's much easier both to read and to work with. There's another option that's used often in the sciences (and by your calculator). To explain it we need to understand powers of 10.  Perhaps you know what happens when we multiply a number by 10, like or, more appropriate to our example, The effect of multiplying by 10 is to move the decimal point one place to the right. When we multiply by 1,000 we get or, for our example, The effect of multiplying by 1,000 is to move the decimal point three places to the right. The connection is that Each has the effect of moving the decimal point one place to the right so has the same effect as multiplying by 10 three times, so the decimal point moves three places to the right. That means   This shorthand is called scientific notation . The base is always 10. The exponent is always a whole number. The number out front, like 8.46 in our example, is always between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). It is customary to use instead of in scientific notation, so we should write   As another example, we saw earlier that You can check that   Back to our large number. Enter What do you see? Some calculators correctly show while other calculators report the number back in scientific notation, which is not particularly useful. (Sigh.)  Let's try a number so big that (nearly) every calculator will switch to scientific notation. Enter Look carefully at the screen. Your calculator might display something like Whatever shorthand your calculator uses, you should write   Interested in what that number is in our usual decimal notation? It's   Enough of that. Poor Tara is pulling her hair out over this project. Well, not literally, but she is quite frustrated over how slowly the project is going. She wonders: how thick is a human hair?  Turns out that a typical human hair is about meters across. Very small numbers are also awkward to read and awkward to work with. In this section, we write where we insert a space to help you read the number.  We can also describe really small numbers using scientific notation. Perhaps you know what happens when we divide a number by 10, like or, more appropriate to our example, The effect of dividing by 10 is to move the decimal point one place to the left. If we divide by 1,000,000 instead, we get The connection is that and so dividing by 1,000,000 moves the decimal point six places to the left. Notice that we have to introduce zeros as placeholders.  The width of a hair was 0.00012 meters. To get that number from 1.2, we need to move the decimal point 4 places to the left. The shorthand for dividing by a power is to use negative exponents. For example It has nothing to do with negative numbers. It's just a shorthand. The point of this calculation was that Use your calculator to check!  Once again we have scientific notation. The base is still 10. The exponent is still a whole number, although now it's negative. The number out front, like 1.2 in our example, is still between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). As before, we'll write instead of to get:   When you see a number written in scientific notation, the power of 10 tells you a lot. For example, we saw that and . A positive power of 10 says you have a big number, and a negative power of 10 says you're dealing with a very small number.    Do you know     What million, billion, and trillion mean?    Why scientific notation is used?    The standard format for scientific notation?    Why a positive exponent corresponds to a big number and a negative exponent corresponds to a tiny number?    How to convert from scientific notation to decimal?    How your calculator reports numbers in scientific notation, and what (might be) different when you're reporting that number?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      In each story, write out the highlighted numbers (with all the zeros).     Melvin was looking at populations based on the 2020 Census and saw the population of Saint Paul, MN listed as  people . Hint: you can check the answer to this part by evaluating on your calculator.      The gross domestic product (GDP) measures the market value of all final goods and services produced by an economy. The United States GDP is approximately . (Story also appears in )       The Earth weighs approximately  kilograms . (Story also appears in )        In each story, write out the highlighted numbers (with all the zeros).     Alpacas have very fine hairs which can be spun into yarn to make very soft sweaters. The width of an alpaca hair is around  meters . Hint: you can check the answer to this part by evaluating on your calculator.      A dust particle weighs approximately  grams .   (Story also appears in )       A proton (part of an atom) has mass of about  kilograms .   (Story also appears in )          In each story, evaluate the number and report your answer in scientific notation.     Bunnies, bunnies, everywhere. In 2007 there were 1800 and that number was predicted to increase 13% each year. I was trying to predict the number of rabbits in 2023 (after 16 years) but I accidentally typed in 166 years by mistake: Report the answer I got in scientific notation. (Yes, this is a gigantic number. The exponential model I used doesn't actually make sense for that many years.)   (Story also appears in and )       A signal is sent down a fiber optic cable. Its strength decreases by 2% each mile it travels. We can calculate the signal strength after 1000 miles by evaluating Report the answer you get in scientific notation. (Yes, this is a teeny number. In reality there would be signal booster installed along the route.)   (Story also appears in and )        In each story, write out the highlighted number (with all the 0s). Note that million is short for , billion is short for , and trillion is short for .     There are approximately 1.084 million quarters in circulation in the United States. (Story also appears in )       The population of the world is approximately 8.1 billion people . (Story also appears in )       One way that the United States government can borrow money is by selling Treasury bonds (T-bonds). There are approximately $24 trillion worth of T-bonds currently.         (Story also appears in )    Source: Mathew Foss, North Hennepin Community College      Convert 1 million seconds into an understandable unit of time.      Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?       Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!        (Story also appears in )      The planet Jupiter weighs approximately  kilograms . Write out this number (with all the zeros).      The planet Mars weighs approximately  kilograms . Write out this number (with all the zeros).      Which planet weighs more: Jupiter or Mars? Explain.       The SARS-CoV-2 virus is approximately 125 nanometers wide which is  meters wide.     Write out this number (with all the zeros).      The N95 mask captures particles down to 0.3 microns which is  meters wide but not smaller. Write out this number (with all the zeros).      Can the N95 mask capture the SARS-CoV-2 virus? Explain.       Rayka would like to approximate how many cells are in her body. Use the following information: Rayka weighs 140 pounds, and . (Story also appears in )      How many cells are in Rayka's body? Hint: this is a unit conversion question asking you to convert 140 pounds to cells. Write your answer in scientific notation.      Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).      "
},
{
  "id": "sec-Scientific_notation-2-2",
  "level": "2",
  "url": "sec-Scientific_notation.html#sec-Scientific_notation-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "byte Mega giga "
},
{
  "id": "sec-Scientific_notation-2-5",
  "level": "2",
  "url": "sec-Scientific_notation.html#sec-Scientific_notation-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scientific notation "
},
{
  "id": "ex-Scientific_notation-3-1",
  "level": "2",
  "url": "sec-Scientific_notation.html#ex-Scientific_notation-3-1",
  "type": "Exercise",
  "number": "0.8.1",
  "title": "",
  "body": "  In each story, write out the highlighted numbers (with all the zeros).     Melvin was looking at populations based on the 2020 Census and saw the population of Saint Paul, MN listed as  people . Hint: you can check the answer to this part by evaluating on your calculator.      The gross domestic product (GDP) measures the market value of all final goods and services produced by an economy. The United States GDP is approximately . (Story also appears in )       The Earth weighs approximately  kilograms . (Story also appears in )     "
},
{
  "id": "ex-Scientific_notation-3-2",
  "level": "2",
  "url": "sec-Scientific_notation.html#ex-Scientific_notation-3-2",
  "type": "Exercise",
  "number": "0.8.2",
  "title": "",
  "body": "  In each story, write out the highlighted numbers (with all the zeros).     Alpacas have very fine hairs which can be spun into yarn to make very soft sweaters. The width of an alpaca hair is around  meters . Hint: you can check the answer to this part by evaluating on your calculator.      A dust particle weighs approximately  grams .   (Story also appears in )       A proton (part of an atom) has mass of about  kilograms .   (Story also appears in )     "
},
{
  "id": "ex-Scientific_notation-4-1",
  "level": "2",
  "url": "sec-Scientific_notation.html#ex-Scientific_notation-4-1",
  "type": "Exercise",
  "number": "0.8.3",
  "title": "",
  "body": "  In each story, evaluate the number and report your answer in scientific notation.     Bunnies, bunnies, everywhere. In 2007 there were 1800 and that number was predicted to increase 13% each year. I was trying to predict the number of rabbits in 2023 (after 16 years) but I accidentally typed in 166 years by mistake: Report the answer I got in scientific notation. (Yes, this is a gigantic number. The exponential model I used doesn't actually make sense for that many years.)   (Story also appears in and )       A signal is sent down a fiber optic cable. Its strength decreases by 2% each mile it travels. We can calculate the signal strength after 1000 miles by evaluating Report the answer you get in scientific notation. (Yes, this is a teeny number. In reality there would be signal booster installed along the route.)   (Story also appears in and )     "
},
{
  "id": "ex-Scientific_notation-4-2",
  "level": "2",
  "url": "sec-Scientific_notation.html#ex-Scientific_notation-4-2",
  "type": "Exercise",
  "number": "0.8.4",
  "title": "",
  "body": "  In each story, write out the highlighted number (with all the 0s). Note that million is short for , billion is short for , and trillion is short for .     There are approximately 1.084 million quarters in circulation in the United States. (Story also appears in )       The population of the world is approximately 8.1 billion people . (Story also appears in )       One way that the United States government can borrow money is by selling Treasury bonds (T-bonds). There are approximately $24 trillion worth of T-bonds currently.    "
},
{
  "id": "billion-seconds-prelude-scientific-notation",
  "level": "2",
  "url": "sec-Scientific_notation.html#billion-seconds-prelude-scientific-notation",
  "type": "Exercise",
  "number": "0.8.5",
  "title": "",
  "body": "   (Story also appears in )    Source: Mathew Foss, North Hennepin Community College      Convert 1 million seconds into an understandable unit of time.      Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?       Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!    "
},
{
  "id": "planet-weight-prelude-scientific-notation",
  "level": "2",
  "url": "sec-Scientific_notation.html#planet-weight-prelude-scientific-notation",
  "type": "Exercise",
  "number": "0.8.6",
  "title": "",
  "body": "   (Story also appears in )      The planet Jupiter weighs approximately  kilograms . Write out this number (with all the zeros).      The planet Mars weighs approximately  kilograms . Write out this number (with all the zeros).      Which planet weighs more: Jupiter or Mars? Explain.    "
},
{
  "id": "virus-size-prelude-scientific-notation",
  "level": "2",
  "url": "sec-Scientific_notation.html#virus-size-prelude-scientific-notation",
  "type": "Exercise",
  "number": "0.8.7",
  "title": "",
  "body": "  The SARS-CoV-2 virus is approximately 125 nanometers wide which is  meters wide.     Write out this number (with all the zeros).      The N95 mask captures particles down to 0.3 microns which is  meters wide but not smaller. Write out this number (with all the zeros).      Can the N95 mask capture the SARS-CoV-2 virus? Explain.    "
},
{
  "id": "cells-prelude-scientific-notation",
  "level": "2",
  "url": "sec-Scientific_notation.html#cells-prelude-scientific-notation",
  "type": "Exercise",
  "number": "0.8.8",
  "title": "",
  "body": "  Rayka would like to approximate how many cells are in her body. Use the following information: Rayka weighs 140 pounds, and . (Story also appears in )      How many cells are in Rayka's body? Hint: this is a unit conversion question asking you to convert 140 pounds to cells. Write your answer in scientific notation.      Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).    "
},
{
  "id": "sec-Logarithms",
  "level": "1",
  "url": "sec-Logarithms.html",
  "type": "Section",
  "number": "0.9",
  "title": "Prelude: Logarithms",
  "body": " Prelude: Logarithms   Nearlywed, hellscape, bodycon, and woke. Just a few new words added to dictionaries in 2023. People love to create new words and phrases. These new words spread through social media, music, and word of mouth.  I created a new word puzzlaxing meaning relaxing by doing puzzles. In one week, maybe 10 people will have heard of it. After another week, perhaps 100 people. Then 1,000 the next week, and so on. How many weeks until 1 million people are have heard of my new word “puzzlaxing\"?  Notice that in 1 week is people, two weeks is people, three weeks is people, and so on. We are looking for a number where people. Aha! and so weeks from now.  Suppose we wanted to determine when 5,000 people had heard of puzzlaxing . That means we want a number where . Now what? The answer is somewhere between 3 and 4 weeks because and . That's probably a good enough answer – between 3 and 4 weeks, but suppose we want the exact moment.  Let's try guessing. How about 3.5 weeks? which is much smaller than 5,000. How about 3.7 weeks? which is slightly bigger than 5,000. I want to find the answer here so let's try or finally That's as close as I'm gonna guess.  Okay, I'm curious. Is there an exact power of 10 that gives 5,000? Your calculator should have a key that says log or maybe LOG . Try typing A small note here about parentheses. Some calculators give the first parenthesis for free when you type log but you have to type the closing parenthesis in yourself.  Check it out, that's the answer we were looking for: If we had kept more digits it would have been actually 5,000.  What is this log key doing? First, log is short for logarithm base 10. There are other bases, but 10 is what we'll focus on in this course. Try these calculations: What do you see? In each case the logarithm is the number of zeros or, equivalently, it's the power of 10. For example, 10,000 has 4 zeros and and . In other words, a logarithm is just an exponent. And logarithms help us find the exponent. Makes sense.  What about logs of numbers that aren't just powers of 10? Here are some examples. To see what's happening we want to involve powers of 10. Scientific notation will do that for us. Let's write these numbers in scientific notation and see what we learn. For example and Before we write down a general rule, let's check more numbers.     In every case we are rounding down, but it's always the same:  log(number) power of 10 in the scientific notation for that number.    Do you know     What a logarithm (base 10) means?    How to evaluate logarithms (base 10) on a calculator?    Which size numbers have a positive log and which have a negative log (base 10)?    The connection between logarithms (base 10) and scientific notation.      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      The number of bacteria in a dish increases 10-fold each day. Note: 10-fold means . Suppose we had 1 microliter of bacteria at the start of the first day. That means after days there will be microliters of bacteria.     How many bacteria (in microliters) will there be after 1 day? After 2 days? After 3 days?      In how many days will the bacteria have reached 1 liter, which is 1 million microliters?      How can we use logs to find the answer?       The problem continues       Approximately how many days (from the start) does it take to reach the 25 millilter capacity of the petri dish, which is 25,000 microliters? Guess and check to find the answer to 1 decimal place.      How can we use logs to find the answer?      Convert your answer to days & hours format ( days and hours ).         The equation tells us the pH of a substance (on a scale from 0 to 14) based on its molar hydrogen ion concentration . Don't let the notation here scare you: is a single quantity and has nothing to do with exponents or adding.  For example, lemon juice has and so the pH of lemon juice is      Coca-Cola has . Find the pH of Coca-Cola. Note: the funny spaces are to help you read the number.      Hair shampoo has . Find the pH of hair shampoo.      Household bleach has . Find the pH of bleach.      Materials with pH values between 0-5 are acidic , between 9-14 are basic , and between 5-7 are neutral . Which of the above materials are acidic, basic, and neutral?       In Minneapolis, apartment rent is expected to increase by 16% next year.   (Story also appears in and )      Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. If their rent increased by 16%, in how many years would their rent be doubled to $1,650? As we'll see later, the answer is . Don't forget to close the parentheses.      Lucky for Astra, their building is subject to rent stabilization laws and so their rent cannot increase by more than 3%. In how many years would their rent double under this cap? The answer is .        According to our story, in approximately how many weeks will 30,000 people have heard of puzzlaxing ?     Since 30,000 is between 10,000 and 100,000, what does that tell us about the answer?      Guess to try to find the answer, the number where . It's okay to get the answer to one decimal place.      Use logs to find an exact answer.       The intensity of a sound in decibels is calculated using a logarithm. For example, a sound 100 times the level humans can hear has an intensity of      Calculate the intensity, in decibels, of a cat purring which averages about 300 times the level humans can hear using the formula .      Calculate the intensity, in decibels, of normal conversation which averages about 1 million times the level humans can hear using the formula .      Many young adults are at high risk of hearing loss because they crank the volume of music they're listening to, often to 2 trillion times the level humans can hear. Calculate that intensity in decimals using the formula . Prolonged sound above 70 decibels may damage your hearing and any loud noise above 120 decibels can cause immediate harm to hearing.       In 2021, Arrietty charged $5,000 on her credit card to help pay tuition. Her card charges interest at the rate of 20.7% APR. We are going to ignore any minimum payments or fees.     Arrietty was hoping to pay the debt back quickly, but in 2023 she had not paid any of the debt. Calculate the amount due on that original charge using the formula .      If she continues to leave the debt unpaid, when will her debt pass $10,000? As we'll see later, the answer is years after 2020. Don't forget to the close the parentheses.       Darcy likes to use temporary hair color in wild colors. Good thing it washes out. Her best guess is that 8% of the color washes out each time she shampoos her hair. That means of the color remains after each shampoo.   (Story also appears in )      What percentage of the color will be remain after Darcy washes her hair three times? Calculate the percentage using the formula .      After how many shampoos will half of the color be gone? As we'll see later, the answer is . Don't forget to the close the parentheses.      "
},
{
  "id": "bacteria-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#bacteria-logarithms",
  "type": "Exercise",
  "number": "0.9.1",
  "title": "",
  "body": "  The number of bacteria in a dish increases 10-fold each day. Note: 10-fold means . Suppose we had 1 microliter of bacteria at the start of the first day. That means after days there will be microliters of bacteria.     How many bacteria (in microliters) will there be after 1 day? After 2 days? After 3 days?      In how many days will the bacteria have reached 1 liter, which is 1 million microliters?      How can we use logs to find the answer?    "
},
{
  "id": "ex-Logarithms-3-2",
  "level": "2",
  "url": "sec-Logarithms.html#ex-Logarithms-3-2",
  "type": "Exercise",
  "number": "0.9.2",
  "title": "",
  "body": "  The problem continues       Approximately how many days (from the start) does it take to reach the 25 millilter capacity of the petri dish, which is 25,000 microliters? Guess and check to find the answer to 1 decimal place.      How can we use logs to find the answer?      Convert your answer to days & hours format ( days and hours ).    "
},
{
  "id": "pH-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#pH-logarithms",
  "type": "Exercise",
  "number": "0.9.3",
  "title": "",
  "body": "  The equation tells us the pH of a substance (on a scale from 0 to 14) based on its molar hydrogen ion concentration . Don't let the notation here scare you: is a single quantity and has nothing to do with exponents or adding.  For example, lemon juice has and so the pH of lemon juice is      Coca-Cola has . Find the pH of Coca-Cola. Note: the funny spaces are to help you read the number.      Hair shampoo has . Find the pH of hair shampoo.      Household bleach has . Find the pH of bleach.      Materials with pH values between 0-5 are acidic , between 9-14 are basic , and between 5-7 are neutral . Which of the above materials are acidic, basic, and neutral?    "
},
{
  "id": "astra-rent-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#astra-rent-logarithms",
  "type": "Exercise",
  "number": "0.9.4",
  "title": "",
  "body": "  In Minneapolis, apartment rent is expected to increase by 16% next year.   (Story also appears in and )      Astra lives in a 1-bedroom apartment where they pay $825 per month in rent. If their rent increased by 16%, in how many years would their rent be doubled to $1,650? As we'll see later, the answer is . Don't forget to close the parentheses.      Lucky for Astra, their building is subject to rent stabilization laws and so their rent cannot increase by more than 3%. In how many years would their rent double under this cap? The answer is .    "
},
{
  "id": "puzzlaxing-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#puzzlaxing-logarithms",
  "type": "Exercise",
  "number": "0.9.5",
  "title": "",
  "body": "  According to our story, in approximately how many weeks will 30,000 people have heard of puzzlaxing ?     Since 30,000 is between 10,000 and 100,000, what does that tell us about the answer?      Guess to try to find the answer, the number where . It's okay to get the answer to one decimal place.      Use logs to find an exact answer.    "
},
{
  "id": "decibels-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#decibels-logarithms",
  "type": "Exercise",
  "number": "0.9.6",
  "title": "",
  "body": "  The intensity of a sound in decibels is calculated using a logarithm. For example, a sound 100 times the level humans can hear has an intensity of      Calculate the intensity, in decibels, of a cat purring which averages about 300 times the level humans can hear using the formula .      Calculate the intensity, in decibels, of normal conversation which averages about 1 million times the level humans can hear using the formula .      Many young adults are at high risk of hearing loss because they crank the volume of music they're listening to, often to 2 trillion times the level humans can hear. Calculate that intensity in decimals using the formula . Prolonged sound above 70 decibels may damage your hearing and any loud noise above 120 decibels can cause immediate harm to hearing.    "
},
{
  "id": "credit-card-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#credit-card-logarithms",
  "type": "Exercise",
  "number": "0.9.7",
  "title": "",
  "body": "  In 2021, Arrietty charged $5,000 on her credit card to help pay tuition. Her card charges interest at the rate of 20.7% APR. We are going to ignore any minimum payments or fees.     Arrietty was hoping to pay the debt back quickly, but in 2023 she had not paid any of the debt. Calculate the amount due on that original charge using the formula .      If she continues to leave the debt unpaid, when will her debt pass $10,000? As we'll see later, the answer is years after 2020. Don't forget to the close the parentheses.    "
},
{
  "id": "hair-color-logarithms",
  "level": "2",
  "url": "sec-Logarithms.html#hair-color-logarithms",
  "type": "Exercise",
  "number": "0.9.8",
  "title": "",
  "body": "  Darcy likes to use temporary hair color in wild colors. Good thing it washes out. Her best guess is that 8% of the color washes out each time she shampoos her hair. That means of the color remains after each shampoo.   (Story also appears in )      What percentage of the color will be remain after Darcy washes her hair three times? Calculate the percentage using the formula .      After how many shampoos will half of the color be gone? As we'll see later, the answer is . Don't forget to the close the parentheses.    "
},
{
  "id": "sec-Variables_and_functions",
  "level": "1",
  "url": "sec-Variables_and_functions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Variables and functions",
  "body": " Variables and functions   Things change, like the price of gasoline, and just about every day it seems. What does it mean when the price of a gallon of gas drops from $3.999\/gal to $3.299\/gal? The symbol \/ is short for per or for each, so that means each gallon costs less. Does this 70¢ truly matter?  Before we answer that question, are you wondering why there's that extra 9 at the end of the price? We might think a gallon costs $3.99 but there's really a small 9 following it. Sometimes that 9 is raised up slightly on the gas station sign. You have to read the fine print. What it means is an extra ¢ for each gallon. So the true price of a gallon of gas would be $3.999. Gas costs a tiny bit more than you thought. Good grief.  Back to our question. Does 70¢ truly matter to us? Probably not. Can't even buy a bag of potato chips for 70¢. But, how often do you buy just one gallon of gas? Typically you might put five, or ten, or even twenty gallons of gas into the tank. We want to understand how the price of gasoline influences what it really costs us at the pump. To do that let's compare our costs when we buy ten gallons of gas. There's no good reason for picking ten; it's just a nice number to work with.  If gas costs $3.999\/gal and we buy 10 gallons, it costs See how we described the computation twice? First, with units, fractions, and for multiplication in what's sometimes called algebraic notation. Then, with just numbers and for multiplication - that's what you can type into a calculator.  If gas drops to $3.299\/gal and we buy 10 gallons, it costs That's $7 less. For $7 savings on gas you could buy that bag of potato chips, and an iced tea to go with it, and still have change. That amount matters. I mean, especially since it's $7 savings every time you put 10 gallons in the tank.  Gas prices have been changing wildly, and along with them, the price of 10 gallons of gas. In mathematics, things that change are called variables . The two variables we're focusing on in this story are Notice that we gave each variable a letter name. It is helpful to just use a single letter chosen from the word it stands for. In our example, stands for price and stands for cost . In this course we rarely use the letter simply because so few words begin with . Whenever we name a variable ( ) we also describe in words what it represents (the price of gasoline), and we state what units it's measured in ($\/gal).  In talking about the relationship between these variables we might say the total cost depends on the price of gas, so depends on . That tells us that is the dependent variable and is the independent variable . In general, the variable we really care about is the dependent variable, in this case , the total amount of money it costs us. The concept of dependence is so important that there's yet another word for it. We say that is a function of , as in cost is a function of price.   Knowing which variable is independent or dependent is helpful to us. To emphasize the dependence, we often make a notation next to the variable name. This labeling is rarely used outside this textbook, so add it in for yourself if you need it. In some situations dependency can be viewed either way; there might not be one correct way to do it. Labeling the dependence is extra important then, so anyone reading your work knows which way you are thinking of it.  Given a choice, we usually assign dependence such that given a value of the independent variable, it is easy to calculate the corresponding value for the dependent variable. In our example it's easy to use the price per gallon, , to figure out the total cost, . We can work backwards - from to - but it's not as easy.  For example, suppose we buy 10 gallons of gas and it costs $28.99. We can figure out that the price per gallon must be Notice that we use the fraction as part of the algebraic notation, but we use to indicate division on the calculator. Your calculator key for division may be instead, which we reserve as a shorthand for per.   From our experience we have a sense of what gas might cost. In my lifetime, I've seen gas prices as low as 35.9¢\/gallon in the 1960s to a high of $4.099\/gallon recently. This range of values sounds too specific, so it would sound better to say something general like   Gas prices are (definitely) between $0\/gal and $5\/gal.   The mathematical shorthand for this sentence is The inequality symbol is pronounced less than or equal to . Formally, the range of realistic values of the independent variable is called the domain of the function . In this text, we rarely write the domain because it's usually clear from the story what realistic values would be. The exercises in this section ask you to do so for practice.  Be aware that there are often many different numbers in a story. Some numbers are examples of values the variables take on, such as $3.999\/gal or $39.99 in our example. Other numbers are constants ; they do not change (at least not during the story). The one constant in our story is that we are always buying 10 gallons of gas. Occasionally there are other numbers in a story that turn out not to be relevant at all, so be on the lookout.  Back to our story. A report says that the average price of gasoline in Minnesota was $2.900\/gal in 2010 and increased approximately 20% per year for the next several years. We would like to check what that says about the average price of gasoline in 2011 and 2012, say. (It is unlikely that the price increase continued much longer at that rate.)  To understand what that report is saying, we need to remember how percents work. Luckily, the word percent is very descriptive. The cent part means hundred, like 100 cents in a dollar or 100 years in a century. And, as usual, per means for each. Together, percent means per hundred. The number 20% means 20 for each hundred. Written as a fraction it is . Divide to get the decimal  Bottom line: 20%, , and 0.20 mean exactly the same number.   To calculate the percent of a number we multiply by the decimal version. For example, The report says the price increased by 20% each year, so by 2011 the price had increased an average of $0.58. That 58 cents is not what gas cost in 2011. It's how much more gas cost in 2011 compared to 2010. To see what the report projected for the 2011 cost we need to add that increase on to the original 2010 price. Sounds about right. Expensive, to be sure, but fairly accurate.  For 2012, the price increased by 20% again. That means 20% of what it was in 2011. We can't just add $0.58 again. That was 20% of the 2010 value, and we want 20% of the 2011 value . Going to have to calculate that. so the projected 2012 value was   One last note. The number 20% in the report sounds like a rough approximation. The report probably means the increase was around 20%, maybe a little less, maybe a little more. So our answers of $3.48\/gal and $4.176\/gal could be a little less or a little more too. But they sound so perfectly correct. To be safe, we really ought to round off these answers, to something more general like around $3.50\/gal in 2011 or approximately $4.20\/gal in 2012. Using our approximately equal to symbol we write \/gal in 2011 and \/gal in 2012.    Do you know     The difference between a variable and a constant?    The information needed to name a variable?    Which variable is dependent and which variable is independent?    What domain means?    How to calculate percent increase?     The symbol for approximately equal to ?     Why an approximate answer is often as good as we can get?     When to round your answer up or down instead of off?     What the term precisely refers to?     How to decide how precisely to round your answer?   indicates question based on Prelude: approximation       If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.      A 32 pound bag of dog food costs $29.97, but an 8 pound bag costs $11.28.     Identify and name the variables, including the units.      Which variable is dependent and which is independent?      What might a 16 pound bag of dog food cost? Explain the reasoning behind your guess.         Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month. (Story also appears in )      Identify and name the variables, including the units.      Explain the dependence using a sentence of the form is a function of .      Which number is a constant in this story: the percent increase (7.2) or the apartment rent (830)?      What is a realistic domain for this function? That means, for how many years might this sort of increase in rent continue? Express your answer as an inequality.      What is the average rent expected to be in 1 year? In 2 years? In 3 years? Note that . Try figuring it out.         Round each number up, down, or off to the precision indicated.   For a discussion of rounding, see Prelude: approximation and rounding .      My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.      Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?      The original budget estimates for the new community center gym were rounded to the nearest hundred (that means ending in 00), so we want to round our bid of $148,214.79 to the nearest hundred.      The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately.         It's about time! In each story, time is one (or both) of the variables. Identify and name the variables, including units and dependence. (Stories also appear in )      The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year.   (Story also appears in and )       After his first beer, Stephen's blood alcohol content (BAC) was already 0.04, and as he continued to drink, his BAC level rose 45% per hour. (Story also appears in and )       When McKenna drives 60 mph (miles per hour), it takes her 20 minutes on the highway to get between exits, but when traffic is bad, it can take her an hour.      The sun set at 6:00 p.m. today, and I heard on the radio that at this time of year, it sets about 2 minutes earlier each day. (Hint: measure the sunset time in minutes after 6:00 p.m.)         It's about time! For each story, try to figure out the answer to the question(s).   (Stories also appear in )      The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year. The tree is now 40 feet tall. How long ago did the Nussbaums plant their walnut tree?   (Story also appears in and )       After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. Note that What was Stephen's BAC after 1 hour? After 2 hours?   (Story also appears in and )       When McKenna drives 60 mph (miles per hour) it takes her 20 minutes on the highway to get between exits, but when traffic is bad it can take her an hour. How slow is McKenna driving when traffic is bad? Hint: can you figure out the distance between exits?       The sun set at 6:00 p.m. today and I heard on the radio that it sets about 2 minutes earlier each day this time of year. In how many days will the sun set at 4:30 p.m.? Bonus question: in what month is the story set?        The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. (Story also appears in and )      Which number is a constant in this story: the temperature (40) or the rate at which the temperature dropped (3)?      Name the variables, including units and dependence.      When did the temperature drop below freezing (32 F)?       Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. (Story also appears in , , and )      Name the variables, including units and dependence.      What was her benefit in 2012?      When will her benefit pass $900\/month? A reasonable guess is fine.       Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase. ( Story also appears in )      Identify and name the variables, including the units.      Which variable is dependent and which is independent?      How many stamps could I buy for $10? Try to figure it out from the story.       Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700.  ( Story also appears in )      Identify and name the variables, including the units.      Explain the dependence using a sentence of the form is a function of .      What is a realistic number of miles for a car to drive? Express the domain as an inequality.      Sofía wonders when the car would be practically worthless, meaning under $500. Make a reasonable guess.       For each story, name the variables including units and dependence.     The closer you sit to a lamp, the brighter the light is.   (Story also appears in and )       The thicker the piece of fish, the longer it takes to grill it.   (Story also appears in and )       Wind turbines are used to generate electricity. The faster the wind, the more power they generate. (Story also appears in , , and )       "
},
{
  "id": "sec-Variables_and_functions-2-6",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables "
},
{
  "id": "sec-Variables_and_functions-2-7",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable function "
},
{
  "id": "sec-Variables_and_functions-2-13",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-2-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "sec-Variables_and_functions-2-14",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constants "
},
{
  "id": "sec-Variables_and_functions-2-16",
  "level": "2",
  "url": "sec-Variables_and_functions.html#sec-Variables_and_functions-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percent "
},
{
  "id": "dog-food-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#dog-food-variables-functions",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  A 32 pound bag of dog food costs $29.97, but an 8 pound bag costs $11.28.     Identify and name the variables, including the units.      Which variable is dependent and which is independent?      What might a 16 pound bag of dog food cost? Explain the reasoning behind your guess.    "
},
{
  "id": "riverside-rent-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#riverside-rent-variables-functions",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month. (Story also appears in )      Identify and name the variables, including the units.      Explain the dependence using a sentence of the form is a function of .      Which number is a constant in this story: the percent increase (7.2) or the apartment rent (830)?      What is a realistic domain for this function? That means, for how many years might this sort of increase in rent continue? Express your answer as an inequality.      What is the average rent expected to be in 1 year? In 2 years? In 3 years? Note that . Try figuring it out.    "
},
{
  "id": "rounding-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#rounding-variables-functions",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Round each number up, down, or off to the precision indicated.   For a discussion of rounding, see Prelude: approximation and rounding .      My calculations show I need a cross brace around 9.388 feet long. I want the board to be long enough, so round up to the nearest foot.      Gas mileage is usually rounded down to the nearest one decimal place. What is the gas mileage for a car measured as getting 42.812 miles per gallon? What about a car getting 23.09 miles per gallon?      The original budget estimates for the new community center gym were rounded to the nearest hundred (that means ending in 00), so we want to round our bid of $148,214.79 to the nearest hundred.      The population estimate was 4.2 million people, but revised estimates suggest 4,908,229 people. Report the revised estimate rounded appropriately.    "
},
{
  "id": "time-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#time-variables-functions",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  It's about time! In each story, time is one (or both) of the variables. Identify and name the variables, including units and dependence. (Stories also appear in )      The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year.   (Story also appears in and )       After his first beer, Stephen's blood alcohol content (BAC) was already 0.04, and as he continued to drink, his BAC level rose 45% per hour. (Story also appears in and )       When McKenna drives 60 mph (miles per hour), it takes her 20 minutes on the highway to get between exits, but when traffic is bad, it can take her an hour.      The sun set at 6:00 p.m. today, and I heard on the radio that at this time of year, it sets about 2 minutes earlier each day. (Hint: measure the sunset time in minutes after 6:00 p.m.)     "
},
{
  "id": "time-2-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#time-2-variables-functions",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  It's about time! For each story, try to figure out the answer to the question(s).   (Stories also appear in )      The Nussbaums planted a walnut tree years ago when they first bought their house. The tree was 5 feet tall then and has grown around 2 feet a year. The tree is now 40 feet tall. How long ago did the Nussbaums plant their walnut tree?   (Story also appears in and )       After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. Note that What was Stephen's BAC after 1 hour? After 2 hours?   (Story also appears in and )       When McKenna drives 60 mph (miles per hour) it takes her 20 minutes on the highway to get between exits, but when traffic is bad it can take her an hour. How slow is McKenna driving when traffic is bad? Hint: can you figure out the distance between exits?       The sun set at 6:00 p.m. today and I heard on the radio that it sets about 2 minutes earlier each day this time of year. In how many days will the sun set at 4:30 p.m.? Bonus question: in what month is the story set?     "
},
{
  "id": "temp-mpls-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#temp-mpls-variables-functions",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "  The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon. (Story also appears in and )      Which number is a constant in this story: the temperature (40) or the rate at which the temperature dropped (3)?      Name the variables, including units and dependence.      When did the temperature drop below freezing (32 F)?    "
},
{
  "id": "social-security-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#social-security-variables-functions",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year. (Story also appears in , , and )      Name the variables, including units and dependence.      What was her benefit in 2012?      When will her benefit pass $900\/month? A reasonable guess is fine.    "
},
{
  "id": "stamps-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#stamps-variables-functions",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "  Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase. ( Story also appears in )      Identify and name the variables, including the units.      Which variable is dependent and which is independent?      How many stamps could I buy for $10? Try to figure it out from the story.    "
},
{
  "id": "car-value-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#car-value-variables-functions",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "  Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700.  ( Story also appears in )      Identify and name the variables, including the units.      Explain the dependence using a sentence of the form is a function of .      What is a realistic number of miles for a car to drive? Express the domain as an inequality.      Sofía wonders when the car would be practically worthless, meaning under $500. Make a reasonable guess.    "
},
{
  "id": "name-vars-variables-functions",
  "level": "2",
  "url": "sec-Variables_and_functions.html#name-vars-variables-functions",
  "type": "Exercise",
  "number": "1.1.10",
  "title": "",
  "body": "  For each story, name the variables including units and dependence.     The closer you sit to a lamp, the brighter the light is.   (Story also appears in and )       The thicker the piece of fish, the longer it takes to grill it.   (Story also appears in and )       Wind turbines are used to generate electricity. The faster the wind, the more power they generate. (Story also appears in , , and )     "
},
{
  "id": "sec-Tables_and_graphs",
  "level": "1",
  "url": "sec-Tables_and_graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Tables and graphs",
  "body": " Tables and graphs   Lung cancer, chronic bronchitis, bad breath, stains on your clothes, and the expense. These are just a few of the consequences of smoking cigarettes. With what we know now about the dangers of smoking, are people smoking more or less than they were ten years ago, fifty years ago, or even one hundred years ago?  Reality is, we don't have information on each individual person's smoking rate, so we can't answer this question exactly. We do have information on the total number of cigarettes sold each year. So maybe we should look at that total. Uh oh, that isn't going to work. There are way more people now than there were fifty or a hundred years ago. So, even if the same percentage of people smoke, and even if they each smoke the same amount as their predecessors did, we would have a much bigger number of cigarettes smoked now just because there are more people now.  Turns out a reasonable measure is to compare the number of cigarettes smoked per year per person . By taking into account the number of people we will be able to see whether people are smoking more or less, on average. That's what we want.  The table showing the smoking rate for select years. The smoking rate is the average cigarettes per year per person (adults).   Source: Centers for Disease Control and Prevention     Year  1900  1915  1930  1940  1950  1965  1975  1990  2000  2006    Smoking rate  54  285  1,485  1,976  3,552  4,258  4,122  2,834  2,049  1,619    To make sense of these numbers, suppose there are five friends. Three don't smoke at all, so that is 0 cigarettes in a year. Another smokes only occasionally, maybe 100 cigarettes a year. The fifth smokes a pack a day, which adds up to 7,300 cigarettes in a year because (Not sure about this calculation? Not to worry. More about unit conversions in .) These five people smoke a total of so when we divide by the number of people we get which is less than the average of 1,619 cigarettes per year per person for 2006 (the last year the CDC published the data), which is the way things seem to be heading.  We can tell a lot of information from this table. For example, what was the smoking rate in 1965, and how does that compare to 2006? The answers appears in the table, a whopping 4,258 cigarettes per person in 1965 and 1,619 cigarettes per person in 2006.  When did the consumption first pass 3,000? That answer does not appear in the table, but we can use the information in the table to make a good guess. In 1940, there were an average of 1,976 cigarettes per person per year and by 1950, there were 3,552. Somewhere between 1940 and 1950 the number first climbed above 3,000. More specifically, the number we're looking for (3,000) is a lot closer to the 1950 figure (3,552) than to the 1940 figure (1,976). So, it would be reasonable to guess close to 1950. I'd say 1947. Of course, you might guess 1946 or 1948, or even 1949 and those would be good guesses too.  When did the consumption drop below 3,000 again? This answer also does not appear in the table, but falls somewhere between 1975 when consumption was 4,122 and 1990 when consumption was 2,834. Here I'd guess just before 1990, say in 1989.  What's changing are the number of cigarettes smoked per person per year and the year. Those are our variables. The smoking rate is a function of year, and it's what we care about, so it's the dependent variable. Time, as measured in years, is the independent variable. Quick note on how we deal with actual years. Since the year 0 doesn't make sense in this problem, it is convenient to measure time in years since 1900, since that's the earliest year mentioned. Officially we should rewrite our table as:     0  15  30  40  50  65  75  90  100  106     54  285  1,485  1,976  3,552  4,258  4,122  2,834  2,049  1,619    Notice where the variable names are listed in the table. In a horizontal format like this table, the independent variable ( ) is in the top row, with the dependent variable ( ) is in the bottom row. If you want to write your table in a vertical format, that's okay too. Just put the independent variable in the left column, with the dependent variable in the right column. It might help to remember that the independent variable goes first (either top or left) and the dependent variable follows (either bottom or right).  Where the variables go in a table is not something you can figure out. It's a convention - a custom, practice, or standard used within the mathematical community. Though based on reason, it often involves some arbitrary choice, which is why we can't figure it out. So, whenever some practice is introduced to you as a convention, you need to memorize it.    Horizontal table format:    indep        dep          Vertical table format:    indep  dep                      Tables are useful because they contain specific numbers, but it can be difficult to guess or see general trends. For that, a picture is worth a thousand words - or numbers, in this case. By picture we mean a graph of the function.  Throughout this text, we draw graphs by hand. On graph paper. Seriously. You might wonder why we do that when graphing calculators, spreadsheet programs, graphing apps, or computer algebra systems all can draw graphs for us. The answer is we want to understand graphs better, and I promise that drawing them by hand will help you do that. (Different instructors have different opinions on the importance of graphing by hand, so be sure to ask your instructor what you are expected to do. Even if you're allowed to use some type of graphing technology, I strongly encourage you to practice drawing graphs by hand as well.)  There is a standard set-up for a graph.     The graph is based on a horizontal line and vertical line, called the axes .  That's the plural of axis , and it rhymes with jack cheese .  Where they cross is a point called the origin . It represents where each variable is 0. By convention, the independent variable is measured along the horizontal axis, with larger values progressing to the right of the origin, and negatives to the left. Similarly, the dependent variable is measured along the vertical axis, with larger values progressing up from the origin, and negatives down. Each gridline counts the same number, called the scale , but the scale for the vertical may be different from the scale for the horizontal. Each pair of values of the independent and dependent variable from our table correspond to a point on our graph.  In the graph of smoking rates, the independent variable is , the year, so that goes on the horizontal axis for our graph. Our dependent variable is , the smoking rate, so that goes on the vertical axis. For the scale, it works nicely to count by 10s for years and count by 500s for the smoking rate.  There's a certain amount of guess and check involved in figuring out a good scale for each axis. As a general rule of thumb we would like the graph to be as large as possible so we can see all of its features clearly. But, not so big that it runs off the graph paper. What matters is that the gridlines are evenly scaled and that they can handle large enough numbers. Speaking of which, it's a good idea to leave a little room to extend the graph a little further than the information we have in the table, in case we get curious about values beyond what we have already.  With realistic numbers it's normal to have numbers in the table that are not exactly where the gridlines are. It is very helpful to count by round numbers (2s, 5s, 10s, etc.) because it makes guessing in between easier. Easier for you drawing the graph. Easier for someone reading your graph.     To plot each point, we start at the origin and move right to that -value, and then up to that -value. When a value doesn't land exactly on a grid mark, we have to guess in between. For example, in 1900, so we don't move right at all, just up to . The first labeled gridline on our graph is 500. Where's 54? It's between 0 and 500, very close to 0. Our point is just a tiny bit above the origin. In 1915 we have . Our labeled gridlines are for 10 and 20, so 15 must land halfway in between. The smoking rate is 285, which is around halfway between 0 and 500. Etc.  What we have so far is a scatter plot of points. Can you see why it's called that? Anyway, our whole goal here was to be able to understand smoking rates better by having a graph. You may already begin to see a curve suggested by the points. Time to draw it in. I don't mean drawing a line between each pair of points, like you do in the children's game connect the dots. That isn't quite right. It was probably more of a continuous trend and so the graph should be smoother.     When we draw in this smooth curve for the graph, what we are really doing is making a whole lot of guesses all at once. For example, from the table we guessed that the smoking rate passed 3,000 in around 1947, and dropped back to that level in around 1989. What does the graph show? If we look where the horizontal gridline for 3,000 crosses our graph, it crosses in two places. First, between the vertical gridlines for 40 and 50, and perhaps slightly closer to 50. I'd say , in the year 1947. Sure. The second time is between the gridlines for 80 and 90, much closer to 90. Looks like , in the year 1988. We guessed 1989. Close enough.  Don't forget that when we drew in that curve it was really just a guess. We're sure about the points we plotted, but we're only guessing about where to draw the curve in. That means we're not sure about the other points. If we knew a lot more points we could have a more accurate graph.  Turns out more data is available from the CDC. The full table of data from the CDC shows that consumption first topped 3,000 as early as 1944. Here's an example where the history tells you more than the mathematics as cigarette consumption rose sharply during World War II. Our guess about 1988 or 1989 was spot on. Look at how the graph from the full data (the dotted line) compares to our guess.       Do you know     Where the independent and dependent variables appear in a table and in a graph?    How to guess values from a table or from a graph?    How to make a graph from a table?    Why we start each axis at 0?    What we mean by scaling an axis evenly?    How to make a table and then a graph from a story?    Why we draw in a smooth line or curve connecting the points?    What type of graphing technology, if any, you're allowed to use? Ask your instructor.       If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.      My grandfather had $200 in savings bonds that matured in 1962 when he gave them to me. The bonds continue to earn interest at a fixed rate so I have yet to cash them in. The table shows some values. (Story also appears in and )     year  1962  1970  1980  1990  2000  2010     0  8  18  28  38  48     200.00  318.77  570.87  1,022.34  1,830.85  3,278.77       What do and stand for? Include the units and dependence.      What were the savings bonds worth in 1970?      When were the savings bonds worth $1,022.34?      Approximately when were the savings bonds worth $1,500?      What do you expect the savings bonds would be worth in 2020?      Graph the function using the information given in the table.      Use the graph to check your answers to the questions.         How cold is it? An air temperature of 10 F is cold but manageable. But add a 30 miles per hour wind and, brrr, it feels like it is -12 F (12 below zero). We say the wind chill of 10 F with a 30 mph wind is -12 F. The table lists the wind chill for various wind speeds at an air temperature of 10 F. (Story also appears in )  Source: National Weather Service     Wind speed (mph)  0  5  10  15  20  25  30  35  40  45  50  55  60    Wind chill ( F)  10  1  -4  -7  -9  -11  -12  -14  -15  -16  -17  -18  -19       Name the variables, including units and dependence.      At an air temperature of 10 F with a 20 mph wind, what is the wind chill?      A cold advisory is issued whenever the wind chill falls below 0 F. How fast does the wind need to be at an air temperature of 10 F to issue a cold advisory?      Between a wind chill of 0 F and -15 F, schools in our district are open but kids may not go outside for recess. What is the corresponding range of wind speeds at an air temperature of 10 F?      Draw a graph showing how wind chill depends on wind speed and use it to check your answers. To graph both positive and negative numbers on the vertical axis, put the horizontal axis somewhere in the middle of the graph paper.         Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and $92 per person.  (Story also appears in and )     Identify and name the variables, including units.      Explain the dependence using a sentence of the form is a function of .      Make a table showing the cost for 20, 50, 75, 100, or 150 people.      If Tony and Tina's budget is $8,000, about how many people can they invite to their wedding reception? Give a rough estimate from your table.      Graph the function.      Does your estimate agree with your graph? If not, revise.      Can you figure out from the story exactly how many guests Tony and Tina can invite to their wedding reception and stay within their $8,000 budget?         A mug of coffee costs $3.45 at Juan's favorite cafe. (Story also appears in , , and )      Juan buys coffee on the way to work every day. How much does Juan spend on coffee in a month? Let's say that's 22 workdays.      If Juan pays $10 for a discount card, then coffee costs $2.90\/mug instead. How much (total) would Juan spend on coffee in a month if he buys the discount card first? Still use 22 workdays. Include the $10.      Does the card pay for itself within the month? That means, is the total with the card (including the $10 for the card) less than the total without the card?      Complete the table, where is the number of mugs of coffee Juan buys and is the total cost, in dollars.     0  10  22  50    (regular)        (with card)             Draw a graph illustrating both functions.       What does the point where the two lines cross mean in terms of the story?        The table lists estimates of Earth's population, in billions, for select years since 1800.    Year  1800  1850  1900  1950  1970  1990  2000    Population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Source: The World at Six Billion United Nations report    (Story also appears in )   Use the table to find or reasonably guess the answers to the following questions.     What was the population of Earth in 1850?      What do you think the population of Earth was in 1860?      What do you think the population of Earth was in 1960?      In what year do you think the population of Earth first exceeded 2 billion?      In what year do you think the population of the world will exceed 7 billion?      Identify the variables, including units and dependence.       Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     (Story also appears in and )   Use the table to find or reasonably guess the answers to the following questions.     How much does it cost to rent a truck if you drive it 100 miles?      How many miles did you drive a truck costing $90.00 to rent?      If you rent a truck and drive it 75 miles, how much do you think it will cost?      If you rent a truck and drive it 10 miles, how much do you think it will cost?      If you rent a truck and it costs $60.00, about how many miles was it driven?      Identify the variables, including units, realistic domain, and dependence.      Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.      Use your graph to check your answers to the questions. Modify, if necessary.       The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon.  (Story also appears in and )     Make a table of reasonable values.      Draw a graph illustrating the dependence. Count time in hours after noon.      According to your table and graph, when did the temperature drop below freezing (32 F)?      According to your graph, when did the temperature drop below 0 F? Does that seem realistic? Here in the midwest there are no oceans or mountains to moderate large temperature changes.        Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year.  (Story also appears in , , and )     Make a table of reasonable values using for Mrs. Nystrom's benefits (in dollars) and for time (in years since 2009).      Draw a graph illustrating the dependence. Scale your graph to show up through the year 2020 and $1,200.      According to your table and graph, when did her benefit pass $900\/month?      If you extend your graph to 2020, what would you estimate Mrs. Nystrom's benefit will be then, assuming these increases continue?       The table shows the heat index as a function of humidity at an air temperature of 88 F. With up to about 40% humidity, 88 F feels like it's 88 F. But if the humidity rises to 60%, then it feels like it is 95 F; that is, the heat index is 95 F.   Source: National Oceanic and Atmospheric Administration     Humidity (%)  50  60  70  85  90  95    Heat index ( F)  91  95  100  110  113  117    All of the following questions refer to situations when the air temperature is 88 F.     What is the heat index when the humidity level is 70%?      At what humidity level does it feel more like 98 F?      Heat exhaustion is likely to occur when the heat index reaches 105 F. At what humidity level will heat exhaustion likely occur?      The heat index is considered danger in the range from 105 F to 129 F. What range of humidity levels are considered dangerous?      What do you think the heat index would be at 99% humidity?      Identify the variables, including units, realistic domain, and dependence.      Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.      Use your graph to check your answers to the questions. Modify, if necessary.      "
},
{
  "id": "sec-Tables_and_graphs-2-14",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convention "
},
{
  "id": "sec-Tables_and_graphs-2-20",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-2-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axes origin scale "
},
{
  "id": "sec-Tables_and_graphs-2-26",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#sec-Tables_and_graphs-2-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatter plot "
},
{
  "id": "grandfather-bonds-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#grandfather-bonds-tables-graphs",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  My grandfather had $200 in savings bonds that matured in 1962 when he gave them to me. The bonds continue to earn interest at a fixed rate so I have yet to cash them in. The table shows some values. (Story also appears in and )     year  1962  1970  1980  1990  2000  2010     0  8  18  28  38  48     200.00  318.77  570.87  1,022.34  1,830.85  3,278.77       What do and stand for? Include the units and dependence.      What were the savings bonds worth in 1970?      When were the savings bonds worth $1,022.34?      Approximately when were the savings bonds worth $1,500?      What do you expect the savings bonds would be worth in 2020?      Graph the function using the information given in the table.      Use the graph to check your answers to the questions.    "
},
{
  "id": "wind-chill-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#wind-chill-tables-graphs",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  How cold is it? An air temperature of 10 F is cold but manageable. But add a 30 miles per hour wind and, brrr, it feels like it is -12 F (12 below zero). We say the wind chill of 10 F with a 30 mph wind is -12 F. The table lists the wind chill for various wind speeds at an air temperature of 10 F. (Story also appears in )  Source: National Weather Service     Wind speed (mph)  0  5  10  15  20  25  30  35  40  45  50  55  60    Wind chill ( F)  10  1  -4  -7  -9  -11  -12  -14  -15  -16  -17  -18  -19       Name the variables, including units and dependence.      At an air temperature of 10 F with a 20 mph wind, what is the wind chill?      A cold advisory is issued whenever the wind chill falls below 0 F. How fast does the wind need to be at an air temperature of 10 F to issue a cold advisory?      Between a wind chill of 0 F and -15 F, schools in our district are open but kids may not go outside for recess. What is the corresponding range of wind speeds at an air temperature of 10 F?      Draw a graph showing how wind chill depends on wind speed and use it to check your answers. To graph both positive and negative numbers on the vertical axis, put the horizontal axis somewhere in the middle of the graph paper.    "
},
{
  "id": "wedding-rental-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#wedding-rental-tables-graphs",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and $92 per person.  (Story also appears in and )     Identify and name the variables, including units.      Explain the dependence using a sentence of the form is a function of .      Make a table showing the cost for 20, 50, 75, 100, or 150 people.      If Tony and Tina's budget is $8,000, about how many people can they invite to their wedding reception? Give a rough estimate from your table.      Graph the function.      Does your estimate agree with your graph? If not, revise.      Can you figure out from the story exactly how many guests Tony and Tina can invite to their wedding reception and stay within their $8,000 budget?    "
},
{
  "id": "juan-coffee-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#juan-coffee-tables-graphs",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  A mug of coffee costs $3.45 at Juan's favorite cafe. (Story also appears in , , and )      Juan buys coffee on the way to work every day. How much does Juan spend on coffee in a month? Let's say that's 22 workdays.      If Juan pays $10 for a discount card, then coffee costs $2.90\/mug instead. How much (total) would Juan spend on coffee in a month if he buys the discount card first? Still use 22 workdays. Include the $10.      Does the card pay for itself within the month? That means, is the total with the card (including the $10 for the card) less than the total without the card?      Complete the table, where is the number of mugs of coffee Juan buys and is the total cost, in dollars.     0  10  22  50    (regular)        (with card)             Draw a graph illustrating both functions.       What does the point where the two lines cross mean in terms of the story?    "
},
{
  "id": "earth-population-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#earth-population-tables-graphs",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  The table lists estimates of Earth's population, in billions, for select years since 1800.    Year  1800  1850  1900  1950  1970  1990  2000    Population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     Source: The World at Six Billion United Nations report    (Story also appears in )   Use the table to find or reasonably guess the answers to the following questions.     What was the population of Earth in 1850?      What do you think the population of Earth was in 1860?      What do you think the population of Earth was in 1960?      In what year do you think the population of Earth first exceeded 2 billion?      In what year do you think the population of the world will exceed 7 billion?      Identify the variables, including units and dependence.    "
},
{
  "id": "truck-rental-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#truck-rental-tables-graphs",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     (Story also appears in and )   Use the table to find or reasonably guess the answers to the following questions.     How much does it cost to rent a truck if you drive it 100 miles?      How many miles did you drive a truck costing $90.00 to rent?      If you rent a truck and drive it 75 miles, how much do you think it will cost?      If you rent a truck and drive it 10 miles, how much do you think it will cost?      If you rent a truck and it costs $60.00, about how many miles was it driven?      Identify the variables, including units, realistic domain, and dependence.      Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.      Use your graph to check your answers to the questions. Modify, if necessary.    "
},
{
  "id": "temp-mpls-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#temp-mpls-tables-graphs",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "  The temperature was 40 F at noon yesterday downtown Minneapolis but it dropped 3 F an hour in the afternoon.  (Story also appears in and )     Make a table of reasonable values.      Draw a graph illustrating the dependence. Count time in hours after noon.      According to your table and graph, when did the temperature drop below freezing (32 F)?      According to your graph, when did the temperature drop below 0 F? Does that seem realistic? Here in the midwest there are no oceans or mountains to moderate large temperature changes.     "
},
{
  "id": "social-security-tables-graphs",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#social-security-tables-graphs",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "  Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year.  (Story also appears in , , and )     Make a table of reasonable values using for Mrs. Nystrom's benefits (in dollars) and for time (in years since 2009).      Draw a graph illustrating the dependence. Scale your graph to show up through the year 2020 and $1,200.      According to your table and graph, when did her benefit pass $900\/month?      If you extend your graph to 2020, what would you estimate Mrs. Nystrom's benefit will be then, assuming these increases continue?    "
},
{
  "id": "heat-index-tables-graphs-ex",
  "level": "2",
  "url": "sec-Tables_and_graphs.html#heat-index-tables-graphs-ex",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": "  The table shows the heat index as a function of humidity at an air temperature of 88 F. With up to about 40% humidity, 88 F feels like it's 88 F. But if the humidity rises to 60%, then it feels like it is 95 F; that is, the heat index is 95 F.   Source: National Oceanic and Atmospheric Administration     Humidity (%)  50  60  70  85  90  95    Heat index ( F)  91  95  100  110  113  117    All of the following questions refer to situations when the air temperature is 88 F.     What is the heat index when the humidity level is 70%?      At what humidity level does it feel more like 98 F?      Heat exhaustion is likely to occur when the heat index reaches 105 F. At what humidity level will heat exhaustion likely occur?      The heat index is considered danger in the range from 105 F to 129 F. What range of humidity levels are considered dangerous?      What do you think the heat index would be at 99% humidity?      Identify the variables, including units, realistic domain, and dependence.      Draw a detailed graph illustrating the dependence based on the points given in the table. Be sure your axes are labeled and evenly scaled. Sketch in a smooth curve connecting the points.      Use your graph to check your answers to the questions. Modify, if necessary.    "
},
{
  "id": "sec-Rate_of_change",
  "level": "1",
  "url": "sec-Rate_of_change.html",
  "type": "Section",
  "number": "1.3",
  "title": "Rate of change",
  "body": " Rate of change   A diver bounces on a 3-meter springboard. Up she goes. A somersault, a twist, then whoosh, into the water. This table shows the diver's height as a function of time:     0  0.2  0.4  0.6  0.8  1.0  1.2  1.4     3.00  3.88  4.38  4.48  4.20  3.52  2.45  1.00    where In case you're wondering, 3 meters is nearly 10 feet up and the highest height listed, 4.48 meters, is close to 15 feet above the water. More on how we figured those numbers out in the next section, but thought you might like to know.  How fast is she moving? The diver starts at 3 meters, which is the height of the springboard, and 0.2 seconds later she's up to 3.88 meters. That means during the first 0.2 seconds, the diver went up Her speed is   What about during the next 0.2 seconds? Does she move faster, slower, or the same? During this time, her height changed from 3.88 meters to 4.38 meters. In these 0.2 seconds she rose That's less than before (since ), which means she is going slower. Let's double check by calculating her speed. Yup, slower.  Let's take a look at this calculation again. Here's what we did. There is a way to do the entire calculation at once on your calculator. See how we put parentheses around both the top and bottom of the fraction? We needed them to force the calculator to do the subtractions first and division second. The usual order of operations would do it the other way around: multiplication and division before addition and subtraction. (If you need a reminder, the full list of the order of operations is discussed in .) Because the top and bottom of the fraction each have meaning in the story, we continue to calculate them separately, but feel free to do the whole calculation at once if you prefer.  Notice that we are subtracting like terms : meters from meters and then seconds from seconds. It would not make sense to mix. Think: so we don't want to mix units because that would be like taking cookies away from children.  In our story, we calculated the speed of the diver. In general, that number is the rate of change of the function over that interval of values.   Rate of Change Formula      Notice how the change in dependent variable (height, in meters) is on top of the fraction and the change in independent variable (time, in seconds) is on the bottom. That makes sense in our example because speed is measured in meters\/second. The units can help you keep that straight.       Back to our diver. During the next time interval she's moving even slower. And look what happens when we calculate her speed during the next time interval. What does a negative speed mean? During this time interval her height drops. She's headed down towards the water. Her speed is 1.4 meters\/sec downward. The negative tells us her height is falling. What goes up, must come down. Sure enough.  You may notice that the sign used for subtraction and - used for negation look very similar. On the calculator these are two different keys. The subtraction key reads just . The negation key often reads (-) and is done before the number. This does not mean you type in parentheses, just hit the key that is labeled (-) already. (If your calculator does not have a key labeled (-) , look for a key labeled +\/- instead. That is not three keys, just one labeled +\/- . To emphasize that it is one key, we just write ± . Often that key needs to follow the number, so enter You should get -1.4 meters\/sec again.  Here are the speeds included in our table.       0  0.2  0.4  0.6  0.8  1  1.2  1.4       3  3.88  4.38  4.48  4.2  3.52  2.45  1    Speed    4.4  2.5  0.5  -1.4  -3.4  -5.35  -7.25       Let's graph our function. Notice that time is on the horizontal axis because it's the independent variable and height is on the vertical axis because it's our dependent variable: height depends on time.     As usual we drew in a smooth curve connecting the points, which illustrates our best guesses for the points we don't know and we continued the graph until the height was zero (when the diver hits the water). The values from our table are indicated with big points to help explain what's going on.  There is a way to see the rate of change from the graph. In the case of our diver, the graph looks like a hill. The curve goes uphill at first. Between the first two points it is rather steep and the rate of change is 4.4 meters\/sec there. The next segment is less steep and that's where the rate of change is less, down to 2.5 meters\/sec. The third line segment is almost flat and that's where the rate of change is only 0.5 meters\/sec. Aha. The rate of change corresponds to how steep the curve is.  We notice the same connection between the rate of change and steepness of the curve for the downhill portion, only this time all the rates of change are negative. The first downhill segment is not very steep and the rate of change is -1.4 meters\/sec there. The next downhill segment has rate of change -3.4 meters\/sec and the graph is steeper. The next two downhill segments are steeper and steeper yet and this time with rates of change -5.35 and -7.25 meters\/sec.  A little more vocabulary here. For the uphill portion of the graph, from 0 to just before 0.6 seconds, the rate of change is positive. The function is increasing there: as the independent variable gets larger, so does the dependent variable. After about 0.6 seconds, the graph is downhill and the rate of change is negative. The function is decreasing there: as the independent variable gets larger, the dependent variable gets smaller.  When does the diver's height stop increasing and start decreasing? When she's at the highest height, some time just before 0.6 seconds into her dive. Before then her rate of change is positive. After that time her rate of change is negative. So, at the highest height her rate of change is probably equal to zero. Does that make sense? Think about watching a diver on film in very slow motion. Up, up she goes, then almost a pause at the top, and then down, down, into the water. At the top of her dive it's as if she stands still for an instant. That would correspond to zero speed.    Do you know     How to calculate rate of change between two points? Ask your instructor if you need to remember the formula or if it will be provided during the exam.     What the rate of change means in the story?    How we can use the rate of change to estimate values?    When a function is increasing or decreasing, and the connection to the rate of change?    Why the rate of change is zero at the maximum (or minimum) value of a function?    What the connection is between rate of change and the steepness of the graph?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.      Sweet Rose Bakery makes cakes and cupcakes. Here are their prices.    Cake prices    Servings  10  20  50    Cost  $11.95  $19.95  $40.95      Cupcake prices    Servings  12  24  48    Cost  $6.95  $13.90  $27.80         Calculate the rate of change for cake prices, in $\/person, if there are between 10 and 20 people. Repeat for between 20 and 50 people.      Calculate the rate of change for cupcake prices, in $\/person, if there are between 12 and 24 people. Repeat for between 24 and 48 people.      On the same set of axes, graph how the price depends on the number of people for cake and also for cupcakes. Connect each line or curve smoothly.      The rate of change for cupcakes is constant. Any idea why?      The rate of change for cakes is not constant. Any idea why?         Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and then $92 per person. (Story also appears in and )      Make a table showing the cost for 20, 50, 75, or 100 people.      Calculate the extra cost for each additional person between 20 and 50 people.      Calculate the extra cost for each additional person between 75 and 100 people.      What do you notice?      Explain why the graph of this cost function is a straight line.      Is the cost function increasing, decreasing, or neither?         Rashad measured his heart rate several times after football practice. Right after practice his heart rate was 178 beats per minute. Two minutes later, it had dropped to 153 beats per minute, and by ten minutes after practice it was down to 120 beats per minute.     Make a table showing Rashad's heart rate at each time.      Identify the variables, including units and dependence.      How quickly was Rashad's heart rate dropping during the first two minutes following practice? Hint: the units are beats per minute per minute.       How quickly was his heart rate dropping during the next time period?      Rashad does not like hitting the showers until his heart rate is close to normal, or at least below 100. He usually waits 15 minutes after practice. Do you think that's long enough? Explain.      During the time in this table, did Rashad's heart rate increase, decrease, or neither?         Teen pregnancy rates for Minneapolis, measured in pregnancies per thousand teens, are summarized in the graph and table. Source: Minnesota Department of Health     Year  1999  2000  2001  2002  2003  2004  2005  2006  2007  2008  2009    Teen preg  76.0  73.5  54.9  58.2  55.7  49.9  45.1  53.3  49.4  43.5  34.0        What was the teen pregnancy rate in 2003?      Did the teen pregnancy rate increase or decrease from 2003 to 2004?      While the teen pregnancy rate has generally decreased, from 2001 to 2002 it actually increased. Were there other times when it increased?      When did the teen pregnancy rate first fall below 60 pregnancies per thousand teens?      How fast was the teen pregnancy rate dropping on average per year from 2002 to 2005? How does that compare to 2006 to 2009?        Look back at the springboard diver example in this section.     Check the other rates of change given in the table.      Approximately how fast is the diver moving as she enters the water? Use that her height at 1.4 seconds is 1 foot above water (given earlier), but also her height at 1.5 seconds is just 0.12 feet above water.       Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     (Story also appears in and )      Name the variables, including units and dependence.      Plot the points from the table on a graph.      Calculate the rate of change for each distance interval.      Can you use this calculated rate of change to figure out what it probably costs to rent a truck to drive 75 miles?      There must be some sort of fixed price plus a per mile price. Can you figure out what that fixed price must be?       Wind turbines are used to generate electricity. A few values are recorded in the table.    wind speed (mph)  0  10  20  30    electricity (watts)  0  2,400  19,200  64,800     (Story also appears in , , and )      Name the variables, including units and dependence.      Plot the points from the table on a graph.      Calculate the rate of change in electricity as a function of wind speeds from 0 to 10 mph. Sketch in the line segment connecting those two points on the graph.      Repeat for wind speeds from 10 to 20 mph. Is the electricity produced increasing faster or increasing slower than for lower wind speeds?      Repeat for wind speeds from 20 to 30 mph. Comment again on how the rate of change compares to earlier rates of change.       The table lists estimates of Earth's population, in billions, for select years since 1800.   Source: The World at Six Billion United Nations report, 1999     year  1800  1850  1900  1950  1970  1990  2000    population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     (Story also appears in )   During which period of time was the Earth's population increasing the fastest? Calculate the rates of change for each time period to decide. (Or, explain some other way of deciding.)      A company produces backpacks. The more they make, the less it costs for each one, but only up to a certain point. For example, if they produce 10 backpacks, it would cost $39 each. For 40 backpacks, they would cost $18 each. By 70 backpacks, the unit cost is down to $15 each. But at 100 backpacks, the unit cost is back up to $30 each. (Story also appears in )      Name the variables and summarize the information in a table.      Calculate the rates of change between 10 and 40 backpacks, between 40 and 70 backpacks, and between 70 and 100 backpacks.      For which range of values does the cost per backpack decrease?      Any ideas why the cost might increase?      Draw a graph illustrating the dependence. Try for a nice, smooth curve.      Approximately how many backpacks does the company have to make to keep the cost per backpack as small as possible?       The public beach near Paloma's house has lost depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. The table shows a few values. Here is the depth of the beach in feet, and is the year, measured since 60 years ago.    year  60 years ago  30 years ago  10 years ago  now     0  30  50  60     435  322.5  247.5  210     (Story also appears in and )      Calculate the rates of change for each time period.      Explain why the rates of change should be negative.      Approximately how many feet a year is the beach eroding?      Draw a graph showing how the beach depth has changed over the past 60 years.      "
},
{
  "id": "sec-Rate_of_change-2-7",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "like terms "
},
{
  "id": "sec-Rate_of_change-2-8",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate of change "
},
{
  "id": "sec-Rate_of_change-2-21",
  "level": "2",
  "url": "sec-Rate_of_change.html#sec-Rate_of_change-2-21",
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
  "number": "1.3.1",
  "title": "",
  "body": "  Sweet Rose Bakery makes cakes and cupcakes. Here are their prices.    Cake prices    Servings  10  20  50    Cost  $11.95  $19.95  $40.95      Cupcake prices    Servings  12  24  48    Cost  $6.95  $13.90  $27.80         Calculate the rate of change for cake prices, in $\/person, if there are between 10 and 20 people. Repeat for between 20 and 50 people.      Calculate the rate of change for cupcake prices, in $\/person, if there are between 12 and 24 people. Repeat for between 24 and 48 people.      On the same set of axes, graph how the price depends on the number of people for cake and also for cupcakes. Connect each line or curve smoothly.      The rate of change for cupcakes is constant. Any idea why?      The rate of change for cakes is not constant. Any idea why?    "
},
{
  "id": "wedding-rental-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#wedding-rental-rate-of-change",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Anthony and Christina are trying to decide where to hold their wedding reception. The Metropolitan Club costs $1,300 for the space and then $92 per person. (Story also appears in and )      Make a table showing the cost for 20, 50, 75, or 100 people.      Calculate the extra cost for each additional person between 20 and 50 people.      Calculate the extra cost for each additional person between 75 and 100 people.      What do you notice?      Explain why the graph of this cost function is a straight line.      Is the cost function increasing, decreasing, or neither?    "
},
{
  "id": "heart-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#heart-rate-of-change",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Rashad measured his heart rate several times after football practice. Right after practice his heart rate was 178 beats per minute. Two minutes later, it had dropped to 153 beats per minute, and by ten minutes after practice it was down to 120 beats per minute.     Make a table showing Rashad's heart rate at each time.      Identify the variables, including units and dependence.      How quickly was Rashad's heart rate dropping during the first two minutes following practice? Hint: the units are beats per minute per minute.       How quickly was his heart rate dropping during the next time period?      Rashad does not like hitting the showers until his heart rate is close to normal, or at least below 100. He usually waits 15 minutes after practice. Do you think that's long enough? Explain.      During the time in this table, did Rashad's heart rate increase, decrease, or neither?    "
},
{
  "id": "teen-pregnancy-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#teen-pregnancy-rate-of-change",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Teen pregnancy rates for Minneapolis, measured in pregnancies per thousand teens, are summarized in the graph and table. Source: Minnesota Department of Health     Year  1999  2000  2001  2002  2003  2004  2005  2006  2007  2008  2009    Teen preg  76.0  73.5  54.9  58.2  55.7  49.9  45.1  53.3  49.4  43.5  34.0        What was the teen pregnancy rate in 2003?      Did the teen pregnancy rate increase or decrease from 2003 to 2004?      While the teen pregnancy rate has generally decreased, from 2001 to 2002 it actually increased. Were there other times when it increased?      When did the teen pregnancy rate first fall below 60 pregnancies per thousand teens?      How fast was the teen pregnancy rate dropping on average per year from 2002 to 2005? How does that compare to 2006 to 2009?    "
},
{
  "id": "diver-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#diver-rate-of-change",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Look back at the springboard diver example in this section.     Check the other rates of change given in the table.      Approximately how fast is the diver moving as she enters the water? Use that her height at 1.4 seconds is 1 foot above water (given earlier), but also her height at 1.5 seconds is just 0.12 feet above water.    "
},
{
  "id": "truck-rental-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#truck-rental-rate-of-change",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck.    Distance driven (miles)  50  100  150  200    Rental cost ($)  37.50  55.00  72.50  90.00     (Story also appears in and )      Name the variables, including units and dependence.      Plot the points from the table on a graph.      Calculate the rate of change for each distance interval.      Can you use this calculated rate of change to figure out what it probably costs to rent a truck to drive 75 miles?      There must be some sort of fixed price plus a per mile price. Can you figure out what that fixed price must be?    "
},
{
  "id": "wind-turbine-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#wind-turbine-rate-of-change",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Wind turbines are used to generate electricity. A few values are recorded in the table.    wind speed (mph)  0  10  20  30    electricity (watts)  0  2,400  19,200  64,800     (Story also appears in , , and )      Name the variables, including units and dependence.      Plot the points from the table on a graph.      Calculate the rate of change in electricity as a function of wind speeds from 0 to 10 mph. Sketch in the line segment connecting those two points on the graph.      Repeat for wind speeds from 10 to 20 mph. Is the electricity produced increasing faster or increasing slower than for lower wind speeds?      Repeat for wind speeds from 20 to 30 mph. Comment again on how the rate of change compares to earlier rates of change.    "
},
{
  "id": "earth-population-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#earth-population-rate-of-change",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  The table lists estimates of Earth's population, in billions, for select years since 1800.   Source: The World at Six Billion United Nations report, 1999     year  1800  1850  1900  1950  1970  1990  2000    population  0.98  1.26  1.65  2.52  3.70  5.27  6.06     (Story also appears in )   During which period of time was the Earth's population increasing the fastest? Calculate the rates of change for each time period to decide. (Or, explain some other way of deciding.)   "
},
{
  "id": "backpacks-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#backpacks-rate-of-change",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  A company produces backpacks. The more they make, the less it costs for each one, but only up to a certain point. For example, if they produce 10 backpacks, it would cost $39 each. For 40 backpacks, they would cost $18 each. By 70 backpacks, the unit cost is down to $15 each. But at 100 backpacks, the unit cost is back up to $30 each. (Story also appears in )      Name the variables and summarize the information in a table.      Calculate the rates of change between 10 and 40 backpacks, between 40 and 70 backpacks, and between 70 and 100 backpacks.      For which range of values does the cost per backpack decrease?      Any ideas why the cost might increase?      Draw a graph illustrating the dependence. Try for a nice, smooth curve.      Approximately how many backpacks does the company have to make to keep the cost per backpack as small as possible?    "
},
{
  "id": "beach-erosion-rate-of-change",
  "level": "2",
  "url": "sec-Rate_of_change.html#beach-erosion-rate-of-change",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  The public beach near Paloma's house has lost depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. The table shows a few values. Here is the depth of the beach in feet, and is the year, measured since 60 years ago.    year  60 years ago  30 years ago  10 years ago  now     0  30  50  60     435  322.5  247.5  210     (Story also appears in and )      Calculate the rates of change for each time period.      Explain why the rates of change should be negative.      Approximately how many feet a year is the beach eroding?      Draw a graph showing how the beach depth has changed over the past 60 years.    "
},
{
  "id": "sec-Units",
  "level": "1",
  "url": "sec-Units.html",
  "type": "Section",
  "number": "1.4",
  "title": "Units",
  "body": " Units   We know 5 city blocks and 5 miles are very different lengths to walk; $5 and 5 are very different values of money; 5 minutes and 5 years are very different amounts of time to wait - even though all of these quantities are represented by the number 5. Every variable is measured in terms of some unit. Since there are often several different units available to use it is important when naming a variable to state which units we are choosing to measure it in.  In the last section we examined the height of a springboard diver and her speed in the air. But, how high is 3 meters? How fast is 4.4 meters per second?  The metric unit of length called a meter is just over 3 feet (a yard). Let's use We can use this conversion to change 3 meters to feet. Since our conversion is just approximate, we rounded off our answer too.  See that fraction? The 3.281 feet on the top and the 1 meter on the bottom are just two different ways of saying approximately the same distance. In other words, A fraction where the top and bottom are equal quantities expressed in different units is sometimes called a unit conversion fraction . Because it's equal to 1 (or at least very close to 1), multiplying by the unit conversion fraction doesn't change the value, just the units.  You might wonder how we knew to put the feet on the top and the meters on the bottom. One reminder for how this works is to think fractions. It's like the meters on the top and bottom cancel, leaving the units as feet.   One more idea to keep in mind when converting units: a few large things equals a lot of small things. Instead of buying a lot of small bags of ice to fill your cooler, you can buy a few larger bags of ice instead. In our example, a meter is much bigger than a foot. So it makes sense that a small number of meters (3 meters) equalled a larger number of feet (9.8 feet). That might seem backwards, but that's how it works.  Of course, 9.8 feet might sound like a funny answer. We're much more used to a whole number of feet and then the fraction in inches. It's 9 feet and some number of inches. To figure out the inches we look at the decimal part . That's the part we need to convert to inches. Since there are 12 inches in a foot, we use the (exact) conversion to get   Quick caution here. We rounded off 9.843 to get 9.8 and then just used the 0.8 to find the extra inches. Maybe we should have used the 0.843 instead. Here's what happens. Phew! Either way, the board is about 9 feet and 10 inches high. The common shorthand for this answer is 9 10 . (That's pronounced 9 foot 10 , as in our team's new center is 6 foot 7 .) The symbol indicates feet and indicates inches.  The highest height we had recorded for the diver was 4.48 meters. Now we know that's In feet and inches, that's about 14 feet, 8 inches because The diver's highest height was around 14 8 .  You might have guessed that 14.7 feet would be 14 7 . I mean, that sort of looks obvious. The reason it's not is because decimal numbers are based on 10. The 0.7 really means . But inches are based on 12. Seven inches means We wanted 0.7 so that's not it. Our answer of 8 worked just fine since   What about the diver's speed? During the first 0.2 seconds we calculated her speed as 4.4 meters per second. How fast is that? We can certainly convert to feet per second. Does that help us understand how fast she's going? Maybe a little. But, we're probably most familiar with speeds measured in miles per hour, that's what mph stands for.  Let's convert to miles per hour. First, use that to get The larger number makes sense here because she can go more feet in a minute than in just one second.  Next, use that to get Again, the larger number makes sense because she can go more feet in an hour than in just one minute.  Last, we need to convert to miles. Turns out that and so This time we got a smaller number because she can go a lot fewer miles in an hour compared to feet in an hour. Notice how we needed to divide by 5,280. Numbers on top of the fraction multiply. Those on the bottom divide.  We can do this entire calculation all at once. Notice how all of the units cancel to leave us with miles per hour.    Right before the diver hit the water she was going around 7.25 meters per second. How fast is that in mph? Ready for it all in one line? Here it is.    If you're having trouble setting up unit conversions, remember to write down the units so you can see how they cancel. If you can't remember a number for a unit conversion, like feet for one mile, try searching online.    Do you know     How to convert from one unit of measurement to another?    What a unit conversion fraction is?    How to decide whether to multiply or divide?    Why multiplying by a unit conversion fraction doesn't change the amount, just the units?    How to connect repeated conversions into one calculation?    Why if we convert an amount to a larger unit, we use a smaller number?    How many seconds in a minute, minutes in an hour, hours in a day, days in a year, inches in a foot, feet in a mile, and other common conversions?   Ask your instructor which common conversions you need to remember, and whether any conversion formulas will be provided during the exam.     How to convert between English and metric measurements?   Again, ask your instructor which metric conversions you need to remember, and whether any conversion formulas will be provided during the exam.       If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.       Compare centimeters (cm) and inches, using that 1 inch 2.54 cm.     Which is longer: 1 inch or 1 centimeter?      Kamari is shopping at an internationally-based retail store. She is looking at a curtain rod that projects 10 cm from the wall. What is that in inches?      She also wants a basket no more than 1 foot wide or long to fit on her bookcase. How many centimeters are in a foot?       Compare meters (m) and yards using that 1 yard 0.9144 m.     Which is longer: 1 yard or 1 meter?      Princeton was watching the Olympics and noticed everything was measured in meters. He is curious how long a football field (100 yards) is in meters.      Kamari found a really big bath towel she likes. It is 1 meter wide and 1.5 meters long. What are the dimensions in inches? Use that 1 yard = 3 feet.       Compare kilometers (km) and miles using that 1 mile 1.609 km.     Which is longer: 1 mile or 1 kilometer?      This weekend Princeton and Kamari are doing a 5K run. How many miles long is that? Note: 5K is short for 5 kilometers.      Princeton is actually in training for a marathon. How many kilometers is that? Note: a marathon is approximately 26.2 miles.           Yesterday Cameron worked for 2 hours and 15 minutes (that's 2:15) and then went home and studied for 7 hours and 57 minutes (that's 7:57). Convert each time into decimal hours.        Ephraim works at a plant that produces very delicate electronic switches. He measured the lifetime for one switch at 4.18 hours. Another had lifetime 19.50 hours. Convert each time into hours and minutes. That means H:MM format.       Phillip measured his office using a digital measure. One wall is 21.8 feet. The other is 10.2 feet. How long is each wall measured in the more usual feet and inches?      The couch Stetson wanted to buy is 92 long and 44 tall. Convert the length and height to feet and inches.      Abdi volunteers at a food bank. He noticed that the shelf on the back wall was bending so he measured its length at 12 5 . The formula for load needs the length written as a decimal. Convert the length to a decimal number of feet.          Some people say we should drink 8 glasses of water (or other liquids) every day, where a glass is defined as 8 (liquid) ounces.     Ingrid uses a 20 ounce unbreakable plastic bottle. How many of those bottles full of water does she need to drink each day?      Siri carries around a insulated water bottle that holds 0.6 liters. How many of those bottles full of water does she need to drink each day? Use that 1 liter 1.057 quarts and 1 quart = 32 (liquid) ounces.      To meet the recommendation, how much water would one person drink in an entire year? Give the answer in gallons. Use 1 gallon = 4 quarts.         Jenna is studying in Finland this term and rented an older car to drive.     She learns that no matter what the road signs might say, the maximum speed limit in Finland in winter is never more than 100 km\/hr. How fast is that in miles per hour (mph)? Use 1 mile 1.609 km.      Jenna's car holds 62 liters of gasoline in its tank. How many gallons is that? Use 1 liter 1.057 quarts and 1 gallon = 4 quarts.      Her car gets 7.6 km\/liter. Convert to miles per gallon (mpg).      Gas prices in Finland were 1.658 €\/liter. What's the equivalent price in $\/gal? The symbol € stands for euro. Use 1 € $1.23.      What would it cost Jenna, in euros, for a full tank of gas? How much is that in dollars?        In August 2008, United States swimmer Michael Phelps set the world record for the 200 meter individual medley, swimming it in 1 minute, 54.80 seconds.   Source: Wikipedia (World record progression 200 metres IM)      Convert Phelps's time into minutes.      How fast did Phelps swim, as measured in meters\/min?      Convert Phelps's speed to mph. Use .       In August 2012, Phelps improved his time and won Olympic gold, but failed to break the world record his teammate Ryan Lochte had set a year earlier of 1 minute, 54 seconds.     Convert Lochte's time into minutes.      How fast did Lochte swim, as measured in meters\/min?      Convert Lochte's speed to mph.        The typical weight limit for a suitcase on flights within Africa is 20 kg. How many pounds is that? Use .      How many servings are in a 20 ounce package of cookies where a serving size is 3 cookies and each cookie weighs 11 grams? Use .      My corner convenience store sells a thirst quencher size of soft drink; it holds 64 (fluid) ounces. If a can of soft drink is 12 (fluid) ounces, how many cans are in the thirst quencher ?        The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. How many yards are in three-quarters of a mile?   (Story also appears in )       The quilt pattern calls for 0.375 yards of calico fabric. How many feet is 0.375 yards?      The website said that basil plants should be 0.35 feet tall a month after germinating. How many inches is 0.35 feet?       Authorities are tracking down the source of a pollution spill on a nearby river. They suspect that the local plant is inadvertently leaking waste water. Last week they found 35 minutes of waste water flow on Monday, 1 hour and 11 minutes on Tuesday, 1\/4 hour on Wednesday (that's 0.25 hours in decimal), none on Thursday, and then 98 minutes Friday.     Convert units as needed to complete the following table showing each time in minutes, each time in hours, and each time in hours and minutes (H:MM format).   Hint: 15 minutes in H:MM format would be 0:15     Day  Mon  Tue  Wed  Thu  Fri    Minutes  35    0  98    Hours    0.25      H:MM   1:11           Calculate the total waste water flow measured last week.       If your heart beats around 70 times a minute, how many times does it beat in a week? A year?       Harold's Physics textbook says an object is thrown into the air at 36 feet per second. To understand how fast that is, convert to mph.      Harold's History textbook mentions that in 1800 the city encompassed about 6,000 acres. How many square miles is that? Use .      Harold's Economics textbooks lists the recent high price of crude oil at $100 per barrel. He'd like to know what that means in $\/gallon of gasoline. It turns out that 1 barrel of crude oil produces about 19.4 gallons of gasoline.      "
},
{
  "id": "sec-Units-2-4",
  "level": "2",
  "url": "sec-Units.html#sec-Units-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit conversion fraction "
},
{
  "id": "sec-Units-2-11",
  "level": "2",
  "url": "sec-Units.html#sec-Units-2-11",
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
  "number": "1.4.1",
  "title": "",
  "body": "   Compare centimeters (cm) and inches, using that 1 inch 2.54 cm.     Which is longer: 1 inch or 1 centimeter?      Kamari is shopping at an internationally-based retail store. She is looking at a curtain rod that projects 10 cm from the wall. What is that in inches?      She also wants a basket no more than 1 foot wide or long to fit on her bookcase. How many centimeters are in a foot?       Compare meters (m) and yards using that 1 yard 0.9144 m.     Which is longer: 1 yard or 1 meter?      Princeton was watching the Olympics and noticed everything was measured in meters. He is curious how long a football field (100 yards) is in meters.      Kamari found a really big bath towel she likes. It is 1 meter wide and 1.5 meters long. What are the dimensions in inches? Use that 1 yard = 3 feet.       Compare kilometers (km) and miles using that 1 mile 1.609 km.     Which is longer: 1 mile or 1 kilometer?      This weekend Princeton and Kamari are doing a 5K run. How many miles long is that? Note: 5K is short for 5 kilometers.      Princeton is actually in training for a marathon. How many kilometers is that? Note: a marathon is approximately 26.2 miles.     "
},
{
  "id": "decimal-hours-lengths-units",
  "level": "2",
  "url": "sec-Units.html#decimal-hours-lengths-units",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "   Yesterday Cameron worked for 2 hours and 15 minutes (that's 2:15) and then went home and studied for 7 hours and 57 minutes (that's 7:57). Convert each time into decimal hours.        Ephraim works at a plant that produces very delicate electronic switches. He measured the lifetime for one switch at 4.18 hours. Another had lifetime 19.50 hours. Convert each time into hours and minutes. That means H:MM format.       Phillip measured his office using a digital measure. One wall is 21.8 feet. The other is 10.2 feet. How long is each wall measured in the more usual feet and inches?      The couch Stetson wanted to buy is 92 long and 44 tall. Convert the length and height to feet and inches.      Abdi volunteers at a food bank. He noticed that the shelf on the back wall was bending so he measured its length at 12 5 . The formula for load needs the length written as a decimal. Convert the length to a decimal number of feet.     "
},
{
  "id": "drink-water-units",
  "level": "2",
  "url": "sec-Units.html#drink-water-units",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Some people say we should drink 8 glasses of water (or other liquids) every day, where a glass is defined as 8 (liquid) ounces.     Ingrid uses a 20 ounce unbreakable plastic bottle. How many of those bottles full of water does she need to drink each day?      Siri carries around a insulated water bottle that holds 0.6 liters. How many of those bottles full of water does she need to drink each day? Use that 1 liter 1.057 quarts and 1 quart = 32 (liquid) ounces.      To meet the recommendation, how much water would one person drink in an entire year? Give the answer in gallons. Use 1 gallon = 4 quarts.    "
},
{
  "id": "finland-units",
  "level": "2",
  "url": "sec-Units.html#finland-units",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  Jenna is studying in Finland this term and rented an older car to drive.     She learns that no matter what the road signs might say, the maximum speed limit in Finland in winter is never more than 100 km\/hr. How fast is that in miles per hour (mph)? Use 1 mile 1.609 km.      Jenna's car holds 62 liters of gasoline in its tank. How many gallons is that? Use 1 liter 1.057 quarts and 1 gallon = 4 quarts.      Her car gets 7.6 km\/liter. Convert to miles per gallon (mpg).      Gas prices in Finland were 1.658 €\/liter. What's the equivalent price in $\/gal? The symbol € stands for euro. Use 1 € $1.23.      What would it cost Jenna, in euros, for a full tank of gas? How much is that in dollars?    "
},
{
  "id": "phelps-units",
  "level": "2",
  "url": "sec-Units.html#phelps-units",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  In August 2008, United States swimmer Michael Phelps set the world record for the 200 meter individual medley, swimming it in 1 minute, 54.80 seconds.   Source: Wikipedia (World record progression 200 metres IM)      Convert Phelps's time into minutes.      How fast did Phelps swim, as measured in meters\/min?      Convert Phelps's speed to mph. Use .    "
},
{
  "id": "lochte-units",
  "level": "2",
  "url": "sec-Units.html#lochte-units",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  In August 2012, Phelps improved his time and won Olympic gold, but failed to break the world record his teammate Ryan Lochte had set a year earlier of 1 minute, 54 seconds.     Convert Lochte's time into minutes.      How fast did Lochte swim, as measured in meters\/min?      Convert Lochte's speed to mph.    "
},
{
  "id": "assorted-1-units",
  "level": "2",
  "url": "sec-Units.html#assorted-1-units",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "   The typical weight limit for a suitcase on flights within Africa is 20 kg. How many pounds is that? Use .      How many servings are in a 20 ounce package of cookies where a serving size is 3 cookies and each cookie weighs 11 grams? Use .      My corner convenience store sells a thirst quencher size of soft drink; it holds 64 (fluid) ounces. If a can of soft drink is 12 (fluid) ounces, how many cans are in the thirst quencher ?    "
},
{
  "id": "assorted-2-units",
  "level": "2",
  "url": "sec-Units.html#assorted-2-units",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "   The football coach wants everyone to sprint three-quarters of a mile, up and back on the field which is labeled in yards. How many yards are in three-quarters of a mile?   (Story also appears in )       The quilt pattern calls for 0.375 yards of calico fabric. How many feet is 0.375 yards?      The website said that basil plants should be 0.35 feet tall a month after germinating. How many inches is 0.35 feet?    "
},
{
  "id": "pollution-spill-units",
  "level": "2",
  "url": "sec-Units.html#pollution-spill-units",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "  Authorities are tracking down the source of a pollution spill on a nearby river. They suspect that the local plant is inadvertently leaking waste water. Last week they found 35 minutes of waste water flow on Monday, 1 hour and 11 minutes on Tuesday, 1\/4 hour on Wednesday (that's 0.25 hours in decimal), none on Thursday, and then 98 minutes Friday.     Convert units as needed to complete the following table showing each time in minutes, each time in hours, and each time in hours and minutes (H:MM format).   Hint: 15 minutes in H:MM format would be 0:15     Day  Mon  Tue  Wed  Thu  Fri    Minutes  35    0  98    Hours    0.25      H:MM   1:11           Calculate the total waste water flow measured last week.    "
},
{
  "id": "heart-beats-units",
  "level": "2",
  "url": "sec-Units.html#heart-beats-units",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "  If your heart beats around 70 times a minute, how many times does it beat in a week? A year?   "
},
{
  "id": "assorted-3-units",
  "level": "2",
  "url": "sec-Units.html#assorted-3-units",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": "   Harold's Physics textbook says an object is thrown into the air at 36 feet per second. To understand how fast that is, convert to mph.      Harold's History textbook mentions that in 1800 the city encompassed about 6,000 acres. How many square miles is that? Use .      Harold's Economics textbooks lists the recent high price of crude oil at $100 per barrel. He'd like to know what that means in $\/gallon of gasoline. It turns out that 1 barrel of crude oil produces about 19.4 gallons of gasoline.    "
},
{
  "id": "sec-Metric_system_and_scientific_notation",
  "level": "1",
  "url": "sec-Metric_system_and_scientific_notation.html",
  "type": "Section",
  "number": "1.5",
  "title": "Metric prefixes and scientific notation",
  "body": " Metric prefixes and scientific notation   Tara is working on a big project at work. She wants to back up her files to her online drop box. The site says she has 72 GB of memory remaining. Tara has about 200 files at an average of 42.3 MB each that she would like to upload. Will she have room?  To answer Tara's question we need to know that GB is short for gigabyte and MB is short for megabyte. A byte is a very small unit of computer memory storage space just enough for about one letter. You may have heard the word mega used to mean really big. There's a reason for that. Mega is short for 1 million. That's pretty big. But giga stands for 1 billion, so that's even bigger. (Maybe it's time for a gigamall?) What all this means is Tara has of memory remaining. She would like to save 200 files at 42.3 MB each which comes to which is really Finding it hard to compare all those zeros? Try this. So Tara wants to store less than 9 GB of information and she has 72 GB remaining. She has plenty of room. Save away.  Tara also needs to download about 700 MB of rather high quality photos. Her computer downloads photos at 187 kbps. How long will it take? (And does she have time to run for a coffee?) The mysterious kbps stands for kilobits (Kb) per second. Like mega and giga, the word kilo stands for a large number, in this case 1,000. That's the same word kilo as in kilometer (about mile) or kilogram (about pound) and there's good reason for that as Perhaps you've seen the letter K as short for a thousand? That's where it comes from.  (Okay, I have to mention something here. Kilo by itself is pronounced KEE-loh, but kilogram is pronounced KIL-uh gram, and kilometer is pronounced ki-LOM-i-ter. Well, around these parts at least.)  Back to Tara. Her download speed is 187 kilobits per second. Perhaps this is the right moment to mention that a bit is even smaller than a byte . How long will it take Tara to download 700 MB? We can think of this calculation as a unit conversion by imagining Watch.  Let's convert to a more reasonable unit.  It will take Tara over 8 hours to download those photos. Perhaps Tara should compress the photos into a zip file or use lower resolution or find a way to download faster. Or, she can just set it up to download overnight.  Quick note. The metric system of measurement , or international system of units (ISU) , is the official system of nearly all countries, the United States being a notable exception. Science, international trade, and most international sporting events like the Olympics are based in the metric system. In the United States system (known officially at the British system or, since the British stopped using it, the imperial system of measurement ), we have all sorts of difficult to remember conversions. One notable feature of the metric system is that most units come in sizes ranging from small to large: the (metric) prefixes like kilo, mega, or giga tell us which size.  Really large numbers, like 8,460,000,000, are awkward to read and awkward to work with. We have seen how metric prefixes allow us to rewrite these large numbers in a way that's much easier both to read and to work with. There's another option that's used often in the sciences (and by your calculator). To explain it we need to understand powers of 10.  Perhaps you know what happens when we multiply a number by 10, like or, more appropriate to our example, The effect of multiplying by 10 is to move the decimal point one place to the right. When we multiply by 1,000 we get or, for our example, The effect of multiplying by 1,000 is to move the decimal point three places to the right. The connection is that Each has the effect of moving the decimal point one place to the right so has the same effect as multiplying by 10 three times, so the decimal point moves three places to the right. That means   Since we're multiplying by the same number (10) over and over again, it's easier to use exponential notation . Here 10 is the base and 9 is the exponent (or power ). In this context, the exponent is also called the order of magnitude .  The point of this calculation was that This shorthand is called scientific notation . The base is always 10. The exponent is always a whole number. The number out front, like 8.46 in our example, is always between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). It is customary to use instead of in scientific notation, so we should write As another example, we saw earlier that   Most calculators use the symbol for exponents, as do most computer software packages. Two other notations calculators sometimes use are or . Sometimes that operation is accessible through the 2nd or shift key; something like SHIFT . If you're not sure, ask a classmate or your instructor. For practice, check that Notice that the order of operations is exactly what we wanted here: first raises 10 to the 3rd power and then multiplies by 5. So we can enter it all at once without needing parentheses.  Here's the full list of the order of operations , the priority ranking for arithmetic operations.    Order of Operations     First, calculate anything inside P arentheses ().    Next, calculate E xponents , in order from left to right.    Then, M ultiply and D ivide , in order from left to right.    Last, A dd and S ubtract , in order from left to right.      We highlighted the letters PEMDAS which often helps people remember this order. ( Please Excuse My Dear Aunt Sally is how I learned it.) The good news is that your calculator does the operations in exactly this order. And if you want something in a different order, all you need to do is use parentheses around quantities you want calculated first.  Back to our large number. Enter What do you see? Some calculators correctly list out while others report the number back in scientific notation, which is not particularly useful. (Sigh.)  Let's try a number so big that (nearly) every calculator will switch to scientific notation. Enter Look carefully at the screen. Your calculator might display something like Whatever shorthand your calculator uses, you should write   Interested in what that number is in our usual decimal notation? It's   Enough of that. Poor Tara is pulling her hair out over this project. Well, not literally, but she is quite frustrated over how slowly the project is going. She wonders: how thick is a human hair? And, how many hairs would you need to lay out to span an inch?  Turns out that a typical human hair is about meters across. Very small numbers are also awkward to read and awkward to work with. In this section, we write where we insert a space to help you read the number. Of course, a better solution is to use metric prefixes to get more appropriate units, just as we did for large numbers.  For example, centi is short for 1 in a hundred, or . Not surprising since one cent is $0.01, or one percent is 1%=0.01. That's the same word centi as in centimeter (about inch) and there's good reason for that as Similarly, milli is short for 1 in a thousand and micro is short for 1 in a million. What about that human hair? It is convenient to measure in micrometers using that The width of a human hair in micrometers (abbreviated m in the sciences) is The symbol is the Greek letter mu , but we'll just read as micrometers.  To answer Tara's question about how many hairs in an inch, we recall that where cm is short for centimeter. Ready to convert?    We can also describe really small numbers using scientific notation. Perhaps you know what happens when we divide a number by 10, like or, more appropriate to our example, The effect of dividing by 10 is to move the decimal point one place to the left. If we divide by 1,000,000 instead, we get The connection is that and so dividing by 1,000,000 moves the decimal point six places to the left. Notice that we have to introduce zeros as placeholders.  The width of a hair was 0.00012 meters. To get that number from 1.2, we need to move the decimal point 4 places to the left. The shorthand for dividing by a power is to use negative exponents. For example It has nothing to do with negative numbers. It's just a shorthand. The point of this calculation was that   Once again we have scientific notation. The base is still 10. The exponent is still a whole number, although now it's negative. The number out front, like 1.2 in our example, is still between 1 and 10, which means there's exactly one digit before the decimal point (and any others must come afterwards). As before it customary to use instead of in scientific notation, so we should write When you see a number written in scientific notation, the power of 10 tells you a lot. For example, and . A positive power of 10 says you have a big number, and a negative power of 10 says you're dealing with a very small number.    Do you know     How to calculate powers on your calculator?    What million, billion, and trillion mean?    Why metric prefixes are used?    What common metric prefixes (mega, giga, kilo, centi, milli, micro, nano) mean?   Ask your instructor which prefixes you need to remember, and whether any prefixes will be provided during the exam.     Why scientific notation is used?    The standard format for scientific notation?    What kinds of numbers have a positive order of magnitude, and which have a negative order of magnitude?    How to convert between decimal notation and scientific notation?    How your calculator reports numbers in scientific notation, and what (might be) different when you're reporting that number?    The usual order of operations (PEMDAS) and how to use parentheses when you want a different order?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.      Exercises 1-4 are available in a separate workbook format.      The GDP (gross domestic product) of the United States was approximately $15,596 billion in 2011 and the population of the United States was approximately 0.313 billion that year. Source: U.S. Bureau of Economic Analysis, U.S. Census Bureau  (Story also appears in )      Writing the population as 0.313 billion seems strange. A more natural unit would be millions. Rewrite the population in millions of people.      Rewrite the population in people, both in normal decimal notation (that means with all the 0s) and in scientific notation.      It also seems strange to write the GDP as $15,596 billion. A more natural unit would be trillions , where 1 trillion = 1,000,000,000,000. Rewrite the GDP in trillions of dollars.      Rewrite the GDP in dollars, both in normal decimal notation and in scientific notation.      Calculate the GDP per capita (meaning per person) by dividing the GDP in dollars by the population in people. Express your answer in $\/person.      For practice, repeat your calculation using the numbers in scientific notation.   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.          Edgar recently changed the cleaning bag on his vacuum cleaner. He became curious about how many particles of dust were in the bag. Edgar did a little research online and found out that the mass of a dust particle is (The strange-looking spaces are to help you see that there are 9 zeros in the number.)   (Story also appears in )      Write the mass of a dust particle in scientific notation.      Recall that Express the mass of a dust particle in each of the given units:     grams      milligrams (mg)      micrograms ( g)      nanograms (ng)       Edgar determined that the full vacuum bag weighed 5 pounds. How many dust particles were in the bag? (I am already sneezing.) Use . Express your answer in scientific notation.         The list shows the (approximate) mass of the planets in our solar system. Source: Wikipedia (Solar System)    (Story also appears in )     Earth  kg    Jupiter  kg    Mars  kg    Mercury  kg    Neptune  kg    Saturn  kg    Uranus  kg    Venus  kg       Write the mass of Earth and the mass of Mars in standard decimal notation. Which is heavier?      List the planets from heaviest (largest mass) to lightest (smallest mass).      The mass of astronomical bodies are sometimes measured in Jupiter mass , abbreviated , where kg. Express Earth's mass in .   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.          Souksavanh is setting up a patient's intravenous (IV) medication. She sets the drip at 42 drops\/minute. The drip chamber size is 20 drops\/mL. Recall  (Story also appears in )      At what rate is the IV fluid being delivered to Souk's patient? Answer in mL\/min (millileters per minute).      How fast is the drip measured in L\/sec (microliters per second)?      If the drip bag holds 1 liter, how long will it take the drip to run? Express your answer in hours and minutes.      The concentration of medication is 1.7 mg\/mL (milligrams per milliliter). How much medication is in the 1 liter bag? Convert your answer to grams. Explain what you notice.      At what rate is the medication being delivered to Souk's patient? Answer in g\/min (grams per minute).         How many files at an average of 42.3 MB each can each gig (1 GB) of computer memory hold?      Tara's coworker Brandon has a much faster Internet connection on his computer at 1,500 kbps. How long would it take Brandon to download 700 MB?      At that rate, how much information could Brandon upload in 8 hours? Express your answer in kilobytes (KB).        (Story also appears in )   Source: Mathew Foss, North Hennepin Community College     Convert each of these amounts of time into an understandable unit of time: 1 million seconds, 1 billion seconds, 1 trillion seconds.      Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?       Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!       A proton has mass of about kg, while an electron has mass of about kg.   (Story also appears in )      Write out the mass of a proton and that of an electron in normal decimal notation.      Which is heavier (has greater mass)?      How many times heavier is it? To calculate the answer take the mass of the heavier particle and divide it by the mass of the lighter particle.      How many protons would it take to weigh an ounce? Use and, as always, 1 kg = 1,000 grams. Because and are at the same level in the order of operations, you should put parentheses around each number in scientific notation before dividing.        How many servings are in:     A 2-liter bottle of a soft drink where the serving size is 250 mL?      A 750 mL bottle of wine where a serving size is 5 (fluid) ounces? Use and .       Rayka weighs 140 pounds. She would like to approximate how many cells are in her body. Use the following information: , , and, as always, 1 kg = 1,000 g.   (Story also appears in )      How many cells are in Rayka's body? Write your answer in scientific notation.      Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).        Body Mass Index (BMI) is one indicator of whether a person is a healthy weight. BMI are between 18.5 and 24.9 are considered normal . Jared is 6 4 and weighs 200 pounds. He would like to calculate his BMI from this guide:    Source: Center for Disease Control and Prevention    (Story also appears in )      Check that Jared is around 1.93 meters tall and weighs around 90.91 kilograms. Use and       Jared entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?      Suppose Jared had rounded off his height to 1.9 meters and his weight to 91 kilograms. Calculate his BMI by entering the following keystrokes your calculator: What do you get? Round your answer to one decimal place. Is Jared's BMI considered normal ?      What would you tell Jared?      "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-2",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "byte Mega giga "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-3",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kbps K "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-5",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bit byte "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-6",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric system of measurement international system of units (ISU) British system imperial system of measurement (metric) prefixes "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-9",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential notation base exponent power order of magnitude "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-10",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scientific notation "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-12",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order of operations "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-13-2",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-13-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "P E M D A S "
},
{
  "id": "sec-Metric_system_and_scientific_notation-2-20",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#sec-Metric_system_and_scientific_notation-2-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centi milli micro "
},
{
  "id": "gdp-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#gdp-scientific-notation",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  The GDP (gross domestic product) of the United States was approximately $15,596 billion in 2011 and the population of the United States was approximately 0.313 billion that year. Source: U.S. Bureau of Economic Analysis, U.S. Census Bureau  (Story also appears in )      Writing the population as 0.313 billion seems strange. A more natural unit would be millions. Rewrite the population in millions of people.      Rewrite the population in people, both in normal decimal notation (that means with all the 0s) and in scientific notation.      It also seems strange to write the GDP as $15,596 billion. A more natural unit would be trillions , where 1 trillion = 1,000,000,000,000. Rewrite the GDP in trillions of dollars.      Rewrite the GDP in dollars, both in normal decimal notation and in scientific notation.      Calculate the GDP per capita (meaning per person) by dividing the GDP in dollars by the population in people. Express your answer in $\/person.      For practice, repeat your calculation using the numbers in scientific notation.   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.     "
},
{
  "id": "dust-particle-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#dust-particle-scientific-notation",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Edgar recently changed the cleaning bag on his vacuum cleaner. He became curious about how many particles of dust were in the bag. Edgar did a little research online and found out that the mass of a dust particle is (The strange-looking spaces are to help you see that there are 9 zeros in the number.)   (Story also appears in )      Write the mass of a dust particle in scientific notation.      Recall that Express the mass of a dust particle in each of the given units:     grams      milligrams (mg)      micrograms ( g)      nanograms (ng)       Edgar determined that the full vacuum bag weighed 5 pounds. How many dust particles were in the bag? (I am already sneezing.) Use . Express your answer in scientific notation.    "
},
{
  "id": "planet-weight-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#planet-weight-scientific-notation",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  The list shows the (approximate) mass of the planets in our solar system. Source: Wikipedia (Solar System)    (Story also appears in )     Earth  kg    Jupiter  kg    Mars  kg    Mercury  kg    Neptune  kg    Saturn  kg    Uranus  kg    Venus  kg       Write the mass of Earth and the mass of Mars in standard decimal notation. Which is heavier?      List the planets from heaviest (largest mass) to lightest (smallest mass).      The mass of astronomical bodies are sometimes measured in Jupiter mass , abbreviated , where kg. Express Earth's mass in .   Because and are at the same level in the order of operations, you need to put parentheses around each number in scientific notation before dividing.     "
},
{
  "id": "iv-drip-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#iv-drip-scientific-notation",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Souksavanh is setting up a patient's intravenous (IV) medication. She sets the drip at 42 drops\/minute. The drip chamber size is 20 drops\/mL. Recall  (Story also appears in )      At what rate is the IV fluid being delivered to Souk's patient? Answer in mL\/min (millileters per minute).      How fast is the drip measured in L\/sec (microliters per second)?      If the drip bag holds 1 liter, how long will it take the drip to run? Express your answer in hours and minutes.      The concentration of medication is 1.7 mg\/mL (milligrams per milliliter). How much medication is in the 1 liter bag? Convert your answer to grams. Explain what you notice.      At what rate is the medication being delivered to Souk's patient? Answer in g\/min (grams per minute).    "
},
{
  "id": "file-size-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#file-size-scientific-notation",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "   How many files at an average of 42.3 MB each can each gig (1 GB) of computer memory hold?      Tara's coworker Brandon has a much faster Internet connection on his computer at 1,500 kbps. How long would it take Brandon to download 700 MB?      At that rate, how much information could Brandon upload in 8 hours? Express your answer in kilobytes (KB).    "
},
{
  "id": "billion-seconds-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#billion-seconds-scientific-notation",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "   (Story also appears in )   Source: Mathew Foss, North Hennepin Community College     Convert each of these amounts of time into an understandable unit of time: 1 million seconds, 1 billion seconds, 1 trillion seconds.      Billy Bob wants to throw a party when he turns 1 billion seconds old. About how many years old will he be?       Bonus question: On what date were you or will you be 1 billion seconds old? Don't forget leap years!    "
},
{
  "id": "proton-mass-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#proton-mass-scientific-notation",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  A proton has mass of about kg, while an electron has mass of about kg.   (Story also appears in )      Write out the mass of a proton and that of an electron in normal decimal notation.      Which is heavier (has greater mass)?      How many times heavier is it? To calculate the answer take the mass of the heavier particle and divide it by the mass of the lighter particle.      How many protons would it take to weigh an ounce? Use and, as always, 1 kg = 1,000 grams. Because and are at the same level in the order of operations, you should put parentheses around each number in scientific notation before dividing.     "
},
{
  "id": "serving-size-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#serving-size-scientific-notation",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  How many servings are in:     A 2-liter bottle of a soft drink where the serving size is 250 mL?      A 750 mL bottle of wine where a serving size is 5 (fluid) ounces? Use and .    "
},
{
  "id": "cells-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#cells-scientific-notation",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "  Rayka weighs 140 pounds. She would like to approximate how many cells are in her body. Use the following information: , , and, as always, 1 kg = 1,000 g.   (Story also appears in )      How many cells are in Rayka's body? Write your answer in scientific notation.      Rewrite your answer in the most appropriate unit: millions ( ), billions ( ), trillions ( ), quadrillions ( ), or quintillions ( ).    "
},
{
  "id": "bmi-scientific-notation",
  "level": "2",
  "url": "sec-Metric_system_and_scientific_notation.html#bmi-scientific-notation",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "   Body Mass Index (BMI) is one indicator of whether a person is a healthy weight. BMI are between 18.5 and 24.9 are considered normal . Jared is 6 4 and weighs 200 pounds. He would like to calculate his BMI from this guide:    Source: Center for Disease Control and Prevention    (Story also appears in )      Check that Jared is around 1.93 meters tall and weighs around 90.91 kilograms. Use and       Jared entered the following keystrokes on his calculator: and got the answer Is his BMI considered normal ?      Suppose Jared had rounded off his height to 1.9 meters and his weight to 91 kilograms. Calculate his BMI by entering the following keystrokes your calculator: What do you get? Round your answer to one decimal place. Is Jared's BMI considered normal ?      What would you tell Jared?    "
},
{
  "id": "sec-PE1A",
  "level": "1",
  "url": "sec-PE1A.html",
  "type": "Section",
  "number": "1.6",
  "title": "Practice Exam 1A",
  "body": " Practice Exam 1A    Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   As you work, make a don't forget list of any information you need to look up or ask about.       Arva and Ellie began hiking at an elevation of 1,500 feet and climbed at the steady rate of 600 vertical feet per hour.     Name the variables, including units.      Explain the dependence using a sentence of the form is a function of .       Make a table showing their elevation after 1 hour, 2 hours, and 5 hours.      Is the function increasing or decreasing?      How long does it take them to reach 5,300 feet up? Try to figure out the answer in hours and minutes (H:MM format).         The table shows Henry's weight as a baby.    Age (weeks)  0  12  15    Weight (pounds)  8  14  16       Identify the variables, including units and dependence.      How much weight did Henry gain, on average, each week during his first 12 weeks?      During which time interval was Henry gaining weight faster? Explain.       Draw a graph illustrating the dependence. Choose a scale that shows up to 20 weeks and 20 pounds.      What might you guess for Henry's weight at 20 weeks?         Pramesh's new car used 20.5 gallons of gas for a 715 mile trip.     How many miles per gallon (mpg) does his car get?      At that rate, how many gallons of gas would Pramesh use on his 3,200 mile cross-country trip?      If gas costs $3.799\/gallon, how much will gas for that trip cost?         Ndwiga is reading an article in the paper about atoms. From his physics textbook he discovered that the size of an atom is 0.142 nanometers.     Write the size of an atom in meters. Use 1 meter = 1,000,000,000 nanometers. Write your answer in usual decimal notation and in scientific notation.      Ndwiga would like to know how many atoms across this sheet of paper which is 8.5 inches wide. Use that and . Express your final answer in billions of atoms.       "
},
{
  "id": "hiking-PE1A",
  "level": "2",
  "url": "sec-PE1A.html#hiking-PE1A",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "  Arva and Ellie began hiking at an elevation of 1,500 feet and climbed at the steady rate of 600 vertical feet per hour.     Name the variables, including units.      Explain the dependence using a sentence of the form is a function of .       Make a table showing their elevation after 1 hour, 2 hours, and 5 hours.      Is the function increasing or decreasing?      How long does it take them to reach 5,300 feet up? Try to figure out the answer in hours and minutes (H:MM format).    "
},
{
  "id": "baby-weight-PE1A",
  "level": "2",
  "url": "sec-PE1A.html#baby-weight-PE1A",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  The table shows Henry's weight as a baby.    Age (weeks)  0  12  15    Weight (pounds)  8  14  16       Identify the variables, including units and dependence.      How much weight did Henry gain, on average, each week during his first 12 weeks?      During which time interval was Henry gaining weight faster? Explain.       Draw a graph illustrating the dependence. Choose a scale that shows up to 20 weeks and 20 pounds.      What might you guess for Henry's weight at 20 weeks?    "
},
{
  "id": "gas-PE1A",
  "level": "2",
  "url": "sec-PE1A.html#gas-PE1A",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  Pramesh's new car used 20.5 gallons of gas for a 715 mile trip.     How many miles per gallon (mpg) does his car get?      At that rate, how many gallons of gas would Pramesh use on his 3,200 mile cross-country trip?      If gas costs $3.799\/gallon, how much will gas for that trip cost?    "
},
{
  "id": "atoms-PE1A",
  "level": "2",
  "url": "sec-PE1A.html#atoms-PE1A",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Ndwiga is reading an article in the paper about atoms. From his physics textbook he discovered that the size of an atom is 0.142 nanometers.     Write the size of an atom in meters. Use 1 meter = 1,000,000,000 nanometers. Write your answer in usual decimal notation and in scientific notation.      Ndwiga would like to know how many atoms across this sheet of paper which is 8.5 inches wide. Use that and . Express your final answer in billions of atoms.    "
},
{
  "id": "sec-PE1B",
  "level": "1",
  "url": "sec-PE1B.html",
  "type": "Section",
  "number": "1.7",
  "title": "Practice Exam 1B",
  "body": " Practice Exam 1B   Practice Exam 1B    Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself one hour to work and wait until you have tried your best on all of the problems before checking any answers.       The amount of money spent on nursing home care for seniors has continued to rise. The table shows the values for select years. Here is the spending, measured in billions of dollars, and is time, measured in years since 1960.     0  10  25  40  52     1.0  3.3  33.7  96.6  170.3       According to the table, what was the spending in 1970?      According to the table, what was the spending in 1985?      Calculate the rate of change of spending over the period 1970 to 1985. Don't forget to state the units.      In approximately what year did spending first pass $50 billion?         Trish is filling a swimming pool with water. The graph below shows how many gallons of water ( ) are in the pool after hours. Use the graph to answer the following questions.      How much water was in the swimming pool already when Trish began?      How much water was in the swimming pool after 3 hours?      After how many hours were there 1,000 gallons of water in the swimming pool?      Was Trish filling the pool faster at 2 hours or at 2.5 hours? Explain how you see that on the graph.      After (about) how many hours did Trish stop filling the swimming pool? Explain how you see that on the graph.         In 1990 the Lefèvre's property tax was $450, but it doubled every year thereafter.     Name the variables, including units.      Which is the independent variable and which is the dependent variable?      Make a table showing the property tax each year from 1990 to 1994.      Draw a graph illustrating the dependence.         The distance from the Earth to the Moon is approximately 384,000,000 meters. Source: Wikipedia (Lunar distance)      Express this distance using scientific notation.      Express this distance in kilometers (km), using 1 km = 1,000 meters.      Express this distance in miles, using .      If you could drive to the moon at 55 mph, how long would it take to get there? Express your answer in terms of months, using .       "
},
{
  "id": "nursing-costs-PE1B",
  "level": "2",
  "url": "sec-PE1B.html#nursing-costs-PE1B",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  The amount of money spent on nursing home care for seniors has continued to rise. The table shows the values for select years. Here is the spending, measured in billions of dollars, and is time, measured in years since 1960.     0  10  25  40  52     1.0  3.3  33.7  96.6  170.3       According to the table, what was the spending in 1970?      According to the table, what was the spending in 1985?      Calculate the rate of change of spending over the period 1970 to 1985. Don't forget to state the units.      In approximately what year did spending first pass $50 billion?    "
},
{
  "id": "swimming-pool-PE1B",
  "level": "2",
  "url": "sec-PE1B.html#swimming-pool-PE1B",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  Trish is filling a swimming pool with water. The graph below shows how many gallons of water ( ) are in the pool after hours. Use the graph to answer the following questions.      How much water was in the swimming pool already when Trish began?      How much water was in the swimming pool after 3 hours?      After how many hours were there 1,000 gallons of water in the swimming pool?      Was Trish filling the pool faster at 2 hours or at 2.5 hours? Explain how you see that on the graph.      After (about) how many hours did Trish stop filling the swimming pool? Explain how you see that on the graph.    "
},
{
  "id": "property-tax-PE1B",
  "level": "2",
  "url": "sec-PE1B.html#property-tax-PE1B",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "  In 1990 the Lefèvre's property tax was $450, but it doubled every year thereafter.     Name the variables, including units.      Which is the independent variable and which is the dependent variable?      Make a table showing the property tax each year from 1990 to 1994.      Draw a graph illustrating the dependence.    "
},
{
  "id": "earth-moon-PE1B",
  "level": "2",
  "url": "sec-PE1B.html#earth-moon-PE1B",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "  The distance from the Earth to the Moon is approximately 384,000,000 meters. Source: Wikipedia (Lunar distance)      Express this distance using scientific notation.      Express this distance in kilometers (km), using 1 km = 1,000 meters.      Express this distance in miles, using .      If you could drive to the moon at 55 mph, how long would it take to get there? Express your answer in terms of months, using .    "
},
{
  "id": "sec-First_look_linear",
  "level": "1",
  "url": "sec-First_look_linear.html",
  "type": "Section",
  "number": "2.1",
  "title": "A first look at linear equations",
  "body": " A first look at linear equations   You're expecting family for dinner in a few hours and, wouldn't you know it, but your kitchen sink is clogged. The bottle of drain opener didn't clear it out. Your brother-in-law has offered to help, but last time he tried he only made it worse. The plumber will charge you $100 just to come to your house. In addition, there will be a charge of $75 per hour for the service. If you decide to call the plumber, what will it cost?  For example, if the plumber takes one hour, then he'll charge you $100 for showing up and $75 for the one hour of work. So, the total plumber's bill will be For two hours, there's still the $100 charge, but also $75 for each of the two hours. That's an additional charge of So, the total plumber's bill will be Try this calculation all at once. Let's hope it wouldn't take the plumber as long as three hours, but if it did, we can do a similar calculation. Add the fixed charge of $100 to the additional charge of $75 for each of the three hours. The plumber's bill would be   What would it cost if the plumber takes only hour? The plumber's bill would be Notice we used . Bet you knew that.  What would happen if the plumber was taking so long to get to your house that before he got there you dumped another bottle of drain opener in the sink and that did the trick? But before you could call and cancel the plumber, wouldn't you know it, there he was. What do you owe him for that 0 hours of work? Probably $100. Unless your plumber says to forget it.   We see that the plumber's charge depends on the amount of time it takes to unclog the sink. We can name these variables. Look at the the relationship between and by making a table to describe how the plumber's bill is a function of the time.     0  0.5  1  2  3     100  137.50  175  250  325    Each time we knew how long the plumber spent and calculated the plumber's bill by starting with the trip charge of $100 and adding in $75 times the number of hours. For example, for 3 hours we calculated We have a name for the number of hours in general; it is . So for hours, we would calculate See how we just put the in for $325 and where the 3 hours was? We're just generalizing from our example. Drop the units and we have our equation. If the plumber works for hours, then the cost is $ where We started the equation because it is a convention to begin equations with the dependent variable, when possible.  An equation is a formula that shows how the value of the dependent variable (like ) depends on the value of the independent variable (like ). We usually write an equation in the form The equation is another way to describe a function, and efficient one - an equation carries a lot of information in only a few symbols.  There is a mathematical convention that we write numbers before letters in an equation. So, instead of we should write . There's a conventional shorthand for this product: when a number and letter are next to each other, it means that they are multiplied. So, instead of we should write . Thus our equation is normally written as You'll have to remember the hidden multiplication when you're calculating.  If you wanted to write the equation as that would be okay too. We can add the $100 trip charge first, like we did in our examples, or at the end. Same answer.  Suppose the plumber shows up at your house and fixed the sink in 25 minutes. Whew! No sooner do you pay your bill than your first dinner guest arrives. How much do you owe the plumber? Notice that Therefore for 25 minutes we have .  Using our equation we get It was important that we rounded off our final answer because we had rounded off to get 0.4166 along the way. We could have done the entire calculation at once (avoiding the round off error) as Either way, we owe the plumber $131.25.  If we plot the points from the table of values in a graph, we see that the points lie on a straight line. In Chapter 1 we highlighted the points from our table on the graph. It is more common to just show the smooth curve or line.     Why is the graph a straight line? Remember that the rate of change tells us how steep the graph is. For example, let's find the rate of change between 1 hour and 2 hours. Sure! We knew that. The plumber charges an extra $75 for each extra hour he works. The rate of change is precisely $75\/hour, no matter where we calculate it. Since the rate of change is constant, the graph is the same steepness everywhere. So, the graph is a straight line, and the function is linear . Another way to say this is a function with constant rate of change is linear . The plumber's total charge is a linear function of time.  Look back at our equation. Any linear equation fits this template.   Linear Equation Template      Notice our two variables are in our equation and there are two constants . Each constant has its own meaning. The first constant is 100 and it is measured in dollars. It is the trip charge, the fixed amount we would owe the plumber even if he does 0 hours work. In our standard form we refer to this quantity as the starting value (or start for short), but its official name is intercept . On the graph it's where the line crosses the vertical axis. Think of a football player (running along the vertical axis) intercepting a pass (coming in the line). We can find the intercept from our equation by plugging in so that   The second constant is 75, and though it's tempting to say it is measured in dollars, it is really measured in $ per hour. This number is the rate of change, and in the context of linear equations it gets its own name too: it's called the slope . Since the rate of change measures the steepness of any curve or line, the word slope , like mountain slope, makes sense. In our plumber example the intercept was $100 and the slope was $75\/hour.    Do you know     How to generalize from an example to find an equation?    Where the dependent variable usually is in an equation?    What the slope of a linear function means in the story and what it tells us about the graph?    What the intercept of a linear function means in the story and what it tells us about the graph?    The template for a linear equation? Ask your instructor if you need to remember the template or if it will be provided during the exam.     Where the slope and intercept appear in the template for a linear equation?    What makes a function linear?    How to plot negative numbers on a graph?    What the graph of a linear function looks like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A truck hauling bags of grass seed pulls into a weigh station along the highway. Trucks are weighed to determine the amount of highway tax. This particular truck weighs 3,900 pounds when it is empty. Each bag of grass seed it carries weighs 4.2 pounds. For example, a truck is carrying bags of grass seed weighs In official trucking lingo, we say the curb weight of pounds plus the load weight of pounds results in a gross weight of pounds. So, now you know. (Story also appears in , , and )      Name the variables, including units.      Calculate the gross weight of the truck if it contains 2,000 bags of grass seed.      Write an equation showing how the gross weight of the truck is a function of the number of bags of grass seed.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      The bags of grass seed are piled on wood pallets (sturdy platforms) to make them more stable for moving. How much does the truck weigh if it is carrying 12 pallets, where each pallet weighs 15 pounds and holds 96 bags of grass seed?          The water in the local reservoir was 47 feet deep, but there has been so little rain that the depth has fallen 18 inches a week over the past few months. Officials are worried that if dry conditions continue, the reservoir will not have enough water to supply the town. (Story also appears in and )      Name the variables and write an equation relating them. First convert 18 inches to feet.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      Make a table of values showing the projected depth of the reservoir after 1 week, 5 weeks, 10 weeks, and 20 weeks if the current trend continues.      Draw a graph illustrating the function.         I was short on cash so I got a line of credit (short term loan) on my bank account, of which I spent $2,189.57. That means my account balance is . I will pay back the interest plus an extra $250 each month. When the loan is paid off, I plan to continue to deposit $250 per month to start saving. (Story also appears in )      Name the variables, including units and dependence. Write an equation showing my account balance in each number of months. Ignore the interest.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      Make a table of values showing my account balance now, after 4 months, and at the end of a year.      Draw a graph showing my account balance over this coming year.       About how many months will it take to pay off my line of credit? Give an approximate answer from the graph.         A mug of coffee costs $3.45 at Juan's favorite cafe, unless he buys their discount card for $10, in which case each mug costs $2.90. (Story also appears in , , and )      Name the variables, including units.      Write an equation describing how the total cost depends on how many mugs of coffee Juan buys, assuming he does not buy the discount card.      Write an equation describing how the total cost depends on how many mugs of coffee Juan buys, if he buys the discount card.       How would the equation change if the cafe offers a new annual membership card that costs $59.99 that entitles Juan to buy coffee for only $1 per mug all year?         Plumbers are really expensive, so I'm comparing their rates. Write an equation for each possibility, using the same variables as our example: for the time the plumber takes (in hours) and for the plumber's total charge (in dollars).   (Story also appears in )      James charges $50 to show up plus $120 per hour.      Jo the plumber is just getting started in the business. She charges $45 to show up plus $55 per hour.      Mario advertises no trip charge but his hourly rate is $90 per hour.      Not to be outdone, Luigi offers to unclog any drain for $150, no matter how long it takes. ( Wake up, Luigi! The only time plumbers sleep on the job is when we're working by the hour, says Mario.)       Abduwali has just opened a restaurant. He spent $82,500 to get started but hopes to earn back $6,300 each month. (Story also appears in )      If all goes according to plan, will he have made money 10 months from now?      Name the variables and write an equation relating them.      Identify the slope and intercept, along with their units, and explain what each means in terms of the story.      Make a small tables of values and use it to draw a graph showing Abduwali's profit.       When Gretchen walks on her treadmill, she burns 125 calories per mile.   (Story also appears in and )      How many calories will Gretchen burn if she walks 2.3 miles?      Name the variables and write an equation relating them.      Identify the slope and intercept, along with their units, and explain what each means in terms of the story.      Make a table showing the calories she burns walking 0, 1, 2, 3, or 4 miles.       The local burger restaurant had a promotion this summer. Typically a bacon double cheeseburger costs $7.16. They reduced the price by 2¢ for each degree in the daily high temperature. For example, if the high temperature was 80 F, they would decrease the price by , so the double cheeseburger would cost . Mmmm. (Story also appears in )      Name the variables in the story and write a linear equation relating them.      Is the function increasing or decreasing?      Make a table showing the price of a bacon cheeseburger when the daily high temperature is 65 F, 75 F, and 90 F.      Draw a graph illustrating how the price of a bacon double cheeseburger depends on the temperature. Start the temperature on your graph at 60 F.       A report on health care back in 1975 stated that the U.S. had around 1,466,000 hospital beds and since then the number of beds has declined by around 16,000 beds per year.   Source: Center for Disease Control and Prevention      Name the variables, including units and dependence.      Write an equation illustrating the function.      Is the function increasing or decreasing?      Make a table showing the number of hospital beds projected for 1980, 1990, 2000, 2010, and 2020.      At this rate of decline, in what year will we have only million beds? First estimate the answer from your table. Then figure it out, to the nearest year.       The stretch of interstate highway through downtown averages 1,450 cars per hour during the morning rush hour. The economy is improving (finally), but with that the county manager predicts traffic levels will increase around 130 more cars per hour each week for the next couple of weeks. (Story also appears in )      Name the variables and write an equation relating them.      Make a table showing the number of cars per hour anticipated now and in 2 weeks, 4 weeks, 6 weeks, 8 weeks, and 10 weeks.      Significant slowdowns are expected if traffic levels exceed 2,000 cars per hour. When do they expect that will happen? Estimate your answer from your table. (Or, figure it out.)      If traffic levels exceed 2,500 the county plans to install control lights at the on-ramps. When is that expected to happen?      "
},
{
  "id": "sec-First_look_linear-2-8",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equation "
},
{
  "id": "sec-First_look_linear-2-15",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear linear "
},
{
  "id": "sec-First_look_linear-2-18",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-2-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constants starting value start intercept "
},
{
  "id": "sec-First_look_linear-2-19",
  "level": "2",
  "url": "sec-First_look_linear.html#sec-First_look_linear-2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope "
},
{
  "id": "truck-grass-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#truck-grass-first-look-linear",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  A truck hauling bags of grass seed pulls into a weigh station along the highway. Trucks are weighed to determine the amount of highway tax. This particular truck weighs 3,900 pounds when it is empty. Each bag of grass seed it carries weighs 4.2 pounds. For example, a truck is carrying bags of grass seed weighs In official trucking lingo, we say the curb weight of pounds plus the load weight of pounds results in a gross weight of pounds. So, now you know. (Story also appears in , , and )      Name the variables, including units.      Calculate the gross weight of the truck if it contains 2,000 bags of grass seed.      Write an equation showing how the gross weight of the truck is a function of the number of bags of grass seed.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      The bags of grass seed are piled on wood pallets (sturdy platforms) to make them more stable for moving. How much does the truck weigh if it is carrying 12 pallets, where each pallet weighs 15 pounds and holds 96 bags of grass seed?     "
},
{
  "id": "reservoir-rain-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#reservoir-rain-first-look-linear",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  The water in the local reservoir was 47 feet deep, but there has been so little rain that the depth has fallen 18 inches a week over the past few months. Officials are worried that if dry conditions continue, the reservoir will not have enough water to supply the town. (Story also appears in and )      Name the variables and write an equation relating them. First convert 18 inches to feet.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      Make a table of values showing the projected depth of the reservoir after 1 week, 5 weeks, 10 weeks, and 20 weeks if the current trend continues.      Draw a graph illustrating the function.    "
},
{
  "id": "credit-line-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#credit-line-first-look-linear",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  I was short on cash so I got a line of credit (short term loan) on my bank account, of which I spent $2,189.57. That means my account balance is . I will pay back the interest plus an extra $250 each month. When the loan is paid off, I plan to continue to deposit $250 per month to start saving. (Story also appears in )      Name the variables, including units and dependence. Write an equation showing my account balance in each number of months. Ignore the interest.      Identify the slope and intercept, along with their units. Explain what each means in terms of the story.      Make a table of values showing my account balance now, after 4 months, and at the end of a year.      Draw a graph showing my account balance over this coming year.       About how many months will it take to pay off my line of credit? Give an approximate answer from the graph.    "
},
{
  "id": "juan-coffee-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#juan-coffee-first-look-linear",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  A mug of coffee costs $3.45 at Juan's favorite cafe, unless he buys their discount card for $10, in which case each mug costs $2.90. (Story also appears in , , and )      Name the variables, including units.      Write an equation describing how the total cost depends on how many mugs of coffee Juan buys, assuming he does not buy the discount card.      Write an equation describing how the total cost depends on how many mugs of coffee Juan buys, if he buys the discount card.       How would the equation change if the cafe offers a new annual membership card that costs $59.99 that entitles Juan to buy coffee for only $1 per mug all year?     "
},
{
  "id": "plumbers-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#plumbers-first-look-linear",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  Plumbers are really expensive, so I'm comparing their rates. Write an equation for each possibility, using the same variables as our example: for the time the plumber takes (in hours) and for the plumber's total charge (in dollars).   (Story also appears in )      James charges $50 to show up plus $120 per hour.      Jo the plumber is just getting started in the business. She charges $45 to show up plus $55 per hour.      Mario advertises no trip charge but his hourly rate is $90 per hour.      Not to be outdone, Luigi offers to unclog any drain for $150, no matter how long it takes. ( Wake up, Luigi! The only time plumbers sleep on the job is when we're working by the hour, says Mario.)    "
},
{
  "id": "restaurant-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#restaurant-first-look-linear",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": "  Abduwali has just opened a restaurant. He spent $82,500 to get started but hopes to earn back $6,300 each month. (Story also appears in )      If all goes according to plan, will he have made money 10 months from now?      Name the variables and write an equation relating them.      Identify the slope and intercept, along with their units, and explain what each means in terms of the story.      Make a small tables of values and use it to draw a graph showing Abduwali's profit.    "
},
{
  "id": "treadmill-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#treadmill-first-look-linear",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": "  When Gretchen walks on her treadmill, she burns 125 calories per mile.   (Story also appears in and )      How many calories will Gretchen burn if she walks 2.3 miles?      Name the variables and write an equation relating them.      Identify the slope and intercept, along with their units, and explain what each means in terms of the story.      Make a table showing the calories she burns walking 0, 1, 2, 3, or 4 miles.    "
},
{
  "id": "burger-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#burger-first-look-linear",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "",
  "body": "  The local burger restaurant had a promotion this summer. Typically a bacon double cheeseburger costs $7.16. They reduced the price by 2¢ for each degree in the daily high temperature. For example, if the high temperature was 80 F, they would decrease the price by , so the double cheeseburger would cost . Mmmm. (Story also appears in )      Name the variables in the story and write a linear equation relating them.      Is the function increasing or decreasing?      Make a table showing the price of a bacon cheeseburger when the daily high temperature is 65 F, 75 F, and 90 F.      Draw a graph illustrating how the price of a bacon double cheeseburger depends on the temperature. Start the temperature on your graph at 60 F.    "
},
{
  "id": "hospital-beds-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#hospital-beds-first-look-linear",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": "  A report on health care back in 1975 stated that the U.S. had around 1,466,000 hospital beds and since then the number of beds has declined by around 16,000 beds per year.   Source: Center for Disease Control and Prevention      Name the variables, including units and dependence.      Write an equation illustrating the function.      Is the function increasing or decreasing?      Make a table showing the number of hospital beds projected for 1980, 1990, 2000, 2010, and 2020.      At this rate of decline, in what year will we have only million beds? First estimate the answer from your table. Then figure it out, to the nearest year.    "
},
{
  "id": "traffic-first-look-linear",
  "level": "2",
  "url": "sec-First_look_linear.html#traffic-first-look-linear",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": "  The stretch of interstate highway through downtown averages 1,450 cars per hour during the morning rush hour. The economy is improving (finally), but with that the county manager predicts traffic levels will increase around 130 more cars per hour each week for the next couple of weeks. (Story also appears in )      Name the variables and write an equation relating them.      Make a table showing the number of cars per hour anticipated now and in 2 weeks, 4 weeks, 6 weeks, 8 weeks, and 10 weeks.      Significant slowdowns are expected if traffic levels exceed 2,000 cars per hour. When do they expect that will happen? Estimate your answer from your table. (Or, figure it out.)      If traffic levels exceed 2,500 the county plans to install control lights at the on-ramps. When is that expected to happen?    "
},
{
  "id": "sec-First_look_exponential",
  "level": "1",
  "url": "sec-First_look_exponential.html",
  "type": "Section",
  "number": "2.2",
  "title": "A first look at exponential equations",
  "body": " A first look at exponential equations   Jocelyn got a job right out of college, as an administrative assistant earning $28,000 a year. The position turned out to be a great fit for her, and after one year she was promoted to data analyst with a 15% raise. The next year Joceyln was promoted again, to senior data analyst along with a 21% raise. Not bad, her friend Audun said, a 36% raise in two years. But Jocelyn quickly corrected him. Audun, it's even better than that! It's over 39%!   After the first year, Jocelyn's salary of $28,000 was increased by 15%. Remember that means 15% of $28,000 more. To calculate 15% of $28,000 we multiply using the decimal form to get That's how much Jocelyn's raise was that first year. By adding that amount to the original salary we get After one year Jocelyn's salary was $32,200.  After the second year, Jocelyn got a 21% raise. This means her salary rose by 21% from what it was just before the raise, that is, from the $32,200. (The 21% does not refer back to the original $28,000 value.) So, to calculate the increase, we take 21% of $32,200, which is By adding on this raise we get After the second year Jocelyn was earning $38,962.  Since Jocelyn's original salary was $28,000, the net increase in her salary is the difference The corresponding percentage increase was As Jocelyn said, that's over 39% increase.  What's going on here? Audun thought that 15% and 21% would be 36% because . The reason it doesn't work that was is that while the 15% is of the original $28,000, the 21% was actually calculated on the $32,200. So, we can't just combine percentages by adding.  Each time we figured out Jocelyn's salary, we did a two-step process. First, we calculated the amount of the increase and second, we found the new value by adding on. There's actually an easier way.  Jocelyn's salary was $28,000 and then went up by 15%. For her new salary we want to add her old salary (all of it) plus 15%. So we want 100% plus 15%, or 115% of her old salary. That works in general. When we increase a number by 15%, we end up with 100% of what we started with plus 15% more, for a grand total of 115% of what we started with. So we can just multiply by 1.15, which is 115% written in decimal, since Looks weird, works great.  That means all we have to do to find Jocelyn's salary is We can do the same thing for the next calculation Here we multiplied by 1.21 because after a 21% increase you have 121% of what you started with. And 121% in decimal form is just 1.21.  Now hang on to your hat, because we can combine these parts together. In our example, we started with $28,000. Then we multiplied by 1.15, which gave us $32,200. And then we multiplied that answer by 1.21, to get our final answer of $28,962. So really we just did Same answer. A lot less effort. And, check it out That's where the 39.15% increase is hidden. Cool.  A little terminology before we move on. A percentage increase is known as the growth rate and the number we multiply in the one-step method is called the growth factor . For example, in calculating 15% increase, the growth rate was in decimal, and so the growth factor was If you're into formulas here it is.   Percent Change Formula  If a quantity increases by a percentage corresponding to growth rate , then the growth factor is    We had and so   Jocelyn's most recent assignment has been analyzing information on rising health care costs. In 2007 the United States spent $2.26 trillion on health care. Written out with all its zeros that's Health care costs were projected to increase at an average of 6.7% annually. That means we have and So, to find the effect of a 6.7% increase, we can just multiply by 1.067. Again, that's the 100% of what we started with plus 6.7% more for a grand total of .  We are ready to do some examples. In 2007 the United States spent $2.26 trillion on health care. The projection for one year later is Another year later, projected health care costs are And so on. For each year we multiply by another 1.067.  For example, by 2017 (ten years later), health care costs are projected to be I don't know about you, but I would rather not type that all into a calculator. Luckily, multiplying by 1.067 ten times is the same as multiplying by . Recall that the base  is the number we multiply by and the exponent (or power ) tells us how many times. So we can calculate Notice that the order of operations is exactly what we wanted here: first raise 1.067 to the 10th power, then multiply by 2.26. So we can enter it all at once without needing parentheses. Bottom line: health care costs are expected to be around $4.32 trillion by the year 2017. Oh my!  We're so close to the equation now, we can smell it. Our variables are We just found the cost after 10 years was We can generalize to get the equation by putting in (instead of 10) and (instead of $4.32 trillion). When we do we get Rewriting the equation to begin with the dependent variable we get By the way, there are two other standard ways of writing this equation   For example, in 2027 we have years and our equation projects health care cost at Not sure it's realistic to expect that steady an increase for 20 years, but that is what the equation projects, so let's work with it for now.  What does the graph of this function look like? Here are the values we found so far. That should be enough.    year  2007  2008  2009  2017  2027     0  1  2  10  20     2.26  2.41  2.57  4.32  8.82       Can you see that the graph curves slightly? It's not a straight line. That's because this function isn't linear.  Look back at our equation This type of equation is called an exponential equation because the independent variable is in the exponent. Any exponential equation fits this template.   Exponential Equation Template    Notice our two variables are in our equation and there are two constants. Each constant has its own meaning. The first constant is 2.26 and it is measured in trillions of dollars. It is the amount spent on health care in the starting year of 2007. In our standard form we refer to this quantity as the starting value (or start for short). As with linear equations, its official name is intercept and it's the value where the curve crosses the vertical axis on the graph.  The second constant is the growth factor 1.067, and is the decimal equivalent of the 106.7%. The growth factor for an exponential equation is similar to the slope of a linear equation because both tell us how fast the function is increasing. But the slope measures the rate of change - how much is added at each step - while the growth factor corresponds to the percent increase. Another way to say that is linear functions correspond to situations where we are adding the same amount each time and exponential functions correspond to situations where we are adding the same percentage each time (or, equivalently, multiplying by the same amount each time).  Sometimes the graph of an exponential equation looks a lot like a line, especially if you only plot a few points. So, be sure to plot five or more points to see the curve in the graph of an exponential equation.    Do you know     How to find the growth factor if you know the percent increase?    How to calculate percent increase in one step?    What makes a function exponential?    The template for an exponential equation? Ask your instructor if you need to remember the template or if it will be provided during the exam.     Where the starting value and growth factor appear in the template for an exponential equation?    What the graph of an exponential function looks like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      The comprehensive fee at a local private college is $37,000. The fee is projected to increase 5.8% per year.     Calculate the annual growth factor.      What do you expect the comprehensive fee will be in five years?      Name the variables, including units, and write an equation describing the dependence.      Make a table of values showing the comprehensive fee now, in 5 years, 10 years, 20 years, and 50 years (even though that's not realistic).      Draw a graph illustrating the function.         Bunnies, bunnies, everywhere. They eat the tops of my tulips in early spring and my lilies all summer long. Back in 2007 there were an estimated 1,800 rabbits in my neighborhood. Rabbits multiply quickly, 13% per year by one estimate. (Story also appears in and )      Name the variables, including dependency.      Calculate the annual growth factor.      What does this story suggest the rabbit population was in 2010? In 2013?      Write an equation relating the variables.         A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing 16% per day. (Story also appears in and )      Calculate the daily growth factor and use it to write an equation describing the spread of the virus. Don't forget to name the variables too.      Make a table and graph for the six weeks following the initial diagnosis. (That means use 0, 7, 14, 21, 28, 35, and 42 days.)      What is a realistic domain? That means, for how many days do you think this model is reasonable? To keep a sense of scale, there are 1,094 students currently living in the dorms.         My savings account earns a modest amount of interest, the equivalent of 0.75% annually. I have $12,392.18 in the account now.   (Story also appears in )      Name the variables, including units and dependence.      How much interest will I earn this year? What will my balance be at the end of the year?      What will my balance be in three years, assuming I neither deposit nor withdraw money?      Write an equation relating the variables.      What would the equation be if I moved all of my money into a certificate of deposit earning the equivalent of 0.92%?      What would the equation be if I moved $10,000 into that certificate of deposit, and kept the rest in savings? Hint: to find the total balance, add the amounts.         Mai's salary was $78,000 before she got a 6% raise. Now the economy was not doing as well and she got only a 1.5% raise this year.   (Story also appears in )      What was her salary after the second raise?      Her colleague Tomáš started with a salary of $78,000 but did not get a raise the first year like Mai did. What percentage raise would Tomáš need now in order to have the same final salary as Mai?      Would Mai's salary have been the more than, less than, or the same as now if she had received the 1.5% raise first and then the 6% raise?      Which order would you rather have: 6% then 1.5% or 1.5% then 6%? Why?       The number of school children in the district from a single parent household has been on the rise. In one district there were 1,290 children from single parent households in 2010 and that number was expected to increase about 3% per year.   (Story also appears in )      Calculate the annual growth factor.      How many children from single parent households are expected in that district by 2015?      Name the variables and write an equation relating them.      Make a table showing the number of school children in the district from a single parent household in 2010, 2015, 2020, and 2030.      Graph the function.       Um Archivo data consultant group reported earnings of $42.7 billion in 2012. At that time executives projected 17% increase in earnings annually.   (Story also appears in )      Name the variables and find an equation relating them.      According to your equation, what would Um Archivo's earnings be in 2020?      If Um Archivo reports earnings of $78.1 billion in 2020, would you say the projected rate of 17% was too high or too low? Explain.      Draw a graph showing how Um Archivo's profits are expected to increase.       In 2005, poultry production was 78 million tons, estimated to be growing at a rate of around 1.6% per year.   Source: Worldwatch Institute    (Story also appears in )      Write an equation showing how poultry production is expected to rise. Don't forget to name the variables.      Make a table showing the production in 2005, 2010, 2020, and 2050 (at least according to the equation.)       Back in January 2008, e-book sales were averaging $5.1 million per month and were increasing approximately 6.3% per month. (We are ignoring seasonal variation in this problem.)   Source: ReadWriteWeb      Name the variables including units.      Calculate the monthly growth factor.      Write an exponential equation illustrating this dependence.      By January 2010, monthly sales averaged 21.9 million. How does that compare to your equation's estimate?      What does your equation project for average monthly ebook sales in January 2014?      "
},
{
  "id": "sec-First_look_exponential-2-10",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "growth rate growth factor "
},
{
  "id": "sec-First_look_exponential-2-15",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base exponent power "
},
{
  "id": "sec-First_look_exponential-2-22",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-2-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential equation "
},
{
  "id": "sec-First_look_exponential-2-24",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-2-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "starting value start intercept "
},
{
  "id": "sec-First_look_exponential-2-25",
  "level": "2",
  "url": "sec-First_look_exponential.html#sec-First_look_exponential-2-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "growth factor "
},
{
  "id": "private-college-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#private-college-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  The comprehensive fee at a local private college is $37,000. The fee is projected to increase 5.8% per year.     Calculate the annual growth factor.      What do you expect the comprehensive fee will be in five years?      Name the variables, including units, and write an equation describing the dependence.      Make a table of values showing the comprehensive fee now, in 5 years, 10 years, 20 years, and 50 years (even though that's not realistic).      Draw a graph illustrating the function.    "
},
{
  "id": "bunnies-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#bunnies-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Bunnies, bunnies, everywhere. They eat the tops of my tulips in early spring and my lilies all summer long. Back in 2007 there were an estimated 1,800 rabbits in my neighborhood. Rabbits multiply quickly, 13% per year by one estimate. (Story also appears in and )      Name the variables, including dependency.      Calculate the annual growth factor.      What does this story suggest the rabbit population was in 2010? In 2013?      Write an equation relating the variables.    "
},
{
  "id": "flu-dorm-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#flu-dorm-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing 16% per day. (Story also appears in and )      Calculate the daily growth factor and use it to write an equation describing the spread of the virus. Don't forget to name the variables too.      Make a table and graph for the six weeks following the initial diagnosis. (That means use 0, 7, 14, 21, 28, 35, and 42 days.)      What is a realistic domain? That means, for how many days do you think this model is reasonable? To keep a sense of scale, there are 1,094 students currently living in the dorms.    "
},
{
  "id": "savings-interest-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#savings-interest-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  My savings account earns a modest amount of interest, the equivalent of 0.75% annually. I have $12,392.18 in the account now.   (Story also appears in )      Name the variables, including units and dependence.      How much interest will I earn this year? What will my balance be at the end of the year?      What will my balance be in three years, assuming I neither deposit nor withdraw money?      Write an equation relating the variables.      What would the equation be if I moved all of my money into a certificate of deposit earning the equivalent of 0.92%?      What would the equation be if I moved $10,000 into that certificate of deposit, and kept the rest in savings? Hint: to find the total balance, add the amounts.     "
},
{
  "id": "raises-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#raises-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": "  Mai's salary was $78,000 before she got a 6% raise. Now the economy was not doing as well and she got only a 1.5% raise this year.   (Story also appears in )      What was her salary after the second raise?      Her colleague Tomáš started with a salary of $78,000 but did not get a raise the first year like Mai did. What percentage raise would Tomáš need now in order to have the same final salary as Mai?      Would Mai's salary have been the more than, less than, or the same as now if she had received the 1.5% raise first and then the 6% raise?      Which order would you rather have: 6% then 1.5% or 1.5% then 6%? Why?    "
},
{
  "id": "sp-household-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#sp-household-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  The number of school children in the district from a single parent household has been on the rise. In one district there were 1,290 children from single parent households in 2010 and that number was expected to increase about 3% per year.   (Story also appears in )      Calculate the annual growth factor.      How many children from single parent households are expected in that district by 2015?      Name the variables and write an equation relating them.      Make a table showing the number of school children in the district from a single parent household in 2010, 2015, 2020, and 2030.      Graph the function.    "
},
{
  "id": "um-archivo-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#um-archivo-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": "  Um Archivo data consultant group reported earnings of $42.7 billion in 2012. At that time executives projected 17% increase in earnings annually.   (Story also appears in )      Name the variables and find an equation relating them.      According to your equation, what would Um Archivo's earnings be in 2020?      If Um Archivo reports earnings of $78.1 billion in 2020, would you say the projected rate of 17% was too high or too low? Explain.      Draw a graph showing how Um Archivo's profits are expected to increase.    "
},
{
  "id": "poultry-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#poultry-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  In 2005, poultry production was 78 million tons, estimated to be growing at a rate of around 1.6% per year.   Source: Worldwatch Institute    (Story also appears in )      Write an equation showing how poultry production is expected to rise. Don't forget to name the variables.      Make a table showing the production in 2005, 2010, 2020, and 2050 (at least according to the equation.)    "
},
{
  "id": "ebooks-first-look-exponential",
  "level": "2",
  "url": "sec-First_look_exponential.html#ebooks-first-look-exponential",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": "  Back in January 2008, e-book sales were averaging $5.1 million per month and were increasing approximately 6.3% per month. (We are ignoring seasonal variation in this problem.)   Source: ReadWriteWeb      Name the variables including units.      Calculate the monthly growth factor.      Write an exponential equation illustrating this dependence.      By January 2010, monthly sales averaged 21.9 million. How does that compare to your equation's estimate?      What does your equation project for average monthly ebook sales in January 2014?    "
},
{
  "id": "sec-Using_equations",
  "level": "1",
  "url": "sec-Using_equations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Using equations",
  "body": " Using equations   The Cadillac Escalade is a cross between a sports utility vehicle (SUV) and luxury car. Either way, it's a big car. And it takes awhile to stop. One study showed that the 2010 Escalade traveling at 60 miles per hour takes about 144 feet to come to a complete stop from when the driver first hits the brakes. In fact, the braking distance of any car depends on how fast it is going. If someone is driving slowly they can stop in shorter distance than if they are driving fast. Which is why you should drive slowly on residential streets.  We would like to be able to calculate the braking distances at other speeds, so our two variables are Using the data and equations from physics, automobile analysts were able to determine that the equation relating these two variables is Remember that the 0.04 written next to the means they are multiplied. We might equally well have written   You may be a little surprised to see the variable  squared (raised to the 2nd power) or wonder what the number 0.04 means. This equation is not something we can figure out because it relies both on the data and knowledge of the physics involved. But, we can still work with this equation to find the braking distances at any speed. (If you must know, this equation is only approximate since things like tire and road conditions are a factor, but for what we want it is good enough.)  Although in the last couple of sections we were able to find equations by generalizing examples, there are actually many different mathematical and statistical techniques for finding equations. A scientist might use lab experiments and some theory to figure it out. An economist might recognize that the equation fits a certain template because of the underlying economics. A store manager might know from years of experience that a certain equation works well to predict sales. It can be comforting to know where an equation comes from but whether we find an equation for ourselves or get it from an expert, we can use it to answer our questions and make predictions.  Now that we have an equation we should check the reported stopping distance at 60 mph. We have so we substitute 60 in place of in the equation to get   Quick bit of terminology. When we know the independent variable, like and we substitute into the equation to find the dependent variable, like , we say we evaluate the function at . You might have noticed that the 60 was underlined in the calculation above. In this book we underline the value of the independent variable when we are evaluating. That way it's easier to see which numbers come from the equation and which number we're plugging in. Feel free to do the same. Or not.  Let's use our equation to calculate the braking distance for a Cadillac Escalade traveling 30, 50, 70 or 90 miles per hour. For 30 miles per hour, we have . So, we evaluate at to get At 30 mph, it takes the Cadillac Escalade 36 feet to stop. As we expected, it doesn't take nearly as far to stop as it did at 60 mph. For the other speeds we do the same thing: evaluate at the appropriate value of . When mph we get When mph we get When mph we get And, what does our equation tell us when the speed is 0 mph? We evaluate at mph to get Well, sure! If the car isn't moving, then it won't need any distance to stop. Here's what we've found so far, displayed in a table.     0  30  50  60  70  90     0  36  100  144  196  324    My neighbor Jeff happens to drive a 2010 Cadillac Escalade. The other day he almost was in an accident on the highway. Luckily no one was hurt, but he had to slam on the brakes to stop. The police report mentioned they believe it took his car 183 feet to stop. Jeff says he was not driving over the posted speed limit of 65 mph. Should we believe him?  We can see from the table that braking distance of 183 feet falls in between the 144 and 196 on our table which leads us to believe that Jeff was traveling faster than 60 mph and slower than 70 mph. We can figure out if Jeff were driving at 65 mph, then his braking distance would have been That's less than the 183 feet Jeff took to stop. So, it appears that Jeff was driving faster than 65 mph.  But wait a minute. The braking distance is just the time it takes from when the driver's foot hits the brake until the car stops. That distance doesn't take into account the driver's reaction time - how long between when the driver thinks to stop and when the driver's foot actually hits the brake. We have a new dependent variable How can we include this reaction time into an equation? Suppose it takes 1 second to react. We would like to know how many feet that adds to the equation. This is something we can figure out. We know the speed and the time, so multiply them to get the distance, right? One small snag: the speed is in mph (miles per hour). We need to convert units. added to the stopping distance. Notice the fancy fraction work with the units? What all this mess means is that we should add 1.47 feet for every mph of speed. So mph adds feet to the stopping distance. Long story short, our new equation is   Something interesting about this equation. The independent variable appears twice; first for the braking distance and again because of the reaction time. When we evaluate the equation we need to plug in the value of in two places. Check it out. When mph we have That's a lot further than just the braking distance of 36 feet. When mph we have again, much more than the braking distance of 100 feet. Here's the revised table of values.     0  30  50  60  70  90     0  80  174  232  299  456    These numbers make us rethink Jeff's assertion. Given that he stopped in 183 feet, which is much less than the 232 feet it takes to stop at 60 mph, it looks like Jeff was driving less than 60 mph. To be sure, calculate that at 65 mph, it would have taken Jeff Again, we should believe Jeff. And, be glad nobody was hurt.  A quick glance at the graph confirms our findings.     The distance of 183 feet falls just above the unlabeled gridline for 175 and below the gridline for 200. Looking at the corresponding point on the braking distance curve, it looks like it falls around 67 mph, but looking at the corresponding point on the stopping distance curve, it looks like just over 50 mph.  By the way, our first equation is a power equation because the independent variable is being raised to a power, , and then scaled by a proportionality constant , . Any power equation fits this template.   Power Equation Template    Our second equation is a polynomial equation because it includes both a linear term and powers. The exercises introduce more polynomial equations. Polynomials can have any powers, but in this equation the highest power happens to be 2. This type of polynomial equation has a special name. It is a quadratic equation . Any quadratic equation fits this template.   Quadratic Equation Template    For our equation , , and the mysteriously missing .    Do you know     What it means to evaluate a function?    Why some numbers are underlined in our calculation?    How to evaluate an function when the independent variable occurs more than once?    How to generate a table or graph from an equation?    What graphs of different types of functions look like?    What a power, polynomial, or quadratic equation look like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      Dontrell and Kim borrowed money to buy a house on a 30-year mortgage. After months of making payments, Dontrell and Kim will still owe $ where  is also known as the payoff (how much they would need to pay to settle the debt). (Story also appears in )      Name the variables and , including units and dependence.      How much did Dontrell and Kim originally borrow to buy their house? What value of did you evaluate at to answer the question?      Evaluate the equation at . What does this number mean in terms of the story?      After making half the payments, how much money will Dontrell and Kim still owe on the house? Will they have paid more or less (or exactly) half of the amount they originally borrowed? Hint: Find the total number of payments by converting 30 years into months. Then, divide by 2 to find the halfway point.       The very last month they do not actually pay the regular monthly payment, just whatever balance is left on the loan. How much will that be? Hint: they will have made all but one of the payments.           Rose gold is a mix of gold and copper. We start with 2 grams of an alloy that is equal parts gold and copper and add grams of pure gold to lighten the color. The percentage of gold in the resulting rose gold alloy, is given by For example, if we add 0.8 grams of pure gold, then and so the percentage is  (Story also appears in , , and )      Name the variables and , including units and dependence.      Calculate the percentage of gold in the alloy if we add 1.2 grams of pure gold.      Fill in all the missing values in this table.     0  0.4  0.8  1.2  1.6  2  3  4     50.0   64.3   72.2   80.0         Graph the function.      What do you think happens to the percentage of gold as we add more and more pure gold? Try adding 10 grams, and then try adding 100 grams to check.         Monty hopes to grow orchids but they are fragile plants. He will consider his greenhouse a success if at least nine of the ten orchids survive. Assuming the orchids each survive at rate , the probability his greenhouse is a success, , is given by  (Story also appears in )      Name the variables and , including units and dependence.      If the orchids are perfect ( ), what is the probability of a successful greenhouse? Explain how this answer makes sense in the story.      If the orchids are complete duds ( ), what is the probability of a successful greenhouse? Explain how this answer makes sense in the story.      Make a table comparing the probability of a successful greenhouse if the orchids each survive at rate S = 0, 0.5, 0.8, 0.9, 0.95, or 1.      Draw a graph of the function.         Valerie plans to do a charity walk to raise money for breast cancer research, in honor of her aunt. Valerie's friends have pledged a total of $93 per mile.     Valerie hopes to walk all 50 miles of the event. If so, how much money will she raise?      She might have to stop sooner, however. Name variables and write an equation showing how the money Valerie raises is a function of how far she is able to walk.      How long will it take Valerie to walk the full 50 miles if she is able to keep a pace (speed) of 3.2 miles per hour? Write your answer in H:MM format.      Name the new variables and write a new equation showing how the time it takes Valerie to walk the full 50 miles depends on her pace.      Good news. Valerie walked the full 50 miles at a pace of 3.2 miles per hour. Way to go, girl! How much money did she raise each hour? Hint: Use your answers from (a) and (c) as unit conversions to get $\/hour.         The 2002 Chevrolet Tahoe 4WD will take about 158.1 feet to stop when traveling at 60 mph in normal highway conditions. Let be the speed at which the vehicle is traveling, in miles per hour (mph), and the distance it takes to stop, in feet. This information together with a little physics gives the equation    (Story also appears in )      According to this equation, how many feet does it take to stop the Tahoe when traveling 80 miles per hour?      In driver's training classes they teach the two-second rule for safety: you should follow no closer than two seconds behind the car in front of you. If you are traveling 80 miles per hour, how many feet can you travel in two seconds? Hint: convert to feet per second, then multiply by two seconds.       Compare your results from parts (a) and (b) to decide if the two-second rule is adequate for safety at 80 miles per hour. That is, if you are following two seconds behind the car in front of you and calamity strikes that car, will you be able to stop before hitting it?      Is the two-second rule adequate at 50 mph?       Mom always said to sit close to the lamp when I was reading. The intensity of light , measured in percentage (%) that you see from a lamp depends on your distance from the lamp, feet as described by the formula  (Story also appears in and )      Calculate the intensity when I sit 1 foot, 2 feet, or 3 feet away. Record your answers in a table.      The other day I was sitting 27 inches from the lamp. What was the intensity of the light there?      Calculate the rate of change of light intensity between 2 feet and 27 inches. What does that tell you in terms of the story?      Draw a graph illustrating the function.       Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. (Remember stands for feet, so the garden is 10 feet wide and 25 feet long.) One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around.      (Story also appears in and )      The other measurements are in feet, so convert the depth of the path (3 inches) into feet also.      Suppose for the moment that the path will be 4 feet wide. Calculate the area of the path. Here's one way to do it: first, find the area of the outer rectangle, then subtract the area of the garden itself.   Hint: the length of that outer rectangle includes the 25 feet of garden plus the width of the path on each side. Same for the width of that outer rectangle.       Figure out how much gravel they would need (in cubic feet) for a 4 foot wide path by multiplying your answers to (a) and (b).      Actually, they aren't sure how wide the path should be and how much gravel they can get. Let's write = width of path (feet) and = amount of gravel (cubic feet). It turns out that Check that when you evaluate at you get the same answer as in (c).      How many cubic feet of gravel would they need to make the path 2 feet wide? 3 feet wide? 42 inches?       One measure of the diversity of our news source is the count of the number of different daily newspapers in circulation. A reasonable equation estimating this count over the past century is where is the number of daily newspapers in circulation in the United States years after 1900.     Based on this equation, how many daily newspapers were in circulation in 1920? In 1955? In 1995? In 2010?      During which period were the number of newspapers in circulation dropping faster: 1900 to 1920 or 1995 to 2010?      Draw a graph illustrating the dependence.       Mrs. Weber's cooking class came up with the equation to approximate the grilling time of a piece of fish depending on its thickness. Here is the number of minutes to grill the fish and is the thickness of the fish (in inches).   (Story also appears in and )      Evaluate the equation at and . Record your answers in a table.      What do the answers you found say about cooking fish?      Draw a graph showing how the cooking time depends on the thickness of the fish.      Your graph should show that the function is increasing. Explain how that makes sense in terms of the story.       Wynter has a pretty decent job. He is paid a salary of $780 per week but his hours vary week-to-week. Even though Wynter is not paid by the hour, he can figure out what his hourly wage would be depending on the number of hours he works. For example, in a week where Wynter works 40 hours, he's earning the equivalent of $19.50\/hr because    (Story also appears in )      What's Wynter's equivalent hourly wage in a week when he works 50 hours? 60 hours?      Name the variables and write an equation relating them.      Explain why this function is decreasing.      "
},
{
  "id": "sec-Using_equations-2-3",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squared "
},
{
  "id": "sec-Using_equations-2-6",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluate "
},
{
  "id": "sec-Using_equations-2-18",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-2-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power equation proportionality constant "
},
{
  "id": "sec-Using_equations-2-20",
  "level": "2",
  "url": "sec-Using_equations.html#sec-Using_equations-2-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial equation quadratic equation "
},
{
  "id": "mortgage-payoff-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#mortgage-payoff-using-equations",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  Dontrell and Kim borrowed money to buy a house on a 30-year mortgage. After months of making payments, Dontrell and Kim will still owe $ where  is also known as the payoff (how much they would need to pay to settle the debt). (Story also appears in )      Name the variables and , including units and dependence.      How much did Dontrell and Kim originally borrow to buy their house? What value of did you evaluate at to answer the question?      Evaluate the equation at . What does this number mean in terms of the story?      After making half the payments, how much money will Dontrell and Kim still owe on the house? Will they have paid more or less (or exactly) half of the amount they originally borrowed? Hint: Find the total number of payments by converting 30 years into months. Then, divide by 2 to find the halfway point.       The very last month they do not actually pay the regular monthly payment, just whatever balance is left on the loan. How much will that be? Hint: they will have made all but one of the payments.     "
},
{
  "id": "rose-gold-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#rose-gold-using-equations",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "   Rose gold is a mix of gold and copper. We start with 2 grams of an alloy that is equal parts gold and copper and add grams of pure gold to lighten the color. The percentage of gold in the resulting rose gold alloy, is given by For example, if we add 0.8 grams of pure gold, then and so the percentage is  (Story also appears in , , and )      Name the variables and , including units and dependence.      Calculate the percentage of gold in the alloy if we add 1.2 grams of pure gold.      Fill in all the missing values in this table.     0  0.4  0.8  1.2  1.6  2  3  4     50.0   64.3   72.2   80.0         Graph the function.      What do you think happens to the percentage of gold as we add more and more pure gold? Try adding 10 grams, and then try adding 100 grams to check.    "
},
{
  "id": "monty-orchids-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#monty-orchids-using-equations",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  Monty hopes to grow orchids but they are fragile plants. He will consider his greenhouse a success if at least nine of the ten orchids survive. Assuming the orchids each survive at rate , the probability his greenhouse is a success, , is given by  (Story also appears in )      Name the variables and , including units and dependence.      If the orchids are perfect ( ), what is the probability of a successful greenhouse? Explain how this answer makes sense in the story.      If the orchids are complete duds ( ), what is the probability of a successful greenhouse? Explain how this answer makes sense in the story.      Make a table comparing the probability of a successful greenhouse if the orchids each survive at rate S = 0, 0.5, 0.8, 0.9, 0.95, or 1.      Draw a graph of the function.    "
},
{
  "id": "charity-walk-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#charity-walk-using-equations",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  Valerie plans to do a charity walk to raise money for breast cancer research, in honor of her aunt. Valerie's friends have pledged a total of $93 per mile.     Valerie hopes to walk all 50 miles of the event. If so, how much money will she raise?      She might have to stop sooner, however. Name variables and write an equation showing how the money Valerie raises is a function of how far she is able to walk.      How long will it take Valerie to walk the full 50 miles if she is able to keep a pace (speed) of 3.2 miles per hour? Write your answer in H:MM format.      Name the new variables and write a new equation showing how the time it takes Valerie to walk the full 50 miles depends on her pace.      Good news. Valerie walked the full 50 miles at a pace of 3.2 miles per hour. Way to go, girl! How much money did she raise each hour? Hint: Use your answers from (a) and (c) as unit conversions to get $\/hour.     "
},
{
  "id": "braking-distance-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#braking-distance-using-equations",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  The 2002 Chevrolet Tahoe 4WD will take about 158.1 feet to stop when traveling at 60 mph in normal highway conditions. Let be the speed at which the vehicle is traveling, in miles per hour (mph), and the distance it takes to stop, in feet. This information together with a little physics gives the equation    (Story also appears in )      According to this equation, how many feet does it take to stop the Tahoe when traveling 80 miles per hour?      In driver's training classes they teach the two-second rule for safety: you should follow no closer than two seconds behind the car in front of you. If you are traveling 80 miles per hour, how many feet can you travel in two seconds? Hint: convert to feet per second, then multiply by two seconds.       Compare your results from parts (a) and (b) to decide if the two-second rule is adequate for safety at 80 miles per hour. That is, if you are following two seconds behind the car in front of you and calamity strikes that car, will you be able to stop before hitting it?      Is the two-second rule adequate at 50 mph?    "
},
{
  "id": "lamp-intensity-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#lamp-intensity-using-equations",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  Mom always said to sit close to the lamp when I was reading. The intensity of light , measured in percentage (%) that you see from a lamp depends on your distance from the lamp, feet as described by the formula  (Story also appears in and )      Calculate the intensity when I sit 1 foot, 2 feet, or 3 feet away. Record your answers in a table.      The other day I was sitting 27 inches from the lamp. What was the intensity of the light there?      Calculate the rate of change of light intensity between 2 feet and 27 inches. What does that tell you in terms of the story?      Draw a graph illustrating the function.    "
},
{
  "id": "gravel-path-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#gravel-path-using-equations",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "  Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. (Remember stands for feet, so the garden is 10 feet wide and 25 feet long.) One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around.      (Story also appears in and )      The other measurements are in feet, so convert the depth of the path (3 inches) into feet also.      Suppose for the moment that the path will be 4 feet wide. Calculate the area of the path. Here's one way to do it: first, find the area of the outer rectangle, then subtract the area of the garden itself.   Hint: the length of that outer rectangle includes the 25 feet of garden plus the width of the path on each side. Same for the width of that outer rectangle.       Figure out how much gravel they would need (in cubic feet) for a 4 foot wide path by multiplying your answers to (a) and (b).      Actually, they aren't sure how wide the path should be and how much gravel they can get. Let's write = width of path (feet) and = amount of gravel (cubic feet). It turns out that Check that when you evaluate at you get the same answer as in (c).      How many cubic feet of gravel would they need to make the path 2 feet wide? 3 feet wide? 42 inches?    "
},
{
  "id": "newspapers-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#newspapers-using-equations",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "  One measure of the diversity of our news source is the count of the number of different daily newspapers in circulation. A reasonable equation estimating this count over the past century is where is the number of daily newspapers in circulation in the United States years after 1900.     Based on this equation, how many daily newspapers were in circulation in 1920? In 1955? In 1995? In 2010?      During which period were the number of newspapers in circulation dropping faster: 1900 to 1920 or 1995 to 2010?      Draw a graph illustrating the dependence.    "
},
{
  "id": "grilling-fish-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#grilling-fish-using-equations",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": "  Mrs. Weber's cooking class came up with the equation to approximate the grilling time of a piece of fish depending on its thickness. Here is the number of minutes to grill the fish and is the thickness of the fish (in inches).   (Story also appears in and )      Evaluate the equation at and . Record your answers in a table.      What do the answers you found say about cooking fish?      Draw a graph showing how the cooking time depends on the thickness of the fish.      Your graph should show that the function is increasing. Explain how that makes sense in terms of the story.    "
},
{
  "id": "salary-using-equations",
  "level": "2",
  "url": "sec-Using_equations.html#salary-using-equations",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": "  Wynter has a pretty decent job. He is paid a salary of $780 per week but his hours vary week-to-week. Even though Wynter is not paid by the hour, he can figure out what his hourly wage would be depending on the number of hours he works. For example, in a week where Wynter works 40 hours, he's earning the equivalent of $19.50\/hr because    (Story also appears in )      What's Wynter's equivalent hourly wage in a week when he works 50 hours? 60 hours?      Name the variables and write an equation relating them.      Explain why this function is decreasing.    "
},
{
  "id": "sec-Approx_solutions",
  "level": "1",
  "url": "sec-Approx_solutions.html",
  "type": "Section",
  "number": "2.4",
  "title": "Approximating solutions of equations",
  "body": " Approximating solutions of equations   Which country on Earth has the most people? If you guess China and India, in that order, you'd be right. And by a lot compared to other countries. A very distant third is the United States, with several countries close on our heels. Here are the population and growth rates estimates made in 2011.  Source: CIA Factbook      1.  China  population 1.343 billion  growth rate 0.48%    2.  India  population 1.205 billion  growth rate 1.31%    3.  United States  population 0.313 billion  growth rate 0.90%    India's population is growing fastest of these top three, so let's take a closer look. In the exercises you can explore China and other countries. Let's tackle this question: when is India's population projected to pass 1.5 billion?  Start by writing an equation. The variables are Since there is a fixed percentage growth, or at least that's what we're assuming, the population grows exponentially. The template for an exponential equation is For India's population, we know that the growth rate is so the corresponding growth factor is We also know that the starting population is 1.205 billion in 2011. We're good to go. The equation is   We want to know when India's population will pass 1.5 billion people. That means we are looking for the value of that corresponds to . That answer is called the solution of our equation. In other words, a solution to an equation is the value of the independent variable we plug in to get the desired value of the dependent variable. It's not always easy to find a solution; but it's easy to check - just evaluate.  Since we can easily check and see if any number is a solution, one way to find the solution is to guess and check . Let's try that to determine when India's population will pass 1.5 billion people. Since we're not sure where to start, let's see what the equation projects for 2012, when . Hardly budged. Well, comparatively.  What about in 5 years? The corresponding population is Less than 1.5 billion. Let's try . The equation gives us Still much less than 1.5 billion  This is going slowly. We would really like to find a point at which the equation gives us more than 1.5 billion. Then we can work backwards from there to narrow things down. How about 50 years? That's too much, but the good news is now we know the solution is between 10 years and 50 years.  Let's summarize what we have so far in a table. Notice how we've added a third row to keep track of our progress for our goal.     0  1  5  10  50         1.205  1.221  1.287  1.373  2.312        vs. 1.5  low  low  low  low  high        We know the solution is between 10 and 50 years, and it seems closer to 10, so let's guess 20 years. In 20 years, the population should be around 1.564 billion. Where's that 1.564 from? Just our equation again. It would be good practice for you to evaluate at to check.  The 10 year estimate is too low and the 20 year estimate is too high. That means the solution is between 10 years and 20 years, so let's split the difference and guess 15 years which gives 1.465 billion. (Check again, for practice.) Ooooh, we're getting close. The population should pass 1.5 billion some time between 15 and 20 years, and likely closer to 15 so let's guess 17 years. Estimate is 1.504 billion. Would 16 years have been enough? That gives 1.484 billion, not quite enough. Let's add these numbers to our table.     0  1  5  10  50  20  15  17  16     1.205  1.221  1.287  1.373  2.312  1.564  1.465  1.504  1.484    vs.1.5  low  low  low  low  high  high  low  high  low    According to our equation, the population of the India should pass 1.5 billion after 17 years, which would be in the year 2028. By the way, it works to add the year and number.   The strategy we used to find the solution of our equation is successive approximation . Essentially it's just the guess and check method, but it's called successive because we're trying to get a closer guess each time. Typically once we have a value that's too big and one that's too small, we guess a value in between (for example, their average). This sort of splitting the difference method of guessing is a rough version of the bisection method . Now you know.  You might be surprised that you're supposed to guess the solution at this point in the course. I mean, in the beginning of the course we didn't have equations, just tables and graphs, and so guessing was all we had to work with. But now we have actual equations, right? In previous courses your instructor or textbook might have emphasized getting the exact solution.  Here's why it's different in this course. First, in almost every story in this book the numbers in the problem are approximations, or at least rounded off. If you start with approximations, no matter how exact your mathematics is, the solutions will still be approximate. Second, even if our numbers started out precisely exact, chances are that the equation is only approximating reality. Do we really know what the population growth rate will be in India over the next twenty years? And, if the equation is just approximate, then no matter how exact the numbers or the mathematics, the solution will again still be approximate. Last, and this is good news - we really just want approximations. Do you really need to know that a sandwich has 427.2889 calories? Isn't 430 calories close enough? (Sound familiar? These ideas were discussed in more detail in .)  In previous mathematics courses you may have seen ways to solve equations exactly, and we will talk about those methods in the next chapters of this text. It is true that successive approximations can take a long time and, because of that, is a bit annoying. Solving techniques we'll learn later are much, much quicker.  There are two important reasons for using successive approximations, even if you know quicker solving techniques. First, the method of successive approximations works in most situations for any type of equation. Solving methods that we will see later on just work for one type of an equation or another - one technique for linear equations, a different technique for exponential equations, etc. That's a lot of different methods to know. Second, even if you're going to use a formal equation-solving technique to solve a problem it's a good habit to guess-and-check a bit first to make sure your solution is reasonable. It is easy to make mistakes when using those formal techniques. Remember,   I'd rather be approximately right than precisely wrong.   Okay, enough digression. Let's check our answer using the graph.     It looks like 1.5 billion corresponds to just before the unlabeled gridline halfway between 15 and 20. That line would be 17.5, so the answer of 17 (which was year 2028) looks perfect.    Do you know     What a solution to an equation is?    When you approximate a solution of an equation, as opposed to just evaluating?    How to use successive approximation, including organizing your work in a table?    How to get a reasonable first guess from a graph?    What to do if you do not have a reasonable first guess?    How precise your answer should be?    How to find numbers between given numbers, for example between 0.3 and 0.4?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      The size of a round pizza is described by its diameter (distance across). Assuming a 16-inch diameter pizza serves four people, and with a little geometry to help us out, we calculated that a pizza of diameter inches serves people, where  (Story also appears in , , and )      Confirm that a 16-inch pizza serves four people.      How many people does a 12-inch pizza serve? How about a 14-inch pizza?      Graph the function. Include what happens when .      A personal pizza is sized to serve one person. Use successive approximation to estimate the diameter of a personal pizza to the nearest inch.       What diameter should an extra large pizza be to serve 6 people? Answer to the nearest inch.          Suppose the gas tank of a car is designed to hold enough fuel to drive 350 miles. (That's fairly average.) A hybrid car with fuel efficiency of 50 miles per gallon (mpg) would only need a 7 gallon gas tank, but a recreational vehicle that gets only 10 mpg would need a 35 gallon gas tank. (Story also appears in )      Name the variables, including units. The way the story is stated, the size tank is a function of the fuel efficiency.      Write an equation describing this function.      My Honda Accord's tank holds about 16 gallons. Approximate the corresponding fuel efficiency to one decimal place.      My ex-husband's Honda Civic's tank holds only 13 gallons. Approximate the corresponding fuel efficiency to one decimal place.      Draw a graph showing how the size tank depends on the fuel efficiency.         Monty hopes to grow orchids but they are fragile plants. He will consider his greenhouse a success if at least nine of the ten orchids survive. Assuming the orchids each survive at rate , the probability his greenhouse is a success, , is given by  (Story also appears in )      Monty can buy orchids each with survival rate of . Is that enough to give probability of a successful greenhouse?      What quality of orchids would Monty need to have probability of a successful greenhouse? Report your answer accurate to two decimal places.      What quality of orchids would Monty need to have probability of a successful greenhouse? Report your answer accurate to three decimal places.         After China, India, and the United States, the next five most populous countries (in 2011) are Indonesia, Brazil, Pakistan, Nigeria, and Bangladesh. Their projected growth rates and corresponding equation are listed below. Here is the population measured in millions and is time measured in years since 2011. Source: CIA Factbook     4th  Indonesia  pop. 248 million  growth rate 1.04%     5th  Brazil  pop. 205 million  growth rate 1.10%     6th  Pakistan  pop. 190 million  growth rate 1.55%     7th  Nigeria  pop. 170 million  growth rate 2.55%     8th  Bangladesh  pop. 161 million  growth rate 1.58%        Which of these countries is projected to have the largest population in 2020? In 2030? In 2050?      Explain why Bangladesh's population will not overtake Nigeria's, assuming these projections are accurate.      Approximately when will Brazil's population top 500 million? Will Nigeria get there first? Display your work in a successive approximation table.        The population of China in 2011 was approximately 1.343 billion and growing at around 0.48% per year. An equation estimating the population of China is where is the population of China (measured in billions) and is the years since 2011.   Source: CIA Factbook      In what year is China's population projected to reach 1.5 billion?      In what year is India's population expected to pass China's? Remember that we discussed India's population in this section.      Explain how we got the equation for China.      Draw a graph showing both equations.       A company who makes electronics was doing great business in 1996, but sales quickly slid after 2000. Their sales in millions of dollars years from 1996 is given by the following equation    (Story also appears in )      What were the company's sales in 1996, 2000, and 2005?      The company decided to declare bankruptcy when sales fell below $20 million. In what year was that? Show how to use successive approximations to estimate the answer to the nearest year.      An analyst had suggested that they close down shop earlier, once sales were below $50 million. In what year did sales fall that low? Again, use successive approximation.       Suppose a special kind of window glass is 1 inch thick and lets through only 75% of the light. If two panes of this glass are used, the product is 2 inches thick and lets in 56.25% since    (Story also appears in )      If three panes of this glass are used, explain why the product is 3 inches thick and lets in about 42.19% of the light.      If four panes of this glass are used, how thick will the product be and what percentage (%) of the light will be let through?      Identify and name the variables, including their units, and write an equation relating them.      Use successive approximation to figure out what thickness glass should be used to let through less than 10% of the light. Display your work in a table.      Graph the function.       Wind turbines are used to generate electricity. For a particular wind turbine, the equation can be used to calculate the amount of electricity generated ( watts) for a given wind speed ( mph), over a fixed period of time.   (Story also appears in , , and )      Make a table showing the amount of electricity produced when the wind speed is 10 mph, 25 mph, and 40 mph.      Draw a graph illustrating this equation.      Approximate the wind speed that will generate 12,500 watts of electricity.       After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. The equation is where is Stephen's BAC and is the time, measured in hours.   (Story also appears in and )      Make a table showing Stephen's BAC at the start of the problem and each of the next four hours.      Draw a graph showing how Stephen's BAC changed over time.      At a BAC of 0.10 it is illegal for Stephen to drive. Approximately when does that happen?       Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around. The amount of gravel they need ( cubic feet) is given by the equation where is the width of the path in feet.      (Story also appears in and )      If the neighbor donates 60 cubic feet of gravel, how wide a path can they build? Report your answer to two decimal places.      Convert your answer to feet and inches. Do you think that's a wide enough path?      "
},
{
  "id": "sec-Approx_solutions-2-5",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "sec-Approx_solutions-2-6",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "guess and check "
},
{
  "id": "sec-Approx_solutions-2-15",
  "level": "2",
  "url": "sec-Approx_solutions.html#sec-Approx_solutions-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "successive approximation bisection method "
},
{
  "id": "pizza-diameter-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#pizza-diameter-approx-solutions",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "  The size of a round pizza is described by its diameter (distance across). Assuming a 16-inch diameter pizza serves four people, and with a little geometry to help us out, we calculated that a pizza of diameter inches serves people, where  (Story also appears in , , and )      Confirm that a 16-inch pizza serves four people.      How many people does a 12-inch pizza serve? How about a 14-inch pizza?      Graph the function. Include what happens when .      A personal pizza is sized to serve one person. Use successive approximation to estimate the diameter of a personal pizza to the nearest inch.       What diameter should an extra large pizza be to serve 6 people? Answer to the nearest inch.     "
},
{
  "id": "fuel-350-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#fuel-350-approx-solutions",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  Suppose the gas tank of a car is designed to hold enough fuel to drive 350 miles. (That's fairly average.) A hybrid car with fuel efficiency of 50 miles per gallon (mpg) would only need a 7 gallon gas tank, but a recreational vehicle that gets only 10 mpg would need a 35 gallon gas tank. (Story also appears in )      Name the variables, including units. The way the story is stated, the size tank is a function of the fuel efficiency.      Write an equation describing this function.      My Honda Accord's tank holds about 16 gallons. Approximate the corresponding fuel efficiency to one decimal place.      My ex-husband's Honda Civic's tank holds only 13 gallons. Approximate the corresponding fuel efficiency to one decimal place.      Draw a graph showing how the size tank depends on the fuel efficiency.    "
},
{
  "id": "monty-orchids-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#monty-orchids-approx-solutions",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "  Monty hopes to grow orchids but they are fragile plants. He will consider his greenhouse a success if at least nine of the ten orchids survive. Assuming the orchids each survive at rate , the probability his greenhouse is a success, , is given by  (Story also appears in )      Monty can buy orchids each with survival rate of . Is that enough to give probability of a successful greenhouse?      What quality of orchids would Monty need to have probability of a successful greenhouse? Report your answer accurate to two decimal places.      What quality of orchids would Monty need to have probability of a successful greenhouse? Report your answer accurate to three decimal places.    "
},
{
  "id": "population-growth-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#population-growth-approx-solutions",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "  After China, India, and the United States, the next five most populous countries (in 2011) are Indonesia, Brazil, Pakistan, Nigeria, and Bangladesh. Their projected growth rates and corresponding equation are listed below. Here is the population measured in millions and is time measured in years since 2011. Source: CIA Factbook     4th  Indonesia  pop. 248 million  growth rate 1.04%     5th  Brazil  pop. 205 million  growth rate 1.10%     6th  Pakistan  pop. 190 million  growth rate 1.55%     7th  Nigeria  pop. 170 million  growth rate 2.55%     8th  Bangladesh  pop. 161 million  growth rate 1.58%        Which of these countries is projected to have the largest population in 2020? In 2030? In 2050?      Explain why Bangladesh's population will not overtake Nigeria's, assuming these projections are accurate.      Approximately when will Brazil's population top 500 million? Will Nigeria get there first? Display your work in a successive approximation table.    "
},
{
  "id": "pop-china-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#pop-china-approx-solutions",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "  The population of China in 2011 was approximately 1.343 billion and growing at around 0.48% per year. An equation estimating the population of China is where is the population of China (measured in billions) and is the years since 2011.   Source: CIA Factbook      In what year is China's population projected to reach 1.5 billion?      In what year is India's population expected to pass China's? Remember that we discussed India's population in this section.      Explain how we got the equation for China.      Draw a graph showing both equations.    "
},
{
  "id": "electronics-sales-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#electronics-sales-approx-solutions",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "  A company who makes electronics was doing great business in 1996, but sales quickly slid after 2000. Their sales in millions of dollars years from 1996 is given by the following equation    (Story also appears in )      What were the company's sales in 1996, 2000, and 2005?      The company decided to declare bankruptcy when sales fell below $20 million. In what year was that? Show how to use successive approximations to estimate the answer to the nearest year.      An analyst had suggested that they close down shop earlier, once sales were below $50 million. In what year did sales fall that low? Again, use successive approximation.    "
},
{
  "id": "window-glass-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#window-glass-approx-solutions",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "",
  "body": "  Suppose a special kind of window glass is 1 inch thick and lets through only 75% of the light. If two panes of this glass are used, the product is 2 inches thick and lets in 56.25% since    (Story also appears in )      If three panes of this glass are used, explain why the product is 3 inches thick and lets in about 42.19% of the light.      If four panes of this glass are used, how thick will the product be and what percentage (%) of the light will be let through?      Identify and name the variables, including their units, and write an equation relating them.      Use successive approximation to figure out what thickness glass should be used to let through less than 10% of the light. Display your work in a table.      Graph the function.    "
},
{
  "id": "wind-turbine-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#wind-turbine-approx-solutions",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "",
  "body": "  Wind turbines are used to generate electricity. For a particular wind turbine, the equation can be used to calculate the amount of electricity generated ( watts) for a given wind speed ( mph), over a fixed period of time.   (Story also appears in , , and )      Make a table showing the amount of electricity produced when the wind speed is 10 mph, 25 mph, and 40 mph.      Draw a graph illustrating this equation.      Approximate the wind speed that will generate 12,500 watts of electricity.    "
},
{
  "id": "bac-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#bac-approx-solutions",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "",
  "body": "  After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. The equation is where is Stephen's BAC and is the time, measured in hours.   (Story also appears in and )      Make a table showing Stephen's BAC at the start of the problem and each of the next four hours.      Draw a graph showing how Stephen's BAC changed over time.      At a BAC of 0.10 it is illegal for Stephen to drive. Approximately when does that happen?    "
},
{
  "id": "gravel-path-approx-solutions",
  "level": "2",
  "url": "sec-Approx_solutions.html#gravel-path-approx-solutions",
  "type": "Exercise",
  "number": "2.4.10",
  "title": "",
  "body": "  Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around. The amount of gravel they need ( cubic feet) is given by the equation where is the width of the path in feet.      (Story also appears in and )      If the neighbor donates 60 cubic feet of gravel, how wide a path can they build? Report your answer to two decimal places.      Convert your answer to feet and inches. Do you think that's a wide enough path?    "
},
{
  "id": "sec-Finance",
  "level": "1",
  "url": "sec-Finance.html",
  "type": "Section",
  "number": "2.5",
  "title": "Finance formulas",
  "body": " Finance formulas   Hector is trying to figure out his finances - finding a good investment for his tax refund, saving for a down payment on a house, and dealing with his student loans. While there are various online tools that will do the math for him, Hector would really like to work out the formulas for himself.  First that tax refund. What a relief: $1,040 back this year. Much as Hector is tempted to spend the money on something fun, he knows he should save it. His local bank offers him two choices: a savings account paying 1.2% interest compounded monthly or a 3-year certificate of deposit paying 3% interest compounded monthly.  The description compounded monthly means that the bank will pay him of the annual interest each month, and then use that new balance in computing his interest in the month that follows. For example, that savings account would pay 1.2% interest compounded monthly, so that's interest each month. Rather than figuring out Hector's balance one month at a time, we can use this formula.   Compound Interest Formula   where    = account balance ($)     = time invested (years)     = initial deposit or principal      = interest rate compounded monthly (as a decimal)      If you're curious, this equation fits the template for an exponential equation. The starting amount is . The annual growth rate is , which means the monthly growth rate is , and so the monthly growth factor is Since the interest is added each month, it would make sense to measure time in months. It is customary, however, to measure time in years instead. No big deal. After 3 years, for example, we have Yup, just multiply the years by 12 to get the months. In the general formula, the number of years is and so the number of months is .  Let's figure out how much Hector would have in his account for each choice. For the savings account we have , , and years so we use the to get See the parentheses? The parentheses around the base were already in the equation. They make sure that the inside quantity gets calculated before it's raised to the power. We inserted the parentheses around the exponent to override the order of operations again. This time we wanted the product ( ) calculated first.  Of course, Hector might want to choose that certificate of deposit instead. That pays 3% interest compounded monthly, so the only change is . Your turn. Check that using the you get $1,137.81.  It looks like the certificate of deposit is a clear winner, but there is a catch. If Hector wants his money before the three year term is up, he loses all (or most) of the interest earned. Ouch. So Hector should decide not only based on what the accounts pay: $1,078.10 in the savings account versus $1,137.81 in the certificate of deposit, but also on whether he is comfortable leaving the money alone for three years or not.  Unimpressed by the $59.71 difference and uncomfortable locking his money in for that long, Hector decides on the savings account. When he reads the account information carefully he is surprised to see the account pays 1.207% APR. What does that mean?  The acronymn APR stands for annual percentage rate . It means that 1.2% interest compounded monthly has the same net effect as paying 1.207% at the end of each year. where does that number come from? Imagine $1 in the account ( ) for one year ( ) at 1.2% interest (so again). Silly, yes, but watch what we learn. The balance from the would be around $1.01207, as you can (and should) check. That means the annual growth factor is which corresponds to the equivalent of annual growth rate of There's a formula for this too.   Equivalent APR Formula   where = interest rate compounded monthly (as a decimal)   For example, the CD pays 3% compounded monthly, so . Using the we get   All this thinking about savings reminds Hector that he wants to own his own place someday. He promised himself that he would start putting away some money each month to save for a down payment on a condo, or maybe even a house. Sharing an apartment with three friends, postponing buying his first car, and bringing lunch from home most days leaves Hector nearly $1,000 per month to save. His bank offers a special savings account paying 4.5% compounded monthly if he commits to making a deposit every month for at least two years.  Suppose Hector deposits $1,000 to the account at the end of every month. Two things happen at the end of each month - first, the interest is added to the account and, second, Hector puts another $1,000 into the account. Let's do a couple quick examples. At the end of the first month he just has the $1,000. What is his balance at the end of the second month? From the (with , , and ) he has $1,003.75 to which he adds another $1,000 for a grand total of At the end of the third month from the (now with but still and ) he has $2,011.26 to which he adds another $1,000 for a grand total of   It would take too long to keep calculating one month at a time. A sequence of regular deposits is called an annuity . Luckily there's a formula for the (future) value of an annuity.   Future Value Annuity Formula   where    = account balance ($)     = time invested (years)     = regular (monthly) deposits ($)     = interest rate compounded monthly (as a decimal)      Notice that now represents the regular, monthly deposit instead of the initial deposit. In either case think: stands for put in. In Hector's situation, we have and . To check his balance after 3 months, we need to convert to years. Here goes. so . From the , his balance is as we expected.  Notice how we need parentheses not only where they appear in the formula, but also around the entire numerator (top) of the fraction, around the entire denominator (bottom) of the fraction, and around the exponent. That's going to take some practice to get used to. Especially since there are actually two open parentheses in a row.  And how much will Hector have if he continues to save for a full 2 years? Use the (now with ) to get the answer of $25,064. Wow. He'll be buying his own house in no time. By the way, if he just stuck that $1,000 in a shoebox under his bed (meaning earning no interest) he'd have The $25,064 in his account represents a total of $1,064 in interest. The bank is better than the shoebox.  Oh, but wait, there's those looming student loans. Hector currently owes $16,700 at 5.75% interest compounded monthly. He's ready to start paying some of that loan off every month, which means this loan repayment is another example of an annuity. Again, two things happen at the end of each month - first, the interest is added to the account and, second, the payment is subtracted. Instead of trying examples by hand, let's fast forward to the formula. The formula that gives the (monthly) payment for a loan (or any annuity) is   Loan Payment Formula   where    = loan amount ($)     = time invested (years)     = regular (monthly) payment ($)     = interest rate compounded monthly (as a decimal)      Notice that now represents the regular, monthly payment and is the loan amount. In Hector's situation and . he would like to pay off the student loan in the next two years before he buys that house, so years. The monthly payment from the would be Oh boy. If Hector has to pay $738.28 per month for his student loan, that's really going to cut into how much he can save for that down payment on a condo. (And forget about a house.) Know why we round up? Banks always do, and then the very last payment is a tiny bit less to make up for all that round up.  This calculation is our most complicated so far. See the negative in the exponent? Look closely at where we added parentheses - top of fraction, bottom of fraction, exponent. Same as before. It's going to take practice but once you get the hang of it, it is the same steps. One suggestion: write down what you plan to enter into your calculator. That helps you get it correct and, in case you mess up, someone else can at least see what your plan was.  Back to poor Hector. Luckily the student loan is not due in 2 years. He's allowed 10 years to pay it back. Let's recalculate his monthly payment assuming he takes the full 10 years instead. From the (now with instead), we find his new monthly payment would be $183.32. (Check!) Much more realistic. That means he would have to save each month towards that condo. Two years probably isn't going to be enough time, so suppose he saves for three years instead. Notice that now we're saving money so we went back to the with the regular deposit of , monthly interest rate of , and years. Go for it. Did you get ? Good. And, great news for Hector.  There are four different formulas in this section. Each has a different purpose. The exercises say which formula to use, but in subsequent courses you would have to choose for yourself.  A short disclaimer is in order. These formulas only work if the interest is compounded monthly . Can you guess how to change the formulas if the interest is paid at some other interval? Just trade out the 12s for monthly and use how ever many times per year the interest is paid instead, usually called in other textbooks.    Do you know     How to determine which formula to use? Ask your instructor if you will be told which formula to use during the exam.     What the quantities , , , and from the formulas mean in the story?    How to evaluate the formulas on your calculator? Ask your instructor which formulas you need to remember, and whether any formulas will be provided during the exam.     Why parentheses are needed around the exponent, numerator, and denominator in most of the formulas?    What APR means, and why it is different from the (nominal) interest rate?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.        Use the indicated formulas to help Kiran figure out her finances.     Kiran deposited $2,500 in a money market account that earned 7% interest compounded monthly. Use the to calculate her account balance after 4 years.      What is the equivalent APR on Kiran's money market account? Use the .      Kiran puts $400 a month in her retirement account that amazingly also earns 7% interest compounded monthly. Use the to determine how much Kiran will have in her retirement account in 28 years.      Kiran would really like to buy a new hybrid car that sells for $23,500. Sadly Kiran's credit rating is not very good, so the best the dealership offers is a loan at (you guessed it) 7% interest compouned monthly. Use the to calculate her monthly car payments on a six year loan.         Tim and Josh are saving for their kids' college in fifteen years. The account pays the equivalent of 5.4% interest compounded monthly (taking into consideration various tax incentives)     Make a table comparing how much they will have after fifteen years if they contribute $100 per month vs. $500 per month vs. $1,000 per month. Use the .      Tim's parents decide to put $15,000 into the account now. How much will that deposit be worth in fifteen years? Use the .       Use the to find the APR for each of the following published interest rates (compounded monthly) offered by recent credit card companies.     9%      12.8%      20.19%         Cesar and Eliana are looking at three different houses to buy. The first is a large new townhouse priced at $240,000. The second is a small but charming bungalow priced at $260,000. The third is a large 2-story house down the block priced at $280,000.  Calculate the monthly payment for each house for a 30-year mortgage at 3.5% interest compounded monthly. Use the .     Townhouse      Bungalow      2-Story      At this interest rate, if the house price goes up by $20,000, what happens to Cesar and Eliana's monthly payment?        As we have seen, Hector is trying to figure out his finances.     Check that if Hector deposits $1,040 into a certificate of deposit earning 3% interest compounded monthly, then at the end of three years he will have $1,137.81. Use the .      Check that if Hector takes 10 years to pay back his student loan of $16,700 at 5.75% interest compounded monthly, then his monthly payment will be $183.32. Use the .      Check that if Hector deposits $816.58 each month into an account earning 4.5% interest compounded monthly for 3 years, then his balance will be $31,410. Use the .      What is the equivalent APR of 4.5% interest compounded monthly? Use the .       Ayah invests $35,000 for three years. Use the to answer the following questions.     How much will she have if her money earns 6% compounded monthly?      How much will she have if her money earns 11% compounded monthly?      How much will she have if her money earns 1.9% compounded monthly?      Name the variables, make a table, and draw a graph showing how her balance after three years is a function of the interest rate. Include 0% interest on your graph.       Lue's family bought a house three years ago and owes $192,000 on their mortgage. In reality, their monthly payment will include taxes, insurance, and money for escrow but let's ignore those amounts for this problem. In each part of this problem, use the .     They currently owe $192,000 on their mortgage for the remaining 27 years at 4.5% compounded monthly. Calculate their monthly payment.      Lue's family can refinance at 3.5% compounded monthly on a 30-year mortgage loan. Rolling in closing costs, their new loan would be for $195,000. Calculate their monthly payment if they refinance.      Or, they can refinance to a 15-year mortgage at 3.25% compounded monthly. With closing costs, their new loan would be again be for $195,000. Calculate their monthly payment if they refinance this way instead.       Kurt invests $50,000 in a certificate of deposit earning 4.77% interest compounded monthly. Use the :     Make a table showing the balance now, after 1 year, after 5 years, and after 12 years.      Name the variables and draw a graph showing how the balance is a function of the time.       Soo Jin is borrowing more money for college. Compare the APR for each choice, using the .     A nationally subsidized loan at 3.4% compounded monthly.      Her bank's college loan at 7.9% compounded monthly.      Paying her tuition on her credit card that charges 19.8% compounded monthly.      "
},
{
  "id": "sec-Finance-2-3",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compounded monthly "
},
{
  "id": "sec-Finance-2-10",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "APR annual percentage rate "
},
{
  "id": "sec-Finance-2-15",
  "level": "2",
  "url": "sec-Finance.html#sec-Finance-2-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "kiran-finance",
  "level": "2",
  "url": "sec-Finance.html#kiran-finance",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Use the indicated formulas to help Kiran figure out her finances.     Kiran deposited $2,500 in a money market account that earned 7% interest compounded monthly. Use the to calculate her account balance after 4 years.      What is the equivalent APR on Kiran's money market account? Use the .      Kiran puts $400 a month in her retirement account that amazingly also earns 7% interest compounded monthly. Use the to determine how much Kiran will have in her retirement account in 28 years.      Kiran would really like to buy a new hybrid car that sells for $23,500. Sadly Kiran's credit rating is not very good, so the best the dealership offers is a loan at (you guessed it) 7% interest compouned monthly. Use the to calculate her monthly car payments on a six year loan.    "
},
{
  "id": "college-savings-finance",
  "level": "2",
  "url": "sec-Finance.html#college-savings-finance",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Tim and Josh are saving for their kids' college in fifteen years. The account pays the equivalent of 5.4% interest compounded monthly (taking into consideration various tax incentives)     Make a table comparing how much they will have after fifteen years if they contribute $100 per month vs. $500 per month vs. $1,000 per month. Use the .      Tim's parents decide to put $15,000 into the account now. How much will that deposit be worth in fifteen years? Use the .    "
},
{
  "id": "equivalent-apr-finance",
  "level": "2",
  "url": "sec-Finance.html#equivalent-apr-finance",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Use the to find the APR for each of the following published interest rates (compounded monthly) offered by recent credit card companies.     9%      12.8%      20.19%    "
},
{
  "id": "house-payment-finance",
  "level": "2",
  "url": "sec-Finance.html#house-payment-finance",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Cesar and Eliana are looking at three different houses to buy. The first is a large new townhouse priced at $240,000. The second is a small but charming bungalow priced at $260,000. The third is a large 2-story house down the block priced at $280,000.  Calculate the monthly payment for each house for a 30-year mortgage at 3.5% interest compounded monthly. Use the .     Townhouse      Bungalow      2-Story      At this interest rate, if the house price goes up by $20,000, what happens to Cesar and Eliana's monthly payment?    "
},
{
  "id": "hector-finance",
  "level": "2",
  "url": "sec-Finance.html#hector-finance",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  As we have seen, Hector is trying to figure out his finances.     Check that if Hector deposits $1,040 into a certificate of deposit earning 3% interest compounded monthly, then at the end of three years he will have $1,137.81. Use the .      Check that if Hector takes 10 years to pay back his student loan of $16,700 at 5.75% interest compounded monthly, then his monthly payment will be $183.32. Use the .      Check that if Hector deposits $816.58 each month into an account earning 4.5% interest compounded monthly for 3 years, then his balance will be $31,410. Use the .      What is the equivalent APR of 4.5% interest compounded monthly? Use the .    "
},
{
  "id": "balance-rate-finance",
  "level": "2",
  "url": "sec-Finance.html#balance-rate-finance",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "  Ayah invests $35,000 for three years. Use the to answer the following questions.     How much will she have if her money earns 6% compounded monthly?      How much will she have if her money earns 11% compounded monthly?      How much will she have if her money earns 1.9% compounded monthly?      Name the variables, make a table, and draw a graph showing how her balance after three years is a function of the interest rate. Include 0% interest on your graph.    "
},
{
  "id": "mortgage-payments-finance",
  "level": "2",
  "url": "sec-Finance.html#mortgage-payments-finance",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "  Lue's family bought a house three years ago and owes $192,000 on their mortgage. In reality, their monthly payment will include taxes, insurance, and money for escrow but let's ignore those amounts for this problem. In each part of this problem, use the .     They currently owe $192,000 on their mortgage for the remaining 27 years at 4.5% compounded monthly. Calculate their monthly payment.      Lue's family can refinance at 3.5% compounded monthly on a 30-year mortgage loan. Rolling in closing costs, their new loan would be for $195,000. Calculate their monthly payment if they refinance.      Or, they can refinance to a 15-year mortgage at 3.25% compounded monthly. With closing costs, their new loan would be again be for $195,000. Calculate their monthly payment if they refinance this way instead.    "
},
{
  "id": "balance-time-finance",
  "level": "2",
  "url": "sec-Finance.html#balance-time-finance",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Kurt invests $50,000 in a certificate of deposit earning 4.77% interest compounded monthly. Use the :     Make a table showing the balance now, after 1 year, after 5 years, and after 12 years.      Name the variables and draw a graph showing how the balance is a function of the time.    "
},
{
  "id": "apr-loans-finance",
  "level": "2",
  "url": "sec-Finance.html#apr-loans-finance",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "  Soo Jin is borrowing more money for college. Compare the APR for each choice, using the .     A nationally subsidized loan at 3.4% compounded monthly.      Her bank's college loan at 7.9% compounded monthly.      Paying her tuition on her credit card that charges 19.8% compounded monthly.    "
},
{
  "id": "sec-PE2A",
  "level": "1",
  "url": "sec-PE2A.html",
  "type": "Section",
  "number": "2.6",
  "title": "Practice Exam 2A",
  "body": " Practice Exam 2A   Practice Exam 2A   Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   As you work, make a don't forget list of any information you need to look up or ask about.       United States ethanol production has been growing exponentially. In 1990, there were 0.9 billion gallons of ethanol produced. At that time it was estimated that production would increase 5.5% per year. Source: Renewable Fuels Association      Name the variables, including units.      What is the annual growth factor?      Write an equation that describes the function.      In 2008 actual production of ethanol was 9.0 billion gallons. Is that production level higher or lower than predicted from your equation? Explain.      When does your equation predict that ethanol production was 9.0 billion gallons? Use successive approximation. Display your guesses in a table. Report the actual year.         An insurance deductible is the amount you pay for any claim before the insurance company starts paying. Lee's automobile insurance deductible started at $500, but they take off $10 for each month where he has no accidents or tickets. For example, after 1 month his deductible was $490, after 2 months it was $480, and so on.     Name the variables, including units and dependence.      Make a table showing the deductible after 6 months, 1 year, or 3 years without an accident or ticket.      When would the deductible vanish ? (Meaning, when is it $0?)      Write an equation showing how the deductible decreases.      What is the slope and what does it mean in the story?      What is the intercept and what does it mean in the story?         Our investment club has been tracking the performance of a biofuel company's stock over the past year. Using an econometrics software package, we found the equation which describes the value of each share of stock $ as a function of time , measured in weeks starting exactly one year ago.     Name the variables and , including units and dependence.      Complete the following table of values.     0  13  26  39  52     31.00  21.08    16.86        Draw a graph showing how the value changed during the past year.      According to the table, what was the value of the stock when we began tracking it? What is it worth now?      We are thinking about buying some stock now, and selling it in 10 weeks. Does the equation say that's a good idea? Explain.    10 weeks from now is not because we started counting weeks one year ago.      Looking back over the past year, how low did the value of the stock get? Use successive approximation to estimate to the nearest cent.         Cicely wants to buy a new car that costs $19,400. The dealership offers 6.18% compounded monthly for a 5 year loan.     What will Cicely's monthly payment be? Use the .      What is the equivalent APR Cicely is paying? Use the . Don't forget to report the percentage.       Cicely is working on her monthly budget. She has only $230 per month left after those car payments. If she puts that money into a bank account each month earning 2.91% interest compounded monthly, how much will she have after 5 years when the car is paid off? Use the .      In 2011, Cicely was cleaning out the basement and found some savings bonds with face value $1,600 that matured in 1972 and have been earning 3% interest compounded monthly ever since. What were they worth? Use the .       "
},
{
  "id": "ethanol-PE2A",
  "level": "2",
  "url": "sec-PE2A.html#ethanol-PE2A",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "  United States ethanol production has been growing exponentially. In 1990, there were 0.9 billion gallons of ethanol produced. At that time it was estimated that production would increase 5.5% per year. Source: Renewable Fuels Association      Name the variables, including units.      What is the annual growth factor?      Write an equation that describes the function.      In 2008 actual production of ethanol was 9.0 billion gallons. Is that production level higher or lower than predicted from your equation? Explain.      When does your equation predict that ethanol production was 9.0 billion gallons? Use successive approximation. Display your guesses in a table. Report the actual year.    "
},
{
  "id": "deductible-linear-PE2A",
  "level": "2",
  "url": "sec-PE2A.html#deductible-linear-PE2A",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "  An insurance deductible is the amount you pay for any claim before the insurance company starts paying. Lee's automobile insurance deductible started at $500, but they take off $10 for each month where he has no accidents or tickets. For example, after 1 month his deductible was $490, after 2 months it was $480, and so on.     Name the variables, including units and dependence.      Make a table showing the deductible after 6 months, 1 year, or 3 years without an accident or ticket.      When would the deductible vanish ? (Meaning, when is it $0?)      Write an equation showing how the deductible decreases.      What is the slope and what does it mean in the story?      What is the intercept and what does it mean in the story?    "
},
{
  "id": "stock-price-PE2A",
  "level": "2",
  "url": "sec-PE2A.html#stock-price-PE2A",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "  Our investment club has been tracking the performance of a biofuel company's stock over the past year. Using an econometrics software package, we found the equation which describes the value of each share of stock $ as a function of time , measured in weeks starting exactly one year ago.     Name the variables and , including units and dependence.      Complete the following table of values.     0  13  26  39  52     31.00  21.08    16.86        Draw a graph showing how the value changed during the past year.      According to the table, what was the value of the stock when we began tracking it? What is it worth now?      We are thinking about buying some stock now, and selling it in 10 weeks. Does the equation say that's a good idea? Explain.    10 weeks from now is not because we started counting weeks one year ago.      Looking back over the past year, how low did the value of the stock get? Use successive approximation to estimate to the nearest cent.    "
},
{
  "id": "car-loan-PE2A",
  "level": "2",
  "url": "sec-PE2A.html#car-loan-PE2A",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": "  Cicely wants to buy a new car that costs $19,400. The dealership offers 6.18% compounded monthly for a 5 year loan.     What will Cicely's monthly payment be? Use the .      What is the equivalent APR Cicely is paying? Use the . Don't forget to report the percentage.       Cicely is working on her monthly budget. She has only $230 per month left after those car payments. If she puts that money into a bank account each month earning 2.91% interest compounded monthly, how much will she have after 5 years when the car is paid off? Use the .      In 2011, Cicely was cleaning out the basement and found some savings bonds with face value $1,600 that matured in 1972 and have been earning 3% interest compounded monthly ever since. What were they worth? Use the .    "
},
{
  "id": "sec-PE2B",
  "level": "1",
  "url": "sec-PE2B.html",
  "type": "Section",
  "number": "2.7",
  "title": "Practice Exam 2B",
  "body": " Practice Exam 2B   Practice Exam 2B    Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself one hour to work and wait until you have tried your best on all of the problems before checking any answers.       The Skärstroms want to dig a new well for water for their lake cabin. The company charges $900 to bring the equipment on site and draw the permit and then $2 per foot to dig.     What would a 100 foot deep well cost?      Name the variables and write an equation relating them.      Make a table showing the total cost for a well 100, 250, or 400 feet deep.         Xander grows tomatoes in his garden. He's noticed that a typical plant yields 5 pounds of tomatoes. He's been experimenting with the impact of liquid food on plant yield and estimates that each drop increases yield by 14%.     Name the variables, including units and dependence.      Calculate the growth factor and write an equation showing how yield for each tomato plant depends on the number of drops of liquid food.      Xander uses 10 drops of food on one of his tomato plans and uses all of the tomatoes from that plant to make salsa. If each pound of tomatoes makes around a pint of salsa, how much salsa will Xander have (from that one plant)?      Convert your answer into gallons. Use 1 gallon = 4 quarts and 1 quart = 2 pints.      Make a table showing Xander's projections for yield for each tomato plant if he uses 0, 1, 2, 5, or 10 drops of liquid food.      Graph the function.         Skye and her sister Clover started a t-shirt printing company. To produce a particular t-shirt it costs $350 in materials and labor to set up a silkscreen and then $7.50 for each shirt made to cover materials and printing. The average cost per t-shirt $ is a function of , the number of t-shirts printed. The equation for this function is      Evaluate this formula when . What does the resulting value of mean in the story?      Make a table showing the average cost per t-shirt if Skye and Clover make 1, 20, 50, 100, or 300 t-shirts.      Approximately how many t-shirts would they need to make to keep the average cost per shirt under $10? Use successive approximation and display your guesses in a table.      Skye designs the shirts and runs the press. Clover is the brains behind sales. She would like to price the shirts at $12.95 each. The sisters will make a profit of $ where   This is a linear equation. What is the slope, what are its units, and what does it mean in the story?      What is the intercept, what are its units, and what does it mean in the story?      How many t-shirts do the sisters need to sell to make $1,000 profit? Use successive approximation and display your guesses in a table.           Kotoyo's uncle won $100,000 on a game show. If he invests it in a fund that is expected to earn 5.7% interest compounded monthly, how much will he have after 5 years? Use the .      Kotoyo's grandmother has been contributing $150 a month into a college fund for Kotoyo for the past 8 years. The account pays 4% interest compounded monthly. How much is in the account now? Use the .      Kotoyo owes $8,742 on her credit card. They charge her 16% interest compounded monthly. What would her monthly payment be if she wants to pay it off in 5 years? Use the .      What is the equivalent annual percentage rate (APR) of Kotoyo's credit card? Use the . Don't forget to report the percentage.        "
},
{
  "id": "well-linear-PE2B",
  "level": "2",
  "url": "sec-PE2B.html#well-linear-PE2B",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "  The Skärstroms want to dig a new well for water for their lake cabin. The company charges $900 to bring the equipment on site and draw the permit and then $2 per foot to dig.     What would a 100 foot deep well cost?      Name the variables and write an equation relating them.      Make a table showing the total cost for a well 100, 250, or 400 feet deep.    "
},
{
  "id": "tomato-food-PE2B",
  "level": "2",
  "url": "sec-PE2B.html#tomato-food-PE2B",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": "  Xander grows tomatoes in his garden. He's noticed that a typical plant yields 5 pounds of tomatoes. He's been experimenting with the impact of liquid food on plant yield and estimates that each drop increases yield by 14%.     Name the variables, including units and dependence.      Calculate the growth factor and write an equation showing how yield for each tomato plant depends on the number of drops of liquid food.      Xander uses 10 drops of food on one of his tomato plans and uses all of the tomatoes from that plant to make salsa. If each pound of tomatoes makes around a pint of salsa, how much salsa will Xander have (from that one plant)?      Convert your answer into gallons. Use 1 gallon = 4 quarts and 1 quart = 2 pints.      Make a table showing Xander's projections for yield for each tomato plant if he uses 0, 1, 2, 5, or 10 drops of liquid food.      Graph the function.    "
},
{
  "id": "t-shirt-printing-PE2B",
  "level": "2",
  "url": "sec-PE2B.html#t-shirt-printing-PE2B",
  "type": "Exercise",
  "number": "2.7.3",
  "title": "",
  "body": "  Skye and her sister Clover started a t-shirt printing company. To produce a particular t-shirt it costs $350 in materials and labor to set up a silkscreen and then $7.50 for each shirt made to cover materials and printing. The average cost per t-shirt $ is a function of , the number of t-shirts printed. The equation for this function is      Evaluate this formula when . What does the resulting value of mean in the story?      Make a table showing the average cost per t-shirt if Skye and Clover make 1, 20, 50, 100, or 300 t-shirts.      Approximately how many t-shirts would they need to make to keep the average cost per shirt under $10? Use successive approximation and display your guesses in a table.      Skye designs the shirts and runs the press. Clover is the brains behind sales. She would like to price the shirts at $12.95 each. The sisters will make a profit of $ where   This is a linear equation. What is the slope, what are its units, and what does it mean in the story?      What is the intercept, what are its units, and what does it mean in the story?      How many t-shirts do the sisters need to sell to make $1,000 profit? Use successive approximation and display your guesses in a table.    "
},
{
  "id": "kotoyo-finance-PE2B",
  "level": "2",
  "url": "sec-PE2B.html#kotoyo-finance-PE2B",
  "type": "Exercise",
  "number": "2.7.4",
  "title": "",
  "body": "   Kotoyo's uncle won $100,000 on a game show. If he invests it in a fund that is expected to earn 5.7% interest compounded monthly, how much will he have after 5 years? Use the .      Kotoyo's grandmother has been contributing $150 a month into a college fund for Kotoyo for the past 8 years. The account pays 4% interest compounded monthly. How much is in the account now? Use the .      Kotoyo owes $8,742 on her credit card. They charge her 16% interest compounded monthly. What would her monthly payment be if she wants to pay it off in 5 years? Use the .      What is the equivalent annual percentage rate (APR) of Kotoyo's credit card? Use the . Don't forget to report the percentage.     "
},
{
  "id": "sec-Solving_linear_equations",
  "level": "1",
  "url": "sec-Solving_linear_equations.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solving linear equations",
  "body": " Solving linear equations   Your kitchen sink keeps getting clogged. Very annoying. Last time the plumber was able to fix it pretty quickly. But now the sink is clogged again. This time when the plumber comes and unclogs the sink, he suggests redoing the trap and a few other things that were causing the problem. You are pretty tired of it clogging up and tell him to go ahead. While you're glad that the sink works when he's done, you're a bit shocked when his bill arrives a few days later for parts plus $278.75 in labor. Does that seem right?  Remember our plumber charged $100 for just showing up and then $75 per hour for the service. Using the variables   we found that the equation was   Let's figure out how many hours of work would add up to a bill of $278.75. Our first approach might be to look at a table. From earlier we had     0  1\/2  1  2  3     100.00  137.50  175.00  250.00  325.00    Since $278.75 is between $250.00 and $325.00, we see that the time must be between 2 and 3 hours. You remember the plumber being there over 2 hours, so this is certainly a reasonable answer. Well, a lot of money, but mathematically it makes sense.  Still curious, you'd like to know exactly how many hours and minutes he worked. We could use successive approximations. For example, for 2.5 hours the bill would have been which is more than the charge. Continuing to guess and check we get     2  3  2.5  2.3  2.4  2.35  2.37  2.38     250.00  325.00  287.50  272.50  280.00  276.25  277.75  278.50    vs.  low  high  high  low  high  low  low  close enough    The plumber worked approximately 2.38 hours. Converting units we calculate The plumber took about 2 hours, 23 minutes. Thinking back, the plumber had arrived around 10:30 in the morning and stayed past lunch, probably until around 1:00 p.m. That's about right.  Wait a minute! We could have figured this out much more quickly. If the labor cost was $278.75, we know the first $100 was the trip charge. That leaves in hourly charges. At $75 per hour that comes to which comes to around 2 hours, 23 minutes as before. See how we used the $75\/hour as a unit conversion here? Very clever.  That worked well. But, can we figure out this sort of calculation in other problems? What is the general method we're using? Can we write down our method in an organized fashion so that someone else could follow our thinking here? Turns out there is a formal way to show this calculation, called (symbolically) solving the equation. Officially any method of getting a solution to an equation is considered solving the equation, but in the rest of this book, and in most places that use algebra, when we refer to solving the equation or give the instruction to solve , we mean symbolically .  Here's how it works. We want to figure out when . We know from our equation that . So we want to find the time where Remember that the equal sign indicates that the two sides are the same number. On the left-hand side we have . On the right-hand side we have . Looks different, but same thing. We are looking for the value of that makes these two sides equal.  The first thing we did was subtract the $100 trip charge. In this formal method, we subtract 100 from each side of our equation. If the left-hand side and the right-hand side are the same number, then they will still be equal when we take away 100 from each side. We get   which simplifies to because the and cancelled.  The next thing we did to figure out the answer was divide by the $75\/hour charge. In this formal method, we can divide each side of our equation by 75. Again, if the left-hand side and right-hand side are the same number, then they will still be equal when we divide by 75. Here goes. Notice that we wrote the division in fraction form (instead of using ). To understand why the 75's cancelled, remember that is short for and so because the and cancelled. So we have as before. Yet again, our answer is around 2 hours, 23 minutes.  Let's practice working with this symbolic way of solving equations. Suppose instead the plumber went to my neighbor's house and billed her for $160 in labor costs. How long did the plumber work at my neighbor's? As before, we begin with our equation and we are looking for . Put these together to get Subtract 100 from each side to get which simplifes to Last, divide each side by 75 to get which simplifies to   We have solved the equation, but it would make more sense to report our answer in minutes so we convert The plumber worked for 48 minutes at my neighbor's house.  Let's quick check. Since is measured in hours we need to go back and use hours, not 48 which is in minutes. Evaluating in our original equation we get   You might be wondering how we knew to subtract the 100 first and then later divide by 75. In this particular situation we had figured it out already and knew it made sense to take the $100 right off the top. But, in general, how would we know?  It turns out that when solving an equation we do the opposite operations in the reverse order from the usual order of operations for evaluating. To evaluate a linear equation we would first multiply and then add. To solve a linear equation we first subtract (that is the opposite of adding) and then we divide (that is the opposite of multiplying).    Do you know     When you solve an equation, as opposed to just evaluating?    Why we do the same thing to each side of an equation when solving?    How to solve a linear equation?    The advantages and disadvantages of solving versus successive approximation?    How to check that a solution is correct using the equation?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A truck hauling bags of grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The equation for the gross weight pounds is for bags of grass seed. (Story also appears in , , and )      Set up and solve an equation to determine the number of bags of grass seed being carried by the truck with gross weight of 14,500 pounds.      Do the same for a truck with gross weight 8 tons. A ton is 2,000 pounds.         Is laughter really the best medicine? A study examined the impact of comedy on anxiety levels. Subjects' anxiety levels were rated on a scale of 1 to 5 before and after the study. Levels averaged 4.3 before the study. There was no significant change in subjects in the control group. Subjects who watched the comedy videos showed a noticeable difference, and it depended on the hours of comedy watched. Anxiety levels fell an average of 0.098 (on the 1 to 5 scale) for each hour of comedy watched.     Name the variables. Anxiety is measured on a unitless scale.      Make a table showing average anxiety levels for subjects who watched comedy videos for 0 hours (control group), 2 hours, 10 hours, and 20 hours, according to these findings.      Use successive approximation to guess the approximate number of hours watching comedy needed to lower the average anxiety level below 2.      Write an equation relating the variables.      Solve your equation to determine the exact number of hours watching comedy needed to lower the average anxiety level below 2.         Lizbeth wants to send her mom truffles for Mother's Day. It costs $ to send a box of truffles where      Make a table of values showing the charges for a box of 8 truffles, 12 truffles, or 30 truffles.      What are the units on 1.90 and what does it mean in the story?      What are the units on 7.95 and what does it mean in the story?      Draw a graph illustrating the cost of sending truffles. Include .      If Lizbeth was charged $53.55 for the box of truffles she sent her mom, how many truffles were there? Set up and solve an equation to answer the question.         The local burger restaurant had a promotion this summer. They reduced the price on a bacon double cheeseburger by 2¢ for each degree in the daily high temperature. The equation is where $ is the price of the bacon double cheeseburger and is the daily high temperature, in °F. (Story also appears in )      What is the usual price of a bacon double cheeseburger?      Ronald paid $5.34 for a bacon double cheeseburger on Tuesday. How hot was the temperature that day? Set up and solve an equation.      What was the high temperature on Sunday when Wendy bought a bacon double cheeseburger for only $5.70? Set up and solve an equation.      Leroy is holding out for a $5 burger. What temperature will make Leroy's wish to come true? Set up and solve an equation.        A charter boat tour costs for passengers, where      Make a table of values showing the charges for no passengers, 4 passengers, 10 passengers, and 20 passengers.      What does the 135.00 represent and what are its units?      What does the 11.95 represent and what are its units?      If Freja was charged for use of the boat, how many passengers were there? Set up and solve an equation to answer the question.      Graph and check.       Abduwali has just opened a restaurant. He spent $82,500 to get started but hopes to earn back $6,300 each month. Earlier we determined that describes how Abduwali's profit $ is a function of how long he works ( months).   (Story also appears in )      Set up and solve an equation to determine how long it will take Abduwali to break even , meaning make a profit of $0?      Aduwali will consider the restaurant a success once he's earned $100,000. According to our equation, when will that be?       Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase.   (Story also appears in )      Make a table showing the cost to buy 5 stamps, 10 stamps, or 20 stamps from the corner store.      Name the variables and write a linear equation showing how the total price depends on the number of stamps I buy.      My partner bought postage stamps at the corner store and it cost him $7.35. Solve your equation to determine how many stamps she bought.      How many stamps could I buy for $10? Solve your equation and check your answer.       When Gretchen walks on her treadmill, she burns 125 calories per mile. Recall where is the number of calories Gretchen burns by walking miles.   (Story also appears in and )      Set up and solve an equation to calculate how far Gretchen has to walk to burn 300 calories.      If Gretchen walks 3.4 miles per hour on her treadmill, how long will it take her to burn those 300 calories? Report your answer to the nearest minute.      Pecan pie? Yum. Not fitting into your favorite jeans? No fun. How far does Gretchen have to walk to burn off the calories from those two slices of pecan pie she ate last night? Each slice has approximately 456 calories.       The more expensive something is, the less likely we are to buy it. Well, if we have a choice. For example, when strawberries are in the peak of season, they cost about $2.50 per pint at my neighborhood farmer's market and demand is approximately 180 pints. (That means, people want to buy about 180 pints at that price.) We approximate that the demand, pints, depends on the price, $ , as described by the equation      How many pints of strawberries are in demand when the price is $3.19 per pint?      Make a table of values showing the demand for strawberries priced at $2.00\/pint, $2.25\/pint, $2.50\/pint, $2.75\/pint, $3.00\/pint, $3.25\/pint, $3.50\/pint.      Draw a graph illustrating the function. Start at $0\/pint even though that's not realistic.      It's been a great week for strawberries and there are 240 pints to be sold at my neighborhood farmer's. What price should the farmer charge for her strawberries in order to sell them all? Estimate your answer from the graph. Then set up and solve an equation to answer the question.       The stretch of interstate highway through downtown averages 1,450 cars per hour during the morning rush hour. The economy is improving (finally), but with that the county manager predicts traffic levels will increase around 130 more cars per hour each week for the next couple of weeks. Earlier we found the equation where is the number of cars per hour during the morning rush weeks since the country manager made her projection.   (Story also appears in )      Significant slowdowns are expected if traffic levels exceed 2,000 cars per hour. When do they expect that will happen? Set up and solve an equation. Don't forget to check your answer by evaluating.      If traffic levels exceed 2,500, the county plans to install control lights at the on-ramps. When is that expected to happen? Set up and solve an equation. Don't forget to check your answer by evaluating.      "
},
{
  "id": "sec-Solving_linear_equations-2-11",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#sec-Solving_linear_equations-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(symbolically) solving solve "
},
{
  "id": "truck-grass-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#truck-grass-solving-linear",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  A truck hauling bags of grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The equation for the gross weight pounds is for bags of grass seed. (Story also appears in , , and )      Set up and solve an equation to determine the number of bags of grass seed being carried by the truck with gross weight of 14,500 pounds.      Do the same for a truck with gross weight 8 tons. A ton is 2,000 pounds.    "
},
{
  "id": "comedy-anxiety-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#comedy-anxiety-solving-linear",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Is laughter really the best medicine? A study examined the impact of comedy on anxiety levels. Subjects' anxiety levels were rated on a scale of 1 to 5 before and after the study. Levels averaged 4.3 before the study. There was no significant change in subjects in the control group. Subjects who watched the comedy videos showed a noticeable difference, and it depended on the hours of comedy watched. Anxiety levels fell an average of 0.098 (on the 1 to 5 scale) for each hour of comedy watched.     Name the variables. Anxiety is measured on a unitless scale.      Make a table showing average anxiety levels for subjects who watched comedy videos for 0 hours (control group), 2 hours, 10 hours, and 20 hours, according to these findings.      Use successive approximation to guess the approximate number of hours watching comedy needed to lower the average anxiety level below 2.      Write an equation relating the variables.      Solve your equation to determine the exact number of hours watching comedy needed to lower the average anxiety level below 2.    "
},
{
  "id": "truffles-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#truffles-solving-linear",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Lizbeth wants to send her mom truffles for Mother's Day. It costs $ to send a box of truffles where      Make a table of values showing the charges for a box of 8 truffles, 12 truffles, or 30 truffles.      What are the units on 1.90 and what does it mean in the story?      What are the units on 7.95 and what does it mean in the story?      Draw a graph illustrating the cost of sending truffles. Include .      If Lizbeth was charged $53.55 for the box of truffles she sent her mom, how many truffles were there? Set up and solve an equation to answer the question.    "
},
{
  "id": "burger-temp-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#burger-temp-solving-linear",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  The local burger restaurant had a promotion this summer. They reduced the price on a bacon double cheeseburger by 2¢ for each degree in the daily high temperature. The equation is where $ is the price of the bacon double cheeseburger and is the daily high temperature, in °F. (Story also appears in )      What is the usual price of a bacon double cheeseburger?      Ronald paid $5.34 for a bacon double cheeseburger on Tuesday. How hot was the temperature that day? Set up and solve an equation.      What was the high temperature on Sunday when Wendy bought a bacon double cheeseburger for only $5.70? Set up and solve an equation.      Leroy is holding out for a $5 burger. What temperature will make Leroy's wish to come true? Set up and solve an equation.    "
},
{
  "id": "charter-boat-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#charter-boat-solving-linear",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  A charter boat tour costs for passengers, where      Make a table of values showing the charges for no passengers, 4 passengers, 10 passengers, and 20 passengers.      What does the 135.00 represent and what are its units?      What does the 11.95 represent and what are its units?      If Freja was charged for use of the boat, how many passengers were there? Set up and solve an equation to answer the question.      Graph and check.    "
},
{
  "id": "restaurant-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#restaurant-solving-linear",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "  Abduwali has just opened a restaurant. He spent $82,500 to get started but hopes to earn back $6,300 each month. Earlier we determined that describes how Abduwali's profit $ is a function of how long he works ( months).   (Story also appears in )      Set up and solve an equation to determine how long it will take Abduwali to break even , meaning make a profit of $0?      Aduwali will consider the restaurant a success once he's earned $100,000. According to our equation, when will that be?    "
},
{
  "id": "stamps-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#stamps-solving-linear",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "  Between e-mail, automatic bill pay, and online banking, it seems like I hardly ever actually mail something. But for those times, I need postage stamps. The corner store sells as many (or few) stamps as I want for 44¢ each but they charge a 75¢ convenience fee for the whole purchase.   (Story also appears in )      Make a table showing the cost to buy 5 stamps, 10 stamps, or 20 stamps from the corner store.      Name the variables and write a linear equation showing how the total price depends on the number of stamps I buy.      My partner bought postage stamps at the corner store and it cost him $7.35. Solve your equation to determine how many stamps she bought.      How many stamps could I buy for $10? Solve your equation and check your answer.    "
},
{
  "id": "treadmill-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#treadmill-solving-linear",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "",
  "body": "  When Gretchen walks on her treadmill, she burns 125 calories per mile. Recall where is the number of calories Gretchen burns by walking miles.   (Story also appears in and )      Set up and solve an equation to calculate how far Gretchen has to walk to burn 300 calories.      If Gretchen walks 3.4 miles per hour on her treadmill, how long will it take her to burn those 300 calories? Report your answer to the nearest minute.      Pecan pie? Yum. Not fitting into your favorite jeans? No fun. How far does Gretchen have to walk to burn off the calories from those two slices of pecan pie she ate last night? Each slice has approximately 456 calories.    "
},
{
  "id": "strawberries-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#strawberries-solving-linear",
  "type": "Exercise",
  "number": "3.1.9",
  "title": "",
  "body": "  The more expensive something is, the less likely we are to buy it. Well, if we have a choice. For example, when strawberries are in the peak of season, they cost about $2.50 per pint at my neighborhood farmer's market and demand is approximately 180 pints. (That means, people want to buy about 180 pints at that price.) We approximate that the demand, pints, depends on the price, $ , as described by the equation      How many pints of strawberries are in demand when the price is $3.19 per pint?      Make a table of values showing the demand for strawberries priced at $2.00\/pint, $2.25\/pint, $2.50\/pint, $2.75\/pint, $3.00\/pint, $3.25\/pint, $3.50\/pint.      Draw a graph illustrating the function. Start at $0\/pint even though that's not realistic.      It's been a great week for strawberries and there are 240 pints to be sold at my neighborhood farmer's. What price should the farmer charge for her strawberries in order to sell them all? Estimate your answer from the graph. Then set up and solve an equation to answer the question.    "
},
{
  "id": "traffic-solving-linear",
  "level": "2",
  "url": "sec-Solving_linear_equations.html#traffic-solving-linear",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "",
  "body": "  The stretch of interstate highway through downtown averages 1,450 cars per hour during the morning rush hour. The economy is improving (finally), but with that the county manager predicts traffic levels will increase around 130 more cars per hour each week for the next couple of weeks. Earlier we found the equation where is the number of cars per hour during the morning rush weeks since the country manager made her projection.   (Story also appears in )      Significant slowdowns are expected if traffic levels exceed 2,000 cars per hour. When do they expect that will happen? Set up and solve an equation. Don't forget to check your answer by evaluating.      If traffic levels exceed 2,500, the county plans to install control lights at the on-ramps. When is that expected to happen? Set up and solve an equation. Don't forget to check your answer by evaluating.    "
},
{
  "id": "sec-Solving_linear_inequalities",
  "level": "1",
  "url": "sec-Solving_linear_inequalities.html",
  "type": "Section",
  "number": "3.2",
  "title": "Solving linear inequalities",
  "body": " Solving linear inequalities   In the United States temperatures for everyday things like the weather or cooking are given in Fahrenheit, denoted F. In this system, water freezes into ice at 32 F and boils into steam at 212 F. A common setting for room temperature is 68 F whereas average human body temperature is around 98.6 F. And, most importantly, chocolate brownies bake at 350 F.  In the sciences, medicine, and most other countries, temperatures are measured in Celsius, denoted C. (For those of us who grew up in the 1960s or earlier, Celsius is the temperature scale formerly known as centigrade. ) For comparison's sake, it's useful to know that water freezes at 0 C and boils at 100 C. Not coincidentally - it was set up that way. Room temperature is 20 C whereas now average human body temperature is 37 C. And those brownies?  A common conversion is given by the equation where   You may have seen this equation before with fractions in it: . Just another way to write the equation, since . For example, when we have You can (and should check) the other examples in our story.  What about those chocolate brownies? We are looking for . That's the dependent variable, so you can practice your linear equation solving skills to find the independent variable, . It turns out that chocolate brownies bake at around 177 C.  But, actually, chocolate brownies just need to bake in a moderate oven , which means between 325 F and 375 F. Let's first figure out when the oven temperature is under 375 F. We want to know when so we have an inequality instead of an equation. Remember stands for less than or equal to . Using we get We're looking for values of that make the left-hand side a number that's smaller than, or maybe as large as, 375, but no larger.  Quick vocabulary: equations have equal signs (=). When we have inequality signs ( , , , or ), it's called an inequality instead.  To solve this inequality we begin the same way as we would if we were solving the equation, by subtracting 32 from each side to get   which simplifes to   To understand why the inequality stays the same when we subtract, think of the inequality as little   big. If one number is smaller than the other, the same will be true if we subtract the same amount from each number. For example, . To make it real, suppose I have $18 and you have $21. Then imagine we each buy a movie ticket for $12. I would have and you would have . And still .  Back to our example. We had . Divide each side by 1.8 to get which simplifies to The oven should be set at most 190 C. We rounded down because we do not want the brownies to burn.  To understand why the inequality stays the same when we divide, again think of the inequality as little   big. If one number is littler than the other, the same will be true when we divide each number by the same divisor. For example, , which we imagined as my having $6 and your having $9 after we each bought a movie ticket. While we're making up stories, suppose we each have three children who want some money from us for treats. We each divide our remaining cash among our three children, respectively. My kids each get and your kids each get . And still.  There is a bit of caution when solving inequalities. When symbolically solving an equation, any operation you do to each side preserves the equality: start with equal amounts, do the same thing to each, end with equal amounts. But, when symbolically solving an inequality, only some operations you do to each side preserves the inequality: add or subtract from each side or multiply or divide each side by the same (positive) number. But other operations can reverse the inequality.  For example, we can swap sides of an equation, but if we swap sides of an inequality then the direction of the sign reverses. In this brownie example, we want Remember stands for greater than or equal to . That's like big   little. We can rewrite that inequality as little   big, or equivalently In each case, is little and is big . Make sense?  Multiplying or dividing each side of an inequality by a negative number switches the inequality sign as well. Watch out for that with decreasing functions because that's where the slope is negative. And the number we're dividing by is actually the slope.  Remember that the recipe for chocolate brownies says to bake in a moderate oven, between 325 F and 375 F. We just figured out that corresponds to . But that's only half of the story. We also wanted . While we could solve that inequality separately, it turns out there's an easier way.  Inequalities are a very useful notation for indicating between . We want between 325 F and 375 F to bake the brownies. We can write which is read   is between 325 and 375 (inclusive)   The word inclusive indicates that we're allowing or .  The good news is that we can solve this chain of inequalities all at once using the same steps as before but now being sure to do the same thing to all three sides. Three sides? you ask. Yes, three, I confirm. Watch how this works. Start with Using we get Subtract 32 from each of the three sides to get which simplifies to   Next, divide all three sides by 1.8 to get which simplifies to so, Probably best to say Chocolate brownies bake between 163 C and 190 C. Ovens actually aren't that precise, so somewhere between 170 C and 190 C should do the job.  If we graph our linear function , we can check our answer for the right temperature range for our brownies. Since we want between 325 and 375 we start on the vertical axis and then use the graph to find the right range on the horizontal axis. You can see from the highlighted region that our answer is reasonable. Now, who wants brownies?       Do you know     Common phrases that indicate an inequality?    How to represent the idea of between using a double-sided inequality?    Why we do the same thing to each side of an inequality when solving?    How to solve a linear inequality? A chain of inequalities?    Why the inequality sign is reversed if we switch sides of the equation?    When to solve an inequality, as opposed to solving an equation?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A truck hauling bags of grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The equation for the gross weight pounds is for bags of grass seed. (Story also appears in , , and )      The state highways have a 18,000 pound gross weight limit. How many bags of grass seed can the truck haul? Set up and solve an appropriate inequality.      Record your answer to part (a) in the table and graph the function.     0  1,000  2,000      3,900  8,100  12,300  18,000        We used our answer to part (a) to draw our graph, so how can we check that answer to make sense? Hint: What shape should the graph be?          The altitude, feet above ground, of an airplane minutes after it begins its descent is given by the equation Answer each question by evaluating; setting up and solving an equation; or setting up and solving an inequality, whichever is most appropriate.     At what altitude does the plane begin its descent?      How fast is the airplane descending?      What is the airplane's altitude 3 minutes into its descent? 8 minutes? 20 minutes? Display your answers in a table.      Draw a graph illustrating the function.      For how many minutes of its descent is the airplane above 20,000 feet?      The airplane might be asked to go into a holding pattern (that means flying in a circle instead of landing) when it is between 6,000 and 14,000 feet up. When will the plane be in that altitude range?      How long does it take the airplane to land, assuming it is not asked to go into a holding pattern?         Anthony and Christina are trying to decide where to hold their wedding reception. For each possible site, write an equation using for the total cost of their wedding reception (in dollars) and for the number of guests. Then set up and solve an inequality to calculate the number of guests Tony and Tina can afford on their $8,000 budget. (Story also appears in and )      The Metropolitan Club costs $1,300 for the space and $92 per person.   equation:    inequality:       number of guests:       Black Elk Park charges $500 to rent the pavilion and the family can bring in picnic food for $65 per person.   equation:    inequality:       number of guests:       The Dabbling Duck Inn charges $1,400 for the space and $80 per person for their local specialties.   equation:    inequality:       number of guests:       Pranzo Ristorante has only a $300 room rental fee but averages $145 per person, including wine.   equation:    inequality:       number of guests:          One variety of blueberry plant yields an average of 130 blueberries per season but there is quite a bit of variability from plant to plant. One measure of this variability is the standard deviation, which is approximated at 16.4 berries. Given a plant yielding blueberries, we can calculate how usual or unusual that is by computing its (standard) z-score using the equation For example, a plant yielding blueberries has z-score of 0. A plant yielding blueberries has z-score of Answer each question by evaluating; setting up and solving an equation; or setting up and solving an inequality, whichever is appropriate.     Calculate the z-score of a plant yielding 140 blueberries.      If the z-score for a plant is -0.7, what is the corresponding yield?   Hint: the negative z-score tells us the answer is below average.       A plant with z-score above 1.96 is considered plentiful . What yields of blueberries would be considered plentiful?      A plant with z-score between -1 and +1 is considered ordinary . What yields of blueberries would be considered ordinary?        Recall that the conversion between Fahrenheit ( ) and Celsius ( ) temperatures is given by the equation      Evaluate the equation at the appropriate values to check that 0 C = 32 F, 20 C = 68 F, and 37 C = 98.6 F.      Set up and solve an equation to find the Celsius equivalent of brownie-baking temperature (350 F).      You're planning a trip to Norway over Christmas and have heard it's will be around 10 C. What sort of jacket will you need? Convert to Fahrenheit to decide.      You want to explain to your Norwegian hosts that back in Minnesota this time of year temperatures can range between -20 F and 40 F. Express this range in Celsius instead. Set up and solve a chain of inequalities.      Your Norwegian hosts ask about the temperature in Minnesota during the summer. You explain that summer temperatures typically range from 55 F and 105 F. Express this range in Celsius instead. Set up and solve a chain of inequalities.       After borrowing some money through a line of credit on my bank account, I started paying off the interest plus $250 a month. Even once the loan is paid off I plan to continue to deposit $250 each month to start saving. That means my balance is given by the equation where is the number of months since the loan and is the account balance, in dollars.   (Story also appears in )      Set up and solve an inequality to determine when I will have paid off my line of credit. That means the account balance will be $0 or more.      Set up and solve an inequality to determine when I will have saved at least $2,000.       When Gretchen walks on her treadmill, the number of calories per mile that she burns is given by the equation where is the number of calories Gretchen burns by walking miles.   (Story also appears in and )      Draw a graph showing the number of calories Gretchen burns if she walks 0, 1, 2, or 3 miles.      How far does she need to walk to burn at least 200 calories? Set up and solve an inequality.      Highlight the part of your graph where she burns at least 200 calories.       The water in the local reservoir has been dropping steadily. In fact, where is the depth of the water (in feet) after weeks. Any depth below 20 feet is considered dangerously low. When will that happen, assuming no change in the weather? Set up and solve an inequality. And, check your answer.   (Story also appears in and )       A manufacturer makes family-sized bags of potato chips, advertised as containing 200 grams each. In fact it's difficult to control the exact weight of a bag of potato chips, so it varies. The standard deviation is rather high, about 3.8 grams per bag. The company would rather have bags too heavy than too light, lest they be accused of false advertising, so their average bag actually weighs 207 grams. It turns out that approximately 97% of all bags of chips weigh 200 grams or more. We can compute the standard -score of a given bag of chips weighing grams using the equation      What is the -score for a bag of potato chips weighing the advertised 200 grams? Remember above average -scores are positive and below average -scores are negative, so your answer should be negative.      About of all bags of chips will have . What weight bag has -score of ? Set up and solve an inequality.      A standard -score between -1 and +1 is considered ordinary. What weight bags are considered ordinary?      Oh, and if a serving size is 28 grams (approximately 1 ounce), how many servings are in a bag that weights 207 grams?       The cost of vacation to Cork, Ireland from the Minneapolis\/St. Paul airport for two people is given by the equation formula where is the total cost in U.S. dollars and is the number of days. Ciara wants to take her boyfriend Seamus to Cork to meet Ciara's grandmother.     What would it cost Ciara to go to Ireland with Seamus for six days?      What might the number 2,828 mean in terms of the story, and what are its units?      What might the number 310 mean in terms of the story, and what are its units?      If Ciara has budgeted up to $10,000, how many days can they afford to spend in Ireland? Set up and solve an inequality to find the answer.      "
},
{
  "id": "sec-Solving_linear_inequalities-2-6",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moderate oven less than or equal to "
},
{
  "id": "sec-Solving_linear_inequalities-2-7",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inequality "
},
{
  "id": "sec-Solving_linear_inequalities-2-14",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "greater than or equal to "
},
{
  "id": "sec-Solving_linear_inequalities-2-19",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#sec-Solving_linear_inequalities-2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inclusive "
},
{
  "id": "truck-grass-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#truck-grass-linear-ineq",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  A truck hauling bags of grass seed weighs 3,900 pounds when it is empty. Each bag of seed it carries weighs 4.2 pounds. The equation for the gross weight pounds is for bags of grass seed. (Story also appears in , , and )      The state highways have a 18,000 pound gross weight limit. How many bags of grass seed can the truck haul? Set up and solve an appropriate inequality.      Record your answer to part (a) in the table and graph the function.     0  1,000  2,000      3,900  8,100  12,300  18,000        We used our answer to part (a) to draw our graph, so how can we check that answer to make sense? Hint: What shape should the graph be?     "
},
{
  "id": "airplane-altitude-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#airplane-altitude-linear-ineq",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  The altitude, feet above ground, of an airplane minutes after it begins its descent is given by the equation Answer each question by evaluating; setting up and solving an equation; or setting up and solving an inequality, whichever is most appropriate.     At what altitude does the plane begin its descent?      How fast is the airplane descending?      What is the airplane's altitude 3 minutes into its descent? 8 minutes? 20 minutes? Display your answers in a table.      Draw a graph illustrating the function.      For how many minutes of its descent is the airplane above 20,000 feet?      The airplane might be asked to go into a holding pattern (that means flying in a circle instead of landing) when it is between 6,000 and 14,000 feet up. When will the plane be in that altitude range?      How long does it take the airplane to land, assuming it is not asked to go into a holding pattern?    "
},
{
  "id": "wedding-rental-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#wedding-rental-linear-ineq",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Anthony and Christina are trying to decide where to hold their wedding reception. For each possible site, write an equation using for the total cost of their wedding reception (in dollars) and for the number of guests. Then set up and solve an inequality to calculate the number of guests Tony and Tina can afford on their $8,000 budget. (Story also appears in and )      The Metropolitan Club costs $1,300 for the space and $92 per person.   equation:    inequality:       number of guests:       Black Elk Park charges $500 to rent the pavilion and the family can bring in picnic food for $65 per person.   equation:    inequality:       number of guests:       The Dabbling Duck Inn charges $1,400 for the space and $80 per person for their local specialties.   equation:    inequality:       number of guests:       Pranzo Ristorante has only a $300 room rental fee but averages $145 per person, including wine.   equation:    inequality:       number of guests:     "
},
{
  "id": "berry-z-score-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#berry-z-score-linear-ineq",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  One variety of blueberry plant yields an average of 130 blueberries per season but there is quite a bit of variability from plant to plant. One measure of this variability is the standard deviation, which is approximated at 16.4 berries. Given a plant yielding blueberries, we can calculate how usual or unusual that is by computing its (standard) z-score using the equation For example, a plant yielding blueberries has z-score of 0. A plant yielding blueberries has z-score of Answer each question by evaluating; setting up and solving an equation; or setting up and solving an inequality, whichever is appropriate.     Calculate the z-score of a plant yielding 140 blueberries.      If the z-score for a plant is -0.7, what is the corresponding yield?   Hint: the negative z-score tells us the answer is below average.       A plant with z-score above 1.96 is considered plentiful . What yields of blueberries would be considered plentiful?      A plant with z-score between -1 and +1 is considered ordinary . What yields of blueberries would be considered ordinary?    "
},
{
  "id": "fahrenheit-celsius-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#fahrenheit-celsius-linear-ineq",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Recall that the conversion between Fahrenheit ( ) and Celsius ( ) temperatures is given by the equation      Evaluate the equation at the appropriate values to check that 0 C = 32 F, 20 C = 68 F, and 37 C = 98.6 F.      Set up and solve an equation to find the Celsius equivalent of brownie-baking temperature (350 F).      You're planning a trip to Norway over Christmas and have heard it's will be around 10 C. What sort of jacket will you need? Convert to Fahrenheit to decide.      You want to explain to your Norwegian hosts that back in Minnesota this time of year temperatures can range between -20 F and 40 F. Express this range in Celsius instead. Set up and solve a chain of inequalities.      Your Norwegian hosts ask about the temperature in Minnesota during the summer. You explain that summer temperatures typically range from 55 F and 105 F. Express this range in Celsius instead. Set up and solve a chain of inequalities.    "
},
{
  "id": "credit-line-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#credit-line-linear-ineq",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  After borrowing some money through a line of credit on my bank account, I started paying off the interest plus $250 a month. Even once the loan is paid off I plan to continue to deposit $250 each month to start saving. That means my balance is given by the equation where is the number of months since the loan and is the account balance, in dollars.   (Story also appears in )      Set up and solve an inequality to determine when I will have paid off my line of credit. That means the account balance will be $0 or more.      Set up and solve an inequality to determine when I will have saved at least $2,000.    "
},
{
  "id": "treadmill-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#treadmill-linear-ineq",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  When Gretchen walks on her treadmill, the number of calories per mile that she burns is given by the equation where is the number of calories Gretchen burns by walking miles.   (Story also appears in and )      Draw a graph showing the number of calories Gretchen burns if she walks 0, 1, 2, or 3 miles.      How far does she need to walk to burn at least 200 calories? Set up and solve an inequality.      Highlight the part of your graph where she burns at least 200 calories.    "
},
{
  "id": "reservoir-rain-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#reservoir-rain-linear-ineq",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  The water in the local reservoir has been dropping steadily. In fact, where is the depth of the water (in feet) after weeks. Any depth below 20 feet is considered dangerously low. When will that happen, assuming no change in the weather? Set up and solve an inequality. And, check your answer.   (Story also appears in and )    "
},
{
  "id": "potato-chips-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#potato-chips-linear-ineq",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "",
  "body": "  A manufacturer makes family-sized bags of potato chips, advertised as containing 200 grams each. In fact it's difficult to control the exact weight of a bag of potato chips, so it varies. The standard deviation is rather high, about 3.8 grams per bag. The company would rather have bags too heavy than too light, lest they be accused of false advertising, so their average bag actually weighs 207 grams. It turns out that approximately 97% of all bags of chips weigh 200 grams or more. We can compute the standard -score of a given bag of chips weighing grams using the equation      What is the -score for a bag of potato chips weighing the advertised 200 grams? Remember above average -scores are positive and below average -scores are negative, so your answer should be negative.      About of all bags of chips will have . What weight bag has -score of ? Set up and solve an inequality.      A standard -score between -1 and +1 is considered ordinary. What weight bags are considered ordinary?      Oh, and if a serving size is 28 grams (approximately 1 ounce), how many servings are in a bag that weights 207 grams?    "
},
{
  "id": "vacation-ireland-linear-ineq",
  "level": "2",
  "url": "sec-Solving_linear_inequalities.html#vacation-ireland-linear-ineq",
  "type": "Exercise",
  "number": "3.2.10",
  "title": "",
  "body": "  The cost of vacation to Cork, Ireland from the Minneapolis\/St. Paul airport for two people is given by the equation formula where is the total cost in U.S. dollars and is the number of days. Ciara wants to take her boyfriend Seamus to Cork to meet Ciara's grandmother.     What would it cost Ciara to go to Ireland with Seamus for six days?      What might the number 2,828 mean in terms of the story, and what are its units?      What might the number 310 mean in terms of the story, and what are its units?      If Ciara has budgeted up to $10,000, how many days can they afford to spend in Ireland? Set up and solve an inequality to find the answer.    "
},
{
  "id": "sec-Solving_power_equations",
  "level": "1",
  "url": "sec-Solving_power_equations.html",
  "type": "Section",
  "number": "3.3",
  "title": "Solving power equations (and roots)",
  "body": " Solving power equations (and roots)   There's an old saying - when life gives you lemons, make lemonade. But how many lemons do you need? It turns out a reasonable equation describing the juice from a single lemon is given by where   In case you've forgotten, the circumference is the distance around the lemon. Think of taking wrapping a piece of string around the middle part of the lemon. Then stretch it out on a ruler to see how long it is.  Recipes for lemonade vary widely, but for my recipe calls for 4 tablespoons of lemon juice for each 12 ounce glass. The rest is a syrup made of hot water and sugar, mulled with a sweet herb like basil or mint, then finished with ice and cold water. Yum.  So, how large a lemon would yield 4 tablespoons of juice? Let's try to guess the answer. For example, a small lemon 7 inches in circumference would yield A medium size lemon 8 inches in circumference would yield Bet 9 inches is a good next guess. We get That was quick! A lemon 9 inches around should produce just over 4 tablespoons of juice.  Much as we have learned to love successive approximation, this chapter is all about solving equations. Remember, is a power equation because it fits the template with power and proportionality constant . Turns out we can solve any power equation symbolically.  Here's how. We're looking for . Use our equation to get We want to find the value of , so we can divide both sides by 0.0056 to get which simplifies to   We have found . How can we undo the to find ? The answer: take the cube root of each side. (More about roots at the end of this section.) That means   which simplifies to as expected, just under 9 inches. (More about the key later too.)  A look at the graph confirms our result.     Now, what goes better with lemonade than lemon cheesecake? For that we need lemon zest. Zest is what you get when you grate the lemon peel in long skinny strips. As with juice, the amount of lemon zest depends on the size of the lemon. Our variables are   and an equation is We have another power equation, this time with power and proportionality constant .  My lemon cheesecake recipe calls for tablespoons of zest. There are various sized lemons at the store. How large a lemon should I buy? A small lemon of circumference 7 inches produces less than 1 tablespoon of zest because so that's not large enough.  Let's use successive approximations, summarizing our guesses in a table. Of course, we don't really need this precise an answer, but it's good practice. Notice .     7  8  9  10  9.5  9.3  9.2  9.1     0.882  1.152  1.458  1.8  1.6245  1.55682  1.52352  1.49058    vs. 1.5  low  high  low  high  high  high  high  low    We need a large lemon, somewhere between 9.1 and 9.2 inches around. Truth is, I'll just buy the biggest lemon I can find because extra lemon zest looks wonderful on top of the cheesecake.  We are supposed to be practicing solving the equation. Here goes. We want . Use our equation to get We want to find the value of , so we can divide both sides by 0.018 to get which simplifies to Take the square root of each side to get which simplifies to as expected, between 9.1 and 9.2 inches.  As when solving linear equations, notice that we do the opposite operation in reverse order from the usual order of operations. To evaluate a power equation we would first raise to the power and then multiply. To solve a power equation we first divide (that is the opposite of multiplying) and then we take a root (that is the opposite of raising to a power).  As promised, a brief discussion of roots is in order. Here's the deal. Roots essentially undo powers. What this means is, for example, we know but it's quicker to calculate it using powers as We say 10 squared is 100. The square root of a number is just whatever number you would square to get that number. So, for example, because you would square 10 to get 100. Many calculators have a special square root key that looks like so we get Your calculator might insert a parenthesis with the square root, in which case you should (but don't need to) close it before hitting , like this Your calculator might not have this key, or might need the square root after the number. Ask a classmate or your instructor or search online if you can't figure it out.  The same idea works for higher powers. Like That's really and we say 10 cubed is 1,000. The cube root of a number is whatever number you would cube to get that number. So, for example, . Many calculators have a special root key that looks like . That looks similar to multiplication ( ), but it isn't. The is like a placeholder for the real root you want - for a cube root is just 3.  Here's how to use that root key. First you type in the root you want (3), second you use that key ( ), and last you type in the number you're taking the root of (1,000) like this Like with squareroots, your calculator might introduce a parenthesis, or you might do a slightly different order. You might have to use a shift or second key to get to the root key. On many graphing calculators the key is one of the MATH functions, so you have to type something like MATH 5 to get it. Again, ask if you need help figuring it out.  There is a small chance that your calculator doesn't have roots. In that case there is a strange-looking alternative Note the necessary parentheses. This process works for square roots too.   Bet you see how this idea of roots generalizes. The th root of a number is whatever number you would raise to the th power to get the number. Stated in terms of equations we have   Root Formula  The equation has solution      Do you know     What a power equation is?    What we mean by square root, cube root, and th root?    How to calculate square roots, cube roots, and th roots on your calculator?    How to evaluate the on your calculator?    When to use the ? Ask your instructor if you need to remember the or it will be provided during the exam.     How to solve a power equation?    What the graph of a power function looks like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.        A pizza of diameter inches serves people where  (Story also appears in , , and )      Set up and solve an equation using the to find the diameter of a personal pizza ( ). Answer to the nearest inch.      Set up and solve an equation using the to find the diameter of an extra large pizza to serve 6 people. Answer to the nearest inch.         The weight of a wood cube is a function of the length of the sides. A cube with sides each inches long has weight ounces according to the equation      What is the weight of a cube with sides 2 inches long? 3 inches?      Draw a graph showing how the weight depends on the side length. Include .      Set up and solve an equation to find the length of the side of a wood cube weighing 8 ounces.      Repeat for 1 pound (that is 16 ounces).         Suppose a car gas tank is designed to hold enough fuel to drive 350 miles. (That is fairly average.) That means the size tank, gallons, is a function of the fuel efficiency, miles per gallon (mpg), according to the equation  (Story also appears in )      My Honda Accord's tank holds about 16 gallons. According to the equation, what is the corresponding fuel efficiency? Set up and solve the equation. Start solving by multiplying both sides by . Note: you will not need to take a root.       My ex-husband's Honda Civic's tank holds only 13 gallons. According to the equation, what is the corresponding fuel efficiency. Set up and solve the equation.         Moose bought a commemorative football jersey for $150 twelve years ago. Now he is planning to sell it and is interested in what the effective return (equivalent annual percent increase) on his investment might be for various prices. If $ is the current value of the jersey and is the annual growth factor, then For each part, first solve for using the , then calculate . The effective return is written as a percentage.     Find the effective return if the current value is $290.      Find the effective return if the current value is $350.      Find the effective return if the current value is $400.        Recall our lemon zest formula where is the circumference of the lemon, in inches, and is the amount of lemon zest, in tablespoons.     Use the information we found earlier to draw a graph of the function. Include values .      Set up and solve an equation to find the size lemon needed for 1 tablespoon of zest.      Suppose the formula holds for grapefruit too. I don't know of any recipe that calls for grapefruit zest; it is very bitter! But grapefruit is notorious for interacting with certain medications, and so we're collecting some zest for an experiment. Let's say we need cup of zest. How large a grapefruit will we need? Set up and solve an equation to answer. Use that 1 cup = 16 tablespoons.       Wind turbines are used to generate electricity. For a particular wind turbine, the equation can be used to calculate the amount of electricity generated ( watts) for a given wind speed ( mph), over a fixed period of time.   (Story also appears in , , and )      Set up and solve an equation to determine the wind speed that will generate 12,500 watts of electricity.      Repeat for 45,000 watts.       Mom always said to sit close to the lamp when I was reading. The intensity of light , measured in percentage (%) that you see from a lamp depends on your distance from the lamp, feet as described by the formula    (Story also appears in and )      I am most comfortable reading in good light, say 70% intensity. According to the equation, how far away can I sit from the lamp? Use successive approximation to guess the answer to the nearest foot. Then set up and solve an equation. Answer to the nearest inch.      For reading a magazine 35% intensity is enough light. According to the equation, how far away can I sit from the lamp? Use successive approximation to guess the answer to the nearest foot. Then set up and solve an equation. Answer to the nearest inch.       The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced. Rodney wonders what the annual percent increase of the bass has been and realizes he can calculate it from the number of fish now. He will use the equation where is the number of bass in the lake now and is the annual growth factor. For each number of bass, first solve for using the , then calculate . The percent increase is written as a percent.   (Story also appears in and )      Find the annual percent increase if there are bass now.      Find the annual percent increase if there are bass now.       If you drop a rock from a high place, it falls feet in seconds where      How far does the rock fall in 2 seconds? In 4 seconds?      Is the rock falling faster during the first two seconds ( to ) or during the second two seconds ( to )? Calculate the rate of change to decide.      Tia dropped a rock from her apartment window that's 300 feet above ground. Will the rock have hit the ground by 4 seconds after it was dropped?      If you evaluate at , what value of do you get? What does this value mean in the story? Again assume the rock is dropped from 300 feet up.      When does the rock hit the ground? Set up and solve an equation. Hint: what value of do you solve for?       Now suppose we have a new variable, , which represents the height of the rock Tia dropped after seconds, write a new equation for as a function of .      Show how to set up and solve an equation using this new equation to find when the rock hits the ground. Hint: what value of do you solve for now?        Wynter has a pretty decent job. He is paid a salary of $780 per week but his hours vary week-to-week. Even though Wynter is not paid by the hour, he can figure out what his hourly wage would be depending on the number of hours he works using the equation where if he works hours, then he's earning the equivalent of $ \/hour.   (Story also appears in )      Make a table showing Wynter's equivalent hourly wage if he works 40, 50, or 60 hours a week.      Wynter was complaining that things have been so busy lately at work that he's earning the equivalent of only $9.25\/hr. How many hours a week does that correspond to?      Wynter was hoping to earn the equivalent of $14\/hour. How many hours a week does that correspond to?      Draw a graph illustrating how Wynter's equivalent hourly wage decreases as a function of the number of hours he works. Include a few extreme values such as 10 hours and 100 hours to better see the shape of the graph.      "
},
{
  "id": "sec-Solving_power_equations-2-2",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circumference "
},
{
  "id": "sec-Solving_power_equations-2-11",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Zest "
},
{
  "id": "sec-Solving_power_equations-2-19",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squared square root "
},
{
  "id": "sec-Solving_power_equations-2-20",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-2-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cubed cube root "
},
{
  "id": "sec-Solving_power_equations-2-23",
  "level": "2",
  "url": "sec-Solving_power_equations.html#sec-Solving_power_equations-2-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "th root "
},
{
  "id": "pizza-diameter-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#pizza-diameter-solving-power",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  A pizza of diameter inches serves people where  (Story also appears in , , and )      Set up and solve an equation using the to find the diameter of a personal pizza ( ). Answer to the nearest inch.      Set up and solve an equation using the to find the diameter of an extra large pizza to serve 6 people. Answer to the nearest inch.    "
},
{
  "id": "weight-cube-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#weight-cube-solving-power",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "  The weight of a wood cube is a function of the length of the sides. A cube with sides each inches long has weight ounces according to the equation      What is the weight of a cube with sides 2 inches long? 3 inches?      Draw a graph showing how the weight depends on the side length. Include .      Set up and solve an equation to find the length of the side of a wood cube weighing 8 ounces.      Repeat for 1 pound (that is 16 ounces).    "
},
{
  "id": "fuel-350-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#fuel-350-solving-power",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  Suppose a car gas tank is designed to hold enough fuel to drive 350 miles. (That is fairly average.) That means the size tank, gallons, is a function of the fuel efficiency, miles per gallon (mpg), according to the equation  (Story also appears in )      My Honda Accord's tank holds about 16 gallons. According to the equation, what is the corresponding fuel efficiency? Set up and solve the equation. Start solving by multiplying both sides by . Note: you will not need to take a root.       My ex-husband's Honda Civic's tank holds only 13 gallons. According to the equation, what is the corresponding fuel efficiency. Set up and solve the equation.    "
},
{
  "id": "effective-return-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#effective-return-solving-power",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Moose bought a commemorative football jersey for $150 twelve years ago. Now he is planning to sell it and is interested in what the effective return (equivalent annual percent increase) on his investment might be for various prices. If $ is the current value of the jersey and is the annual growth factor, then For each part, first solve for using the , then calculate . The effective return is written as a percentage.     Find the effective return if the current value is $290.      Find the effective return if the current value is $350.      Find the effective return if the current value is $400.    "
},
{
  "id": "lemon-zest-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#lemon-zest-solving-power",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Recall our lemon zest formula where is the circumference of the lemon, in inches, and is the amount of lemon zest, in tablespoons.     Use the information we found earlier to draw a graph of the function. Include values .      Set up and solve an equation to find the size lemon needed for 1 tablespoon of zest.      Suppose the formula holds for grapefruit too. I don't know of any recipe that calls for grapefruit zest; it is very bitter! But grapefruit is notorious for interacting with certain medications, and so we're collecting some zest for an experiment. Let's say we need cup of zest. How large a grapefruit will we need? Set up and solve an equation to answer. Use that 1 cup = 16 tablespoons.    "
},
{
  "id": "wind-turbine-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#wind-turbine-solving-power",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Wind turbines are used to generate electricity. For a particular wind turbine, the equation can be used to calculate the amount of electricity generated ( watts) for a given wind speed ( mph), over a fixed period of time.   (Story also appears in , , and )      Set up and solve an equation to determine the wind speed that will generate 12,500 watts of electricity.      Repeat for 45,000 watts.    "
},
{
  "id": "lamp-intensity-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#lamp-intensity-solving-power",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  Mom always said to sit close to the lamp when I was reading. The intensity of light , measured in percentage (%) that you see from a lamp depends on your distance from the lamp, feet as described by the formula    (Story also appears in and )      I am most comfortable reading in good light, say 70% intensity. According to the equation, how far away can I sit from the lamp? Use successive approximation to guess the answer to the nearest foot. Then set up and solve an equation. Answer to the nearest inch.      For reading a magazine 35% intensity is enough light. According to the equation, how far away can I sit from the lamp? Use successive approximation to guess the answer to the nearest foot. Then set up and solve an equation. Answer to the nearest inch.    "
},
{
  "id": "bass-fishing-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#bass-fishing-solving-power",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "  The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced. Rodney wonders what the annual percent increase of the bass has been and realizes he can calculate it from the number of fish now. He will use the equation where is the number of bass in the lake now and is the annual growth factor. For each number of bass, first solve for using the , then calculate . The percent increase is written as a percent.   (Story also appears in and )      Find the annual percent increase if there are bass now.      Find the annual percent increase if there are bass now.    "
},
{
  "id": "rock-drop-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#rock-drop-solving-power",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "  If you drop a rock from a high place, it falls feet in seconds where      How far does the rock fall in 2 seconds? In 4 seconds?      Is the rock falling faster during the first two seconds ( to ) or during the second two seconds ( to )? Calculate the rate of change to decide.      Tia dropped a rock from her apartment window that's 300 feet above ground. Will the rock have hit the ground by 4 seconds after it was dropped?      If you evaluate at , what value of do you get? What does this value mean in the story? Again assume the rock is dropped from 300 feet up.      When does the rock hit the ground? Set up and solve an equation. Hint: what value of do you solve for?       Now suppose we have a new variable, , which represents the height of the rock Tia dropped after seconds, write a new equation for as a function of .      Show how to set up and solve an equation using this new equation to find when the rock hits the ground. Hint: what value of do you solve for now?     "
},
{
  "id": "salary-solving-power",
  "level": "2",
  "url": "sec-Solving_power_equations.html#salary-solving-power",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "  Wynter has a pretty decent job. He is paid a salary of $780 per week but his hours vary week-to-week. Even though Wynter is not paid by the hour, he can figure out what his hourly wage would be depending on the number of hours he works using the equation where if he works hours, then he's earning the equivalent of $ \/hour.   (Story also appears in )      Make a table showing Wynter's equivalent hourly wage if he works 40, 50, or 60 hours a week.      Wynter was complaining that things have been so busy lately at work that he's earning the equivalent of only $9.25\/hr. How many hours a week does that correspond to?      Wynter was hoping to earn the equivalent of $14\/hour. How many hours a week does that correspond to?      Draw a graph illustrating how Wynter's equivalent hourly wage decreases as a function of the number of hours he works. Include a few extreme values such as 10 hours and 100 hours to better see the shape of the graph.    "
},
{
  "id": "sec-Solving_exponential_equations",
  "level": "1",
  "url": "sec-Solving_exponential_equations.html",
  "type": "Section",
  "number": "3.4",
  "title": "Solving exponential equations (and logs)",
  "body": " Solving exponential equations (and logs)   Remember Jocelyn? She was asked to analyze information on rising health care costs. In 2007 the United States spent $2.26 trillion on health care and costs were projected to increase at an average of 6.7% annually for the subsequent decade. For the variables she found the exponential equation   In what year did health care costs first pass $3 trillion? We can use successive approximation to find the answer, starting with the values she found earlier.    year  2007  2008  2009  2017  2027     0  1  2  10  20     2.26  2.41  2.57  4.32  8.82    vs. 3  low  low  low  high  high    The answer must be between 2009 and 2017. Let's split the difference and guess 2013. For that year, and so which is already over $3 trillion. What about 2011? Use to check that , which is almost, but not quite there. Must be 2012 was the year. Sure enough when we get . That's it. Health care costs first passed $3 trillion in 2012. Well, at least according to our equation. As usual, we summarize the numbers in a table.    year  2009  2017  2013  2011  2012     2  10  6  4  5     2.57  4.32  3.33  2.93  3.12    vs. 3  low  high  high  low  high    Successive approximation gives us the answer fairly quickly. But there is an even quicker way - solving the exponential equation. Start with what we're looking for, which is . Use the equation to get We want to find the value of , so divide each side by 2.26 to get which simplifies to When the dust settles we're left with   Hmm. How do we find here? We saw how to use roots to solve power equations. In our lemonade example we had . We knew the exponent (3) and wanted to find the number being raised to that power ( ). That's when we took the cube root to get That approach is not going to work here because it's backwards now - we know the number being raised to a power (1.067) and are on the hunt for the exponent ( ) instead.  Turns out there's a different formula for solving for the exponent that uses logarithms (nickname: logs ). More about logs in a minute, but first let's write down the formula and practice working with it. The formula is   Log-Divides Formula  The equation has solution    Quick aside about the name. Some formulas have well-known names. Not this one. We call it the Log-Divides Formula because it has logs and divides in it. Perhaps you already guessed that. Other math books do not have a name for this formula, although it is related to something called the change of base formula .  Okay. Back to solving our equation. We got stuck trying to solve We have growth factor and value . So the formula says Your calculator should have a key that says log or maybe LOG . Try typing A small note here about parentheses. Some calculators give the first parenthesis for free when you type log but you have to type the closing parenthesis in yourself.  This answer of 4.37 means that costs are projected to exceed $3 trillion just over 4 years after 2007. That's some time during 2011, or by 2012 for sure. Same answer as before.  Let's practice. Suppose instead we want to know when health care costs would exceed $10 trillion instead. (By the way - wow!) That means . Using our equation we get Before we can use the Log-Divides Formula, we need to get rid of that 2.26. To do so, we can divide both sides by 2.26 That means Now our equation fits the format for the with new value (and the growth factor is still). So the answer is Want to avoid typing in the number 4.424778761 ? Depending on your calculator, you might try this instead: where ANS stands for answer .  Again that means 23 years after 2007, or 2007 + 23 = 2030. Health care costs are projected to exceed $10 trillion in the year 2030. Well, unless we do something about that. (Helps explain why government folks are often discussing how to contain health care costs.)  Time to fill you in a bit more about logs. Look at these examples. Don't take my word for it; calculate them yourself.   What do you see? In each case the logarithm is the number of zeros. For example, has 4 zeros and . Another way to think of this connection is In other words, the logarithm is picking off the power of 10.  Wait a minute. The Log-Divides formula helped us find the value of which was an exponent. And now we see that the log of a power of 10 is that exponent. So a logarithm is just an exponent. And logarithms help us find the exponent. Makes sense.  What about logs of numbers that aren't just powers of 10? Here are some examples.   To see what's happening we want to involve powers of 10. Scientific notation will do that for us. Let's write these numbers in scientific notation and see what we learn. For example. We are back to the power of 10. Well, approximately. Let's check another number. Before we write down a general rule, let's check more numbers. In every case we are rounding down, but it's always the same.  log(number) power of 10 in the scientific notation for that number.    Do you know     What log means?    The connection is between logs and scientific notation?    How to evaluate logs on your calculator?    How to evaluate the using your calcuator?    When to use the ? Ask your instructor if you need to remember the or if it will be provided during the exam.     How to solve an exponential equation?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.        After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. The equation is where is Stephen's BAC and is the time, measured in hours. (Story also appears in and )      Make a table showing Stephen's BAC at the start of the story ( ) and each of the next four hours.      At a BAC of 0.10 it is illegal for Stephen to drive. When will that happen? Set up and solve an equation using the . Answer to the nearest minute.      Hopefully Stephen will stop drinking before he reaches a BAC of 0.20. If not, at the rate he is drinking, when would that be? Set up and solve an equation. Answer to the nearest minute.         Chlorine is used to disinfect water in swimming pools. The chlorine concentration decreases as the pool is used according to the equation where is the chlorine concentration in parts per million (ppm) and is the time in hours since the concentration was first measured. (Story also appears in )      Make a table showing the chlorine concentration initially and after the swimming pool is used for 3 hours, 10 hours, 24 hours, and 48 hours.      Draw a graph illustrating the function.      Chlorine concentrations below 1.5 ppm do not disinfect properly so more chlorine needs to be added. According to your graph, approximately when will that happen?      Use successive approximation to find approximately when the concentration falls below 1.5 ppm.      Solve the equation to find exactly when the chlorine concentration falls below 1.5 ppm.      Solve the equation to find when the chlorine concentration would fall below 0.1 ppm (essentially no chlorine) assuming no chlorine was added earlier. Show how to solve the equation to find the answer (and check it!).      Report your answer to the nearest day.         Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month. Earlier we identified the variables as for the monthly rent (in $) and for time in years. (Story also appears in )      Find the annual growth factor.      Write an equation showing how rent is expected to change.      Use successive approximation to determine approximately when rent will pass $1,000\/month. Display your work in a table. Round to the appropriate year.      Show how to solve the equation to calculate exactly when rent will pass $1,000\/month. Round to the appropriate year.      Solve again to determine when rent will reach double what it is now, namely $1,660\/month, assuming this trend continues.         Dontrell and Kim borrowed money to buy a house on a 30-year mortgage. After months of making payments, Dontrell and Kim will still owe $ where  is also known as the payoff (how much they would need to pay to settle the debt).   (Story also appears in )      How much did Dontrell and Kim originally borrow to buy their house?      They have been in the house for 5 years now and due to a downturn in the housing market, their house is worth only $150,000. Are they underwater , meaning do they owe more than the house is worth?      How much longer would Dontrell and Kim need to stay in their house until they only owe $150,000? That means you need to solve the equation         The employee-paid cost of health insurance has risen dramatically, increasing by 7% each year since 2003 when it cost $420\/month.     Name the variables and write an exponential equation relating them.      If this rate of increase continues, when will or did the employee-paid cost pass $550\/month? Solve your equation.      Repeat for $600\/month.      Graph the function.       The number of school children in the district from a single parent household has been on the rise. In one district there were 1,290 children from single parent households in 2010 and that number was expected to increase about 3% per year. Earlier, we found the equation was where is the number of children and is the years since 2010.   (Story also appears in )      Use successive approximation to determine when there will be over 3,000 school children in the district from a single parent household. Display your work in a table. Round your answer to the nearest year.      Show how to solve the equation to calculate when there will be over 3,000 school children in the district from a single parent household. Show how you solve the equation.      Solve again to determine when there will be over 3,500 children. Check your answer.       Suppose a special kind of window glass is 1 inch thick and lets through only 75% of the light. If we use inches of window glass, it lets of the light through where    (Story also appears in )      What thickness glass should be used to let through less than 10% of the light? Set up and solve an equation.       What about 50%? Set up and solve an equation.       Check the graph (drawn before) to see if your answers make sense.       We saw that poultry population was estimated to grow according to the equation where is the poultry population in million tons and is the years starting in 2005.   Source: Worldwatch Institute    (Story also appears in )      When will production rise above 95 million tons? Set up and solve an equation. Then use some other method to check.      Repeat for 120 million tons.       Darcy likes to use temporary hair color in wild colors. Good thing it washes out. Her best guess is that 8% of the color washes out each time she washes her hair. That means the percentage of color remaining, , is a function of the number of times she washes her hair, , according to the equation    (Story also appears in )      When will half the color be gone? That means find . Set up and solve an equation. Then check some other way.      By the time only 10% of the color remains you really can't tell anymore if it was pink or orange or blue. So, she might as well switch to a new color then. How many washes before only 10% remains? Again, first solve. Then check.      Draw a graph showing how the color washes out of Darcy's hair.      "
},
{
  "id": "sec-Solving_exponential_equations-2-8",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#sec-Solving_exponential_equations-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithms logs "
},
{
  "id": "sec-Solving_exponential_equations-2-13",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#sec-Solving_exponential_equations-2-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ANS "
},
{
  "id": "bac-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#bac-solving-exponential",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "  After his first beer, Stephen's blood alcohol content (BAC) was already 0.04 and as he continued to drink, his BAC level rose 45% per hour. The equation is where is Stephen's BAC and is the time, measured in hours. (Story also appears in and )      Make a table showing Stephen's BAC at the start of the story ( ) and each of the next four hours.      At a BAC of 0.10 it is illegal for Stephen to drive. When will that happen? Set up and solve an equation using the . Answer to the nearest minute.      Hopefully Stephen will stop drinking before he reaches a BAC of 0.20. If not, at the rate he is drinking, when would that be? Set up and solve an equation. Answer to the nearest minute.    "
},
{
  "id": "chlorine-pool-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#chlorine-pool-solving-exponential",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  Chlorine is used to disinfect water in swimming pools. The chlorine concentration decreases as the pool is used according to the equation where is the chlorine concentration in parts per million (ppm) and is the time in hours since the concentration was first measured. (Story also appears in )      Make a table showing the chlorine concentration initially and after the swimming pool is used for 3 hours, 10 hours, 24 hours, and 48 hours.      Draw a graph illustrating the function.      Chlorine concentrations below 1.5 ppm do not disinfect properly so more chlorine needs to be added. According to your graph, approximately when will that happen?      Use successive approximation to find approximately when the concentration falls below 1.5 ppm.      Solve the equation to find exactly when the chlorine concentration falls below 1.5 ppm.      Solve the equation to find when the chlorine concentration would fall below 0.1 ppm (essentially no chlorine) assuming no chlorine was added earlier. Show how to solve the equation to find the answer (and check it!).      Report your answer to the nearest day.    "
},
{
  "id": "riverside-rent-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#riverside-rent-solving-exponential",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  Rent in the Riverside Neighborhood is expected to increase 7.2% each year. Average rent for an apartment is currently $830 per month. Earlier we identified the variables as for the monthly rent (in $) and for time in years. (Story also appears in )      Find the annual growth factor.      Write an equation showing how rent is expected to change.      Use successive approximation to determine approximately when rent will pass $1,000\/month. Display your work in a table. Round to the appropriate year.      Show how to solve the equation to calculate exactly when rent will pass $1,000\/month. Round to the appropriate year.      Solve again to determine when rent will reach double what it is now, namely $1,660\/month, assuming this trend continues.    "
},
{
  "id": "mortgage-payoff-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#mortgage-payoff-solving-exponential",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  Dontrell and Kim borrowed money to buy a house on a 30-year mortgage. After months of making payments, Dontrell and Kim will still owe $ where  is also known as the payoff (how much they would need to pay to settle the debt).   (Story also appears in )      How much did Dontrell and Kim originally borrow to buy their house?      They have been in the house for 5 years now and due to a downturn in the housing market, their house is worth only $150,000. Are they underwater , meaning do they owe more than the house is worth?      How much longer would Dontrell and Kim need to stay in their house until they only owe $150,000? That means you need to solve the equation     "
},
{
  "id": "health-insurance-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#health-insurance-solving-exponential",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "  The employee-paid cost of health insurance has risen dramatically, increasing by 7% each year since 2003 when it cost $420\/month.     Name the variables and write an exponential equation relating them.      If this rate of increase continues, when will or did the employee-paid cost pass $550\/month? Solve your equation.      Repeat for $600\/month.      Graph the function.    "
},
{
  "id": "sp-household-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#sp-household-solving-exponential",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "  The number of school children in the district from a single parent household has been on the rise. In one district there were 1,290 children from single parent households in 2010 and that number was expected to increase about 3% per year. Earlier, we found the equation was where is the number of children and is the years since 2010.   (Story also appears in )      Use successive approximation to determine when there will be over 3,000 school children in the district from a single parent household. Display your work in a table. Round your answer to the nearest year.      Show how to solve the equation to calculate when there will be over 3,000 school children in the district from a single parent household. Show how you solve the equation.      Solve again to determine when there will be over 3,500 children. Check your answer.    "
},
{
  "id": "window-glass-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#window-glass-solving-exponential",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  Suppose a special kind of window glass is 1 inch thick and lets through only 75% of the light. If we use inches of window glass, it lets of the light through where    (Story also appears in )      What thickness glass should be used to let through less than 10% of the light? Set up and solve an equation.       What about 50%? Set up and solve an equation.       Check the graph (drawn before) to see if your answers make sense.    "
},
{
  "id": "poultry-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#poultry-solving-exponential",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  We saw that poultry population was estimated to grow according to the equation where is the poultry population in million tons and is the years starting in 2005.   Source: Worldwatch Institute    (Story also appears in )      When will production rise above 95 million tons? Set up and solve an equation. Then use some other method to check.      Repeat for 120 million tons.    "
},
{
  "id": "hair-color-solving-exponential",
  "level": "2",
  "url": "sec-Solving_exponential_equations.html#hair-color-solving-exponential",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "  Darcy likes to use temporary hair color in wild colors. Good thing it washes out. Her best guess is that 8% of the color washes out each time she washes her hair. That means the percentage of color remaining, , is a function of the number of times she washes her hair, , according to the equation    (Story also appears in )      When will half the color be gone? That means find . Set up and solve an equation. Then check some other way.      By the time only 10% of the color remains you really can't tell anymore if it was pink or orange or blue. So, she might as well switch to a new color then. How many washes before only 10% remains? Again, first solve. Then check.      Draw a graph showing how the color washes out of Darcy's hair.    "
},
{
  "id": "sec-Solving_quadratic_equations",
  "level": "1",
  "url": "sec-Solving_quadratic_equations.html",
  "type": "Section",
  "number": "3.5",
  "title": "Solving quadratic equations",
  "body": " Solving quadratic equations   Claude likes to juggle. As he throws a beanbag up in the air, the height changes over time as described by the equation where   Let's make a table and graph this function. For example, when seconds we have and when second we have   Huh? I thought the beanbag went up in the air. What's happening here? Oh, I know. The beanbag must be falling down by then. As we fill in the table with intermediate values we see how Claude's beanbag went up in the air and then back down.     0  0.1  0.2  0.3  0.4  0.5  0.6  0.7  0.8  0.9  1  1.1  1.2     3  4.34  5.36  6.06  6.44  6.50  6.34  5.66  4.76  3.54  2  0.14     Notice by seconds we got feet. We can't have negative feet. The beanbag must hit the ground before 1.2 seconds. From the graph I'd say in just over 1.1 seconds.     Of course, we can refine our answer by successive approximations. The beanbag hits the ground when its height is 0 feet. Looks a little strange but we want . We expect the answer is just a little bigger than 1.1, so we start our guess optimistically with 1.11.     1.1  1.11  1.105  1.107  1.106     0.14   0.0368   0.018    vs. 0  high  low  high  low  good    The beanbag was in the air for approximately 1.106 seconds.  In this chapter we've seen how to solve linear, power, and exponential equations. Let's solve this equation too. By the way, our function is quadratic because fits the template for a quadratic equation.   Quadratic Equation Template    with constants (More on how we found those numbers in a moment.)  Back to our juggler. We are trying to figure out when . Using our equation , we get We want to solve for . Notice that because occurs twice in the equation, nothing we have seen to do to each side of the equation can knock it down to just one . That means none of our methods so far work. Luckily there's a way to solve any quadratic equation using the aptly-named Quadratic Formula .   Quadratic Formula  The equation has solutions    Oh my! First thing to understand in this complicated formula is that we actually get two possible answers Sometimes one answer makes sense in the story, other times they both might. Stay tuned.  For Claude's situation we had To fit the formula, we need the first, the second, and then the constant. No sweat, just reorder to get Notice how subtracting became adding when we rearranged? That lines up perfectly with That's how we knew the constants were   The first fraction in the formula is As usual, we needed parentheses around the denominator (bottom) of our fraction to override the normal order of operations. As a reminder, (-) refers to negation. Remember, this does not mean you type in parentheses, just hit the one key that is labeled already.  The second fraction is Check out the parentheses now. Three sets here. First, around the quantity we're taking the square root of. Maybe your calculator included the open parentheses along with the square root, but either way we need them. Second, around the number (15) that we are squaring. That didn't matter here but if were negative it would have. Last, we added parentheses around the bottom of the fraction, as always.  Oh, and we're not done yet. Remember there are two possible answers. One is the sum of these two numbers which doesn't make any sense because time is never negative. The other is the difference We had guessed around 1.106 seconds, so that is definitely the right answer: Claude's beanbag will hit the ground after 1.10689 seconds. Yeah, too precise. But you get the idea.  Wait a minute! Any good juggler isn't about to let the beanbag fall on the ground. He's going to catch it again, perhaps at about feet above ground. That means we're looking for . Using our equation , we get The only works if the equation has , but we have . It might seem that we're out of luck, but it's an easy fix. Just subtract 3.5 from each side. which simplifies to So now we have . Yes!  We can write the new equation as from which we see that as before, but now we have a new value We're all set to use the .  The first fraction is No surprise here. We used the same values of and as before, so we should have the same number here. The second fraction is   Don't forget we need to put together these parts to find the possible answers. The sum gives us and the difference gives us   Both answers seem to make sense. Let's look at the graph to confirm that they're reasonable. We first find while the beanbag is going up in the air, just before the unlabeled gridline for 0.05 (midway between 0 and 0.1) so an answer of makes sense. Then, on the way back down, the beanbag is 3.5 feet up at what looks like 0.9 seconds, so our answer of makes sense too. Since Claude catches the beanbag on the way down, we want that second answer, after 0.90289 seconds (which is just before 1.106 seconds when it hits the ground, by the way).  One interesting note. What happens in the story at the point where the beanbag stops going up in the air and starts falling down? That must be when the beanbag is at its highest point. What is the speed at that highest point? Well, I guess 0. For a split second it's almost frozen in midair, neither rising nor falling. (If we were able to compute the rate of change for a really, really small interval of time then we would find the rate of change .)  Turns out it's easy to find that point for a quadratic equation, just plug in the first fraction from the Quadratic Formula! Check it out. When we get Claude throws the beanbag about 6.516 feet up. Converting to more normal units we get The beanbag goes up to about 6 6 . You can check that the graph shows just over 6.5 feet.  In general, the graph of is a parabola . The two solutions from the are both places where (we give them the fancy name roots ) and, so, the graph crosses the -axis there. Might not make sense in the real problem, but the equation and formula don't know that. (Okay, equations and formulas don't actually know anything. But you get my point.) Turns out the graph is symmetric about the highest point, so that must be midway in between the roots which is exactly where Because is negative, the answer we got by adding is to the left and the answer we got by subtracting is to the right.     Our graph was a shaped parabola and so we found a maximum value. The graph of a quadratic function might be shaped instead. In that case evaluating at would give the minimum value.    Do you know     What a quadratic function is?    How to solve a quadratic equation?    When we use the ? Ask your instructor if you need to remember the or if it will be provided during the exam.     How to solve a quadratic equation when the function is not set equal to zero?    How to identify the values of in the formula?    How to evaluate the formula (using your calculator)?    Why there are (usually) two solutions to a quadratic equation?    How to decide which solution(s) from the are correct?    What the graph of a quadratic function looks like?    The value for the independent variable to find the highest (or lowest) value of a quadratic function?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A high-jumper jumps so that the height, feet, of the point on his back that must clear the bar after seconds is given by the equation       When would the high-jumper hit the ground (if there were no pit)? Ouch! Use the to find the answer. Use the graph to check.      The high jump pit is 2 feet off the ground. When does the high-jumper land in the pit? Use the to find the answer and the graph to check.      How high a bar can the high-jumper clear? Find the maximum height of that point above ground by evaluating at . Use the graph to check.         The art museum opened in 1920. After an initial rush to see the great holdings, attendance dropped for awhile. But then attendance began to rise again and has risen since. The number of annual visits is approximated by the equation where is time measured in years since 1920.     Calculate the missing values in the table.    year  1920  1925  1930  1935  1940  1945  1950     0  5  10  15  20  25  30     3,700   400  2,575  7,300   24,400        Draw a graph of the function.      In what year did the number of visitors first pass 30,000 in a year? Estimate the value from your graph. Then set up and solve a quadratic equation.      According to this equation, in what year was the number of annual visits the smallest? For that year, what were the number of visits? Use .      Explain why never equals 0.      What happens if you try to use the to solve for ?         The profit $ from selling tanks of milk is described by the equation      Here is a graph of the function:   Explain why negative numbers on the vertical axis make sense in the story.      How much milk must be sold for the company to break even , meaning having $0 profit? Guess from the graph and check using the equation.      For practice, set up and solve a quadratic equation to find the break-even point.      How many tanks of milk would they need to sell to keep profits over $400,000? Set up and solve a quadratic equation to find the answer. Then check that it agrees with your graph. Your answer should be in the form of an inequality.          Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around.   The amount of gravel we need ( cubic feet) is given by the equation where is the width of the path in feet. For example, a path 4 feet wide requires 86 cubic feet of gravel, as you can check.   (Story also appears in and )      If the neighbor donates 60 cubic feet of gravel, how wide a path can they build? Set up and solve a quadratic equation to find the answer in feet, accurate to two decimal places. Then convert your answer into inches.      Gravel is measured by the yard , which is short for cubic yard. There are 27 cubic feet in 1 yard of gravel. If the neighbor donates three yards of gravel, how wide a path can they build? Set up and solve a quadratic equation to find the answer in feet, accurate to two decimal places. Then convert your answer into inches.      What would it mean to solve the equation to find where ? Can you tell what the answer is from the equation (without actually solving)?        Claude is an excellent juggler. Remember that the height feet of Claude's beanbag seconds after he throws it in the air is described by the equation . Answer each of the following question by the suggested method and then look back at the graph from earlier to make sure your answers make sense.     Use the to find when the bean bag is 5 feet above ground. Why do both answers make sense in the story?      When is the beanbag 8 feet above ground? Try to use the to find the answer. What happens? Explain why it makes sense in the story that you can't solve this quadratic equation.      Claude decided that the beanbag was too high in the air, so he modified his throw slightly. Now the height is given by . What is the maximum height the beanbag will reach now? Hint: what number can you evaluate at?        The stopping distance for Jeff's Cadillac Escalade is given by where is the speed of the car (in miles per hour) and is the stopping distance (in feet). Jeff took 183 feet to stop. How fast was he going?   (Story also appears in )      Use successive approximation to estimate the answer to the nearest miles per hour. Display your work in a table.      Show how to use the to solve the equation.       A company produces backpacks. The more they make, the less it costs for each one. The cost per backpack is given by the equation where cost per backpack ($ per backpack) and number of backpacks.   (Story also appears in )      How many backpacks do they need to produce in order to hold costs to $20\/backpack? Set up and solve a quadratic equation to find the answer.      Make a table of values and draw a graph of the function. Does your answer agree with your table and graph?      What is the minimum price per backpack? Hint: evaluate at .        Mrs. Weber's cooking class came up with the equation to approximate the grilling time of a piece of fish depending on its thickness. Here is the number of minutes to grill the fish and is the thickness of the fish in inches.   (Story also appears in and )      If we want to make sure the fish will cook in under 20 minutes, how thick can the fish be? Set up and solve a quadratic equation to find the answer.      Repeat for 10 minutes.       A company who makes electronics was doing great business in 1996, but sales quickly slid after 2000. Their sales in millions of $ years from 1996 is given by the following equation  (Story also appears in )      The company decided to declare bankruptcy when sales fell below $20 billion. In what year was that? Show how to solve using the .      An analyst had suggested that they close down shop earlier, once sales were below $50 billion. In what year did sales fall that low? Show how to solve using the .      What year did sales peak (reach their highest value)?       A kangaroo hops up in the air (and out) from a 10 foot cliff. Her height above the ground, feet, after seconds is given by the equation      Calculate the missing values in the table.    T  0  0.3  0.6  0.9  1.2  1.5    K  10  11.1208  11.3632    6.82        According to this equation, how high up in the air does the kangaroo get? Choose the appropriate value to plug into the equation.      When does the kangaroo land on the ground? Set up and solve an equation.      If she jumps up, but not out, when will she land on the cliff itself again, assuming the same equation holds?      "
},
{
  "id": "sec-Solving_quadratic_equations-2-13",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#sec-Solving_quadratic_equations-2-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quadratic Formula "
},
{
  "id": "sec-Solving_quadratic_equations-2-27",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#sec-Solving_quadratic_equations-2-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabola roots "
},
{
  "id": "high-jumper-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#high-jumper-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  A high-jumper jumps so that the height, feet, of the point on his back that must clear the bar after seconds is given by the equation       When would the high-jumper hit the ground (if there were no pit)? Ouch! Use the to find the answer. Use the graph to check.      The high jump pit is 2 feet off the ground. When does the high-jumper land in the pit? Use the to find the answer and the graph to check.      How high a bar can the high-jumper clear? Find the maximum height of that point above ground by evaluating at . Use the graph to check.    "
},
{
  "id": "art-museum-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#art-museum-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  The art museum opened in 1920. After an initial rush to see the great holdings, attendance dropped for awhile. But then attendance began to rise again and has risen since. The number of annual visits is approximated by the equation where is time measured in years since 1920.     Calculate the missing values in the table.    year  1920  1925  1930  1935  1940  1945  1950     0  5  10  15  20  25  30     3,700   400  2,575  7,300   24,400        Draw a graph of the function.      In what year did the number of visitors first pass 30,000 in a year? Estimate the value from your graph. Then set up and solve a quadratic equation.      According to this equation, in what year was the number of annual visits the smallest? For that year, what were the number of visits? Use .      Explain why never equals 0.      What happens if you try to use the to solve for ?    "
},
{
  "id": "milk-profit-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#milk-profit-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  The profit $ from selling tanks of milk is described by the equation      Here is a graph of the function:   Explain why negative numbers on the vertical axis make sense in the story.      How much milk must be sold for the company to break even , meaning having $0 profit? Guess from the graph and check using the equation.      For practice, set up and solve a quadratic equation to find the break-even point.      How many tanks of milk would they need to sell to keep profits over $400,000? Set up and solve a quadratic equation to find the answer. Then check that it agrees with your graph. Your answer should be in the form of an inequality.     "
},
{
  "id": "gravel-path-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#gravel-path-quadratic",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "  Urban community gardens are catching on. What was once an abandoned lot down the block is now a thriving 10 25 vegetable and berry garden for the neighborhood. One neighbor volunteered to donate gravel to make a path around the garden. The path will be 3 inches deep and the same width all around.   The amount of gravel we need ( cubic feet) is given by the equation where is the width of the path in feet. For example, a path 4 feet wide requires 86 cubic feet of gravel, as you can check.   (Story also appears in and )      If the neighbor donates 60 cubic feet of gravel, how wide a path can they build? Set up and solve a quadratic equation to find the answer in feet, accurate to two decimal places. Then convert your answer into inches.      Gravel is measured by the yard , which is short for cubic yard. There are 27 cubic feet in 1 yard of gravel. If the neighbor donates three yards of gravel, how wide a path can they build? Set up and solve a quadratic equation to find the answer in feet, accurate to two decimal places. Then convert your answer into inches.      What would it mean to solve the equation to find where ? Can you tell what the answer is from the equation (without actually solving)?    "
},
{
  "id": "juggling-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#juggling-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "  Claude is an excellent juggler. Remember that the height feet of Claude's beanbag seconds after he throws it in the air is described by the equation . Answer each of the following question by the suggested method and then look back at the graph from earlier to make sure your answers make sense.     Use the to find when the bean bag is 5 feet above ground. Why do both answers make sense in the story?      When is the beanbag 8 feet above ground? Try to use the to find the answer. What happens? Explain why it makes sense in the story that you can't solve this quadratic equation.      Claude decided that the beanbag was too high in the air, so he modified his throw slightly. Now the height is given by . What is the maximum height the beanbag will reach now? Hint: what number can you evaluate at?     "
},
{
  "id": "braking-distance-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#braking-distance-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "  The stopping distance for Jeff's Cadillac Escalade is given by where is the speed of the car (in miles per hour) and is the stopping distance (in feet). Jeff took 183 feet to stop. How fast was he going?   (Story also appears in )      Use successive approximation to estimate the answer to the nearest miles per hour. Display your work in a table.      Show how to use the to solve the equation.    "
},
{
  "id": "backpacks-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#backpacks-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "  A company produces backpacks. The more they make, the less it costs for each one. The cost per backpack is given by the equation where cost per backpack ($ per backpack) and number of backpacks.   (Story also appears in )      How many backpacks do they need to produce in order to hold costs to $20\/backpack? Set up and solve a quadratic equation to find the answer.      Make a table of values and draw a graph of the function. Does your answer agree with your table and graph?      What is the minimum price per backpack? Hint: evaluate at .     "
},
{
  "id": "grilling-fish-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#grilling-fish-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": "  Mrs. Weber's cooking class came up with the equation to approximate the grilling time of a piece of fish depending on its thickness. Here is the number of minutes to grill the fish and is the thickness of the fish in inches.   (Story also appears in and )      If we want to make sure the fish will cook in under 20 minutes, how thick can the fish be? Set up and solve a quadratic equation to find the answer.      Repeat for 10 minutes.    "
},
{
  "id": "electronics-sales-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#electronics-sales-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": "  A company who makes electronics was doing great business in 1996, but sales quickly slid after 2000. Their sales in millions of $ years from 1996 is given by the following equation  (Story also appears in )      The company decided to declare bankruptcy when sales fell below $20 billion. In what year was that? Show how to solve using the .      An analyst had suggested that they close down shop earlier, once sales were below $50 billion. In what year did sales fall that low? Show how to solve using the .      What year did sales peak (reach their highest value)?    "
},
{
  "id": "kangaroo-solving-quadratic",
  "level": "2",
  "url": "sec-Solving_quadratic_equations.html#kangaroo-solving-quadratic",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": "  A kangaroo hops up in the air (and out) from a 10 foot cliff. Her height above the ground, feet, after seconds is given by the equation      Calculate the missing values in the table.    T  0  0.3  0.6  0.9  1.2  1.5    K  10  11.1208  11.3632    6.82        According to this equation, how high up in the air does the kangaroo get? Choose the appropriate value to plug into the equation.      When does the kangaroo land on the ground? Set up and solve an equation.      If she jumps up, but not out, when will she land on the cliff itself again, assuming the same equation holds?    "
},
{
  "id": "sec-PE3A",
  "level": "1",
  "url": "sec-PE3A.html",
  "type": "Section",
  "number": "3.6",
  "title": "Practice Exam 3A",
  "body": " Practice Exam 3A   Practice Exam 3A    Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   Over 50 points on this exam are for solving equations and inequalities. Be sure you understand what you need to show for full credit. Using a different method will get little to no partial credit.    As you work, make a don't forget list of any information you need to look up or ask about.      The Skärstroms want to dig a new well for water for their lake cabin. The company charges $900 to bring the equipment on site and draw the permit and then $2 per foot to dig. That means where is the depth of the well (in feet) and is the cost of the well (in $).     In their neck of the woods, wells often run 200 feet deep. According to the equation, how much would that cost?      The Skärstroms have budgeted between $1,500 and $1,800 for the well. Set up and solve a chain of inequalities to find the corresponding range of depths.      No such luck. The company had to drill much deeper than hoped to find water. The final result, wonderfully cold and clear drinking water. And, a hefty bill for $2,072. How deep is their well? Set up and solve an equation.         Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at a rate of 12% each hour. That means the amount of caffeine ( mg) after hours is given by the equation graphed below       According to the equation, how much caffeine is in her body initially, after 2 hours, 5 hours, and 24 hours? Display your answers in table.      Show show to use successive approximation to find approximately when Ceyda's caffeine level first drops below 20 mg. Answer to the nearest hour.      Set up and solve an equation to determine exactly when Ceyda's caffeine level first drops below 20 mg. Round your answer to two decimal places.         Jorge deposited $1,500 in a high yield money market account and plans to leave it there for 5 years. The value of his account after 5 years, $ , will depend on the growth factor as given by the equation      Use the equation to complete the table.     1.02  1.03  1.05  1.10     1,656.12    2,415.77        Draw a graph showing how depends on the growth factor . Start the horizontal axis at 1.00, instead of 0.      Use your graph to estimate the growth factor if the value of Jorge's account after 5 years is $1,780.      Now set up and solve an equation to find the answer exactly .      What is the corresponding return on investment ? That means calculate . The return on investment is written as a percentage.         A rabbit jumps so that her height above ground is given by the formula where height of rabbit (feet above ground) and time (seconds).     At what height did the rabbit start her jump?      Can the rabbit jump over a 3 foot fence? Calculate the exact maximum height of the rabbit to decide.      How long does it take the rabbit to get 2 feet in the air, and when is she at that height again? Set up and solve the appropriate equation to find the answers.       "
},
{
  "id": "ws-PE3A-2-1-2",
  "level": "2",
  "url": "sec-PE3A.html#ws-PE3A-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Over 50 points on this exam are for solving equations and inequalities. Be sure you understand what you need to show for full credit. Using a different method will get little to no partial credit. "
},
{
  "id": "well-linear-PE3A",
  "level": "2",
  "url": "sec-PE3A.html#well-linear-PE3A",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "  The Skärstroms want to dig a new well for water for their lake cabin. The company charges $900 to bring the equipment on site and draw the permit and then $2 per foot to dig. That means where is the depth of the well (in feet) and is the cost of the well (in $).     In their neck of the woods, wells often run 200 feet deep. According to the equation, how much would that cost?      The Skärstroms have budgeted between $1,500 and $1,800 for the well. Set up and solve a chain of inequalities to find the corresponding range of depths.      No such luck. The company had to drill much deeper than hoped to find water. The final result, wonderfully cold and clear drinking water. And, a hefty bill for $2,072. How deep is their well? Set up and solve an equation.    "
},
{
  "id": "caffeine-PE3A",
  "level": "2",
  "url": "sec-PE3A.html#caffeine-PE3A",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "  Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at a rate of 12% each hour. That means the amount of caffeine ( mg) after hours is given by the equation graphed below       According to the equation, how much caffeine is in her body initially, after 2 hours, 5 hours, and 24 hours? Display your answers in table.      Show show to use successive approximation to find approximately when Ceyda's caffeine level first drops below 20 mg. Answer to the nearest hour.      Set up and solve an equation to determine exactly when Ceyda's caffeine level first drops below 20 mg. Round your answer to two decimal places.    "
},
{
  "id": "money-market-PE3A",
  "level": "2",
  "url": "sec-PE3A.html#money-market-PE3A",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": "  Jorge deposited $1,500 in a high yield money market account and plans to leave it there for 5 years. The value of his account after 5 years, $ , will depend on the growth factor as given by the equation      Use the equation to complete the table.     1.02  1.03  1.05  1.10     1,656.12    2,415.77        Draw a graph showing how depends on the growth factor . Start the horizontal axis at 1.00, instead of 0.      Use your graph to estimate the growth factor if the value of Jorge's account after 5 years is $1,780.      Now set up and solve an equation to find the answer exactly .      What is the corresponding return on investment ? That means calculate . The return on investment is written as a percentage.    "
},
{
  "id": "rabbit-jump-PE3A",
  "level": "2",
  "url": "sec-PE3A.html#rabbit-jump-PE3A",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "  A rabbit jumps so that her height above ground is given by the formula where height of rabbit (feet above ground) and time (seconds).     At what height did the rabbit start her jump?      Can the rabbit jump over a 3 foot fence? Calculate the exact maximum height of the rabbit to decide.      How long does it take the rabbit to get 2 feet in the air, and when is she at that height again? Set up and solve the appropriate equation to find the answers.    "
},
{
  "id": "sec-PE3B",
  "level": "1",
  "url": "sec-PE3B.html",
  "type": "Section",
  "number": "3.7",
  "title": "Practice Exam 3B",
  "body": " Practice Exam 3B   Practice Exam 3B     Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself one hour to work and wait until you have tried your best on all of the problems before checking any answers.    Caution: Usually more than half points on this exam are for solving equations and inequalities. Be sure you understand what you need to show for full credit. Using a different method, or not showing enough work might get little to no partial credit.      These names are registered trademarked. Goldie the Goldfish, Pinches the Lobster, Quackers the Duck, Speedy the Turtle. These first generation Beanie Babies toys were anticipated to increase in value according to the equation where is the value of Beanie Babies (in $) and is the time in years since 1994.     Make a table showing the anticipated value in 1994, 2004, 2010, and 2025.      Draw a graph showing how the value of the Beanie Babies increased.         Set up and solve an equation to determine when will Beanie Babies made in 1994 were anticipated to be worth over $40. Report the actual year.         Best we can tell, the floor of our front porch was 7 2 above ground when the house was built. It has been slowly sinking ever since. The contractor estimated that it's dropped 0.45 inches per year. The equation is where is the height of the porch (in inches) and is the age of the house (in years).     Make a table showing the height of the front porch when the house was built, when it was 20 years old, and when it was 50 years old.      The floor of our front porch is currently 48 inches above ground. Set up and solve an equation to figure out how old our house is.      Once the porch is below 40 inches, we will have to do something to fix it. Set up and solve an inequality to find when that will happen, answering to the nearest year. Hint: the house is already old. Report how many years from now.          In a shot put competition, athletes try to throw a heavy metal ball as far as possible. For one athlete the ball closely followed the parabolic arch given by the equation where was the distance the ball had travelled horizontally and was the height of the ball above ground, both in feet. The path of the ball is graphed below.      How far away did the ball land? Estimate the answer from the graph. Then show how to set up and solve an equation to find the answer to two decimal places.      How high up did the ball get? Show how to find the exact answer. Then compare to the graph.         The amount of snow in a snowball, cups, depends on the diameter (distance across) of the snowball, inches according to the equation      How many cups of snow are needed to make a snowball that is 3 inches across? 5 inches across?      How many cups of snow are needed to make a snowball that is 2 feet across? Give your answer in gallons. Use that 1 gallon = 4 quarts and 1 quart = 4 cups.      Karen has a 5 gallon paint bucket packed with snow and wants to make a giant snowball out of it. How big will the snowball be? Show how to use successive approximation to approximate the answer to the nearest inch. Display your calculations in a table.      Now set up and solve an equation to find the answer exactly , to the nearest inch.       "
},
{
  "id": "ws-PE3B-2-1-2",
  "level": "2",
  "url": "sec-PE3B.html#ws-PE3B-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Caution: "
},
{
  "id": "beanie-babies-PE3B",
  "level": "2",
  "url": "sec-PE3B.html#beanie-babies-PE3B",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": "   These names are registered trademarked. Goldie the Goldfish, Pinches the Lobster, Quackers the Duck, Speedy the Turtle. These first generation Beanie Babies toys were anticipated to increase in value according to the equation where is the value of Beanie Babies (in $) and is the time in years since 1994.     Make a table showing the anticipated value in 1994, 2004, 2010, and 2025.      Draw a graph showing how the value of the Beanie Babies increased.         Set up and solve an equation to determine when will Beanie Babies made in 1994 were anticipated to be worth over $40. Report the actual year.    "
},
{
  "id": "porch-linear-PE3B",
  "level": "2",
  "url": "sec-PE3B.html#porch-linear-PE3B",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": "  Best we can tell, the floor of our front porch was 7 2 above ground when the house was built. It has been slowly sinking ever since. The contractor estimated that it's dropped 0.45 inches per year. The equation is where is the height of the porch (in inches) and is the age of the house (in years).     Make a table showing the height of the front porch when the house was built, when it was 20 years old, and when it was 50 years old.      The floor of our front porch is currently 48 inches above ground. Set up and solve an equation to figure out how old our house is.      Once the porch is below 40 inches, we will have to do something to fix it. Set up and solve an inequality to find when that will happen, answering to the nearest year. Hint: the house is already old. Report how many years from now.     "
},
{
  "id": "shot-put-PE3B",
  "level": "2",
  "url": "sec-PE3B.html#shot-put-PE3B",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": "  In a shot put competition, athletes try to throw a heavy metal ball as far as possible. For one athlete the ball closely followed the parabolic arch given by the equation where was the distance the ball had travelled horizontally and was the height of the ball above ground, both in feet. The path of the ball is graphed below.      How far away did the ball land? Estimate the answer from the graph. Then show how to set up and solve an equation to find the answer to two decimal places.      How high up did the ball get? Show how to find the exact answer. Then compare to the graph.    "
},
{
  "id": "volume-snowball-PE3B",
  "level": "2",
  "url": "sec-PE3B.html#volume-snowball-PE3B",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": "  The amount of snow in a snowball, cups, depends on the diameter (distance across) of the snowball, inches according to the equation      How many cups of snow are needed to make a snowball that is 3 inches across? 5 inches across?      How many cups of snow are needed to make a snowball that is 2 feet across? Give your answer in gallons. Use that 1 gallon = 4 quarts and 1 quart = 4 cups.      Karen has a 5 gallon paint bucket packed with snow and wants to make a giant snowball out of it. How big will the snowball be? Show how to use successive approximation to approximate the answer to the nearest inch. Display your calculations in a table.      Now set up and solve an equation to find the answer exactly , to the nearest inch.    "
},
{
  "id": "sec-Modeling_linear_equations",
  "level": "1",
  "url": "sec-Modeling_linear_equations.html",
  "type": "Section",
  "number": "4.1",
  "title": "Modeling with linear equations",
  "body": " Modeling with linear equations   A family with one full-time worker earning minimum wage cannot afford the local fair-market rent for a two-bedroom apartment anywhere in the United States. Even families earning above minimum can struggle to rent an apartment for less than 30% of their income. As a result, many people need affordable housing. There are various local, state, and federally funded programs as well as non-profit agencies working to increase availability.  Source: U.S. Department of Housing and Urban Development    In our city there are about 64,100 apartments considered affordable. So the city partnered with local developers to build 7,800 more apartments each year. Our variables are   Assuming things proceed as planned, after 5 years there would be Generalizing, we get our equation which can be rewritten as This equation fits our template for a linear equation   Quick recap. A function is linear if its graph is a straight line, and nonlinear otherwise. The rate of change measures the steepness of the graph for any function, but a straight line is the same steepness everywhere, so the rate of change, or slope of a line is constant. Our example is linear because the slope of apartments per year is constant. Our starting or fixed amount is the intercept . In our example it's apartments. The dependent variable and the intercept always have the same units - apartments in our example. But so, in our example slope is measured in apartments per year . These units can help you identify the slope and intercept in a story - so keep a look out.  How many years will it take the city to reach 150,000 apartments at this rate? After ten years, for example, there would still not be enough affordable apartments because Continuing successive approximation we get     0  5  10  11  12     64,100  103,100  142,100  149,900  157,700    vs. 150,000  low  low  low  low  high    This city will reach 150,000 affordable apartments within 12 years.  Of course, we could solve a linear equation instead. We want . Using our equation we get However, since we want at least 150,000 affordable apartments, an inequality is even better. Let's practice that. Subtract from each side to get which simplifies to Divide each side by 7,800 to get which simplifies to To be sure we need to round up to get   Let's confirm our findings on the graph.     As expected, the graph is a straight line. And we see that the city should reach its goal of 150,000 affordable apartments in 12 years, or slightly before then.    Do you know     What makes a function linear?    What the slope of a linear function means in the story and what it tells us about the graph?    What the intercept of a linear function means in the story and what it tells us about the graph?    The template for a linear equation? Ask your instructor if you need to remember the template or if it will be provided during the exam.     How to write a linear equation given the starting amount (intercept) and the rate of change (slope)?    Where the slope and intercept appear in the template of a linear equation?    What the graph of a linear function looks like?    How to solve a linear equation?    Why the rate of change of a linear function is constant?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A solar heating system costs approximately $30,000 to install and $150 per year to run. By comparison, a gas heating system costs approximately $12,000 to install and $700 per year to run. (Story also appears in )   Source: Using Algebra by Ethan Bolker     What is the total cost for installing and running a gas heating system for 30 years?      Name variables and write a linear equation showing how the total cost for a gas heating system depends on the number of years you run it.      Name variables and write a linear equation showing how the total cost for a solar heating system depends on the number of years you run it.      If you install and run a solar heating system, how many years can you use it before it costs the same as installing and running a gas heating system for 30 years (your answer to part (a))? Set up and solve an equation.         Since a very popular e-book reader was released, the price has been decreasing at a constant rate. A blogger developed the following equation representing the price of the e-book reader months since it was released:      Make a table of values for the e-book reader price initially, after 10 months, and after 25 months.      What does the 359 mean in the story and what are its units?      What does the 12 mean in the story and what are its units?      Draw a graph illustrating the dependence.      After approximately how many months was the price of the e-book reader expected to be down to $200? Set up and solve an equation.      Sareth decided to purchase a e-book reader when the price fell below $100. How many months after its release did the price of the e-book reader fall below that level? Set up and solve an inequality.      If you can believe what you read in blogs, the manufacturer will soon be giving away the e-book reader for free, since they make money on the e-book sales themselves. How many months after it was released would that happen, according to our equation? Set up and solve an equation.         Can you tell from the table which of these functions are linear? Use the rate of change to help you decide. Remember that these numbers may have been rounded.     Savings bonds from grandpa. (Story also appears in and )     Year  1962  1970  1980  1990  2000  2010    Value bond ($)  200.00  318.77  570.87  1,022.34  1,830.85  3,278.77        Wind chill at 10 F. (Story also appears in )     Wind (mph)  0  10  20  30  40    Wind chill (°F)  10  -4  -9  -12  -15        Pizza. (Story also appears in , , and )     Size (inches)  8  14  16    People  1  3  4        Water in the reservoir. (Story also appears in and 3.2 Exercises)     Week  1  5  10  20    Depth (feet)  45.5  39.5  32  17           Plumbers are really expensive, so I have been comparing prices. James charges $50 to show up plus $120 per hour. Jo is just getting started in the business. She charges $45 to show up plus $55 per hour. Mario advertises no trip charge but his hourly rate is $90 per hour. Not to be outdone, Luigi offers to unclog any drain for $150, no matter how long it takes. For each plumber, the table lists the corresponding equation and several points. In each equation, the plumber charges $ for hours of work. (Story also appears in )     Plumber  James  Jo  Mario  Luigi    Equation        0 hours  $50  $45  $0  $150    2 hours  $290  $155  $180  $150    4 hours  $530  $265  $360  $150       Use the points given to plot each of the four lines on the same set of axes. Label each line with the plumber's name.      What do you notice about Luigi's line?      List the plumbers in order from steepest to least steep line. What does that mean in terms of the story?      Now list the plumbers in order from smallest to largest intercept of their line. What does that mean in terms of the story?        We looked at the city's plan to increase the number of affordable apartments. From a current estimate of 64,100 apartments classified as affordable, they hoped to build 7,800 per year. At that rate, they can reach a total of 150,000 apartments in 12 years.     Things change. Revised estimates call for only 6,200 new apartments each year. At that rate, when will the city reach the 150,000 apartments goal? Using the same variables as in this section, set up and solve an equation.      More bad news. The definition of affordable has changed again, so the new count shows only 48,700 apartments on the list. And still only 6,200 new apartments each year. Now when will the city reach the 150,000 apartments goal? Set up and solve an equation.      In light of the new definition and, consequently, only 48,700 apartments currently on the list, the city has received additional funding to up the number of apartments built each year. They would like to return to their goal of having 150,000 affordable apartments in 12 years. How many apartments do they need to add each year to reach that goal? Figure out the answer however you like, but check that it works.       At a local state university , the tuition each student pays is based on the number of credit hours that student takes plus fees. The university charges $870 per credit hour plus a $560 fee. The fee is paid once regardless of how many credits are taken.     Name the variables and write an equation relating them.      Find the slope and intercept for the state university and explain what each means in terms of the story.      Make a table of values showing the tuition cost at the state university for 3 credits, 12 credits, or 16 credits.      At the local community college , the tuition each student pays is based only on the number of credits. The college charges $415 per credit.  Using the same variables as before, write an equation relating them for the community college.      Find the slope and intercept for the community college and explain what each means in terms of the story.      Make a table of values showing the tuition cost at the community college for 3 credits, 12 credits, or 16 credits.      Graph both functions on the same axes.      What do you notice about the graph that confirms the community college is always cheaper?       Can you tell from the table which of these functions is linear? Use the rate of change to help you decide. Remember that numbers may have been rounded.     Ahmed's virburnum shrub. (Story also appears in )     Week  0  6  10  18    Height (inches)  16.9  19.3  20.9  24.1        Rose gold (Story also appears in , , and )     Grams of gold added  0  0.4  0.8  1.4  1.6    Percent gold in alloy  50.0  58.3  64.3  70.6  72.2        Sea-ice (in millions of square miles)    Year  1980  1990  2000  2012    Sea-ice  3.10  2.66  2.23  1.70        Wild rice (Story also appears in )    Hint: rewrite the table in order by temperature first.     Temperature ( F)  39  42  41  35  47  45    Acres  2,300  1,950  1,425  2,015  1,233  1,256         The temperature in Minneapolis was 40 degrees at noon yesterday but it dropped 3 degrees an hour in the afternoon. Earlier we found the temperature, in F depends on the time, hours after noon according to the equation   (Story also appears in and )     When does the temperature drop below freezing (32 F)? Set up and solve the relevant inequality. Report your answer as an actual time (to the minute).      When does the temperature drop below zero (0 F)? Same instructions.       Shanille is collecting rare books. She inherited 382 books and buys another 3 books every month.     Make a table showing the number of rare books in Shanille's collection at the start, after 1 month, after 12 months, and after 3 years.      Name the variables and write an equation relating them.      Solve your equation to determine when Shanille will reach her goal of 1,000 rare books.      Graph and check.      "
},
{
  "id": "sec-Modeling_linear_equations-2-4",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#sec-Modeling_linear_equations-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear nonlinear slope intercept "
},
{
  "id": "solar-heating-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#solar-heating-modeling-linear",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  A solar heating system costs approximately $30,000 to install and $150 per year to run. By comparison, a gas heating system costs approximately $12,000 to install and $700 per year to run. (Story also appears in )   Source: Using Algebra by Ethan Bolker     What is the total cost for installing and running a gas heating system for 30 years?      Name variables and write a linear equation showing how the total cost for a gas heating system depends on the number of years you run it.      Name variables and write a linear equation showing how the total cost for a solar heating system depends on the number of years you run it.      If you install and run a solar heating system, how many years can you use it before it costs the same as installing and running a gas heating system for 30 years (your answer to part (a))? Set up and solve an equation.    "
},
{
  "id": "ebook-reader-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#ebook-reader-modeling-linear",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Since a very popular e-book reader was released, the price has been decreasing at a constant rate. A blogger developed the following equation representing the price of the e-book reader months since it was released:      Make a table of values for the e-book reader price initially, after 10 months, and after 25 months.      What does the 359 mean in the story and what are its units?      What does the 12 mean in the story and what are its units?      Draw a graph illustrating the dependence.      After approximately how many months was the price of the e-book reader expected to be down to $200? Set up and solve an equation.      Sareth decided to purchase a e-book reader when the price fell below $100. How many months after its release did the price of the e-book reader fall below that level? Set up and solve an inequality.      If you can believe what you read in blogs, the manufacturer will soon be giving away the e-book reader for free, since they make money on the e-book sales themselves. How many months after it was released would that happen, according to our equation? Set up and solve an equation.    "
},
{
  "id": "ex-Modeling_linear_equations-5-1",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#ex-Modeling_linear_equations-5-1",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Can you tell from the table which of these functions are linear? Use the rate of change to help you decide. Remember that these numbers may have been rounded.     Savings bonds from grandpa. (Story also appears in and )     Year  1962  1970  1980  1990  2000  2010    Value bond ($)  200.00  318.77  570.87  1,022.34  1,830.85  3,278.77        Wind chill at 10 F. (Story also appears in )     Wind (mph)  0  10  20  30  40    Wind chill (°F)  10  -4  -9  -12  -15        Pizza. (Story also appears in , , and )     Size (inches)  8  14  16    People  1  3  4        Water in the reservoir. (Story also appears in and 3.2 Exercises)     Week  1  5  10  20    Depth (feet)  45.5  39.5  32  17      "
},
{
  "id": "plumber-rates-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#plumber-rates-modeling-linear",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  Plumbers are really expensive, so I have been comparing prices. James charges $50 to show up plus $120 per hour. Jo is just getting started in the business. She charges $45 to show up plus $55 per hour. Mario advertises no trip charge but his hourly rate is $90 per hour. Not to be outdone, Luigi offers to unclog any drain for $150, no matter how long it takes. For each plumber, the table lists the corresponding equation and several points. In each equation, the plumber charges $ for hours of work. (Story also appears in )     Plumber  James  Jo  Mario  Luigi    Equation        0 hours  $50  $45  $0  $150    2 hours  $290  $155  $180  $150    4 hours  $530  $265  $360  $150       Use the points given to plot each of the four lines on the same set of axes. Label each line with the plumber's name.      What do you notice about Luigi's line?      List the plumbers in order from steepest to least steep line. What does that mean in terms of the story?      Now list the plumbers in order from smallest to largest intercept of their line. What does that mean in terms of the story?    "
},
{
  "id": "affordable-apartments-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#affordable-apartments-modeling-linear",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  We looked at the city's plan to increase the number of affordable apartments. From a current estimate of 64,100 apartments classified as affordable, they hoped to build 7,800 per year. At that rate, they can reach a total of 150,000 apartments in 12 years.     Things change. Revised estimates call for only 6,200 new apartments each year. At that rate, when will the city reach the 150,000 apartments goal? Using the same variables as in this section, set up and solve an equation.      More bad news. The definition of affordable has changed again, so the new count shows only 48,700 apartments on the list. And still only 6,200 new apartments each year. Now when will the city reach the 150,000 apartments goal? Set up and solve an equation.      In light of the new definition and, consequently, only 48,700 apartments currently on the list, the city has received additional funding to up the number of apartments built each year. They would like to return to their goal of having 150,000 affordable apartments in 12 years. How many apartments do they need to add each year to reach that goal? Figure out the answer however you like, but check that it works.    "
},
{
  "id": "tuition-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#tuition-modeling-linear",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  At a local state university , the tuition each student pays is based on the number of credit hours that student takes plus fees. The university charges $870 per credit hour plus a $560 fee. The fee is paid once regardless of how many credits are taken.     Name the variables and write an equation relating them.      Find the slope and intercept for the state university and explain what each means in terms of the story.      Make a table of values showing the tuition cost at the state university for 3 credits, 12 credits, or 16 credits.      At the local community college , the tuition each student pays is based only on the number of credits. The college charges $415 per credit.  Using the same variables as before, write an equation relating them for the community college.      Find the slope and intercept for the community college and explain what each means in terms of the story.      Make a table of values showing the tuition cost at the community college for 3 credits, 12 credits, or 16 credits.      Graph both functions on the same axes.      What do you notice about the graph that confirms the community college is always cheaper?    "
},
{
  "id": "check-linear-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#check-linear-modeling-linear",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "  Can you tell from the table which of these functions is linear? Use the rate of change to help you decide. Remember that numbers may have been rounded.     Ahmed's virburnum shrub. (Story also appears in )     Week  0  6  10  18    Height (inches)  16.9  19.3  20.9  24.1        Rose gold (Story also appears in , , and )     Grams of gold added  0  0.4  0.8  1.4  1.6    Percent gold in alloy  50.0  58.3  64.3  70.6  72.2        Sea-ice (in millions of square miles)    Year  1980  1990  2000  2012    Sea-ice  3.10  2.66  2.23  1.70        Wild rice (Story also appears in )    Hint: rewrite the table in order by temperature first.     Temperature ( F)  39  42  41  35  47  45    Acres  2,300  1,950  1,425  2,015  1,233  1,256      "
},
{
  "id": "temp-mpls-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#temp-mpls-modeling-linear",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "  The temperature in Minneapolis was 40 degrees at noon yesterday but it dropped 3 degrees an hour in the afternoon. Earlier we found the temperature, in F depends on the time, hours after noon according to the equation   (Story also appears in and )     When does the temperature drop below freezing (32 F)? Set up and solve the relevant inequality. Report your answer as an actual time (to the minute).      When does the temperature drop below zero (0 F)? Same instructions.    "
},
{
  "id": "rare-books-modeling-linear",
  "level": "2",
  "url": "sec-Modeling_linear_equations.html#rare-books-modeling-linear",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": "  Shanille is collecting rare books. She inherited 382 books and buys another 3 books every month.     Make a table showing the number of rare books in Shanille's collection at the start, after 1 month, after 12 months, and after 3 years.      Name the variables and write an equation relating them.      Solve your equation to determine when Shanille will reach her goal of 1,000 rare books.      Graph and check.    "
},
{
  "id": "sec-Systems_linear_equations",
  "level": "1",
  "url": "sec-Systems_linear_equations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations   A local factory produces small locks for industrial use. The old machine has seen better days and Quia Xun, the manager, is shopping around for a new machine. She's narrowed it down to two options. The first option is replace the old machine with a new model (Machine 1) for $3,200. The second is a larger unit (Machine 2) priced at $5,400. In each case, the price includes installation and the standard service contract. The reason she is considering the more expensive machine is Machine 2 runs at a cost of only $0.80 per lock, whereas the replacement Machine 1 runs at a cost of $1.25 per lock.  Since Machine 1 is less expensive, Quia Xun knows it is the right choice if the factory only produces a small number of locks. But since Machine 2 costs less per lock to run, she knows it will pay off if the factory makes a large number of locks. She would like to understand the total expenditure better, particularly the number of locks at which it would be worthwhile to invest in the more expensive machine.  Since Quia Xun is interested in how the total expenditure, including both the purchase price and the running cost, depend on the number of locks produced, the variables are She recognizes that total expenditure is a linear function that depends on the purchase price and the running cost for each machine. In each case, the starting amount (intercept) is the purchase price: $3,200 for Machine 1 and $5,400 for Machine 2. The slope (rate of change) is the constant running cost: $0.80 per lock for Machine 1 and $1.25 per lock for Machine 2. Using the template for a linear equation she writes the equations Since there are two linear equations and we are interested in a comparison, we have a system (of linear equations) .  To begin the comparison, Quia Xun starts with figuring out what the expenditure to produce 2,000 locks would be for each machine. If the factory were only going to make only 2,000 locks, then Machine 2 would not be worth it. She calculates a few more examples to see what the cutoff would be.     2,000  4,000  6,000  8,000  10,000    Machine 1:   5,700  8,200  10,700  13,200  15,700    Machine 2:   7,000  8,600  10,200  11,800  13,400    Even at 4,000 locks, Machine 1 is the better deal. By 6,000 locks, Machine 2 becomes the better deal. Somewhere in between it switches.  Quia Xun makes a quick graph to see what's going on. On the graph, whichever line is lower corresonds to the lower total expenditure and whichever line is higher corresponds to the higher total expenditure. As suspected, for a smaller number of locks the line for Machine 1 is lower on the graph, so that's the better deal. For a larger number of locks it switches and the line for Machine 2 is lower on the graph, since that's the better deal instead. Where they switch corresponds to the point on the graph where the two lines cross, somewhere around 5,000 locks.     A quick successive approximation narrows down the answer.     4,000  6,000  5,000  4,500  4,800  4,900    (for Machine 1)  8,200  10,700  9,450  8,825  9,200  9,325    (for Machine 2)  8,600  10,200  9,400  9,000  9,240  9,320    Less expensive option  Machine 1  Machine 2  Machine 2  Machine 1  Machine 1  Machine 2    So the choice changes somewhere between 4,800 and 4,900 locks.  There is a way for Quia Xun to solve the problem symbolically; we refer to this process as solving the system . She wants to find the number of locks where Using her equations for Machine 1 and for Machine 2 she has She wants to find the value of that makes both sides the same number. To solve, Quia Xun subtracts 3,200, the smaller of the two purchase prices, from each side to get which simplifies to Pause for a minute. What does that $2,200 mean in the story? It's the extra cost of buying Machine 2 because .  What next? This equation has the variable on each side. Quia Xun needs to combine them somehow. Here's how to do that. Subtract from each side. Look closely. She is subtracting , not just . We get How do we simplify ? Think about what these numbers represent in the story. The cost was $1.25 per lock versus $0.80 per lock. The difference is $1.25 - $0.80 = $0.45 per lock. So that means Think: 125 apples - 80 apples = 45 apples. She can now simplify her equation to get Ah, she can solve this equation just by dividing each side by 0.45 to get which simplifies to If they plan to produce 4,889 locks or more, Quia Xun should go ahead and buy the more expensive machine, Machine 2. Yeah, that's what we guessed – just under 4,900 locks is the payoff.  She solved an equation here, but Quia Xun really wanted to know when so she could have solved the inequality instead. Check that the same steps give .    Do you know     How to compare two linear functions using a table?    How to graph two linear functions on the same axes?    What the solution of a linear system means in terms of the story?    Where to look on a graph to see the solution of a linear system?    How to successively approximate the solution of a linear system?    How to solve a linear system?    When to use inequality instead of an equation for a linear system?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      Madison wants to buy a new car, either Car A: a hybrid priced at $26,100, or Car B: a high-efficiency gas car priced at $23,700. Annual fuel costs for Car A are currently $1,100. For Car B annual fuel costs are currently $1,800. The total cost of each car will depend on how many years she keeps it.     Name the variables.      Write a linear equation for the total cost (including purchase price and fuel costs) of Car A as a function of how long she keeps it. Assume fuel costs are constant.      Write a linear equation for the total cost (including purchase price and fuel costs) of Car B as a function of how long she keeps it. Assume fuel costs are constant.      Make a table comparing the total costs for the two cars if Madison keeps the car she buys for 3, 5, or 10 years.      Set up and solve a system of linear equations to determine the payoff time , or the number of years for which the total costs of each car are equal.      Based on what you have learned, fill in the blank: The more expensive hybrid pays off if Madison is going to keep it for years or more.         A mug of coffee costs $3.45 at Juan's favorite cafe, unless he buys their discount card for $10 in which case a mug costs $2.90. Or, he can buy a membership for $59.99 and then coffee is only $1\/mug. If we let represent the number of mugs of coffee he buys and represent the total cost in dollars, then the equations are:  (Story also appears in , , and )      Compare the total costs for all three options.    Mugs  0  10  20  30    No card        With card        Member            Draw a graph showing all three options.      Which option is least expensive if Juan plans to buy    A small number of mugs of coffee:    A medium number of mugs of coffee:    A large number of mugs of coffee:        Set up and solve a system of linear equations to compare total cost with no card to the total cost with the card.      Set up and solve a system of linear equation to compare the total cost with the card to the total cost with the membership.      Describe in words what you have learned.         Ahmed planted two shrubs in the backyard on May 1. The viburnum was 16.9 inches tall and expected to grow 0.4 inches each week this summer. The weigela was 20.3 inches tall but only expected to grow 0.2 inches per week. If we let represent the total height of the shrub in inches after weeks, then the equations are:  (Story also appears in )      Compare the height of the shrubs on the given dates.    date  May 1  June 12  July 10  Sept 4     0  6  10  18    (viburnum)        (weigela)             Approximately when will the shrubs be the same height? Continue successive approximation to find the answer to the nearest week.      Set up and solve an equation to find exactly the day when the two shrubs are the same height. In what month does that happen?         The supply of flour is the amount of flour produced. It depends on the price of flour. A high price encourages producers to make more flour. If the price is low, they tend to make less of it. The dependence of the supply of flour (in loads) on the price (in $\/pound) is given by the equation   The demand of flour is the amount of flour consumers want to buy. It also depends on the price of flour. If flour sells for a high price, then consumers will buy less. If flour sells for a low price instead, then consumers will buy more. The dependence of the demand of flour (in loads) on the price (in $\/pound) is given by the equation   The equilibrium price of flour is the price where the supply equals the demand. Source: Using Algebra by Ethan Bolker      What happens if flour is priced at $1.00\/pound? That is, how much flour will be produced and how much will consumers demand?      What happens if flour is priced at $0.50\/pound? That is, how much flour will be produced and how much will consumers demand?      Graph each dependence on the same set of axes. Approximately what is the equilibrium price, according to your graph?      Set up and solve an equation to find the equilibrium price of flour exactly .      When more of a product is produced than consumers want to buy, we have a surplus of the product. Solve an inequality to find the range of price values for which there will be a surplus of flour. Compare your answer to part (d).      When less of a product is produced than consumers want to buy, we have a shortage of the product. Solve an inequality to find the range of price values for which there will be a shortage of flour. Compare your answer to parts (d) and (e).        Just when Quia Xun thought she had things figured out, another possible option emerged. She can outsource her lock production to a different plant at the cost of $1.55 per lock. While that's more expensive per lock, it avoids having to buy a machine at all. Recall her first two options were where is the total expenditure to produce locks on that machine.     Write an equation showing how depends on if Quia Xun decides to outsource lock production.      For what number of locks does outsourcing make financial sense versus Machine 1? Set up and solve a system of equations.      Repeat for Machine 2.       Don't ask why I know this, but it takes me 80 seconds per square foot to wash a floor using a rag. If I use a mop, it's slightly quicker at 75 seconds per square foot, but another 3 minutes at the end to wring out the mop. (The rag just pops in the washing machine.)     Name the variables and write an equation for each option: rag versus mop. Hint: time is the dependent variable.       Set up and solve the system to determine the area of a room where either option takes the same amount of total time.      What do you suggest for each room? (Note: find the area by multiplying the length times the width.) My bathroom floor is 5 5 . My kitchen floor is 8 10 . The laundry room is 10 14 .       Maria needed to replace the light bulb in the hallway. When she went to the home improvement store she was overwhelmed with the choices of light bulbs. One option is a compact fluorescent light (CFL) bulb. A CFL bulb costs $1. This fixture will cost $0.95 per month to run with a CFL bulb. A different option Maria is considering is a light-emitting diode (LED) instead of a bulb. A LED costs $24 but reduces the cost for the fixture to $0.60 per month.     Name the variables and write an equation for each option: LED versus CFL.      Compare the total cost for each bulb for 1, 6, 18, and 36 months.      Draw a graph showing both functions on the same axes.      Set up and solve a system of linear equations to determine the payback time.      Based on what you've learned, fill in the blank and circle the correct word.   The more expensive LED pays off if Maria is going to use it for or more months.        The community center offers exercise classes on a pay-as-you-go basis. It normally costs $20 to register and then $15 per exercise class. Alternatively, you can pay $150 to become a member, and then $10 per exercise class. If we let represent the number of exercise classes I attend and represent the total cost in dollars, then the equations are:      Create a table of reasonable values and draw a graph showing both options.      According to your graph, what is the break even point?      Use successive approximations to find the break even point.      Set up and solve a system of linear equations to determine the exact break even point.      Describe in words what you've learned about whether or not to buy membership.       The weekly supply and demand for corn-on-the-cob (in hundreds) at a local market are given by the equations where is the price per unit, in dollars per dozen.     Is there a shortage or surplus if corn is priced at $3.25\/dozen? What if it's priced at $1.75\/dozen?      Set up and solve an equation to find the equilibrium price of corn.      Make a small table of values and graph. Does your answer to (b) agree with your graph? Explain.       A solar heating system costs approximately $30,000 to install and $150 per year to run. By comparison, a gas heating system costs approximately $12,000 to install and $700 per year to run. Earlier we wrote equations showing how the total cost $ depends on the time, years.  (Story also appears in )      Set up an solve a system to determine the payback time of installing the solar heating system.      How does the payback time change if the state offers a $7,000 rebate? That means, in effect, that the solar system costs $7,000 less to install. Write a new equation for the solar heating system. Then set up and solve the new system.      How high a rebate would the state have to offer to ensure a payback time of 15 years? Hint: compare the costs of gas and solar heating systems at 15 years.       "
},
{
  "id": "sec-Systems_linear_equations-2-3",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#sec-Systems_linear_equations-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system (of linear equations) "
},
{
  "id": "sec-Systems_linear_equations-2-12",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#sec-Systems_linear_equations-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solving the system "
},
{
  "id": "car-comparison-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#car-comparison-systems-linear",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "  Madison wants to buy a new car, either Car A: a hybrid priced at $26,100, or Car B: a high-efficiency gas car priced at $23,700. Annual fuel costs for Car A are currently $1,100. For Car B annual fuel costs are currently $1,800. The total cost of each car will depend on how many years she keeps it.     Name the variables.      Write a linear equation for the total cost (including purchase price and fuel costs) of Car A as a function of how long she keeps it. Assume fuel costs are constant.      Write a linear equation for the total cost (including purchase price and fuel costs) of Car B as a function of how long she keeps it. Assume fuel costs are constant.      Make a table comparing the total costs for the two cars if Madison keeps the car she buys for 3, 5, or 10 years.      Set up and solve a system of linear equations to determine the payoff time , or the number of years for which the total costs of each car are equal.      Based on what you have learned, fill in the blank: The more expensive hybrid pays off if Madison is going to keep it for years or more.    "
},
{
  "id": "juan-coffee-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#juan-coffee-systems-linear",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": "  A mug of coffee costs $3.45 at Juan's favorite cafe, unless he buys their discount card for $10 in which case a mug costs $2.90. Or, he can buy a membership for $59.99 and then coffee is only $1\/mug. If we let represent the number of mugs of coffee he buys and represent the total cost in dollars, then the equations are:  (Story also appears in , , and )      Compare the total costs for all three options.    Mugs  0  10  20  30    No card        With card        Member            Draw a graph showing all three options.      Which option is least expensive if Juan plans to buy    A small number of mugs of coffee:    A medium number of mugs of coffee:    A large number of mugs of coffee:        Set up and solve a system of linear equations to compare total cost with no card to the total cost with the card.      Set up and solve a system of linear equation to compare the total cost with the card to the total cost with the membership.      Describe in words what you have learned.    "
},
{
  "id": "shrub-growth-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#shrub-growth-systems-linear",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": "  Ahmed planted two shrubs in the backyard on May 1. The viburnum was 16.9 inches tall and expected to grow 0.4 inches each week this summer. The weigela was 20.3 inches tall but only expected to grow 0.2 inches per week. If we let represent the total height of the shrub in inches after weeks, then the equations are:  (Story also appears in )      Compare the height of the shrubs on the given dates.    date  May 1  June 12  July 10  Sept 4     0  6  10  18    (viburnum)        (weigela)             Approximately when will the shrubs be the same height? Continue successive approximation to find the answer to the nearest week.      Set up and solve an equation to find exactly the day when the two shrubs are the same height. In what month does that happen?    "
},
{
  "id": "supply-demand-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#supply-demand-systems-linear",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": "  The supply of flour is the amount of flour produced. It depends on the price of flour. A high price encourages producers to make more flour. If the price is low, they tend to make less of it. The dependence of the supply of flour (in loads) on the price (in $\/pound) is given by the equation   The demand of flour is the amount of flour consumers want to buy. It also depends on the price of flour. If flour sells for a high price, then consumers will buy less. If flour sells for a low price instead, then consumers will buy more. The dependence of the demand of flour (in loads) on the price (in $\/pound) is given by the equation   The equilibrium price of flour is the price where the supply equals the demand. Source: Using Algebra by Ethan Bolker      What happens if flour is priced at $1.00\/pound? That is, how much flour will be produced and how much will consumers demand?      What happens if flour is priced at $0.50\/pound? That is, how much flour will be produced and how much will consumers demand?      Graph each dependence on the same set of axes. Approximately what is the equilibrium price, according to your graph?      Set up and solve an equation to find the equilibrium price of flour exactly .      When more of a product is produced than consumers want to buy, we have a surplus of the product. Solve an inequality to find the range of price values for which there will be a surplus of flour. Compare your answer to part (d).      When less of a product is produced than consumers want to buy, we have a shortage of the product. Solve an inequality to find the range of price values for which there will be a shortage of flour. Compare your answer to parts (d) and (e).    "
},
{
  "id": "lock-machines-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#lock-machines-systems-linear",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "  Just when Quia Xun thought she had things figured out, another possible option emerged. She can outsource her lock production to a different plant at the cost of $1.55 per lock. While that's more expensive per lock, it avoids having to buy a machine at all. Recall her first two options were where is the total expenditure to produce locks on that machine.     Write an equation showing how depends on if Quia Xun decides to outsource lock production.      For what number of locks does outsourcing make financial sense versus Machine 1? Set up and solve a system of equations.      Repeat for Machine 2.    "
},
{
  "id": "wash-floor-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#wash-floor-systems-linear",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "",
  "body": "  Don't ask why I know this, but it takes me 80 seconds per square foot to wash a floor using a rag. If I use a mop, it's slightly quicker at 75 seconds per square foot, but another 3 minutes at the end to wring out the mop. (The rag just pops in the washing machine.)     Name the variables and write an equation for each option: rag versus mop. Hint: time is the dependent variable.       Set up and solve the system to determine the area of a room where either option takes the same amount of total time.      What do you suggest for each room? (Note: find the area by multiplying the length times the width.) My bathroom floor is 5 5 . My kitchen floor is 8 10 . The laundry room is 10 14 .    "
},
{
  "id": "light-bulbs-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#light-bulbs-systems-linear",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "",
  "body": "  Maria needed to replace the light bulb in the hallway. When she went to the home improvement store she was overwhelmed with the choices of light bulbs. One option is a compact fluorescent light (CFL) bulb. A CFL bulb costs $1. This fixture will cost $0.95 per month to run with a CFL bulb. A different option Maria is considering is a light-emitting diode (LED) instead of a bulb. A LED costs $24 but reduces the cost for the fixture to $0.60 per month.     Name the variables and write an equation for each option: LED versus CFL.      Compare the total cost for each bulb for 1, 6, 18, and 36 months.      Draw a graph showing both functions on the same axes.      Set up and solve a system of linear equations to determine the payback time.      Based on what you've learned, fill in the blank and circle the correct word.   The more expensive LED pays off if Maria is going to use it for or more months.     "
},
{
  "id": "exercise-classes-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#exercise-classes-systems-linear",
  "type": "Exercise",
  "number": "4.2.8",
  "title": "",
  "body": "  The community center offers exercise classes on a pay-as-you-go basis. It normally costs $20 to register and then $15 per exercise class. Alternatively, you can pay $150 to become a member, and then $10 per exercise class. If we let represent the number of exercise classes I attend and represent the total cost in dollars, then the equations are:      Create a table of reasonable values and draw a graph showing both options.      According to your graph, what is the break even point?      Use successive approximations to find the break even point.      Set up and solve a system of linear equations to determine the exact break even point.      Describe in words what you've learned about whether or not to buy membership.    "
},
{
  "id": "supply-demand-corn-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#supply-demand-corn-systems-linear",
  "type": "Exercise",
  "number": "4.2.9",
  "title": "",
  "body": "  The weekly supply and demand for corn-on-the-cob (in hundreds) at a local market are given by the equations where is the price per unit, in dollars per dozen.     Is there a shortage or surplus if corn is priced at $3.25\/dozen? What if it's priced at $1.75\/dozen?      Set up and solve an equation to find the equilibrium price of corn.      Make a small table of values and graph. Does your answer to (b) agree with your graph? Explain.    "
},
{
  "id": "solar-heating-systems-linear",
  "level": "2",
  "url": "sec-Systems_linear_equations.html#solar-heating-systems-linear",
  "type": "Exercise",
  "number": "4.2.10",
  "title": "",
  "body": "  A solar heating system costs approximately $30,000 to install and $150 per year to run. By comparison, a gas heating system costs approximately $12,000 to install and $700 per year to run. Earlier we wrote equations showing how the total cost $ depends on the time, years.  (Story also appears in )      Set up an solve a system to determine the payback time of installing the solar heating system.      How does the payback time change if the state offers a $7,000 rebate? That means, in effect, that the solar system costs $7,000 less to install. Write a new equation for the solar heating system. Then set up and solve the new system.      How high a rebate would the state have to offer to ensure a payback time of 15 years? Hint: compare the costs of gas and solar heating systems at 15 years.     "
},
{
  "id": "sec-Intercepts",
  "level": "1",
  "url": "sec-Intercepts.html",
  "type": "Section",
  "number": "4.3",
  "title": "Intercepts and direct proportionality",
  "body": " Intercepts and direct proportionality   Kaleb runs minute miles, which means it takes him around 8.5 minutes to run each mile. Yesterday he was out for about 30 minutes and ran the 2.8 mile loop by our house. That strikes me as curious because if he ran 2.8 miles at 8.5 minutes per mile that should take But Kaleb took 30 minutes. That's 6 minutes longer than expected. Well, technically 6.2 minutes since but let's work with 6 since the 30 was only approximate to begin with.  The point is, what's up with that missing 6 minutes? Oh, I bet I know what it is. Ever since Kaleb turned fifty years old, he's been having trouble with his knees. I bet he's finally stretching like his doctor ordered. Must be around 6 minutes of stretches after each run.  Since Kaleb's total time is function of how far he runs, our variables are Notice that we are determining how the time Kaleb spends running depends on the distance he runs, so the time is our dependent variable. Often time is the independent variable, but not so here.  For the sake of this problem, we assume Kaleb runs a steady 8.5 minutes per mile so the rate of change is constant. The equation must be linear and so it fits the template The slope is 8.5 minutes per mile. The 6 minutes Kaleb spends stretching is the intercept, even though it's named start in the template and Kaleb is actually stretching at the end of his run. A better name might be fixed. Whatever you call it, the equation is As a quick check, for that 2.8 mile run we have and so   By the way, there's a shorter way to find the intercept. The intercept is the starting value, or in this case the time spent stretching. So we take the total time and then subtract out the time spent running In general,  Intercept (of Linear) Formula       Kaleb's daughter Muna runs considerably faster, 7 minute miles, and she's not into stretching at all. For her to run the 2.8 mile loop by our house, it would take That means while her dad would take 30 minutes to run the loop and do his stretches, Muna can run it in just under 20 minutes.  The equation for Muna is The slope is 7 minutes per mile. What's the intercept for this equation? There's no time for stretching in her equation, so it's like . The intercept is 0 minutes.  Compare the graphs. Each intercept shows where that line meets the vertical axis. Kaleb's crosses at 6 minutes, but Muna's crosses at 0 minutes, at the origin (where the two axes cross).     By the way, Muna's equation is a direct proportionality because the only thing happening is that the independent variable is being scaled by a proportionality constant , . Any direct proportionality fits this template.   Direct Proportionality Template    To understand what proportionality means, recall that Muna can run 2.8 miles in 19.6 minutes. What happens if she goes for a run twice as long? Then she would be running miles. Her time would be Notice that . So, it would take her twice the time to run twice the distance. This general idea - that you get twice the value of the dependent variable if you have twice the value of the independent variable - characterizes direct proportions. We sometimes say that Muna's time is proportional to how far she runs. Nothing special about twice here, as it would take her three times the time to run three times the distance, etc.  Not so for Kaleb. Remember it takes him 29.8 minutes to run that 2.8 miles. If he runs twice the distance, which is 5.6 miles, it takes which is not quite twice the time, since . The key is that Kaleb does not stretch twice, only once, for the longer run so double the distance does not count the 6 minutes again. Kaleb's equation is not a direct proportionality. Another way to say that is that Kaleb's time is not proportional to how far he runs. It is a function of how far he runs, yes, but not proportionally so.    Do you know     What the intercept of a linear function means in the story and what it tells us about the graph?    How to calculate the intercept given the slope and an example (another point on the graph)?    Why an intercept might not make sense, for example if it's outside the domain of the function?    When a linear function is a direct proportion?    Why you cannot reason proportionally if the linear function is not a direct proportion?    What the graph of a direct proportion looks like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      In each of the following stories, the temperature changes over time. It might be confusing to call either variable , so use for the time in hours and for the temperature in degrees (°F). In each case, time should be measured from the start of the story.     It was really cold at 8:30 this morning when Raina arrived at the office. Luckily the heating system warms things up very quickly, 4°F per hour. By 11:00 a.m. it was a very comfortable 72°F.     Figure out what the temperature was at 8:30 a.m.      Write an equation illustrating the function.       While 72°F is a perfectly good temperature for an office, not so for ballroom dancing. When Raina arrived for her practice at 5:30 that evening, she began to sweat before she even took the floor. Turns out the air conditioner had been running since 4:00 p.m. but it only cools down the room 3°F per hour.     Figure out what the temperature was at 4:00 p.m.      Write an equation illustrating the function.          Maryn is very happy. Her interior design business is finally showing a profit. She has logged a total of 471 billable hours at $35 per hour since she started her business. Accounting for start up costs, her net profit now totals $2,194.     How much were Maryn's start up costs?      Identify the slope and intercept (including their units and sign) and explain what each means in terms of the story.       Calculate what Maryn's profits will be once she has logged a total of 1,000 hours.      Name the variables and write an equation relating them.      Graph the function.         For each story, find the initial weight of the person and use it to write an equation showing how the person's weight pounds depends on the time, weeks. (Stories also appear in and )      Jerome has gained weight since he took his power training to the next level ten weeks ago, at the rate of around 1 pound a week. He now weighs 198 pounds.      Vanessa's doctor put her on a sensible diet and exercise plan to get her back to a healthy weight. She will need to lose an average of 1.25 pounds a week to reach her goal weight of 148 pounds in a year. Use 1 year = 52 weeks.      After the past 6 weeks of terrible migrane headaches, Carlos is down to 158 pounds. He has lost 4 pounds a week.      Since she has been pregnant, Zoe has gained the recommended pound per week. Now 30 weeks pregnant and 168 pounds, she wonders if she will ever see her feet again.         Each story describes a situation that we are assuming is linear. Decide whether it is proportional , meaning the intercept equals zero. If it is proportional, explain why the intercept would be zero. If it is not proportional, explain what the intercept would mean in the story.     The price of kiwis (a kind of fruit) depends on how many kiwis you buy.      The price of a bag of tortillas depends on how many tortillas are in the bag.      The time it takes to vacuum a rug depends on the area of the rug.      The time it takes to wash dishes depends on how many dirty dishes there are.      The amount of laundry detergent I have left depends on how many loads of laundry I did.        Different runners run at different paces. And take a different amount of extra time to warm-up and\/or cool down. The table lists six runners, their training time to run a 5K (rounded to the nearest minute), and their pace (in minutes per mile).    Name  Yannick  Olga  Aziz  Hitomi  Galen  Fiona    Pace  8.2  8.6  9.5  10  10  11.2    5K time  32  35  33  36  31  44    extra time  ?  ?  ?  ?  ?  ?       We are interested in each runner's extra time, but first convert 5K, which is short for 5 kilometers, to miles using .      Now, determine the extra (warm up\/cool down) time for each runner and list your answer in the table. Report your answer to the nearest minute.      List the runners in order from least to most warm up\/cool down time.       At 10:00 a.m. we've got snowy skies and 4 inches of new snow on the ground. It's coming down fast out there at a rate of an inch per hour.     Name the variables, measuring time in hours since 10:00 a.m.      Write an equation illustrating the dependence.      When did the snowstorm start?      Name a new variable for the time measured in hours since the snowstorm started.      Write an equation illustrating the dependence using this new variable instead.      Check that this equation confirms 4 inches of new snow at 10:00 a.m.      Explain why the two equations have different intercepts.       The public beach near Paloma's house has lost about 3 9 feet a year of beach depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. Currently it's 210 feet deep.   (Story also appears in and )      The county is considering filling in sand to offset the erosion, back to the historical mark (60 years ago). How deep was it then? Notice that you need to convert 3 9 to (decimal) feet first.      Name the variables and write an equation relating them, assuming the county does not fill in the beach now. Measure time from 60 years ago.      The country agrees to start filling in sand when the depth drops below 180 feet. How many (more) years will that take to happen? First estimate the answer using successive approximation. Then set up and solve an inequality to find the answer.      Draw a graph showing the sand erosion over the past 60 years and including the next 20 years, assuming the county does not do any filling.      Identify the slope and intercept and explain their meaning in the story.       Clyde is loading bricks weighing 4.5 pounds each onto his wheelbarrow. The wheelbarrow weighs 89 pounds when it has 16 bricks in it. (That weight includes both the bricks and the wheelbarrow itself.)     How much would Clyde's wheelbarrow weigh if it were empty?      Name the variables and write an equation relating them.      How much (total) will the wheelbarrow weigh if he loads a total of 30 bricks?      Clyde continues loading bricks until the wheelbarrow full of bricks weighs 206 pounds. How many bricks are in it?      Graph and check.       The city offers bus convenience passes - 20 rides for $12.95 or 80 rides for $51.80.     Calculate the rate of change.      Is there a convenience charge?      What is the name for this type of function?       To make cookies it takes a few minutes to prepare the dough. After that it takes 12 minutes per batch to bake in the oven. Last time I made 3 batches of cookies and it took a total of 54 minutes.     How long does it take me to prepare the dough?      How long would it take me to make 10 batches of cookies for the cookie swap? Assume the time to prepare the dough remains the same and only one batch bakes in the oven at a time.      Name the variables and write an equation describing the function.      Identify the slope and intercept and explain their meaning in the story.      "
},
{
  "id": "sec-Intercepts-2-10",
  "level": "2",
  "url": "sec-Intercepts.html#sec-Intercepts-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proportionality proportionality constant "
},
{
  "id": "sec-Intercepts-2-12",
  "level": "2",
  "url": "sec-Intercepts.html#sec-Intercepts-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proportional "
},
{
  "id": "temperature-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#temperature-intercepts",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "  In each of the following stories, the temperature changes over time. It might be confusing to call either variable , so use for the time in hours and for the temperature in degrees (°F). In each case, time should be measured from the start of the story.     It was really cold at 8:30 this morning when Raina arrived at the office. Luckily the heating system warms things up very quickly, 4°F per hour. By 11:00 a.m. it was a very comfortable 72°F.     Figure out what the temperature was at 8:30 a.m.      Write an equation illustrating the function.       While 72°F is a perfectly good temperature for an office, not so for ballroom dancing. When Raina arrived for her practice at 5:30 that evening, she began to sweat before she even took the floor. Turns out the air conditioner had been running since 4:00 p.m. but it only cools down the room 3°F per hour.     Figure out what the temperature was at 4:00 p.m.      Write an equation illustrating the function.     "
},
{
  "id": "design-business-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#design-business-intercepts",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  Maryn is very happy. Her interior design business is finally showing a profit. She has logged a total of 471 billable hours at $35 per hour since she started her business. Accounting for start up costs, her net profit now totals $2,194.     How much were Maryn's start up costs?      Identify the slope and intercept (including their units and sign) and explain what each means in terms of the story.       Calculate what Maryn's profits will be once she has logged a total of 1,000 hours.      Name the variables and write an equation relating them.      Graph the function.    "
},
{
  "id": "weight-change-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#weight-change-intercepts",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  For each story, find the initial weight of the person and use it to write an equation showing how the person's weight pounds depends on the time, weeks. (Stories also appear in and )      Jerome has gained weight since he took his power training to the next level ten weeks ago, at the rate of around 1 pound a week. He now weighs 198 pounds.      Vanessa's doctor put her on a sensible diet and exercise plan to get her back to a healthy weight. She will need to lose an average of 1.25 pounds a week to reach her goal weight of 148 pounds in a year. Use 1 year = 52 weeks.      After the past 6 weeks of terrible migrane headaches, Carlos is down to 158 pounds. He has lost 4 pounds a week.      Since she has been pregnant, Zoe has gained the recommended pound per week. Now 30 weeks pregnant and 168 pounds, she wonders if she will ever see her feet again.    "
},
{
  "id": "proportional-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#proportional-intercepts",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  Each story describes a situation that we are assuming is linear. Decide whether it is proportional , meaning the intercept equals zero. If it is proportional, explain why the intercept would be zero. If it is not proportional, explain what the intercept would mean in the story.     The price of kiwis (a kind of fruit) depends on how many kiwis you buy.      The price of a bag of tortillas depends on how many tortillas are in the bag.      The time it takes to vacuum a rug depends on the area of the rug.      The time it takes to wash dishes depends on how many dirty dishes there are.      The amount of laundry detergent I have left depends on how many loads of laundry I did.    "
},
{
  "id": "runners-warmup-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#runners-warmup-intercepts",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  Different runners run at different paces. And take a different amount of extra time to warm-up and\/or cool down. The table lists six runners, their training time to run a 5K (rounded to the nearest minute), and their pace (in minutes per mile).    Name  Yannick  Olga  Aziz  Hitomi  Galen  Fiona    Pace  8.2  8.6  9.5  10  10  11.2    5K time  32  35  33  36  31  44    extra time  ?  ?  ?  ?  ?  ?       We are interested in each runner's extra time, but first convert 5K, which is short for 5 kilometers, to miles using .      Now, determine the extra (warm up\/cool down) time for each runner and list your answer in the table. Report your answer to the nearest minute.      List the runners in order from least to most warm up\/cool down time.    "
},
{
  "id": "snowfall-intercept",
  "level": "2",
  "url": "sec-Intercepts.html#snowfall-intercept",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  At 10:00 a.m. we've got snowy skies and 4 inches of new snow on the ground. It's coming down fast out there at a rate of an inch per hour.     Name the variables, measuring time in hours since 10:00 a.m.      Write an equation illustrating the dependence.      When did the snowstorm start?      Name a new variable for the time measured in hours since the snowstorm started.      Write an equation illustrating the dependence using this new variable instead.      Check that this equation confirms 4 inches of new snow at 10:00 a.m.      Explain why the two equations have different intercepts.    "
},
{
  "id": "beach-erosion-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#beach-erosion-intercepts",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  The public beach near Paloma's house has lost about 3 9 feet a year of beach depth (measured from the dunes to the high water mark) due to erosion since they started keeping records 60 years ago. Currently it's 210 feet deep.   (Story also appears in and )      The county is considering filling in sand to offset the erosion, back to the historical mark (60 years ago). How deep was it then? Notice that you need to convert 3 9 to (decimal) feet first.      Name the variables and write an equation relating them, assuming the county does not fill in the beach now. Measure time from 60 years ago.      The country agrees to start filling in sand when the depth drops below 180 feet. How many (more) years will that take to happen? First estimate the answer using successive approximation. Then set up and solve an inequality to find the answer.      Draw a graph showing the sand erosion over the past 60 years and including the next 20 years, assuming the county does not do any filling.      Identify the slope and intercept and explain their meaning in the story.    "
},
{
  "id": "brick-weight-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#brick-weight-intercepts",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": "  Clyde is loading bricks weighing 4.5 pounds each onto his wheelbarrow. The wheelbarrow weighs 89 pounds when it has 16 bricks in it. (That weight includes both the bricks and the wheelbarrow itself.)     How much would Clyde's wheelbarrow weigh if it were empty?      Name the variables and write an equation relating them.      How much (total) will the wheelbarrow weigh if he loads a total of 30 bricks?      Clyde continues loading bricks until the wheelbarrow full of bricks weighs 206 pounds. How many bricks are in it?      Graph and check.    "
},
{
  "id": "bus-passes-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#bus-passes-intercepts",
  "type": "Exercise",
  "number": "4.3.9",
  "title": "",
  "body": "  The city offers bus convenience passes - 20 rides for $12.95 or 80 rides for $51.80.     Calculate the rate of change.      Is there a convenience charge?      What is the name for this type of function?    "
},
{
  "id": "cookies-intercepts",
  "level": "2",
  "url": "sec-Intercepts.html#cookies-intercepts",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "",
  "body": "  To make cookies it takes a few minutes to prepare the dough. After that it takes 12 minutes per batch to bake in the oven. Last time I made 3 batches of cookies and it took a total of 54 minutes.     How long does it take me to prepare the dough?      How long would it take me to make 10 batches of cookies for the cookie swap? Assume the time to prepare the dough remains the same and only one batch bakes in the oven at a time.      Name the variables and write an equation describing the function.      Identify the slope and intercept and explain their meaning in the story.    "
},
{
  "id": "sec-Slopes",
  "level": "1",
  "url": "sec-Slopes.html",
  "type": "Section",
  "number": "4.4",
  "title": "Slopes",
  "body": " Slopes   Last week our supplier delivered 13 cases of paper for the office and charged us $534.87. This week, they delivered 20 cases of paper for $814.80. We assume that their charge includes a fixed delivery fee and per case cost, so the dependence must be linear. We would like to understand their pricing scheme better by writing the equation.  What to do? We can name the variables and put the information we are given into a table. That's a start. The variables must be and we know     13  20     534.87  814.80    Let's see. The fixed delivery fee that we don't know is the intercept. The per case cost that we also don't know is the slope. To write the linear equation we need to know both.  The slope is just the rate of change, so we can figure out the slope just from the information in our table. or, all at once, as   Either way, each case costs $39.99 and the slope is $39.99 per case.  Now that we know the slope, we can find the intercept. At $39.99 per case we would expect 13 cases to cost But the story tells us 13 cases cost $534.87. The difference must be the delivery fee which is the intercept. Remember   Why did we use 13 cases instead of 20 cases? No particular reason. Look what happens if we use 20 cases at $814.80 instead. Yup. Still $15 delivery fee.  The equation is linear so it fits our template and now that we know the slope and intercept, we can put those in to get our equation. Let's check. When we get and when we get You can also check that the graph goes through the original two points we were given. The intercept is $15, but because of the scale it shows up as barely above $0 on our graph.     The supplier also picks up recyclable paper and boxes. They normally charge $18 per pickup but under a new reuse incentive program, they discount a little for each box that's in good enough condition to use again. This week's recycling charge was only $7.60 because we returned the previous 13 boxes all in good shape.  Now we're interested in how the recycling charge depends on the number of boxes in good condition that we return. The new variables are and we know     0  13     18  7.60    See how we used for the situation where no boxes are returned? Clever.  We can draw the graph using just these two points. (But we'll check later, once we have the equation, to be sure.)     Since there is a fixed discount per box, we again have a linear function. We know the intercept is the normal recycling fee of $18. We need to find the slope. It might look funny to get a negative, but it's to be expected. They are subtracting for each good box returned. The discount is 80¢ per box and so the equation is Check when we have   What's the most boxes you could get credit for? Probably the most they discount is the full $18, which would mean that . That means we want to solve . Check that we get , which means that 22 boxes would be almost $0 and for 23 boxes, they should pick up for free. We can check that 22 boxes gives and 23 boxes gives Well, unless they're nice and give us cash back.    Do you know     Which types of situations are linear?    What the slope of a linear function means in the story and what it tells us about the graph?    How to calculate the slope between two points?    What it means if the slope is negative?    How to find the equation of a line through two points?    How to find a linear function given two examples in a story?    If both the slope and intercept are unknown, which is easier to calculate first?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      For his Oscars party, Harland had 70 chicken wings delivered for $51.25. For his Super Bowl bash, Harland had 125 chicken wings delivered for $83.70. In each case, the total cost includes the cost per wing and the fixed delivery charge.     Find the slope, including units, and explain what it means in the story.      Find the intercept, including units, and explain what it means in the story.      Name the variables and write an equation for the function.      How many wings could Harland order for $100? Solve your equation.      Graph and check.         Jana is making belts out of leather strips and a metal clasp. A short belt (as shown) is 24.5 inches long and includes 7 leather strips. A long belt (not shown) is 37.3 inches long and includes 11 leather strips. Each belt includes one metal clasp that is part of the total length. All belts use the same length clasp.      Name the variables, including units.      How long is each leather strip?      How long is the metal clasp?      Write an equation relating the variables.      Solve your equation to find the number of leather strips in an extra long belt that is 43.7 inches long.         The local ski resort is trying to set the price for season passes. They know from past experience that they will sell around 14,000 passes if the season ticket price is $380. If the price is $400, they will sell fewer, perhaps only 11,000 passes. You can assume this decrease in demand is linear.     Name the variables, including units and dependence.      For every dollar increase in price, how many fewer people purchase season passes?      Find the intercept. Explain why this number does not make sense in the problem.       Write an equation for the function.       How many season passes will they sell if the price is reduced to $355?      The ski resort can compute the revenue (total amount of money they take in) by multiplying the ticket price times the number of tickets sold. Calculate the revenue when ticket prices are $355, $380, and $400.       Of these three prices, which yields the most revenue?         Boy, am I out of shape. Right now I can only press about 15 pounds. ( Press means lift weight off my chest. Literally.) My trainer says I should be able to press 50 pounds by the end of 10 weeks of serious lifting. I plan to increase the weight I press by a fixed amount each week.     Name the variables and write an equation for my trainer's projection. Hint: You already know the intercept.       Make a table showing my trainer's projection for after 0, 5, 10, 15, and 20 weeks.      Years ago I could press 90 pounds. At this rate, when will I be able to press at least 90 pounds again? Set up and solve an inequality.      Draw a graph illustrating the function.      I am skeptical. I do not think I will be able to press 50 pounds by the end of 10 weeks. If I revise my equation, would my new slope be larger or smaller?   Hint: Try sketching in a possible revised line on your graph assuming that after 10 weeks I will press much less than 50 pounds.       Will my revised projections mean I will reach that 90-pound goal sooner or later than my trainer thinks? Explain. Hint: extend your graph.         I just saw an advertisement for the same paper we use at the office for only $4.25 per ream at a supply store. (Ream? Yes. That's 500 sheets of paper, usually wrapped in paper.) Is that a good deal?     There are 10 reams in a case. What is the advertised price come to per case?      I'm not sure I want to go get a case of paper myself because a case of paper is pretty heavy to lift. Paper is sold by the weight. Thick, heavier paper is considered fancier than lighter paper. The office uses a multipurpose paper called 92 meaning it weighs 92 grams per square meter which comes out to around 5 grams per sheet. How much does a case weigh? Use .      But, at the office we pay a delivery charge. Compare the cost of having just one case delivered versus me buying one case at the store. Recall that the office pays $15 delivery fee and $39.99 per case.      Write a new equation for paper cost assuming I pick it up at the store. Use for the number of cases of paper and is the total cost, in dollars. Hint: this equation is a direct proportionality.       Compare total cost if we get 4 cases either delivered or from the store. Repeat for 13 cases. Recall that the equation for delivered paper is .      Graph both functions together on the same axes.      Set up and solve an inequality for when delivered is cheaper.       The amount of garbage generated in the United States has increased steadily, from 88.1 million tons in 1960 to 254.2 million tons in 2006.   Source: Environmental Protection Agency    (Story also appears in )      Assuming the amount of garbage increases linearly, by how much has garbage increased each year?      Name the variables, including units, and write a linear equation relating them.      According to your equation, how much garbage was projected for 2010? For 2020?      If this trend continues, when will the amount of garbage generated exceed 300 million tons? Show how to set up and solve an inequality to find the answer. Be sure to state the actual year.      A 2010 report listed the amount of garbage at 249 million tons. Compare this information to your previous answer. What are some possible explanations for why this amount was less than expected (and actually decreased from 2006)?       Now that he is retired, Elmer gets a pension check from the Railroad Company each month. There's a set amount he gets each month but the company deducts a fixed percentage of whatever outside income he earns. Elmer works part-time at the local hardware store. In February he earned $444.10 at the hardware store and his pension check that month was $886.23. In March he worked much less, earning only $179.30 at the hardware store; his pension check that month was $912.71.     What percentage of his income from the hardware store is deducted from his pension check? Calculate the fraction of a dollar deducted for each dollar earned. Convert your answer to percent.       If Elmer doesn't work in April, how much will his pension check be?      Write an equation showing how Elmer's pension check is affected by his income from the hardware store. Use for his income from the hardware store and for his pension check, both in dollars.      Elmer would like to earn enough at the hardware store to make at least $1,200 total per month. Using for the total Elmer earns in a month (in dollars), write an equation for as a function of . Hint: start with , then use your equation for from part (c) to write everything with instead.       Now set up and solve an inequality to determine how much Elmer needs to earn at the hardware store to make at least $1,200 total per month.      If Elmer earns $8.15 per hour, how many hours does he need to work at the hardware store to make at least $1,200 total per month, accounting for his income from the hardware store and his pension check?       Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck. They use a linear pricing model.    distance driven (miles)  50  100  150  200    rental cost ($)  37.50  55.00  72.50  90.00    If you rent a truck and drive it 10 miles, how much do you think it will cost? As part of your work, name the variables and write a linear equation relating them.   (Story also appears in and )       In 2008, the median household income was about $50,303. By 2010 it was down to about $49,445.   Source: U.S. Census Bureau      By how much has it decreased each year, on average? The phrase on average means that you should assume the decrease is linear.      Name the variables and write a linear equation relating them.      At this rate when will the median family fall below $48,000? Set up and solve an inequality.      Graph and check.       Buoy instruments in the oceans report changes in the sea level. In 2005 the sea level (averaged across all the oceans) was 51.7 millimeters above the historical sea level. In 2012 the sea level was 73.4 millimeters above the historical sea level. You can assume the increase is linear.   Source: National Aeronautics and Space Administration      Name the variables, including units.      Display the information from the story in a table.      What is the rate of increase for the sea level?      Write an equation relating the variables.      In what year will the sea level be 80 millimeters above the historical level?      "
},
{
  "id": "wings-delivery-slopes",
  "level": "2",
  "url": "sec-Slopes.html#wings-delivery-slopes",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "  For his Oscars party, Harland had 70 chicken wings delivered for $51.25. For his Super Bowl bash, Harland had 125 chicken wings delivered for $83.70. In each case, the total cost includes the cost per wing and the fixed delivery charge.     Find the slope, including units, and explain what it means in the story.      Find the intercept, including units, and explain what it means in the story.      Name the variables and write an equation for the function.      How many wings could Harland order for $100? Solve your equation.      Graph and check.    "
},
{
  "id": "leather-belts-slopes",
  "level": "2",
  "url": "sec-Slopes.html#leather-belts-slopes",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "  Jana is making belts out of leather strips and a metal clasp. A short belt (as shown) is 24.5 inches long and includes 7 leather strips. A long belt (not shown) is 37.3 inches long and includes 11 leather strips. Each belt includes one metal clasp that is part of the total length. All belts use the same length clasp.      Name the variables, including units.      How long is each leather strip?      How long is the metal clasp?      Write an equation relating the variables.      Solve your equation to find the number of leather strips in an extra long belt that is 43.7 inches long.    "
},
{
  "id": "ski-passes-slopes",
  "level": "2",
  "url": "sec-Slopes.html#ski-passes-slopes",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "  The local ski resort is trying to set the price for season passes. They know from past experience that they will sell around 14,000 passes if the season ticket price is $380. If the price is $400, they will sell fewer, perhaps only 11,000 passes. You can assume this decrease in demand is linear.     Name the variables, including units and dependence.      For every dollar increase in price, how many fewer people purchase season passes?      Find the intercept. Explain why this number does not make sense in the problem.       Write an equation for the function.       How many season passes will they sell if the price is reduced to $355?      The ski resort can compute the revenue (total amount of money they take in) by multiplying the ticket price times the number of tickets sold. Calculate the revenue when ticket prices are $355, $380, and $400.       Of these three prices, which yields the most revenue?    "
},
{
  "id": "press-weight-slopes",
  "level": "2",
  "url": "sec-Slopes.html#press-weight-slopes",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "  Boy, am I out of shape. Right now I can only press about 15 pounds. ( Press means lift weight off my chest. Literally.) My trainer says I should be able to press 50 pounds by the end of 10 weeks of serious lifting. I plan to increase the weight I press by a fixed amount each week.     Name the variables and write an equation for my trainer's projection. Hint: You already know the intercept.       Make a table showing my trainer's projection for after 0, 5, 10, 15, and 20 weeks.      Years ago I could press 90 pounds. At this rate, when will I be able to press at least 90 pounds again? Set up and solve an inequality.      Draw a graph illustrating the function.      I am skeptical. I do not think I will be able to press 50 pounds by the end of 10 weeks. If I revise my equation, would my new slope be larger or smaller?   Hint: Try sketching in a possible revised line on your graph assuming that after 10 weeks I will press much less than 50 pounds.       Will my revised projections mean I will reach that 90-pound goal sooner or later than my trainer thinks? Explain. Hint: extend your graph.     "
},
{
  "id": "paper-slopes",
  "level": "2",
  "url": "sec-Slopes.html#paper-slopes",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "  I just saw an advertisement for the same paper we use at the office for only $4.25 per ream at a supply store. (Ream? Yes. That's 500 sheets of paper, usually wrapped in paper.) Is that a good deal?     There are 10 reams in a case. What is the advertised price come to per case?      I'm not sure I want to go get a case of paper myself because a case of paper is pretty heavy to lift. Paper is sold by the weight. Thick, heavier paper is considered fancier than lighter paper. The office uses a multipurpose paper called 92 meaning it weighs 92 grams per square meter which comes out to around 5 grams per sheet. How much does a case weigh? Use .      But, at the office we pay a delivery charge. Compare the cost of having just one case delivered versus me buying one case at the store. Recall that the office pays $15 delivery fee and $39.99 per case.      Write a new equation for paper cost assuming I pick it up at the store. Use for the number of cases of paper and is the total cost, in dollars. Hint: this equation is a direct proportionality.       Compare total cost if we get 4 cases either delivered or from the store. Repeat for 13 cases. Recall that the equation for delivered paper is .      Graph both functions together on the same axes.      Set up and solve an inequality for when delivered is cheaper.    "
},
{
  "id": "garbage-slopes",
  "level": "2",
  "url": "sec-Slopes.html#garbage-slopes",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "  The amount of garbage generated in the United States has increased steadily, from 88.1 million tons in 1960 to 254.2 million tons in 2006.   Source: Environmental Protection Agency    (Story also appears in )      Assuming the amount of garbage increases linearly, by how much has garbage increased each year?      Name the variables, including units, and write a linear equation relating them.      According to your equation, how much garbage was projected for 2010? For 2020?      If this trend continues, when will the amount of garbage generated exceed 300 million tons? Show how to set up and solve an inequality to find the answer. Be sure to state the actual year.      A 2010 report listed the amount of garbage at 249 million tons. Compare this information to your previous answer. What are some possible explanations for why this amount was less than expected (and actually decreased from 2006)?    "
},
{
  "id": "pension-slopes",
  "level": "2",
  "url": "sec-Slopes.html#pension-slopes",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "  Now that he is retired, Elmer gets a pension check from the Railroad Company each month. There's a set amount he gets each month but the company deducts a fixed percentage of whatever outside income he earns. Elmer works part-time at the local hardware store. In February he earned $444.10 at the hardware store and his pension check that month was $886.23. In March he worked much less, earning only $179.30 at the hardware store; his pension check that month was $912.71.     What percentage of his income from the hardware store is deducted from his pension check? Calculate the fraction of a dollar deducted for each dollar earned. Convert your answer to percent.       If Elmer doesn't work in April, how much will his pension check be?      Write an equation showing how Elmer's pension check is affected by his income from the hardware store. Use for his income from the hardware store and for his pension check, both in dollars.      Elmer would like to earn enough at the hardware store to make at least $1,200 total per month. Using for the total Elmer earns in a month (in dollars), write an equation for as a function of . Hint: start with , then use your equation for from part (c) to write everything with instead.       Now set up and solve an inequality to determine how much Elmer needs to earn at the hardware store to make at least $1,200 total per month.      If Elmer earns $8.15 per hour, how many hours does he need to work at the hardware store to make at least $1,200 total per month, accounting for his income from the hardware store and his pension check?    "
},
{
  "id": "truck-rental-slopes",
  "level": "2",
  "url": "sec-Slopes.html#truck-rental-slopes",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "  Your local truck rental agency lists what it costs to rent a truck (for one day) based on the number of miles you drive the truck. They use a linear pricing model.    distance driven (miles)  50  100  150  200    rental cost ($)  37.50  55.00  72.50  90.00    If you rent a truck and drive it 10 miles, how much do you think it will cost? As part of your work, name the variables and write a linear equation relating them.   (Story also appears in and )    "
},
{
  "id": "median-income-slopes",
  "level": "2",
  "url": "sec-Slopes.html#median-income-slopes",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "  In 2008, the median household income was about $50,303. By 2010 it was down to about $49,445.   Source: U.S. Census Bureau      By how much has it decreased each year, on average? The phrase on average means that you should assume the decrease is linear.      Name the variables and write a linear equation relating them.      At this rate when will the median family fall below $48,000? Set up and solve an inequality.      Graph and check.    "
},
{
  "id": "sea-level-slopes",
  "level": "2",
  "url": "sec-Slopes.html#sea-level-slopes",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": "  Buoy instruments in the oceans report changes in the sea level. In 2005 the sea level (averaged across all the oceans) was 51.7 millimeters above the historical sea level. In 2012 the sea level was 73.4 millimeters above the historical sea level. You can assume the increase is linear.   Source: National Aeronautics and Space Administration      Name the variables, including units.      Display the information from the story in a table.      What is the rate of increase for the sea level?      Write an equation relating the variables.      In what year will the sea level be 80 millimeters above the historical level?    "
},
{
  "id": "sec-Fitting_lines_to_data",
  "level": "1",
  "url": "sec-Fitting_lines_to_data.html",
  "type": "Section",
  "number": "4.5",
  "title": "Fitting lines to data",
  "body": " Fitting lines to data   Thanh has an internship studying road salt usage in a northern metropolitan area. Road salt is used to melt ice and snow on paved streets. Because it can damage vegetation and influence both surface water (lakes) and ground water, and because it costs money to run the trucks that apply the salt, people are interested in the amount of road salt used.  One data set compares road salt usage per county. Thanh learned from county officials that road salt use varies widely from county to county, but, not surprisingly, it depends heavily on the length of road in the county. So, the variables are A lane mile is the area of road one mile long and one lane wide. Now you know.  Thanh also learned that while road salt use is a function of lane miles, it is not proportional as there are more complicated factors involved. Still, he would like to model road salt use as a function of road length. Here are the data for counties in the metro area.    County  A  C  D  H  R  T  W     710  420  800  1,420  720  510  480     14,700  3,900  11,600  15,500  9,400  5,000  9,700    To develop his model Thanh imagined a new county, County X, that had 600 lane miles of road. In looking at the data, he finds two counties with close to 600 lane miles: County T and County A.     County T  County X  County A     510  600  710     5,000  ?  14,700    Based on this data, Thanh expects County X would use between 5,000 and 14,700 tons\/year of road salt. Since 600 is closer to 510 than to 710, he starts with a guess of around 9,000 tons\/year of road salt.  To improve this estimate, Thanh decides to use a linear model, hoping that will account for both road length influence and fixed factors. He begins by finding the slope.   Next he calculates the intercept. He was not expecting a negative value but decides to use it anyway. Using the template for a linear equation Thanh gets which he rewrites as As a check, for lane miles, he gets   More importantly, for 600 miles his equation gives the estimate of Thanh rounds this estimate to 9,400 tons\/year of road salt for County X, which is close to his initial guess of 9,000 tons\/year.  Next, Thanh imagines another new county, County Y, that has 500 lane miles of road. He looks to the data for counties with close to 500 lane miles.     County W  County Y  County T     480  500  510     9,700  ?  5,000    Wait a minute. The county with fewer roads used more salt? That doesn't make sense.  Thanh decides to look at all the data at once in a scatter plot.     When Thanh was using the nearby points to estimate for Counties X and Y, it's as if he were connecting the dots with line segments on the graph. Notice that the line that goes through 500 lane miles is decreasing, just like Thanh saw in his table.     Thanh suspects that this connect-the-dots model is too heavily influenced by individual county road-salting habits. He would like a way to get one line to use for everything, knowing full well that one line cannot possibly go through all of the data points.  Which line to use? One option would be to stick with the line he found through the points for Counties T and A: He redraws the scatter plot to show that line. Because the intercept is negative, it doesn't show up on his graph. The line seems to be too low at first and too high later. The problem is that this line is too steep (has too large a slope).     Thanh decides to try a line that is less steep. After drawing in a few lines, he decides to try the line between the points for Counties C and D instead, which has equation Unfortunately this line seems too low. (Again the negative intercept isn't visible.)     Neither of these lines came close to the point for County H on the far right, so Thanh considers one more line, this time through County H and County R, which has equation This line has a positive intercept just above 3,000 tons\/year, as you can see on the graph.     Thanh thinks the H-R line is reasonable, but it makes him wonder how to decide if one line is better than another. Generally speaking the best fitting line makes the space between the line and the data points as small as possible. (There is actually a much more official definition.) After using a little statistical software, Thanh determines that for this data set, the official best fitting line has equation   Thanh wants to add this line to his graph so first he calculates a few values. While it's true that any two points would do, he played it safe and plotted three points, being sure to use 0 in order to find the intercept.     0  600  1,500     2,741  8,741  17,741    He graphs this line and notices it is very similar to the H-R line, just a tiny bit higher and a tiny bit steeper. The points from the table are highlighted on the graph just to help you see how we graphed the line. Remember, those aren't actual data points.     Thanh is bothered by the fact that County H seems to be off on its own. The largest city in this area is in County H. Between the budget crunch and the nature of the urban landscape, the city tends to use much less road salt than the surrounding areas. So County H really isn't very typical at all. In statistics, this sort of value is known by the descriptive term outlier (as in it lies way out there. )  So Thanh decides to look at the statistically best-fitting line ignoring County H this time. Back to his software and he finds This line is less steep than the T-A line and higher than the C-D line. Seems perfect.       Do you know     What a scatter plot is?    Why we might begin the scale for a scatter plot somewhere other than 0?    Why we would approximate data with a linear function?    How to decide visually whether a line is a reasonable approximation of the data?    The name for a point that falls very far away from an approximating line?    How to graph a line from its equation by creating a table first?    Why even the best fitting line doesn't go through most of the data points?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      The scatter plot shows the total volume of wood, cubic feet, in managed forests of different ages, years.     For each line, state some reason why the fit is not good. (We know the line will not go through all, or even most, of the points, so that is not the problem. Instead look at slope\/steepness, intercept\/height, etc.)    Line A     Line B                   Line C     Line D                     Which of these four lines do you think fits best, and why?         Noel is considering investing in a company's stock so he looked up a few values.    Day  0  300  500    Value ($)  23.19  37.00  48.10       Calculate the daily rate of change of the stock's price during the first 300 days.      Calculate the daily rate of change of the stock's price from Day 300 to Day 500.      Is this growth linear? How do you know?      The scatter plot shows additional values of the stock Noel is considering buying.   Draw in a line through the points for Day 300 and Day 500. Label this line #1. Explain why that line does not fit the data well.      Draw in a line that fits the data better. It does not need to go through any of the points exactly. Label that line #2.         Is it true that students who work part-time have lower grades? Do the number of hours matter? The table shows the grade point average (GPA) of ten students compared to the number of hours per week each student works at a part time job. The variables we used are , for the time worked at job (hours\/week), and for the GPA, on the usual scale of 0.0 to 4.0.     0  0  10  12  14  15  16  18  20  20     3.72  3.91  3.43  2.79  3.08  2.62  2.44  3.17  3.00  2.55       Make a scatter plot of the points. Start the -axis at 2.0.      Find the equation of the line that goes through the first and last point listed.   Hint: the first point tells you the intercept.       Draw this line on your graph and label it line A.      Use your equation for line A to figure out what you would expect for the GPA of a student working 30 hours per week.      It turns out, the best fitting line has equation . Make a table of values for this equation using hours.      Use that table of values to graph this best fitting line on that same set of axes. Label it line B.      According to line B, what is the greatest number of hours a student should work if they want to maintain a 3.5 GPA? Solve an equation, then check on your graph.         Mia and Mandi and opened a candy shop this January. The table shows their monthly sales profit. Except for some seasonal fluctuation, Mia and Mandi generally expect your profits to rise steadily while their business is getting established.    Month  Jan  Feb  Mar  Apr  May  Jun  Jul  Aug    Sales Profit ($)  3,394  4,702  3,683  4,840  5,632  4,432  4,649  4,590       Make a scatter plot. Begin the profit axis at $3,000.      Name the variables and write an equation for the line through January and August. Add this line (#1) to your graph. This line is too low.      Write an equation for the line through March and July. Notice that you need to find the intercept this time. Add this line (#2) to your graph. This line is too steep.      Neither of these lines go anywhere near the data for February, April, and May, because those are outliers. Any idea why those months had much higher candy sales than the other months?      What does each equation give as an estimate for September's sales?      Explain why Mia and Mandi should not use either of these lines to estimate October's sales.        Look back at Thanh's data in the section.     Check that the C-D line has equation       Check that the H-R line has equation       The best-fitting line (ignoring the outlier) had equation . Make a table of values for and lane miles and use these values to check the graph Thanh drew. (They are highlighted on the graph.)       Wild rice is a native plant that grows in lakes in the upper Midwest. The table shows how the annual acreage of wild rice has varied with the average spring temperature in various years. The variables are for the temperature measured in F and for the wild rice yield, measured in acres. In case you're curious, the year is included as well, but it's not one of the variables we're interested in.    year  1985  1989  1993  1997  2001  2005  2009     39  42  41  35  47  45  42     2,300  1,950  1,425  2,015  1,233  1,256  1,345     (Story also appears in )      Make a scatter plot of the points. Make your graph as large as possible by starting your temperature axis at 35 F and your acreage axis at 1,000 acres.      Find the equation of the line through the data from 1997 and 2001. Use for the average temperature (in F) and for the acres of wild rice.      Based on your line, what might you expect the acreage of wild rice to be in a year when the average temperature is 46 F? 40 F? Use your equation to answer the questions.      Draw that line on your scatter plot. Comment.      The best fitting line has equation Make a table of values and use it to graph that line as well.      If you use the best fitting line, how would that change your estimate for the acreage of wild rice in a year when the average temperature is 46 F? 40 F?       The amount of garbage generated in the United States has increased steadily, from 88.1 million tons in 1960 to 254.2 million tons in 2006. Earlier we did linear model. But, in fact, the amount of garbage has not increased exactly linearly. The table shows data for select years, where measures years since 1960 and is the amount of garbage (in millions of tons).    year  1960  1970  1980  1990  2000  2006  2010     0  10  20  30  40  46  50     88.1  121.1  151.6  205.2  239.1  254.2  249.0     Source: Environmental Protection Agency    (Story also appears in )      Make a large scatter plot of the points, beginning at the year 1960 and extending to at least 2030.      Draw in the line through the points from 1960 and 2006. (We found that equation in 4.4 Exercises.)      Draw in the line through the points from 2000 and 2006. Would this line predict that garbage will reach 300 million tons sooner or later than the previous prediction? Use the graph to explain.       My mechanic, Paye, believes that frequent oil changes reduce the amount of maintenance on a car. To prove his point, Paye showed me a table of customers with the number of yearly oil changes and the cost of their engine repairs.     1  2  3  4  5  6  7     725  500  415  300  275  100  150    where is the number of oil changes per year and is the cost of repairs, in dollars.     Make a large scatter plot of the points.      Draw in the line through the points for 3 and 5 oil changes.      Write the equation for that line. Use your equation to predict the cost of engine repairs for a customer who does no oil changes, and one who does 8 oil changes.      The best fitting line has equation approximately Plot three points on that line and use them to draw it on your scatter plot.      What does the best fitting line predict the cost of engine repairs for a customer who does no oil changes, and one who does 8 oil changes?       The table and scatterplot shows the estimated costs and earnings for various sports-themed movies.    Movie  Estimated cost  Estimated earnings    A League of Their Own  $40 million  $131 million    Dodgeball  $30 million  $114 million    Invictus  $49 million  $37 million    Jerry Maguire  $60 million  $274 million    Miracle  $28 million  $64 million    Nacho Libre  $32 million  $80 million    Remember the Titans  $27 million  $130 million    Run Fatboy Run  $10 million  $6 million    Secretariat  $35 million  $59 million    The Blind Side  $35 million  $255 million    The Rookie  $22 million  $77 million          Draw the line (A) that goes through the points for Remember the Titans and A League of Their Own . Explain why this line does not fit the data well.      Draw the line (B) that goes through the points for Run Fatboy Run and Jerry Maguire . Explain why this line does not fit the data well.      Draw the line (C) that goes through the points for The Rookie and A League of Their Own . This line fits the data pretty well I think.      Why might you expect the slope of good fitting line to be positive?       The annual consumption of meat in millions of metric tons is given in the following table. Here is for chicken, is for beef, and measures years since 1975.   Source: U.S. Department of Agriculture     year  1975  1985  1990  1995  2000  2005  2009  2012     0  10  15  20  25  30  34  37     3.6  6.1  7.7  9.4  11.5  13.4  12.9  13.3     12.1  11.8  11.0  11.7  12.5  12.7  12.2  11.4       Make a scatter plot of the chicken consumption (use to label each point) and red meat consumption (use to label each point).      Sketch a line through each data set that seems to reasonably approximate the dependence.      When were chicken and red meat consumption equal?      The best fitting line for chicken is and the best fitting line for beef is Set up and solve a system of linear equations to find the year when chicken and red meat consumption will likely be equal. How does this answer compare to your estimate?      The slope of the best fitting beef line is 0.007 million tons\/year. What does that tell you about beef consumption over the past 40 years?      "
},
{
  "id": "sec-Fitting_lines_to_data-2-2",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lane mile "
},
{
  "id": "sec-Fitting_lines_to_data-2-25",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-2-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "best fitting line "
},
{
  "id": "sec-Fitting_lines_to_data-2-30",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sec-Fitting_lines_to_data-2-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outlier "
},
{
  "id": "wood-volume-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#wood-volume-fitting-lines",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "  The scatter plot shows the total volume of wood, cubic feet, in managed forests of different ages, years.     For each line, state some reason why the fit is not good. (We know the line will not go through all, or even most, of the points, so that is not the problem. Instead look at slope\/steepness, intercept\/height, etc.)    Line A     Line B                   Line C     Line D                     Which of these four lines do you think fits best, and why?    "
},
{
  "id": "stock-price-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#stock-price-fitting-lines",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Noel is considering investing in a company's stock so he looked up a few values.    Day  0  300  500    Value ($)  23.19  37.00  48.10       Calculate the daily rate of change of the stock's price during the first 300 days.      Calculate the daily rate of change of the stock's price from Day 300 to Day 500.      Is this growth linear? How do you know?      The scatter plot shows additional values of the stock Noel is considering buying.   Draw in a line through the points for Day 300 and Day 500. Label this line #1. Explain why that line does not fit the data well.      Draw in a line that fits the data better. It does not need to go through any of the points exactly. Label that line #2.    "
},
{
  "id": "work-gpa-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#work-gpa-fitting-lines",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  Is it true that students who work part-time have lower grades? Do the number of hours matter? The table shows the grade point average (GPA) of ten students compared to the number of hours per week each student works at a part time job. The variables we used are , for the time worked at job (hours\/week), and for the GPA, on the usual scale of 0.0 to 4.0.     0  0  10  12  14  15  16  18  20  20     3.72  3.91  3.43  2.79  3.08  2.62  2.44  3.17  3.00  2.55       Make a scatter plot of the points. Start the -axis at 2.0.      Find the equation of the line that goes through the first and last point listed.   Hint: the first point tells you the intercept.       Draw this line on your graph and label it line A.      Use your equation for line A to figure out what you would expect for the GPA of a student working 30 hours per week.      It turns out, the best fitting line has equation . Make a table of values for this equation using hours.      Use that table of values to graph this best fitting line on that same set of axes. Label it line B.      According to line B, what is the greatest number of hours a student should work if they want to maintain a 3.5 GPA? Solve an equation, then check on your graph.    "
},
{
  "id": "candy-shop-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#candy-shop-fitting-lines",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "  Mia and Mandi and opened a candy shop this January. The table shows their monthly sales profit. Except for some seasonal fluctuation, Mia and Mandi generally expect your profits to rise steadily while their business is getting established.    Month  Jan  Feb  Mar  Apr  May  Jun  Jul  Aug    Sales Profit ($)  3,394  4,702  3,683  4,840  5,632  4,432  4,649  4,590       Make a scatter plot. Begin the profit axis at $3,000.      Name the variables and write an equation for the line through January and August. Add this line (#1) to your graph. This line is too low.      Write an equation for the line through March and July. Notice that you need to find the intercept this time. Add this line (#2) to your graph. This line is too steep.      Neither of these lines go anywhere near the data for February, April, and May, because those are outliers. Any idea why those months had much higher candy sales than the other months?      What does each equation give as an estimate for September's sales?      Explain why Mia and Mandi should not use either of these lines to estimate October's sales.    "
},
{
  "id": "salt-roads-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#salt-roads-fitting-lines",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Look back at Thanh's data in the section.     Check that the C-D line has equation       Check that the H-R line has equation       The best-fitting line (ignoring the outlier) had equation . Make a table of values for and lane miles and use these values to check the graph Thanh drew. (They are highlighted on the graph.)    "
},
{
  "id": "wild-rice-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#wild-rice-fitting-lines",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "  Wild rice is a native plant that grows in lakes in the upper Midwest. The table shows how the annual acreage of wild rice has varied with the average spring temperature in various years. The variables are for the temperature measured in F and for the wild rice yield, measured in acres. In case you're curious, the year is included as well, but it's not one of the variables we're interested in.    year  1985  1989  1993  1997  2001  2005  2009     39  42  41  35  47  45  42     2,300  1,950  1,425  2,015  1,233  1,256  1,345     (Story also appears in )      Make a scatter plot of the points. Make your graph as large as possible by starting your temperature axis at 35 F and your acreage axis at 1,000 acres.      Find the equation of the line through the data from 1997 and 2001. Use for the average temperature (in F) and for the acres of wild rice.      Based on your line, what might you expect the acreage of wild rice to be in a year when the average temperature is 46 F? 40 F? Use your equation to answer the questions.      Draw that line on your scatter plot. Comment.      The best fitting line has equation Make a table of values and use it to graph that line as well.      If you use the best fitting line, how would that change your estimate for the acreage of wild rice in a year when the average temperature is 46 F? 40 F?    "
},
{
  "id": "garbage-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#garbage-fitting-lines",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": "  The amount of garbage generated in the United States has increased steadily, from 88.1 million tons in 1960 to 254.2 million tons in 2006. Earlier we did linear model. But, in fact, the amount of garbage has not increased exactly linearly. The table shows data for select years, where measures years since 1960 and is the amount of garbage (in millions of tons).    year  1960  1970  1980  1990  2000  2006  2010     0  10  20  30  40  46  50     88.1  121.1  151.6  205.2  239.1  254.2  249.0     Source: Environmental Protection Agency    (Story also appears in )      Make a large scatter plot of the points, beginning at the year 1960 and extending to at least 2030.      Draw in the line through the points from 1960 and 2006. (We found that equation in 4.4 Exercises.)      Draw in the line through the points from 2000 and 2006. Would this line predict that garbage will reach 300 million tons sooner or later than the previous prediction? Use the graph to explain.    "
},
{
  "id": "oil-changes-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#oil-changes-fitting-lines",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "  My mechanic, Paye, believes that frequent oil changes reduce the amount of maintenance on a car. To prove his point, Paye showed me a table of customers with the number of yearly oil changes and the cost of their engine repairs.     1  2  3  4  5  6  7     725  500  415  300  275  100  150    where is the number of oil changes per year and is the cost of repairs, in dollars.     Make a large scatter plot of the points.      Draw in the line through the points for 3 and 5 oil changes.      Write the equation for that line. Use your equation to predict the cost of engine repairs for a customer who does no oil changes, and one who does 8 oil changes.      The best fitting line has equation approximately Plot three points on that line and use them to draw it on your scatter plot.      What does the best fitting line predict the cost of engine repairs for a customer who does no oil changes, and one who does 8 oil changes?    "
},
{
  "id": "sports-movies-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#sports-movies-fitting-lines",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": "  The table and scatterplot shows the estimated costs and earnings for various sports-themed movies.    Movie  Estimated cost  Estimated earnings    A League of Their Own  $40 million  $131 million    Dodgeball  $30 million  $114 million    Invictus  $49 million  $37 million    Jerry Maguire  $60 million  $274 million    Miracle  $28 million  $64 million    Nacho Libre  $32 million  $80 million    Remember the Titans  $27 million  $130 million    Run Fatboy Run  $10 million  $6 million    Secretariat  $35 million  $59 million    The Blind Side  $35 million  $255 million    The Rookie  $22 million  $77 million          Draw the line (A) that goes through the points for Remember the Titans and A League of Their Own . Explain why this line does not fit the data well.      Draw the line (B) that goes through the points for Run Fatboy Run and Jerry Maguire . Explain why this line does not fit the data well.      Draw the line (C) that goes through the points for The Rookie and A League of Their Own . This line fits the data pretty well I think.      Why might you expect the slope of good fitting line to be positive?    "
},
{
  "id": "meat-fitting-lines",
  "level": "2",
  "url": "sec-Fitting_lines_to_data.html#meat-fitting-lines",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": "  The annual consumption of meat in millions of metric tons is given in the following table. Here is for chicken, is for beef, and measures years since 1975.   Source: U.S. Department of Agriculture     year  1975  1985  1990  1995  2000  2005  2009  2012     0  10  15  20  25  30  34  37     3.6  6.1  7.7  9.4  11.5  13.4  12.9  13.3     12.1  11.8  11.0  11.7  12.5  12.7  12.2  11.4       Make a scatter plot of the chicken consumption (use to label each point) and red meat consumption (use to label each point).      Sketch a line through each data set that seems to reasonably approximate the dependence.      When were chicken and red meat consumption equal?      The best fitting line for chicken is and the best fitting line for beef is Set up and solve a system of linear equations to find the year when chicken and red meat consumption will likely be equal. How does this answer compare to your estimate?      The slope of the best fitting beef line is 0.007 million tons\/year. What does that tell you about beef consumption over the past 40 years?    "
},
{
  "id": "sec-PE4A",
  "level": "1",
  "url": "sec-PE4A.html",
  "type": "Section",
  "number": "4.6",
  "title": "Practice Exam 4A",
  "body": " Practice Exam 4A   Practice Exam 4A    Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   As you work, make a don't forget list of any information you need to look up or ask about.      Forde collects miniature cars, each weighing 1.76 ounces. His car box weighs 4 ounces when empty. The total weight ounces of Forde's car box depends on the number of cars according to the equation      Make a table of values showing the weight if the box contains 1, 5, 12, or 20 cars.      Draw a graph illustrating the dependence.      How many cars can Forde fit in the box and stay under 3 pounds (that is 48 ounces)? Figure out the answer and mark the corresponding point on your graph.         Will women ever run the marathon as fast as men do? The world records are getting close. In 2012 the men's record was 2:03:38 and the women's record was 2:15:25, about 12 minutes apart! On the other hand, the record is changing very slowly. Estimates for the men's time shows about 13 seconds drop per year on average. Estimates for the women's time shows about 26 seconds drop per year on average. Source: Wikipedia (Marathon World Record Progression)      Write an equation for each function: men's and women's. The variables are marathon times (in seconds) and years (measured in years since 2012). Note that 2:03:38 = 7,418 seconds and 2:12:25 = 7,945 seconds.      Use successive approximate to estimate when the women's record might equal the men's record. Display your guesses in a table.      Set up and solve a system to find exactly when the women's record might equal the men's record.         An online music club charges a monthly enrollment fee plus $0.95 per album you download. Last month Andrew downloaded 31 albums for a total cost of $49.00.     What is the monthly enrollment fee?      Name the variables, including units, and write an equation relating them.      If Andrew's bill next month is for $87.95, how many albums did he download? Show how to solve the equation.         A report shows September sea-ice declining in the Northern hemisphere. In 1980 the extent of the sea-ice was 3.1 million square miles. By 2012, the sea-ice extended only 1.7 million square miles. For this problem, suppose that the area of sea-ice decreases linearly. Source: National Snow and Ice Data Center      Name the variables, including units.      What is the rate of sea ice decrease?      Write a linear equation relating your variables.      Scientists are concerned that if the September sea-ice falls between 200,000 and 500,000 square miles, then other climate feedbacks will lead to no more sea-ice in September. According to your equation, in what year is this expected to occur? Set up and solve an inequality to answer the question.         As people age they experience some hearing loss. A study was done to determine the comfort level of sound for people of different ages, meaning the loudest sound (in decibels) that the person could listen to comfortably. The data are given in the table.    Name  Akbar  Javier  Walter  Xang  Rolf  Derrick  Iago  Raheem    Age  45  45  55  65  75  75  85  85    Comfort level  58  61  63  71  75  80  82  79       Make a scatterplot showing the data. Scale your axes to start at 40 years and start the level at 55 decibels. Spread out your scale to get a large, detailed graph.      Draw the line through the points listed for Xang and Rolf. Explain why that line does not fit the data well. Label this line B.       The best-fitting line from statistics has equation where is the person's age (in years) and is the comfort level (in decibels). Make a table showing the values of when A = 40, 60, and 80. Use those points to add this best-fitting line to your graph.       "
},
{
  "id": "mini-cars-PE4A",
  "level": "2",
  "url": "sec-PE4A.html#mini-cars-PE4A",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": "  Forde collects miniature cars, each weighing 1.76 ounces. His car box weighs 4 ounces when empty. The total weight ounces of Forde's car box depends on the number of cars according to the equation      Make a table of values showing the weight if the box contains 1, 5, 12, or 20 cars.      Draw a graph illustrating the dependence.      How many cars can Forde fit in the box and stay under 3 pounds (that is 48 ounces)? Figure out the answer and mark the corresponding point on your graph.    "
},
{
  "id": "marathon-records-PE4A",
  "level": "2",
  "url": "sec-PE4A.html#marathon-records-PE4A",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": "  Will women ever run the marathon as fast as men do? The world records are getting close. In 2012 the men's record was 2:03:38 and the women's record was 2:15:25, about 12 minutes apart! On the other hand, the record is changing very slowly. Estimates for the men's time shows about 13 seconds drop per year on average. Estimates for the women's time shows about 26 seconds drop per year on average. Source: Wikipedia (Marathon World Record Progression)      Write an equation for each function: men's and women's. The variables are marathon times (in seconds) and years (measured in years since 2012). Note that 2:03:38 = 7,418 seconds and 2:12:25 = 7,945 seconds.      Use successive approximate to estimate when the women's record might equal the men's record. Display your guesses in a table.      Set up and solve a system to find exactly when the women's record might equal the men's record.    "
},
{
  "id": "download-albums-PE4A",
  "level": "2",
  "url": "sec-PE4A.html#download-albums-PE4A",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": "  An online music club charges a monthly enrollment fee plus $0.95 per album you download. Last month Andrew downloaded 31 albums for a total cost of $49.00.     What is the monthly enrollment fee?      Name the variables, including units, and write an equation relating them.      If Andrew's bill next month is for $87.95, how many albums did he download? Show how to solve the equation.    "
},
{
  "id": "sea-ice-PE4A",
  "level": "2",
  "url": "sec-PE4A.html#sea-ice-PE4A",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": "  A report shows September sea-ice declining in the Northern hemisphere. In 1980 the extent of the sea-ice was 3.1 million square miles. By 2012, the sea-ice extended only 1.7 million square miles. For this problem, suppose that the area of sea-ice decreases linearly. Source: National Snow and Ice Data Center      Name the variables, including units.      What is the rate of sea ice decrease?      Write a linear equation relating your variables.      Scientists are concerned that if the September sea-ice falls between 200,000 and 500,000 square miles, then other climate feedbacks will lead to no more sea-ice in September. According to your equation, in what year is this expected to occur? Set up and solve an inequality to answer the question.    "
},
{
  "id": "sound-comfort-PE4A",
  "level": "2",
  "url": "sec-PE4A.html#sound-comfort-PE4A",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": "  As people age they experience some hearing loss. A study was done to determine the comfort level of sound for people of different ages, meaning the loudest sound (in decibels) that the person could listen to comfortably. The data are given in the table.    Name  Akbar  Javier  Walter  Xang  Rolf  Derrick  Iago  Raheem    Age  45  45  55  65  75  75  85  85    Comfort level  58  61  63  71  75  80  82  79       Make a scatterplot showing the data. Scale your axes to start at 40 years and start the level at 55 decibels. Spread out your scale to get a large, detailed graph.      Draw the line through the points listed for Xang and Rolf. Explain why that line does not fit the data well. Label this line B.       The best-fitting line from statistics has equation where is the person's age (in years) and is the comfort level (in decibels). Make a table showing the values of when A = 40, 60, and 80. Use those points to add this best-fitting line to your graph.    "
},
{
  "id": "sec-PE4B",
  "level": "1",
  "url": "sec-PE4B.html",
  "type": "Section",
  "number": "4.7",
  "title": "Practice Exam 4B",
  "body": " Practice Exam 4B   Practice Exam 4B    Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself one hour to work and wait until you have tried your best on all of the problems before checking any answers.       The Vang family wants to buy a new washing machine. The first model costs $645 and then $13.29 per month to run. A more efficient model costs $940 and then $7.82 per month to run. If is the time in months and is the Vang family's total cost (in $), then the equations and some comparable values (to the nearest $) are:      12  36  60    First model:  804.48  1,123.44  1,442.40    Second model:  1,033.84  1,221.52  1,409.20       Draw a graph illustrating both equations. Be sure to include the intercepts.       According to your graph, approximately what is the payback time (the number of months for which the total costs of each washing machine are equal)? Answer and indicate the point on the graph where you can check.      Set up and solve a system of linear equations to find the payback time exactly .      If the manufacturer offers a $25 rebate on the more efficient model, how does that change the payback time? Adjust your equation and set up and solve a new system. Or carefully explain some other way of figuring it out.         It has been a long time since anyone broke the record for the men's long jump. In 1935 Jesse Owens jumped 8.13 meters. The record was next broken 25 years later, in 1960, by Ralph Boston who jumped 8.21 meters. He broke his own record several times over the next few years, including being surpassed briefly by Igor Ter-Ovanesyan. Ralph's final record was 8.35 meters in 1965. Not to be outdone, Igor tied the record in 1967. Then in 1968, Bob Beamon jumped 8.90 meters. That record held for 23 years, until Mike Powell jumped 8.95 meters in 1991, much to Carl Lewis' dismay. Powell's record still stood 21 years later, in 2012. Source: Wikipedia (Long Jump)       Draw in the line connecting the data from 1935 and 1991. Use it to predict the long jump record in 2020.      Draw in the line connecting the data from 1968 and 1991. Use it to predict the long jump record in 2020.      Which of your lines do you prefer, and why?         Arjun just graduated from college but is living with his uncle for the summer to save money. They agreed that Arjun would do chores and some light renovations instead of paying rent. Arjun has been doing around 5 hours of work a week for the past 8 weeks, but still owes his uncle another 30 hours of work.     What was the original agreement? That means, how many hours of work did Arjun originally promise his uncle?      Name the variables and write an equation relating them, assuming Arjun continues to do 5 hours a week of work.      How many more weeks will it take Arjun to finish the work he promised? Show how to solve the equation.         The local zoning commission is considering a plan to expand housing in the city, as measured in the number of residential units. But with more residential units come more shops, offices, schools, recreational facilities, churches, and other commercial property. Currently the city has 3,500 residential units and 1,575 acres of commercial property. If the proposal is passed and completed, the city will have a new total of 3,600 residential units and 1,620 acres of commercial property. You can assume this increase is linear.     Name the variables and summarize the given information in a table.      How many new acres of commercial property are there for each new residential unit built?      Write an equation relating the variables. Hint: first find the intercept.       If the city decides to limit the amount of land to 1,600 acres of commercial property, approximately how many residential units can there be? Use successive approximation, displaying your guesses in a table.      Now answer the question exactly by setting up and solving an inequality.       "
},
{
  "id": "washing-machine-PE4B",
  "level": "2",
  "url": "sec-PE4B.html#washing-machine-PE4B",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": "  The Vang family wants to buy a new washing machine. The first model costs $645 and then $13.29 per month to run. A more efficient model costs $940 and then $7.82 per month to run. If is the time in months and is the Vang family's total cost (in $), then the equations and some comparable values (to the nearest $) are:      12  36  60    First model:  804.48  1,123.44  1,442.40    Second model:  1,033.84  1,221.52  1,409.20       Draw a graph illustrating both equations. Be sure to include the intercepts.       According to your graph, approximately what is the payback time (the number of months for which the total costs of each washing machine are equal)? Answer and indicate the point on the graph where you can check.      Set up and solve a system of linear equations to find the payback time exactly .      If the manufacturer offers a $25 rebate on the more efficient model, how does that change the payback time? Adjust your equation and set up and solve a new system. Or carefully explain some other way of figuring it out.    "
},
{
  "id": "long-jump-PE4B",
  "level": "2",
  "url": "sec-PE4B.html#long-jump-PE4B",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "",
  "body": "  It has been a long time since anyone broke the record for the men's long jump. In 1935 Jesse Owens jumped 8.13 meters. The record was next broken 25 years later, in 1960, by Ralph Boston who jumped 8.21 meters. He broke his own record several times over the next few years, including being surpassed briefly by Igor Ter-Ovanesyan. Ralph's final record was 8.35 meters in 1965. Not to be outdone, Igor tied the record in 1967. Then in 1968, Bob Beamon jumped 8.90 meters. That record held for 23 years, until Mike Powell jumped 8.95 meters in 1991, much to Carl Lewis' dismay. Powell's record still stood 21 years later, in 2012. Source: Wikipedia (Long Jump)       Draw in the line connecting the data from 1935 and 1991. Use it to predict the long jump record in 2020.      Draw in the line connecting the data from 1968 and 1991. Use it to predict the long jump record in 2020.      Which of your lines do you prefer, and why?    "
},
{
  "id": "rent-agreement-PE4B",
  "level": "2",
  "url": "sec-PE4B.html#rent-agreement-PE4B",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "",
  "body": "  Arjun just graduated from college but is living with his uncle for the summer to save money. They agreed that Arjun would do chores and some light renovations instead of paying rent. Arjun has been doing around 5 hours of work a week for the past 8 weeks, but still owes his uncle another 30 hours of work.     What was the original agreement? That means, how many hours of work did Arjun originally promise his uncle?      Name the variables and write an equation relating them, assuming Arjun continues to do 5 hours a week of work.      How many more weeks will it take Arjun to finish the work he promised? Show how to solve the equation.    "
},
{
  "id": "zoning-PE4B",
  "level": "2",
  "url": "sec-PE4B.html#zoning-PE4B",
  "type": "Exercise",
  "number": "4.7.4",
  "title": "",
  "body": "  The local zoning commission is considering a plan to expand housing in the city, as measured in the number of residential units. But with more residential units come more shops, offices, schools, recreational facilities, churches, and other commercial property. Currently the city has 3,500 residential units and 1,575 acres of commercial property. If the proposal is passed and completed, the city will have a new total of 3,600 residential units and 1,620 acres of commercial property. You can assume this increase is linear.     Name the variables and summarize the given information in a table.      How many new acres of commercial property are there for each new residential unit built?      Write an equation relating the variables. Hint: first find the intercept.       If the city decides to limit the amount of land to 1,600 acres of commercial property, approximately how many residential units can there be? Use successive approximation, displaying your guesses in a table.      Now answer the question exactly by setting up and solving an inequality.    "
},
{
  "id": "sec-Modeling_exponential_equations",
  "level": "1",
  "url": "sec-Modeling_exponential_equations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Modeling with exponential equations",
  "body": " Modeling with exponential equations   My grandmother was born in eastern Europe at the end of the 1800s. When she was eight years old her parents brought her and her younger sister and brother to the United States to escape harsh treatment by the government. Both her parents had to work, so my grandmother dropped out of school when she was thirteen years old to take care of the children, which now included another brother and sister.  Time passed and she married a handsome young veteran of World War I, who had also immigrated to the country as a young child. For her wedding dowry his parents bought my grandmother a set of sterling silverware, valued at $800 in 1920. My grandmother was very proud of her sterling and used it often.  Over the years, the sterling has increased in value, let's say by around 3% per year. In 1957, my grandmother handed it down to my mother as a wedding present. In 1990, I married and my mother handed the sterling down to me. What was it worth at those times, and how much should it be insured for through 2015?  Let's write the equation to answer these questions. The variables should be We're saying that the sterling increased 3% per year in value. For example, in 1921, the sterling was worth Remember the shortcut here? The idea is after one year we have the original $800 plus 3% more for a grand total of 103% of what we had before. And 103% = 1.03.  After 5 years, the sterling was worth since multiplying by 1.03 five times is the same as multiplying by . On the calculator we do   Generalizing, we get our equation which can be rewritten as This equation fits our template for an exponential equation   Quick recap. A function is exponential if it corresponds to a fixed percent increase (or decrease). The percent increase is the growth rate ; in our example, the growth rate is . The number we multiply by is the growth factor and it is also the base of the power in the equation; in our example, the growth factor is . The from Section 2.2 reminds us that   Let's answer those questions. In 1957, we had years and so By 1990, we had years and so By 2015, we have years and so   Let's summarize this information in a table and draw a graph.    year  1920  1921  1925  1957  1990  2015     0  1  5  37  70  95     800  824  927  2,388  6,334  13,262       Actually, the insurance policy allows for up to $20,000. The curve we drew suggests that the value will be $20,000 just past (the year 2020), probably somewhere around (the year 2030).  We can use successive approximation to improve our answer.    year  2020  2030  2029  2028     100  110  109  108     15,375  20,663  20,061  19,476    vs. 20,000  low  high  high  low    Seems to be around the year 2029, where , as we had guessed.  Of course, we can solve the exponential equation instead. To find when we use our equation to get Divide each side by 800 to get and so Since we want to solve for the exponent, we use the with growth factor and the value to get We rounded up to make sure it would reach the full $20,000. Since 1920 + 109 = 2029, we see (again) that the value should reach $20,000 in the year 2029.  As an aside, look what happens when we calculate the rate of change for this function. For example, during the first five years, and from 1925 to 1957, In the first few years, the value increased an average of $25.40 a year, but from 1925 to 1957 it increased an average of about $45.66 per year.  Were we supposed to get different numbers here? Well, the graph's not a straight line and it's not a linear equation. That tells us the rate of change isn't going to be constant. So, sure, different numbers are fine. Does it make sense that the rate of change would itself increase? That the value increases at an increasing rate? Yes. Although we are always just adding on 3%, we're taking 3% of larger numbers each year. So more is added each year.    Do you know     What makes a function exponential?    The template for an exponential equation? Ask your instructor if you need to remember the template or if it will be provided during the exam.     How to write an exponential equation given the starting amount and percent increase?    Where the growth factor and starting amount appear in the template of an exponential equation?    What the graph of an exponential function looks like?    How to solve an exponential equation using the ?   Ask your instructor if you need to remember the or if it will be provided during the exam.     How to calculate the rate of change of an exponential function?    Why the rate of change of an exponential function is not constant?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      The population of Buenos Aires, Argentina in 1950 was estimated at 5.0 million and expected to grow at 1.8% each year. Source: Mongabay      Name the variables.      What is the annual growth factor?      Write an equation estimating the population of Buenos Aires over time.      Make a table of values showing the estimated population of Buenos Aires every 20th year from 1950 to 2030.      By approximately how many people has the population been increasing per year over each 20 year period? Add these numbers to your table. As expected, these numbers change because the rate of change is not constant.      In 2000 the actual population of Buenos Aires was around 12.6 million and by 2010 it was around 15.2 million. How do these data compare to the estimates?         A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing 16% per day. Earlier we found the equation where is the time in days (since the first diagnosis) and is the total number of students who had the flu. (Story also appears in and )      Use successive approximations to estimate when the number of infected students reaches 100. Display your guesses in a table.      Use the to find exactly when the number of infected students reaches 100.      There are 1,094 students currently living in the dorms. Suppose ultimately 250 students catch the flu. According to your equation, when would that happen? Show how to solve your equation.      It is not realistic to expect that everyone living in the dorms will catch the flu, but what does the equation say? Set up and solve an equation to find when all 1,094 students would have the flu. (Again, this is not realistic.)         Bunnies, bunnies, everywhere. Earlier we found the equation where is the number of bunnies and is the time in years since 2007. (Story also appears in and )      Make a table showing the number of bunnies in 2007, 2010, 2013, and 2020.      Draw a graph showing how the bunny population grew.       Approximately when will the population pass 5,000 bunnies? Guess from the graph. Then refine your answer using successive approximation.      Solve your equation and check that you get the same answer.         Carbon dioxide is a greenhouse gas in our atmosphere. Increasing carbon dioxide concentrations are related to global climate change. Source: Earth Systems Research Laboratory, NOAA In 1980, the carbon dioxide concentration was 338 ppm (parts per million). At that time it was assumed that carbon dioxide concentrations would increase 0.42% per year.     Name the variables including units.      Assuming the growth is exponential as predicted, write an equation that describes the increase in carbon dioxide concentrations.      The carbon dioxide concentration in 2008 was 385 ppm. Is that count higher or lower than predicted from your equation? Explain.      Does that mean that carbon dioxide increased at a higher or lower rate than 0.42%? Explain.        Use the equation from this section for the value of the sterling silverware to determine when the sterling was first worth over $5,000.     First, estimate the answer from our table and graph.      Next, use successive approximation to refine your answer. Display your work in a table.      Last, practice setting up and solving an equation using the .       Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year.  (Story also appears in , and )     Name the variables and write an equation relating them.      Use your equation to estimate her benefit in the year 2020.      Set up and solve an equation to determine when her benefit will pass $900\/month.      Repeat for $1,000\/month.       The number of players of a wildly popular mobile app drawing game has been growing exponentially according to the equation where is the number of players (in millions) and is the number of weeks since it caught on.   (Story also appears in )      Make a table showing the number of players after 0 weeks, 2 weeks, 4 weeks, and 6 weeks.      Use successive approximation to determine when there will be over 60 million players. Round your answer to the nearest week.      Show how to solve the equation to determine when there will be over 60 million players. Record your answer to two decimal places.      Use your answer to (a), (b), and (c) to graph the function.       In 2006 there were about 5.2 million people living in the state of Minnesota. Predicted growth rates vary, perhaps around 0.5% per year.     What is the annual growth factor? Careful, the growth rate is 0.5%.      Based on these figures, about how many people will be living in the state of Minnesota in 2010? In 2020?      Write an equation showing how Minnesota's population is a function of the year. Don't forget to name the variables.      Make a table of values showing the projected population every two years from 2006 to 2020.      Draw a graph illustrating the dependence.      Set up and solve an equation to determine when Minnesota's population is expected to be double the population from 2006.       Um Archivo data consultant group reported earnings of $42.7 billion in 2012. At that time executives projected 17% increase in earnings annually. Based on that information, we wrote the equation where is Um Archivo's reported earnings (in $billions) and is the years since 2012.  (Story also appears in )     According to your equation, in what year would Um Archivo's reported earnings pass $60 billion? Set up and solve an equation. Then check your answer.      Repeat for $100 billion.       In 1990 it was estimated that 2.5 million households watched reality television at least once a week. Executives predicted that number would increase by 7.2% each year. According to their estimates, how many millions of households watched reality television in 2000? In 2010? As part of your work, name the variables, find the annual growth factor, and write an exponential equation modeling reality television viewing.   (Story also appears in )      "
},
{
  "id": "sec-Modeling_exponential_equations-2-7",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#sec-Modeling_exponential_equations-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential growth rate growth factor "
},
{
  "id": "buenos-aires-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#buenos-aires-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  The population of Buenos Aires, Argentina in 1950 was estimated at 5.0 million and expected to grow at 1.8% each year. Source: Mongabay      Name the variables.      What is the annual growth factor?      Write an equation estimating the population of Buenos Aires over time.      Make a table of values showing the estimated population of Buenos Aires every 20th year from 1950 to 2030.      By approximately how many people has the population been increasing per year over each 20 year period? Add these numbers to your table. As expected, these numbers change because the rate of change is not constant.      In 2000 the actual population of Buenos Aires was around 12.6 million and by 2010 it was around 15.2 million. How do these data compare to the estimates?    "
},
{
  "id": "flu-dorm-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#flu-dorm-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "  A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing 16% per day. Earlier we found the equation where is the time in days (since the first diagnosis) and is the total number of students who had the flu. (Story also appears in and )      Use successive approximations to estimate when the number of infected students reaches 100. Display your guesses in a table.      Use the to find exactly when the number of infected students reaches 100.      There are 1,094 students currently living in the dorms. Suppose ultimately 250 students catch the flu. According to your equation, when would that happen? Show how to solve your equation.      It is not realistic to expect that everyone living in the dorms will catch the flu, but what does the equation say? Set up and solve an equation to find when all 1,094 students would have the flu. (Again, this is not realistic.)    "
},
{
  "id": "bunnies-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#bunnies-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "  Bunnies, bunnies, everywhere. Earlier we found the equation where is the number of bunnies and is the time in years since 2007. (Story also appears in and )      Make a table showing the number of bunnies in 2007, 2010, 2013, and 2020.      Draw a graph showing how the bunny population grew.       Approximately when will the population pass 5,000 bunnies? Guess from the graph. Then refine your answer using successive approximation.      Solve your equation and check that you get the same answer.    "
},
{
  "id": "greenhouse-co2-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#greenhouse-co2-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  Carbon dioxide is a greenhouse gas in our atmosphere. Increasing carbon dioxide concentrations are related to global climate change. Source: Earth Systems Research Laboratory, NOAA In 1980, the carbon dioxide concentration was 338 ppm (parts per million). At that time it was assumed that carbon dioxide concentrations would increase 0.42% per year.     Name the variables including units.      Assuming the growth is exponential as predicted, write an equation that describes the increase in carbon dioxide concentrations.      The carbon dioxide concentration in 2008 was 385 ppm. Is that count higher or lower than predicted from your equation? Explain.      Does that mean that carbon dioxide increased at a higher or lower rate than 0.42%? Explain.    "
},
{
  "id": "sterling-silver-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#sterling-silver-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  Use the equation from this section for the value of the sterling silverware to determine when the sterling was first worth over $5,000.     First, estimate the answer from our table and graph.      Next, use successive approximation to refine your answer. Display your work in a table.      Last, practice setting up and solving an equation using the .    "
},
{
  "id": "social-security-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#social-security-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "  Mrs. Nystrom's Social Security benefit was $746.17\/month when she retired from teaching in 2009. She had taught in elementary school since I was a girl. Benefits have increased by 4% per year.  (Story also appears in , and )     Name the variables and write an equation relating them.      Use your equation to estimate her benefit in the year 2020.      Set up and solve an equation to determine when her benefit will pass $900\/month.      Repeat for $1,000\/month.    "
},
{
  "id": "drawing-game-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#drawing-game-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": "  The number of players of a wildly popular mobile app drawing game has been growing exponentially according to the equation where is the number of players (in millions) and is the number of weeks since it caught on.   (Story also appears in )      Make a table showing the number of players after 0 weeks, 2 weeks, 4 weeks, and 6 weeks.      Use successive approximation to determine when there will be over 60 million players. Round your answer to the nearest week.      Show how to solve the equation to determine when there will be over 60 million players. Record your answer to two decimal places.      Use your answer to (a), (b), and (c) to graph the function.    "
},
{
  "id": "minnesota-pop-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#minnesota-pop-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": "  In 2006 there were about 5.2 million people living in the state of Minnesota. Predicted growth rates vary, perhaps around 0.5% per year.     What is the annual growth factor? Careful, the growth rate is 0.5%.      Based on these figures, about how many people will be living in the state of Minnesota in 2010? In 2020?      Write an equation showing how Minnesota's population is a function of the year. Don't forget to name the variables.      Make a table of values showing the projected population every two years from 2006 to 2020.      Draw a graph illustrating the dependence.      Set up and solve an equation to determine when Minnesota's population is expected to be double the population from 2006.    "
},
{
  "id": "um-archivo-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#um-archivo-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.9",
  "title": "",
  "body": "  Um Archivo data consultant group reported earnings of $42.7 billion in 2012. At that time executives projected 17% increase in earnings annually. Based on that information, we wrote the equation where is Um Archivo's reported earnings (in $billions) and is the years since 2012.  (Story also appears in )     According to your equation, in what year would Um Archivo's reported earnings pass $60 billion? Set up and solve an equation. Then check your answer.      Repeat for $100 billion.    "
},
{
  "id": "reality-tv-modeling-exponential",
  "level": "2",
  "url": "sec-Modeling_exponential_equations.html#reality-tv-modeling-exponential",
  "type": "Exercise",
  "number": "5.1.10",
  "title": "",
  "body": "  In 1990 it was estimated that 2.5 million households watched reality television at least once a week. Executives predicted that number would increase by 7.2% each year. According to their estimates, how many millions of households watched reality television in 2000? In 2010? As part of your work, name the variables, find the annual growth factor, and write an exponential equation modeling reality television viewing.   (Story also appears in )    "
},
{
  "id": "sec-Exp_growth_decay",
  "level": "1",
  "url": "sec-Exp_growth_decay.html",
  "type": "Section",
  "number": "5.2",
  "title": "Exponential growth and decay",
  "body": " Exponential growth and decay   It is 2:00 a.m. and Joe is up studying. The dorm has quieted down, but Joe's feeling mighty jittery. He drank 5 large mugs of coffee in the past few hours and all that caffeine is peaking in his system now. At around 200 mg per mug, Joe wonders when his caffeine levels will drop down to where he can sleep a little.  First things first: staying up that late to study is probably a bad idea. I mean, who can think properly at 2:00 in the morning? And, how tired is Joe going to be by the time his test rolls around? Plus, we know that which is a lot of caffeine, probably more than he needed to stay awake.  At this point Joe is stuck so let's help him. Let's say that at 2:00 a.m. he has 1,000 mg of caffeine in his blood. Joe searches online and discovers that 13% of the caffeine should leave his body each hour and below 300 mg he should be fine. When will that happen?  We know how percent increase works, but here the caffeine is leaving his body according to a percent decrease . I guess we need to figure it out one step at a time. After one hour (by 3:00 a.m.), Joe will have By 4:00 a.m. (after 2 hours), Joe will have   Wait a minute. When we calculated 13% decrease on 1,000 mg we got 870 mg. That's 87% of 1,000. Yeah, that's right, take off 13% and you should be left with 87% of what you started with because . So we could have calculated and then Aha, to find the amount after a 13% decrease we just multiply by 0.87.  Still nowhere near 300 mg so fast-forward. For example, after 5 hours (at 7:00 a.m.), we need to multiply 1,000 by 0.87 five times where we use a power to abbreviate repeatedly multiplying. So   The bad news is that it's 7:00 a.m. and Joe is still too jittery to sleep. The good news is that we can write the equation. The variables are Our equation must be Notice this equation fits our template for an exponential equation.   A little terminology here. When a function is exponential but decreasing, it's called exponential decay . It sounds a little odd to say growth factor if the quantity is getting smaller so we sometimes say decay factor instead. We know from the that the growth factor ( ) can be found from the growth rate (r) by the formula . If we think of 13% decrease as negative growth rate, , then the formula still works to find the decay factor ( )   Back to jittery Joe. Let's summarize what we've found and add a few more times to see when Joe's caffeine level should fall below 300 mg.    time  2:00  3:00  4:00  5:00  6:00  7:00  8:00  9:00  10:00  11:00     0  1  2  3  4  5  6  7  8  9     1,000  870  756.9  658.5  572.9  498.4  433.6  377.3  328.2  285.5    vs. 300  high  high  high  high  high  high  high  high  high  low    That means Joe should be able to fall asleep by around 11:00 a.m. Exactly when his exam starts. Sorry, Joe.  We could have solved the equation instead. We were looking for . Using our equation we get Divide each side by 1,000 to get which simplifies to   We find ourselves in the familiar situation – solving to find the exponent. Logs to the rescue. By the with growth factor and value we get which corresponds to 11:00 a.m. Same answer. Much quicker.  Quick side note. We could have rounded to 8.64 hours and then converted units to get Counting from 2:00 a.m., we see that Joe's caffeine levels drop below 300 mg at 10:39 a.m. Since we are approximating throughout the problem, we should round to 11:00 a.m. anyway.  Let's calculate the rate of change and think about what it means. During the first hour, Was the rate of change supposed to be negative? Sure. Joe's caffeine level is dropping. Any decreasing function has a negative rate of change. And, as exam time approaches, Joe's caffeine level was dropping faster at first and is not dropping as fast now.  A glance at the graph confirms our findings.     One last thing. There's another way to describe the decrease here. When our story began Joe's caffeine level was around 1,000 mg and after 5 hours it was at 498.4 mg. That's just about 500 mg, or half of what he started with. We say the half-life of caffeine is around 5 hours.  Doesn't sound very important but check this out. Start with 1,000 mg. After 5 hours, there's 500 mg left. (Okay, approximately.) Now go another 5 hours, which means 10 hours total. Evaluate our equation when to get That means half of what was left is now gone. Go another 5 hours. Lose another half. Check for yourself: And so on. Cool.    Do you know     How to write an exponential equation given the starting amount and percent decrease?    What half-life means?    What doubling time means?    What the graph of exponential growth and exponential decay look like?    Why the rate of change for exponential decay is negative?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      A signal is sent down a fiber optic cable. Its strength decreases by 2% each mile it travels. (Say it was one unit strong to start.) (Story also appears in and )      Name the variables, including units.      Make a table showing the strength of the signal over the first five miles.      Write an equation relating the variables.      The signal will need a booster (something to make the signal stronger again) when it has fallen to under 0.75 units. How far along the cable should the booster be placed? Set up and solve an equation.      What is the half-life (or should we say half-distance) of a signal? That means, how far can it travel without dropping below 50%? (That will not actually happen because we would boost the signal.) Again, set up and solve an equation.      Draw a graph illustrating the relationship.      Indicate the points on your graph where you can check your answers to parts (c) and (d).         A recent news report stated that cell phone usage is growing exponentially in developing countries. In one small country, 50,000 people owned a cell phone in the year 2000. It was estimated that usage would increase at 1.4% percent per year.     Name the variables including units.      Assuming the growth is exponential, write an equation for the function.      At this rate, how many years would it take for the number of people owning a cell phone to double? That is called the doubling time . Show how to set up and solve an equation to find the answer.      In 2011, about 682,000 people owned a cellphone. Is that count higher or lower than predicted from your equation? Explain.      Based on the 2011 data, would you say that cell phone usage was growing slower or faster than 1.4%?         If a person has a heart attack and their heart stops beating, the amount of time it takes paramedics to restart their heart with a defibrillator is critical. Each minute that passes decreases the person's chance of survival by 10%. Source: American Red Cross Assume that this statement means the decrease is exponential and that the survival rate is 100% if the defibrillator is used immediately.     Name the variables, including units, and write an equation.      If it takes the paramedics 2 minutes to use the defibrillator, what is the person's chance of survival?      Use successive approximation to estimate to the nearest minute when the survival rate drops below 50%. Display your guesses in a table.      Solve your equation to find exactly when the survival rate drops below 50%.         You and two buddies each invite 10 people to like your online group. Suppose everyone accepts and then they each invite 10 people. And then everyone accepts and they each invite 10 people. And so on. Of course, there is likely to be substantial overlap, but for the moment pretend that there is not any overlap.     There are 3 friends to start. In the first round they each invite 10 friends, so a total of 30 new people like your online group in the first round. How many new people like your group in the second round? The third?      Name the variables and write an equation showing how the number of new people increases in each round. Think of the original 3 friends as round 0.      Make a table showing this information. Continue your table to include the number of new people who like your group in the fourth and fifth rounds.      What is the total number of people who like your online group after five rounds? Hint: add       Comment on why our assumption is unrealistic.        Joe's girlfriend Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at a slightly slower rate of 12% each hour.   (Story also appears in )      Name the variables and write an equation to model this situation.      What's the half-life of caffeine for Ceyda? Set up and solve an equation.      Ceyda heard that drinking a glass of water an hour can help eliminate caffeine faster. If so, would the half-life be shorter or longer? Explain.       The population of bacteria in a culture dish begins at 2,000 and will triple every day.   (Story also appears in )      Name the variables, including units and dependence.      Make a table showing the number of bacteria at the start and after 1 day, 2 days, and 3 days.      Write an equation illustrating bacterial growth.      Your equation should fit the template for an exponential equation. What is the daily growth factor?      Use your equation to extend your table to include 10 days, 20 days, and 30 days. Be careful to report the large numbers appropriately. Hint: scientific notation       The dish can support around 1 million bacteria. When does that happen? Give your answer to the nearest hour.      Draw a graph, including a table of reasonable values. Remember, the dish can only support up to 1 million bacteria, so your graph should go up to 1 million.       Tenzin bought a house for $291,900 but the housing market collapsed and his house value dropped 4.1% each year.   (Story also appears in )      Name the variables and write an equation relating them.      At this rate, how many years would it take for the value of Tenzin's house to drop below $240,000? Use successive approximation to guess the year.      Now set up and solve an equation.       One modern technique for cleaning waste water involves the use of constructed (man-made) wetlands. Wetlands act as a natural biofilter for various contaminants in the waste water. After each month in the wetlands, only about 1\/4 of the contaminants remain in any given sample. Suppose a sample had 8 grams of contaminants before it was processed in the constructed wetlands.   (Story also appears in )      How much would remain in the sample after 1 month? 2 months? 3 months?      Name the variables and write an equation relating them.      Your equation should fit the template for an exponential equation. What is the monthly decay factor?      According to your equation, when will the contaminants fall below 1 mg? 1 g? Remember and .      Draw a graph illustrating the waste water treatment process for the first 6 months.       Hibbing, Minnesota is the hometown of baseball star Roger Maris, basketball great Kevin McHale, the Greyhound Bus lines, the Hull-Rust-Mahoning Open Pit Iron Mine and, perhaps most famously, songwriter Bob Dylan. It is not a big town. In 2000 the population was reported at 17,071 residents, with an expected decrease of around 0.4% per year.   (Story also appears in )      What is the annual decay factor?      Name the variables and write an equation relating them.      Based on these estimates, what was the anticipated population of Hibbing in 2010?      The actual 2010 U.S. Census estimate of Hibbing's population was 16,361 people. Was the decrease slower or faster than expected? Was the decay rate more or less than 0.4%? Explain.       Donations to a local food shelf have increased 35% over last year. There were 3,400 pounds of food donated last year.   (Story also appears in )      Name the variables, measuring time since last year. (Yes, it's a little awkward.)      Write an exponential equation relating the variables, assuming the rate of increase continues.      How much was donated this year? How much is expected next year? The year after?      At this rate, what is the doubling time? That means, how long would it be until twice as much is donated. Set up and solve an equation to answer. Report your answer to the nearest month.      The agency estimates that around 12,000 pounds of food is needed each year to meet the needs of the people they serve. In how many years will donations reach that level? (In your answer, say how many years from now.)      "
},
{
  "id": "sec-Exp_growth_decay-2-8",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#sec-Exp_growth_decay-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential decay decay factor "
},
{
  "id": "sec-Exp_growth_decay-2-18",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#sec-Exp_growth_decay-2-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "half-life "
},
{
  "id": "fiber-optic-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#fiber-optic-growth-decay",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  A signal is sent down a fiber optic cable. Its strength decreases by 2% each mile it travels. (Say it was one unit strong to start.) (Story also appears in and )      Name the variables, including units.      Make a table showing the strength of the signal over the first five miles.      Write an equation relating the variables.      The signal will need a booster (something to make the signal stronger again) when it has fallen to under 0.75 units. How far along the cable should the booster be placed? Set up and solve an equation.      What is the half-life (or should we say half-distance) of a signal? That means, how far can it travel without dropping below 50%? (That will not actually happen because we would boost the signal.) Again, set up and solve an equation.      Draw a graph illustrating the relationship.      Indicate the points on your graph where you can check your answers to parts (c) and (d).    "
},
{
  "id": "cellphone-doubling-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#cellphone-doubling-growth-decay",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  A recent news report stated that cell phone usage is growing exponentially in developing countries. In one small country, 50,000 people owned a cell phone in the year 2000. It was estimated that usage would increase at 1.4% percent per year.     Name the variables including units.      Assuming the growth is exponential, write an equation for the function.      At this rate, how many years would it take for the number of people owning a cell phone to double? That is called the doubling time . Show how to set up and solve an equation to find the answer.      In 2011, about 682,000 people owned a cellphone. Is that count higher or lower than predicted from your equation? Explain.      Based on the 2011 data, would you say that cell phone usage was growing slower or faster than 1.4%?    "
},
{
  "id": "heart-attack-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#heart-attack-growth-decay",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  If a person has a heart attack and their heart stops beating, the amount of time it takes paramedics to restart their heart with a defibrillator is critical. Each minute that passes decreases the person's chance of survival by 10%. Source: American Red Cross Assume that this statement means the decrease is exponential and that the survival rate is 100% if the defibrillator is used immediately.     Name the variables, including units, and write an equation.      If it takes the paramedics 2 minutes to use the defibrillator, what is the person's chance of survival?      Use successive approximation to estimate to the nearest minute when the survival rate drops below 50%. Display your guesses in a table.      Solve your equation to find exactly when the survival rate drops below 50%.    "
},
{
  "id": "ten-likes-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#ten-likes-growth-decay",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  You and two buddies each invite 10 people to like your online group. Suppose everyone accepts and then they each invite 10 people. And then everyone accepts and they each invite 10 people. And so on. Of course, there is likely to be substantial overlap, but for the moment pretend that there is not any overlap.     There are 3 friends to start. In the first round they each invite 10 friends, so a total of 30 new people like your online group in the first round. How many new people like your group in the second round? The third?      Name the variables and write an equation showing how the number of new people increases in each round. Think of the original 3 friends as round 0.      Make a table showing this information. Continue your table to include the number of new people who like your group in the fourth and fifth rounds.      What is the total number of people who like your online group after five rounds? Hint: add       Comment on why our assumption is unrealistic.    "
},
{
  "id": "caffeine-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#caffeine-growth-decay",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "",
  "body": "  Joe's girlfriend Ceyda starts the day by downing two cans of Red Bull, containing a total of 160 mg of caffeine. Her body eliminates the caffeine at a slightly slower rate of 12% each hour.   (Story also appears in )      Name the variables and write an equation to model this situation.      What's the half-life of caffeine for Ceyda? Set up and solve an equation.      Ceyda heard that drinking a glass of water an hour can help eliminate caffeine faster. If so, would the half-life be shorter or longer? Explain.    "
},
{
  "id": "bacteria-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#bacteria-growth-decay",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "",
  "body": "  The population of bacteria in a culture dish begins at 2,000 and will triple every day.   (Story also appears in )      Name the variables, including units and dependence.      Make a table showing the number of bacteria at the start and after 1 day, 2 days, and 3 days.      Write an equation illustrating bacterial growth.      Your equation should fit the template for an exponential equation. What is the daily growth factor?      Use your equation to extend your table to include 10 days, 20 days, and 30 days. Be careful to report the large numbers appropriately. Hint: scientific notation       The dish can support around 1 million bacteria. When does that happen? Give your answer to the nearest hour.      Draw a graph, including a table of reasonable values. Remember, the dish can only support up to 1 million bacteria, so your graph should go up to 1 million.    "
},
{
  "id": "house-value-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#house-value-growth-decay",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "",
  "body": "  Tenzin bought a house for $291,900 but the housing market collapsed and his house value dropped 4.1% each year.   (Story also appears in )      Name the variables and write an equation relating them.      At this rate, how many years would it take for the value of Tenzin's house to drop below $240,000? Use successive approximation to guess the year.      Now set up and solve an equation.    "
},
{
  "id": "wetlands-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#wetlands-growth-decay",
  "type": "Exercise",
  "number": "5.2.8",
  "title": "",
  "body": "  One modern technique for cleaning waste water involves the use of constructed (man-made) wetlands. Wetlands act as a natural biofilter for various contaminants in the waste water. After each month in the wetlands, only about 1\/4 of the contaminants remain in any given sample. Suppose a sample had 8 grams of contaminants before it was processed in the constructed wetlands.   (Story also appears in )      How much would remain in the sample after 1 month? 2 months? 3 months?      Name the variables and write an equation relating them.      Your equation should fit the template for an exponential equation. What is the monthly decay factor?      According to your equation, when will the contaminants fall below 1 mg? 1 g? Remember and .      Draw a graph illustrating the waste water treatment process for the first 6 months.    "
},
{
  "id": "hibbing-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#hibbing-growth-decay",
  "type": "Exercise",
  "number": "5.2.9",
  "title": "",
  "body": "  Hibbing, Minnesota is the hometown of baseball star Roger Maris, basketball great Kevin McHale, the Greyhound Bus lines, the Hull-Rust-Mahoning Open Pit Iron Mine and, perhaps most famously, songwriter Bob Dylan. It is not a big town. In 2000 the population was reported at 17,071 residents, with an expected decrease of around 0.4% per year.   (Story also appears in )      What is the annual decay factor?      Name the variables and write an equation relating them.      Based on these estimates, what was the anticipated population of Hibbing in 2010?      The actual 2010 U.S. Census estimate of Hibbing's population was 16,361 people. Was the decrease slower or faster than expected? Was the decay rate more or less than 0.4%? Explain.    "
},
{
  "id": "food-shelf-growth-decay",
  "level": "2",
  "url": "sec-Exp_growth_decay.html#food-shelf-growth-decay",
  "type": "Exercise",
  "number": "5.2.10",
  "title": "",
  "body": "  Donations to a local food shelf have increased 35% over last year. There were 3,400 pounds of food donated last year.   (Story also appears in )      Name the variables, measuring time since last year. (Yes, it's a little awkward.)      Write an exponential equation relating the variables, assuming the rate of increase continues.      How much was donated this year? How much is expected next year? The year after?      At this rate, what is the doubling time? That means, how long would it be until twice as much is donated. Set up and solve an equation to answer. Report your answer to the nearest month.      The agency estimates that around 12,000 pounds of food is needed each year to meet the needs of the people they serve. In how many years will donations reach that level? (In your answer, say how many years from now.)    "
},
{
  "id": "sec-Growth_factor",
  "level": "1",
  "url": "sec-Growth_factor.html",
  "type": "Section",
  "number": "5.3",
  "title": "Growth factors",
  "body": " Growth factors   Obesity among children ages 6-11 continues to increase. From 1994 to 2010, the proportion of children classified as obese rose from an average of 1.1 out of every ten children in 1994 to around 2 out of every ten children in 2010.  Source: Centers for Disease Control and Prevention    Assuming that the prevalence of childhood obesity increases exponentially, what is the annual percent increase and what does the equation project for the year 2020? Well, unless we are able to make drastic improvements in how children eat and how much they exercise.  Because we are told obesity is increasing exponentially we can use the template for an exponential equation. The variables are The starting amount is 1.1 children out of every ten in 1994 so our equation is of the form Trouble is we don't actually know what the growth factor is. Yet.  We do know that in 2010 we have years and . We can put those values into our equation to get No particular reason for switching sides, just wanted to have the variable on the left. That's supposed to be true but we don't know what number is so we can't check. Argh.  Oh, wait a minute. The only unknown in that equation is the growth factor . What if we solve for ? First, divide each side by 1.1 to get which simplifies to Since we want to solve for the base (not the exponent), we have a power equation. We use the with power and value to get   Want a quicker way to find the growth factor? Forget the entire calculation we just did. It all boils down to two steps: and then We can even do this calculation all at once as Notice we added parentheses because the normal order of operations would do the root first and division second. We wanted the division calculated before the root.  Here's the easy version in a formula.   Growth Factor Formula  If a quantity is growing (or decaying) exponentially, then the growth (or decay) factor is where is the starting amount and is the amount after time periods.   We knew from the beginning that our equation was in the form . Now that we found the growth factor we get our final equation For example, we can check that in 2010, we have still and so   You might wonder why we didn't just round off and use the equation Look what happens when we evaluate at then. We would get Not a big difference (2.1 vs. 2.0) but enough to encourage us to keep extra digits in the growth factor in our equation. Lesson here is: don't round off the growth factor too much.   Back to the more reliable equation We can now answer the two questions. First, in 2020 we have and so According to our equation, by 2020 there would be approximately 2.9 obese children for every ten children.  The other question was what the annual percent increase is. Think back to an earlier example. Remember that Jocelyn was analyzing health care costs in Section 2.2? They began at $2.26 million and grew 6.7% per year. She had the equation So the growth factor in the equation came from the growth rate . Our equation modeling childhood obesity is The growth factor of in our equation must come from the growth rate . Think of it as converting to percent and then ignoring the 100% to see the 3.81% increase. Childhood obesity has increased around 3.81% each year. Well, on average.  Here's the general formula relating the growth rate and growth factor.   Percent Change Formula     If a quantity changes by a percentage corresponding to growth rate , then the growth factor is     If the growth factor is , then the growth rate is       Let's check. We have and so the growth rate is Not sure we really need these formulas, but there you have it.  By the way, formula works just fine if a quantity decreases by a fixed percent. One example we saw was Joe, who drank too much coffee. The growth (or should I say decay) factor was . That corresponds to a growth (decay) rate of Again, the negative means that we have a percent decrease.    Do you know     How to find the growth\/decay factor given the starting amount and another point of information?    How to find the growth\/decay factor given the doubling time or half-life?    When we use the , and when we use the instead? Ask your instructor if you need to remember the and or if they will be provided during the exam.     How to evaluate the and using your calcuator?    How to read the starting amount and percent increase\/decrease from the equation?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.        In 1962, my grandfather had savings bonds that matured to $200. He gave those to my mother to keep for me. These bonds have continued to earn interest at a fixed, guaranteed rate so I have yet to cash them in. The table lists the value at various times since then.    year  1962  1970  1980  1990  2000  2010    years since 1962  0  8  18  28  38  48    value  200.00  318.77  570.87  1,022.34  1,830.85  3,278.77     (Story also appears in and )      Use the to find the annual growth factor for the time period from 1962 to 1970.      Repeat for 1970 to 1980.      What do you notice? What in the story told you that would happen?      What is the corresponding interest rate?      Write an equation for the value of bonds over time.      Use your equation to check the information for 1990, 2000, and 2010.      In what year will the bond be worth over $5,000? Set up and solve an equation to decide.      Draw a graph using the data in the table, but not your answer to part (g). Include another year that is later than your answer to part (g).      Does your answer to part (g) agree with your graph? If not, fix your work.         Have you read news stories about archaeological digs where a specimen (like a bone) is found that dates back thousands of years? How do scientists know how old something is? One method uses the radioactive decay of carbon. Source: Wikipedia (Radiocarbon Dating) After an animal dies the carbon-14 in its body very slowly decays. By comparing how much carbon-14 remains in the bone to how much carbon-14 should have been in the bone when the animal was alive, scientist can estimate how long the animal has been dead. Clever, huh? Actually, it is so clever that Willard Libby won the Nobel Prize in Chemistry for it. The key information to know is that the half-life of carbon-14 (the amount of time it takes for half of the original amount of carbon-14 to decay) is about 5,730 years. For this problem, suppose a bone were found that should have contained 300 milligrams of carbon-14 when the animal was alive.     Find the annual growth factor. Keep at least six digits after the decimal place for your calculations.    If the bone started off with 300 mg of carbon-14, how much carbon-14 would be left after 5,730 years?      Name the variables and write an equation describing the dependence.      How many milligrams of carbon-14 should remain in this bone after 1,000 years? After 10,000 years? After 100,000 years?      How many milligrams of carbon-14 should remain in this bone after 1 million years? Explain the scientific notation answer your calculator gives you.      Draw a graph that shows up to 10,000 years.      If the bone is determined to have 100 milligrams of carbon-14, approximately how long ago did it die? Start by estimating the answer from your graph. Then revise your estimate using successive approximation. Display your guesses in a table.      Solve the equation exactly.         For each story, find the annual growth factor and annual growth rate as a percent.   Hint: First decide if you can use the or if you will need to use the . Don't forget to include the negative sign for decay rates.      Donations to the food shelf have increased 35% per year for the past few years.                People picking up food at the food shelf has increased exponentially too, from 120 per week in 2005 to 630 per week in 2011.                The crime rate has dropped 3% each year recently.                The new stop sign has decreased accidents exponentially, from 40 in 2008 to 17 in 2013.                The creeping vine taking over Fiona's lawn will double in area each year.                Attendance at parent volunteer night has doubled every 3 years.                The number of people addicted to prescription drugs was estimated to have tripled in the past 5 years. Assume the number is increasing exponentially.                The number of high school students arrested for driving under the influence is half what it was 5 years ago. Assume the number is falling exponentially.                   For each equation, find the growth rate and state its units. For example, something might grow 2% per year while something else might drop 7% per hour .     The number of households watching reality television (in millions) was estimated by the equation where is the time in years since 1990. (Story also appears in )       Chlorine is often used to disinfect water in swimming pools, but the concentration of chlorine (in ppm) drops as the swimming pool is used for hours according to the equation  (Story also appears in )       The number of players of a wildly popular mobile app drawing game has been growing exponentially according to the equation where is the number of players (in millions) and is the time in weeks since people started playing the game. (Story also appears in )         Estimates for childhood obesity for 2010 were revised to 2.1 out of every ten children. (The 1994 figure of 1.1 out of every ten children remains accurate.)     Calculate the revised growth factor. What is the revised percent increase?      Revise your equation.      Use your new equation to project childhood obesity rates for 2020.      Graph both the original and revised estimates on the same set of axes.       For each equation, find the growth rate (percent increase or percent decrease) and state the units. (For example, something might grow 2% per year while something else might drop 7% per hour )     The light that passes through panes of glass inches thick is given by the equation  (Story also appears in and )       The population of bacteria ( ) in a culture dish after days is given by the equation  (Story also appears in )       The remaining contaminants ( grams) in a waste water sample after months of treatment is given by  (Story also appears in )        Years ago, Whitney bought an antique mahogany table worth $560. Now, 30 years later, she had the table appraised for $3,700.     Calculate the annual growth factor, assuming the value of Whitney's table has increased exponentially.      What should she expect the set to be worth in another 10 years? As part of your work, name the variables and write an equation relating them.      Find the corresponding annual percent increase.       The opiate drug morphine leaves the body quickly. After 72 hours about 10% remains. A patient receives 100 mg of morphine.     How much morphine will remain in the patient's body after 72 hours?      Convert 72 hours to days.      Find the daily decay factor using the .      What is the corresponding percent decrease?      Name the variables and write an equation relating them. Check that 72 hours gives you the same answer as in part (a).      What is the half-life of morphine? Set up and solve an appropriate equation.      Draw a graph showing this patient's morphine levels for 10 days following the injection.       Unemployment figures were just released. At last report there were 20,517 unemployed adults and now, 10 months later, we have 39,061 unemployed adults.     Calculate the monthly growth factor, assuming unemployment increases exponentially.      Write an equation relating the variables.      According to your equation, what is the expected number of unemployed adults 6 months from now. Notice: the report was issued 10 months ago.       Make a table of values and draw a graph showing the number of unemployed adults for the past 10 months and the next 2 years.       Wetlands help support fish populations, various plant and animal populations, control floods and erosion from nearby lakes and streams, filter water, and help preserve our supply of ground water. Minnesota wetlands acreage in 1850 was 18.6 million acres. By 2003, that number had dropped to 9.3 million acres.   Source: Minnesota Department of Natural Resources      Assuming the acreage decreased exponentially, name the variables, find the annual decay factor and write an exponential equation showing how Minnesota wetlands have decreased.      With some effective management, many wetlands have been restored. By 2012, it's up to about 10.6 million acres. Assuming acreage has increased exponentially from 2003, name the variables (you may now want to start the years in 2003), find the growth factor and write an exponential equation showing how Minnesota wetlands have been restored.      "
},
{
  "id": "grandfather-bonds-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#grandfather-bonds-growth-factor",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "  In 1962, my grandfather had savings bonds that matured to $200. He gave those to my mother to keep for me. These bonds have continued to earn interest at a fixed, guaranteed rate so I have yet to cash them in. The table lists the value at various times since then.    year  1962  1970  1980  1990  2000  2010    years since 1962  0  8  18  28  38  48    value  200.00  318.77  570.87  1,022.34  1,830.85  3,278.77     (Story also appears in and )      Use the to find the annual growth factor for the time period from 1962 to 1970.      Repeat for 1970 to 1980.      What do you notice? What in the story told you that would happen?      What is the corresponding interest rate?      Write an equation for the value of bonds over time.      Use your equation to check the information for 1990, 2000, and 2010.      In what year will the bond be worth over $5,000? Set up and solve an equation to decide.      Draw a graph using the data in the table, but not your answer to part (g). Include another year that is later than your answer to part (g).      Does your answer to part (g) agree with your graph? If not, fix your work.    "
},
{
  "id": "carbon-14-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#carbon-14-growth-factor",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "  Have you read news stories about archaeological digs where a specimen (like a bone) is found that dates back thousands of years? How do scientists know how old something is? One method uses the radioactive decay of carbon. Source: Wikipedia (Radiocarbon Dating) After an animal dies the carbon-14 in its body very slowly decays. By comparing how much carbon-14 remains in the bone to how much carbon-14 should have been in the bone when the animal was alive, scientist can estimate how long the animal has been dead. Clever, huh? Actually, it is so clever that Willard Libby won the Nobel Prize in Chemistry for it. The key information to know is that the half-life of carbon-14 (the amount of time it takes for half of the original amount of carbon-14 to decay) is about 5,730 years. For this problem, suppose a bone were found that should have contained 300 milligrams of carbon-14 when the animal was alive.     Find the annual growth factor. Keep at least six digits after the decimal place for your calculations.    If the bone started off with 300 mg of carbon-14, how much carbon-14 would be left after 5,730 years?      Name the variables and write an equation describing the dependence.      How many milligrams of carbon-14 should remain in this bone after 1,000 years? After 10,000 years? After 100,000 years?      How many milligrams of carbon-14 should remain in this bone after 1 million years? Explain the scientific notation answer your calculator gives you.      Draw a graph that shows up to 10,000 years.      If the bone is determined to have 100 milligrams of carbon-14, approximately how long ago did it die? Start by estimating the answer from your graph. Then revise your estimate using successive approximation. Display your guesses in a table.      Solve the equation exactly.    "
},
{
  "id": "find-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#find-growth-factor",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "  For each story, find the annual growth factor and annual growth rate as a percent.   Hint: First decide if you can use the or if you will need to use the . Don't forget to include the negative sign for decay rates.      Donations to the food shelf have increased 35% per year for the past few years.                People picking up food at the food shelf has increased exponentially too, from 120 per week in 2005 to 630 per week in 2011.                The crime rate has dropped 3% each year recently.                The new stop sign has decreased accidents exponentially, from 40 in 2008 to 17 in 2013.                The creeping vine taking over Fiona's lawn will double in area each year.                Attendance at parent volunteer night has doubled every 3 years.                The number of people addicted to prescription drugs was estimated to have tripled in the past 5 years. Assume the number is increasing exponentially.                The number of high school students arrested for driving under the influence is half what it was 5 years ago. Assume the number is falling exponentially.              "
},
{
  "id": "ex-Growth_factor-7-1",
  "level": "2",
  "url": "sec-Growth_factor.html#ex-Growth_factor-7-1",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "  For each equation, find the growth rate and state its units. For example, something might grow 2% per year while something else might drop 7% per hour .     The number of households watching reality television (in millions) was estimated by the equation where is the time in years since 1990. (Story also appears in )       Chlorine is often used to disinfect water in swimming pools, but the concentration of chlorine (in ppm) drops as the swimming pool is used for hours according to the equation  (Story also appears in )       The number of players of a wildly popular mobile app drawing game has been growing exponentially according to the equation where is the number of players (in millions) and is the time in weeks since people started playing the game. (Story also appears in )     "
},
{
  "id": "childhood-obesity-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#childhood-obesity-growth-factor",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "  Estimates for childhood obesity for 2010 were revised to 2.1 out of every ten children. (The 1994 figure of 1.1 out of every ten children remains accurate.)     Calculate the revised growth factor. What is the revised percent increase?      Revise your equation.      Use your new equation to project childhood obesity rates for 2020.      Graph both the original and revised estimates on the same set of axes.    "
},
{
  "id": "find-rate-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#find-rate-growth-factor",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "  For each equation, find the growth rate (percent increase or percent decrease) and state the units. (For example, something might grow 2% per year while something else might drop 7% per hour )     The light that passes through panes of glass inches thick is given by the equation  (Story also appears in and )       The population of bacteria ( ) in a culture dish after days is given by the equation  (Story also appears in )       The remaining contaminants ( grams) in a waste water sample after months of treatment is given by  (Story also appears in )     "
},
{
  "id": "antique-table-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#antique-table-growth-factor",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "  Years ago, Whitney bought an antique mahogany table worth $560. Now, 30 years later, she had the table appraised for $3,700.     Calculate the annual growth factor, assuming the value of Whitney's table has increased exponentially.      What should she expect the set to be worth in another 10 years? As part of your work, name the variables and write an equation relating them.      Find the corresponding annual percent increase.    "
},
{
  "id": "morphine-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#morphine-growth-factor",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "  The opiate drug morphine leaves the body quickly. After 72 hours about 10% remains. A patient receives 100 mg of morphine.     How much morphine will remain in the patient's body after 72 hours?      Convert 72 hours to days.      Find the daily decay factor using the .      What is the corresponding percent decrease?      Name the variables and write an equation relating them. Check that 72 hours gives you the same answer as in part (a).      What is the half-life of morphine? Set up and solve an appropriate equation.      Draw a graph showing this patient's morphine levels for 10 days following the injection.    "
},
{
  "id": "unemployment-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#unemployment-growth-factor",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "  Unemployment figures were just released. At last report there were 20,517 unemployed adults and now, 10 months later, we have 39,061 unemployed adults.     Calculate the monthly growth factor, assuming unemployment increases exponentially.      Write an equation relating the variables.      According to your equation, what is the expected number of unemployed adults 6 months from now. Notice: the report was issued 10 months ago.       Make a table of values and draw a graph showing the number of unemployed adults for the past 10 months and the next 2 years.    "
},
{
  "id": "wetlands-acreage-growth-factor",
  "level": "2",
  "url": "sec-Growth_factor.html#wetlands-acreage-growth-factor",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "  Wetlands help support fish populations, various plant and animal populations, control floods and erosion from nearby lakes and streams, filter water, and help preserve our supply of ground water. Minnesota wetlands acreage in 1850 was 18.6 million acres. By 2003, that number had dropped to 9.3 million acres.   Source: Minnesota Department of Natural Resources      Assuming the acreage decreased exponentially, name the variables, find the annual decay factor and write an exponential equation showing how Minnesota wetlands have decreased.      With some effective management, many wetlands have been restored. By 2012, it's up to about 10.6 million acres. Assuming acreage has increased exponentially from 2003, name the variables (you may now want to start the years in 2003), find the growth factor and write an exponential equation showing how Minnesota wetlands have been restored.    "
},
{
  "id": "sec-Linear_vs_exponential",
  "level": "1",
  "url": "sec-Linear_vs_exponential.html",
  "type": "Section",
  "number": "5.4",
  "title": "Linear vs. exponential models",
  "body": " Linear vs. exponential models   Sofía bought her car new for $22,500. Now the car is fairly old and just passed 109,000 miles. Sofía looked online and estimates the car is still worth $5,700. She wonders when the car would be practically worthless, meaning under $500.  We can describe the variables in this story. Notice we are measuring the mileage in thousands. The information we are given is     0  109     22,500  5,700    But what's the equation? Hmm. Don't know for sure what type of equation might work here. Tell you what, let's compare what a linear and exponential model would tell us about the value of the car.  First, linear. The template is   Linear Equation Template      The starting value of Sofía's car is $22,500 so we just need to find the slope. We expect the slope to be negative because her car is worth less the more she drives it. Her car loses value at a rate of around $154 for each thousand miles she drives.  We are ready to write the linear equation. As usual we wrote this with subtraction instead of adding the negative slope. Quick check: when we get Remember we don't expect the exact answer because we rounded off the slope.  When will Sofía's car be worth under $500 according to this linear equation? Let's solve to find out. When , use our linear equation to get Subtract 22,500 from each side and simplify to get Now divide each side by -154 and simplify to get According to the linear equation, Sofía's car will be worth under $500 at about 143,000 miles. Since her car already has 109,000 miles on it, that means in another . For a typical driver that's two or three more years.  Next, let's take a look at the exponential model. Here goes. The template is   Exponential Equation Template    We know everything except the growth factor. We expect it to be less than 1 because her car is worth less the more she drives it. Perhaps we should say decay factor here since the function is decreasing. The starting amount is and the ending amount is after thousand miles. Using the we have   We are ready to write the exponential equation. Quick check: when we get Again, we don't expect the exact answer because we rounded off the decay factor.  When will Sofía's car be worth under $500 according to this exponential equation? Let's solve to find out. When , use our exponential equation to get Divide each side by 22,500 and simplify to get By the with growth factor and the value we get According to the exponential equation, Sofía's car will be worth under $500 at about 300,000 miles. Hard to imagine the car would last that long. Essentially the exponential model says the car will always be worth at least $500, if only for parts, I guess. Quite different from our answer from the linear equation.  Time to compare models. Which one makes more sense? First things first, the car already has a lot of miles on it. Don't know what make or model the car is, but another couple of years seems a reasonable time until is worth under $500. That's what the linear equation projects. On the other hand, the exponential model project it will hold that value for a long time, essentially for parts. That makes sense too.  Wait a minute. Does a car lose the same value for each thousand miles it's driven? That's what it means to be linear. Every thousand miles, same decrease. Nah, that's not right. Once the car is old, another 1,000 miles or so probably won't affect the value at all. Also, when a car is new, once you drive it off the lot and then that strange vinyl smell wears off and it's officially used, the car is worth a lot less. Even if it hasn't been driven much at all. What would each model say the car was worth soon after Sofía bought it, say with 10,000 miles on it? With , the estimates are   The lower value, from the exponential equation, seems more reasonable.  Here are a few more values and the graph. The graph is shows both the line and exponential curve have intercept just over $22,000, which should be $22,500. The line and curve intersect again between 100,000 and 120,000 miles (close to the exact mileage of 109,000) at right under $6,000 (close to the exact value of $5,700).     0  10  50  80  109  200  250    (if linear)  22,500  20,960  14,800  10,180  5,714      (if exponential)  22,500  19,841  11,996  8,225  5,711  1,818  969       There's no way of knowing whether the function is linear or exponential. It is probably not exactly either one. But if we have to pick, the exponential model seems closer to reality.    Do you know     When we might think a model might be linear?    The template for a linear equation?    How to find the linear equation between two points (a start and end value)?    When we might think a model might be exponential?    The template for an exponential equation?    How to find the exponential equation between two points (a start and end value)?    Why we compare linear and exponential models?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.        My parents bought the house I grew up in for $35,000 and sold it 40 years later for $342,000. True story. (It was before the housing bubble burst.)   First, assume the value of the house increased exponentially.      Calculate the annual growth factor using the .      In this model, by what percentage did the house value increase each year? Hint: use the .       Write an exponential equation showing how the value of the house increased. Don't forget to name the variables, including units. Hint: use the .       Check that your equation gives the correct sold value.       Next, assume the value of the house increased linearly instead.   In this model, by what fixed amount did the house value increase each year? Hint: calculate the slope using the .       Using the same variables, write a linear equation showing how the value of the house increased. Hint: use the .       Check that your equation gives the correct sold value.         The number of manufacturing jobs in the state has been declining for decades. In 1970, there were 1.2 million such jobs in the state but by 2010 there were only 0.6 million such jobs. Write for the number of manufacturing jobs (in millions) and for time in years since 1970.   First, assume the number of jobs decreased linearly.      Calculate the slope.      Write a linear equation showing how the number of jobs declined.      Check that your equation gives the correct value for 2010.       Next, assume the number of jobs decreased exponentially instead.   Calculate the growth factor.      Write an exponential equation showing how the number of jobs declined.      Check that your equation gives the correct value for 2010.       Now, compare the models.   Complete the table of values.    year  1970  1990  2010  2020  2030     0  20  40  50  60    (if linear)         (if exponential)             Draw a graph showing both models.      Which model has better news for 2030?         In December 2010, a popular mobile app game featuring animated birds launched from slingshots had 50 million downloads. Five months later (May 2011), the game had 200 million downloads. Let denote the number of downloads of the game (in millions) and the time in months since December 2010.     Suppose that the number of downloads have been increasing at a constant rate each month . What type of equation is suggested here? Write that equation and use it to estimate the number of downloads in November 2011 (when T = 11).      Suppose that the number of downloads have been increasing at a fixed percentage each month . What type of equation is suggested here? Write that equation and use it to estimate the number of downloads in November 2011 (when T = 11).      Which of these two models do you think is more sensible, and why?         Bus fares are up to $2.25 per ride during rush hour. Two different plans of increasing fares are being debated: 10¢ per year or 2.5% per year.     Which type of equation is being suggested in each plan? Write the equations. Don't forget to name the variables, including units.       Make a table comparing these plans over the next decade (ten years).      Draw a graph showing both options.      As a city council representative, you want to support the plan that your constituents prefer. If most of your constituents ride the bus, which plan should you support? Why?      If most of your constituents are members of the same union as the bus drivers (who count on solid earnings from the bus company to keep their jobs), then which plan should you support?        Gina weighed 165 pounds when she started her diet three months ago. Now she weighs 153 pounds.     How much longer will she have to stay on her diet to reach her goal weight of 120 pounds? Make an initial guess of how long it will take her, and use a linear and an exponential model to predict how long she will be on her diet. That means, write both equations and solve each to find the answer.       Gina's diet-buddy Casey started at 253 pounds and now weighs 235 pounds after 3 months. Casey's goal weight is 178 pounds. How long will it take him? Again, make an initial guess, and then use a linear and an exponential model to predict. Again, write and then solve both equations.       Explain why weight loss might be similar to a car depreciating in value. Think about what happens at the start of a diet and what happens long run.       Chlorofluorocarbons (CFC) are greenhouse gases that result from our use of refrigeration, air conditioning, aerosols, and foams. In 1960, the concentration of CFC in the northern hemisphere was 11.1 parts per trillion (ppt), meaning on average, there are 11.1 CFC molecules in a trillion molecules of air.  U.S. Department of Energy  In 1980 the concentration was 177 ppt. Use for the concentration in the northern hemisphere in ppt and for the year, measured in years since 1960.     Suppose that this concentration has been increasing at a constant rate each year .     By how many parts per trillion per year have CFC concentrations increased?      Write an equation illustrating this model.      According to this equation, how much will the concentration of CFC be by the year 2015?      What type of equation is being used here?       Assume instead that the concentration of CFC has been increasing a fixed percentage each year .     What is the annual growth factor that CFC concentrations increased?      Write an equation illustrating this model.      According to this new equation, how much will the concentration of CFC be by the year 2015?      What type of equation is being used here?        According to an online calculator, the recommended daily caloric intake for a woman Diane's height, weight, and activity level was 1,900 calories\/day when she was 30 years old and 1,840 calories per day when she was 40 years old.     Name the variables and summarize the information in a table. Start her age at 30 years old (so you will know the intercept).      Use a linear model to estimate the recommended daily caloric intake for Diane when she was 20 years old and now that she's 50 years old. According to this model, what will it be when she's 80 years old? Note: because we started the age at 30 years old, you will need to use -10 to get her age of 20 years old. Looks weird, but 20 is 10 years before our starting value 30 so officially that's a negative. It works fine.       Repeat using an exponential model instead.      Thoughts?       In 1995 the average price of a movie ticket was $4.35, and in 2011 the average price of a movie ticket was $7.93.  Source: National Association of Theatre Owners  The variables are , the average price of a movie ticket in dollars and the number of years since 1995.     Write a linear equation that fits this information and use it to estimate the average price of a movie ticket in 2015 and 2025.      Write an exponential equation that fits this information and use it to estimate the average price of movie ticket in 2015 and 2025.      Draw a graph of each function on the same set of axes. (Include also what each equation said about ticket prices in the year 2000.)      The actual average movie ticket price in the year 2000 was $5.39. Which model predicted a closer value – linear or exponential?       The number of asthma sufferers worldwide in 1990 was 84 million and 130 million in 2001. Let be the number of people with asthma (in millions) and the year, measured in years since 1990. Compare what the linear and exponential models project for the year 2015 and 2030. Include a graph showing both functions on the same axes.      Sales of hybrid cars in the United States have continued to increase.  Source: Earth Policy Institute  In 1999, 17 (yes, seventeen) hybrid cars were sold. By 2002 that number was up to 34,521 hybrid cars sold. Write for the number of hybrid cars sold and for the year, measured in years since 1999.     Suppose that the hybrid car sales have been increasing at a constant rate each year. Write the appropriate equation and use it to estimate sales in 2011.      Assume instead that hybrid car sales have been increasing a fixed percentage each year. Write the appropriate equation and use it to estimate sales in 2011. Comment.      Actual sales of hybrid cars in 2010 were around 13,500. Why might the number be lower than the linear model predicted?      "
},
{
  "id": "parents-house-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#parents-house-linear-exponential",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  My parents bought the house I grew up in for $35,000 and sold it 40 years later for $342,000. True story. (It was before the housing bubble burst.)   First, assume the value of the house increased exponentially.      Calculate the annual growth factor using the .      In this model, by what percentage did the house value increase each year? Hint: use the .       Write an exponential equation showing how the value of the house increased. Don't forget to name the variables, including units. Hint: use the .       Check that your equation gives the correct sold value.       Next, assume the value of the house increased linearly instead.   In this model, by what fixed amount did the house value increase each year? Hint: calculate the slope using the .       Using the same variables, write a linear equation showing how the value of the house increased. Hint: use the .       Check that your equation gives the correct sold value.    "
},
{
  "id": "manufacturing-jobs-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#manufacturing-jobs-linear-exponential",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  The number of manufacturing jobs in the state has been declining for decades. In 1970, there were 1.2 million such jobs in the state but by 2010 there were only 0.6 million such jobs. Write for the number of manufacturing jobs (in millions) and for time in years since 1970.   First, assume the number of jobs decreased linearly.      Calculate the slope.      Write a linear equation showing how the number of jobs declined.      Check that your equation gives the correct value for 2010.       Next, assume the number of jobs decreased exponentially instead.   Calculate the growth factor.      Write an exponential equation showing how the number of jobs declined.      Check that your equation gives the correct value for 2010.       Now, compare the models.   Complete the table of values.    year  1970  1990  2010  2020  2030     0  20  40  50  60    (if linear)         (if exponential)             Draw a graph showing both models.      Which model has better news for 2030?    "
},
{
  "id": "angry-birds-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#angry-birds-linear-exponential",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  In December 2010, a popular mobile app game featuring animated birds launched from slingshots had 50 million downloads. Five months later (May 2011), the game had 200 million downloads. Let denote the number of downloads of the game (in millions) and the time in months since December 2010.     Suppose that the number of downloads have been increasing at a constant rate each month . What type of equation is suggested here? Write that equation and use it to estimate the number of downloads in November 2011 (when T = 11).      Suppose that the number of downloads have been increasing at a fixed percentage each month . What type of equation is suggested here? Write that equation and use it to estimate the number of downloads in November 2011 (when T = 11).      Which of these two models do you think is more sensible, and why?    "
},
{
  "id": "bus-fares-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#bus-fares-linear-exponential",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "  Bus fares are up to $2.25 per ride during rush hour. Two different plans of increasing fares are being debated: 10¢ per year or 2.5% per year.     Which type of equation is being suggested in each plan? Write the equations. Don't forget to name the variables, including units.       Make a table comparing these plans over the next decade (ten years).      Draw a graph showing both options.      As a city council representative, you want to support the plan that your constituents prefer. If most of your constituents ride the bus, which plan should you support? Why?      If most of your constituents are members of the same union as the bus drivers (who count on solid earnings from the bus company to keep their jobs), then which plan should you support?    "
},
{
  "id": "diet-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#diet-linear-exponential",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  Gina weighed 165 pounds when she started her diet three months ago. Now she weighs 153 pounds.     How much longer will she have to stay on her diet to reach her goal weight of 120 pounds? Make an initial guess of how long it will take her, and use a linear and an exponential model to predict how long she will be on her diet. That means, write both equations and solve each to find the answer.       Gina's diet-buddy Casey started at 253 pounds and now weighs 235 pounds after 3 months. Casey's goal weight is 178 pounds. How long will it take him? Again, make an initial guess, and then use a linear and an exponential model to predict. Again, write and then solve both equations.       Explain why weight loss might be similar to a car depreciating in value. Think about what happens at the start of a diet and what happens long run.    "
},
{
  "id": "cfc-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#cfc-linear-exponential",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "  Chlorofluorocarbons (CFC) are greenhouse gases that result from our use of refrigeration, air conditioning, aerosols, and foams. In 1960, the concentration of CFC in the northern hemisphere was 11.1 parts per trillion (ppt), meaning on average, there are 11.1 CFC molecules in a trillion molecules of air.  U.S. Department of Energy  In 1980 the concentration was 177 ppt. Use for the concentration in the northern hemisphere in ppt and for the year, measured in years since 1960.     Suppose that this concentration has been increasing at a constant rate each year .     By how many parts per trillion per year have CFC concentrations increased?      Write an equation illustrating this model.      According to this equation, how much will the concentration of CFC be by the year 2015?      What type of equation is being used here?       Assume instead that the concentration of CFC has been increasing a fixed percentage each year .     What is the annual growth factor that CFC concentrations increased?      Write an equation illustrating this model.      According to this new equation, how much will the concentration of CFC be by the year 2015?      What type of equation is being used here?     "
},
{
  "id": "caloric-intake-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#caloric-intake-linear-exponential",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "  According to an online calculator, the recommended daily caloric intake for a woman Diane's height, weight, and activity level was 1,900 calories\/day when she was 30 years old and 1,840 calories per day when she was 40 years old.     Name the variables and summarize the information in a table. Start her age at 30 years old (so you will know the intercept).      Use a linear model to estimate the recommended daily caloric intake for Diane when she was 20 years old and now that she's 50 years old. According to this model, what will it be when she's 80 years old? Note: because we started the age at 30 years old, you will need to use -10 to get her age of 20 years old. Looks weird, but 20 is 10 years before our starting value 30 so officially that's a negative. It works fine.       Repeat using an exponential model instead.      Thoughts?    "
},
{
  "id": "movie-ticket-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#movie-ticket-linear-exponential",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "  In 1995 the average price of a movie ticket was $4.35, and in 2011 the average price of a movie ticket was $7.93.  Source: National Association of Theatre Owners  The variables are , the average price of a movie ticket in dollars and the number of years since 1995.     Write a linear equation that fits this information and use it to estimate the average price of a movie ticket in 2015 and 2025.      Write an exponential equation that fits this information and use it to estimate the average price of movie ticket in 2015 and 2025.      Draw a graph of each function on the same set of axes. (Include also what each equation said about ticket prices in the year 2000.)      The actual average movie ticket price in the year 2000 was $5.39. Which model predicted a closer value – linear or exponential?    "
},
{
  "id": "asthma-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#asthma-linear-exponential",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "  The number of asthma sufferers worldwide in 1990 was 84 million and 130 million in 2001. Let be the number of people with asthma (in millions) and the year, measured in years since 1990. Compare what the linear and exponential models project for the year 2015 and 2030. Include a graph showing both functions on the same axes.   "
},
{
  "id": "hybrid-cars-linear-exponential",
  "level": "2",
  "url": "sec-Linear_vs_exponential.html#hybrid-cars-linear-exponential",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": "  Sales of hybrid cars in the United States have continued to increase.  Source: Earth Policy Institute  In 1999, 17 (yes, seventeen) hybrid cars were sold. By 2002 that number was up to 34,521 hybrid cars sold. Write for the number of hybrid cars sold and for the year, measured in years since 1999.     Suppose that the hybrid car sales have been increasing at a constant rate each year. Write the appropriate equation and use it to estimate sales in 2011.      Assume instead that hybrid car sales have been increasing a fixed percentage each year. Write the appropriate equation and use it to estimate sales in 2011. Comment.      Actual sales of hybrid cars in 2010 were around 13,500. Why might the number be lower than the linear model predicted?    "
},
{
  "id": "sec-Logistic_growth",
  "level": "1",
  "url": "sec-Logistic_growth.html",
  "type": "Section",
  "number": "5.5",
  "title": "Logistic and other growth models",
  "body": " Logistic and other growth models   A flu virus has been spreading through the college dormitories. Initially 8 students were diagnosed with the flu, but that number has been growing rapidly. After 2 weeks, there were 64 students with the flu. We are interested in predicting how many students will catch the flu over the next 6 weeks or so. To get a sense of scale, there are 1,094 students currently living in the dorms.  The variables are One model estimates that the number of students diagnosed with the flu was growing 16% per day. (If this story sounds familiar, it's because the story also appears in the practice exercises and .) The corresponding equation is As a check, at 14 days there were We rounded the numbers in our table to the nearest person.     0  7  14  21  28  35  42    ( exponential )  8  23  64  181  510  1,442  4,077    While at first the exponential model seems reasonable, it quickly gets too large to make sense. After all, there are only 1,094 students currently living in the dorms so the numbers we found at 5 and 6 weeks (also known as 35 and 42 days) are totally unrealistic. The exponential model is based on the assumption that the rate of change of the number of new cases is proportional to the number of infected students: those who already have the flu.  There are both advantages and disadvantages of the exponential model. To its credit, the exponential model captures the reality of the first few weeks, where the flu spreads very rapidly. But, the exponential model misses several basic facts. First, as more students catch the flu, the number of new cases decreases in part because sick people are already surrounded by sick people so there aren't new people to get sick. Second, for whatever reasons, not everyone is going to catch the flu no matter how exposed they are. We would like to have an alternative model that keeps what works (rapid increase at first) but deals better with the long term (the growth slows down and not everyone catches the flu). There are two different models we consider that have these properties: saturation and logistic.  The first example is a saturation model. Basically it assumes that the rate of change of the number of new cases is proportional to the number of susceptible students: those who are likely to catch the flu but haven't already. Since at the beginning many susceptible students don't have the flu, it spreads very quickly, even faster than the exponential does. But once most susceptible students have caught the flu, the number of new cases dwindles.  Leaving out the details of how we found it, a possible saturation equation for our example is As a check, initially there were and at 14 days there were We rounded the numbers in our table to the nearest person.     0  7  14  21  28  35  42    ( saturation )  8  43  64  77  85  89  92    The saturation model predicts that 92 students (total) will have (or have had) the flu over the next 6 weeks.  The second example is a logistic (or S-curve ) model. Basically it assumes that the rate of change of the number of new cases is jointly proportional to the number of infected students and the number of susceptible students. It acknowledges the heavy influence the number of infected students have initially on the growth, but balances it with the limiting influence of the diminishing number of susceptible students over time.  It turns out that a possible logistic equation for our example is For example, initially there were and at 14 days there were Notice how we need parentheses around the bottom of our fraction, as usual, to override the normal order of operations. We rounded the numbers in the table to the nearest person.     0  7  14  21  28  35  42    ( logistic )  8  26  64  102  121  127  128    The logistic model projects that 128 students (total) will have (or have had) the flu over the next 6 weeks, considerably more than projected by the saturation model.  Here are all three models on the same graph.     As you can see from the graph, both the saturation and logistic curves level off as expected. One way to estimate those limiting values (or carrying capacity ) is to evaluate the functions at large values, say 60 days, 100 days, and (the unrealistic) 1,000 days.     60  100  1,000    ( exponential )       ( saturation )  94.86  95.94  96.00    ( logistic )  128.98  128.99  129.00    We crossed out the unrealistic values from the exponential equation. So, if the saturation model is accurate, then we should expect around 96 total cases. But, if the logistic model is accurate, then we should expect around 129 total cases instead.  Look back at the equations: The limiting values were there all along!    Do you know     Why we might use a logistic or saturation model, instead of an exponential model?    The difference between a logistic and saturation model?    What the limiting value of a logistic function means in the story and what it tells us about the graph?    How to find the limiting value of a logistic function?    What the graph of a logistic function looks like?    What the limiting value of a saturation function means in the story and what it tells us about the graph?    How to find the limiting value of a saturation function?    What the graph of a saturation function looks like?      If you're not sure, work the rest of exercises and then return to these questions. Or, ask your instructor or a classmate for help.     Exercises   Exercises 1-4 are available in a separate workbook format.      Corn farmers say that their crop is healthy if it is knee high by the Fourth of July. An equation modeling the height (in inches) of the corn crop days since May 1 is      According to this equation, how high is corn projected to be on June 1 (day 31)?      According to this equation, how high is corn projected to be on the Fourth of July (day 64)? Is that knee high (18 inches tall)?      With stronger corn these days, the rule ought to be chest high (52 inches) by the Fourth of July. According to this equation, approximately when is the corn projected to be that tall? Use successive approximation to answer.      The corn matures in 110 days. How tall will it be then?      Draw a graph of the function. Include when .         An alternative equation for corn height is      According to this new equation, how high is corn projected to be on June 1 (day 31)?      According to this new equation, how high is corn projected to be on the Fourth of July (day 64)? Is that knee high (18 inches tall)?      According to this new equation, on approximately what date is the corn projected to be chest high (52 inches tall)? Use successive approximation to answer.      The corn matures in 110 days. How tall will it be then, according to this new equation?      Add the graph of this function to your graph of the original equation on the previous problem. Again, include when .         Back in 1975 when my aunt and uncle bought their house in upstate New York, there was a small pond in the yard. They enlarged it and stocked it with 10 small fish. The number of fish increased over time, approximately according to the equation where is time measured in years since 1975.     Make a table showing the fish population in 1975, 1990, 2000, and 2013.      By the time there were over 500 fish in the pond, you could catch them with your bare hands. In approximately what year did that happen? Use successive approximations and display your calculations in a table.      In approximately what year did the fish population reach its capacity? Use successive approximations and display your calculations in a table.         Jason works at a costume shop selling Halloween costumes. The shop is busiest during the fall before Halloween. An equation that describes the number of daily visitors the shop receives days from August 31 is the following: An alternative equation is       Make a table showing what each equation predicts for August 31, September 15, September 30, October 15, October 25, October 28, and October 31.   Hint: those days are numbered 0, 15, 30, 45, 55, 58, and 61.        Graph both functions on the same set of axes.      Which function is more consistent with a major advertising campaign during the second week of September? Explain.        In our example in this section, we made several tables of values. Go back and check that they are correct.      Mari volunteers answering calls for in the office of her local state government representative. The office has been receiving a lot of calls recently with about BPA, a chemical found in plastics. The callers want their representative to support a bill banning BPA. An equation that describes the number of total number of calls over time is the following: where is the time since January 1 (in days), and is the total number of calls.     According to this equation, how many calls (total) will Mari's office get by February 1 (day 31), March 1 (day 59), April 1 (day 90), May 1 (day 120), and Nov 8 (day 311)?      During which months did most of the calls come in?      Draw a graph illustrating the function.      Describe what happened over time.       Even though all the callers support the bill, Mari isn't sure whether the calls represent the local constituents. Perhaps only supporters are calling her office, for example. So, she asks her pollster, Paul, to add this question to the list for his daily survey. Based on that survey, Paul estimates the percentage of local constituents who support the bill on day by the equation      According to this equation, what percentage of callers supported the bill on January 1 (day 0), March 1 (day 59), Aug 1 (day 212), Oct 1 (day 273) and Nov 8 (day 311)?      What does your equation say the percentage would be on day 500 (which probably isn't realistic in this problem)? How about day 1,000?      Use successive approximations to estimate when the percentage supporting the bill first reached majority (50%).      Set up and solve an equation to find when the percentage supporting the bill first reached majority (50%).       Infants are regularly checked to make sure they are growing accordingly. The World Health Organization publishes growth charts to evaluate infant weight in kilograms at a given age in months since birth. An equation that describes an average infant boy is the following:      According to this equation, what is the average infant boy weight at birth, 1 month, 4 months, and a year?      Convert your answers to pounds and ounces using  Hint: first convert to pounds. Then convert just the decimal part to ounces.       The equation is valid for , or up to three years old. Draw a graph that includes your points from earlier and the values at 3, 4, 5, and 6 years. Can you explain why the equation doesn't make sense after around 3 years?       The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced. The carrying capacity of the lake is estimated at 4,000 bass. Two potential models for the number of bass ( ) over time, where measures the years from when the lake was stocked 10 years ago are  (Story also appears in and )      Make a table showing the bass population projected by each model, including 10 years ago, now, in 10 more years, in 20 more years, and in 30 more years.      Draw a graph showing both curves.      Which model shows the lake reaching (near) capacity sooner: the saturation model or the logistic model?      If the current bass population in the lake by Rodney's house is around 2,500 fish, which model is more realistic?      "
},
{
  "id": "sec-Logistic_growth-2-4",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infected "
},
{
  "id": "sec-Logistic_growth-2-6",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saturation susceptible "
},
{
  "id": "sec-Logistic_growth-2-10",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic S-curve "
},
{
  "id": "sec-Logistic_growth-2-16",
  "level": "2",
  "url": "sec-Logistic_growth.html#sec-Logistic_growth-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limiting values carrying capacity "
},
{
  "id": "corn-growth-saturation-logistic",
  "level": "2",
  "url": "sec-Logistic_growth.html#corn-growth-saturation-logistic",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "  Corn farmers say that their crop is healthy if it is knee high by the Fourth of July. An equation modeling the height (in inches) of the corn crop days since May 1 is      According to this equation, how high is corn projected to be on June 1 (day 31)?      According to this equation, how high is corn projected to be on the Fourth of July (day 64)? Is that knee high (18 inches tall)?      With stronger corn these days, the rule ought to be chest high (52 inches) by the Fourth of July. According to this equation, approximately when is the corn projected to be that tall? Use successive approximation to answer.      The corn matures in 110 days. How tall will it be then?      Draw a graph of the function. Include when .    "
},
{
  "id": "corn-growth-logistic",
  "level": "2",
  "url": "sec-Logistic_growth.html#corn-growth-logistic",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "  An alternative equation for corn height is      According to this new equation, how high is corn projected to be on June 1 (day 31)?      According to this new equation, how high is corn projected to be on the Fourth of July (day 64)? Is that knee high (18 inches tall)?      According to this new equation, on approximately what date is the corn projected to be chest high (52 inches tall)? Use successive approximation to answer.      The corn matures in 110 days. How tall will it be then, according to this new equation?      Add the graph of this function to your graph of the original equation on the previous problem. Again, include when .    "
},
{
  "id": "fish-pond-logistic",
  "level": "2",
  "url": "sec-Logistic_growth.html#fish-pond-logistic",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "  Back in 1975 when my aunt and uncle bought their house in upstate New York, there was a small pond in the yard. They enlarged it and stocked it with 10 small fish. The number of fish increased over time, approximately according to the equation where is time measured in years since 1975.     Make a table showing the fish population in 1975, 1990, 2000, and 2013.      By the time there were over 500 fish in the pond, you could catch them with your bare hands. In approximately what year did that happen? Use successive approximations and display your calculations in a table.      In approximately what year did the fish population reach its capacity? Use successive approximations and display your calculations in a table.    "
},
{
  "id": "halloween-costumes-logistic",
  "level": "2",
  "url": "sec-Logistic_growth.html#halloween-costumes-logistic",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "  Jason works at a costume shop selling Halloween costumes. The shop is busiest during the fall before Halloween. An equation that describes the number of daily visitors the shop receives days from August 31 is the following: An alternative equation is       Make a table showing what each equation predicts for August 31, September 15, September 30, October 15, October 25, October 28, and October 31.   Hint: those days are numbered 0, 15, 30, 45, 55, 58, and 61.        Graph both functions on the same set of axes.      Which function is more consistent with a major advertising campaign during the second week of September? Explain.    "
},
{
  "id": "check-values-logistic-growth",
  "level": "2",
  "url": "sec-Logistic_growth.html#check-values-logistic-growth",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "  In our example in this section, we made several tables of values. Go back and check that they are correct.   "
},
{
  "id": "bpa-calls-logistic-growth",
  "level": "2",
  "url": "sec-Logistic_growth.html#bpa-calls-logistic-growth",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "  Mari volunteers answering calls for in the office of her local state government representative. The office has been receiving a lot of calls recently with about BPA, a chemical found in plastics. The callers want their representative to support a bill banning BPA. An equation that describes the number of total number of calls over time is the following: where is the time since January 1 (in days), and is the total number of calls.     According to this equation, how many calls (total) will Mari's office get by February 1 (day 31), March 1 (day 59), April 1 (day 90), May 1 (day 120), and Nov 8 (day 311)?      During which months did most of the calls come in?      Draw a graph illustrating the function.      Describe what happened over time.    "
},
{
  "id": "bpa-calls-2-logistic-growth",
  "level": "2",
  "url": "sec-Logistic_growth.html#bpa-calls-2-logistic-growth",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "  Even though all the callers support the bill, Mari isn't sure whether the calls represent the local constituents. Perhaps only supporters are calling her office, for example. So, she asks her pollster, Paul, to add this question to the list for his daily survey. Based on that survey, Paul estimates the percentage of local constituents who support the bill on day by the equation      According to this equation, what percentage of callers supported the bill on January 1 (day 0), March 1 (day 59), Aug 1 (day 212), Oct 1 (day 273) and Nov 8 (day 311)?      What does your equation say the percentage would be on day 500 (which probably isn't realistic in this problem)? How about day 1,000?      Use successive approximations to estimate when the percentage supporting the bill first reached majority (50%).      Set up and solve an equation to find when the percentage supporting the bill first reached majority (50%).    "
},
{
  "id": "baby-weight-logistic-growth",
  "level": "2",
  "url": "sec-Logistic_growth.html#baby-weight-logistic-growth",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "  Infants are regularly checked to make sure they are growing accordingly. The World Health Organization publishes growth charts to evaluate infant weight in kilograms at a given age in months since birth. An equation that describes an average infant boy is the following:      According to this equation, what is the average infant boy weight at birth, 1 month, 4 months, and a year?      Convert your answers to pounds and ounces using  Hint: first convert to pounds. Then convert just the decimal part to ounces.       The equation is valid for , or up to three years old. Draw a graph that includes your points from earlier and the values at 3, 4, 5, and 6 years. Can you explain why the equation doesn't make sense after around 3 years?    "
},
{
  "id": "bass-fishing-logistic-growth",
  "level": "2",
  "url": "sec-Logistic_growth.html#bass-fishing-logistic-growth",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "  The lake by Rodney's condo was stocked with bass (fish) 10 years ago. There were initially 400 bass introduced. The carrying capacity of the lake is estimated at 4,000 bass. Two potential models for the number of bass ( ) over time, where measures the years from when the lake was stocked 10 years ago are  (Story also appears in and )      Make a table showing the bass population projected by each model, including 10 years ago, now, in 10 more years, in 20 more years, and in 30 more years.      Draw a graph showing both curves.      Which model shows the lake reaching (near) capacity sooner: the saturation model or the logistic model?      If the current bass population in the lake by Rodney's house is around 2,500 fish, which model is more realistic?    "
},
{
  "id": "sec-PE5A",
  "level": "1",
  "url": "sec-PE5A.html",
  "type": "Section",
  "number": "5.6",
  "title": "Practice Exam 5A",
  "body": " Practice Exam 5A   Practice Exam 5A    Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   As you work, make a don't forget list of any information you need to look up or ask about.      Leopard print hat. Originally 5 out of 1,000 women shopping at a major retail store even looked twice. But that number grew and grew, by my estimate around 40% a week, thanks to carefully placed ads in fashion magazines.     Write an equation illustrating the interest in leopard print hats using for the time (in weeks) and for the number of women interested in leopard print hats (women per thousand).      Make a table showing the number of women, per thousand female shoppers, who stop and look at the hat at the start, 1 week, 2 weeks, and 3 weeks after it hits the stores.      The leopard print hat is considered popular when more than 300 out of 1,000 women try it on. According to the equation, approximately when will the hat be considered popular? Use successive approximation to find the answer to the nearest week and display your guesses in a table.      The hat will be considered passé when over 750 out of 1,000 women try it on. I mean - everyone's got one! According to your equation, when will that happen? Set up and solve an equation, again answering to the nearest week.         HeeChan bought a classic car in 2003 for investment purposes and has been watching the value increase over the years. Based on the data, HeeChan came up with two possible equations      where is the time in years since 2003 and $ is the value of the car.     How much did HeeChan pay for the car in 2003?      What does each equation predict for the value of the car in 2013? In 2020?      What does each equation say will be the eventual value long term? Hint: if you are not sure try 100 years.          The number of geese in the Twin Cities metropolitan area increased from 480 in 1968 to 25,000 in 1994. Although population is sometimes modeled with exponential models, there are many factors that might make an exponential model inappropriate, such as changes in migration, wetlands, and hunting.     Name the variables, including units and dependence.      Write a linear equation modeling the goose population.      Now write an exponential equation modeling the goose population.      Compare the models' projections for 1968, 1975, 1984, 1994, 2000, 2010, and 2020. Summarize your findings in a table.      Graph each function over the period from 1968 to 2020 on the same set of axes.   Test-taking tip: even if you have trouble with the equations, you should be able to plot the information given in the story and sketch in the appropriate shape curves.       Research indicates that the Twin Cities metropolitan area could support 60,000 geese. Use your graphs to estimate when that will happen.      The actual goose population in 2010 was around 50,000. Which model was closer?         One of the toxic radioactive elements produced by nuclear power plants is strontium-90. A large amount of strontium-90 was released in the nuclear accident at Chernobyl in the 1980s. The clouds carried the strontium-90 great distances. The rain washed it down into the grass, which was eaten by cows. People then drank the milk from the cows. Unfortunately, strontium-90 causes cancer. Strontium-90 is particularly dangerous because it has a half-life of approximately 28 years, which means that every 28 years half of the existing strontium-90 changes into a safe product; the other half remains strontium-90. Suppose that a person drank milk containing 100 milligrams of strontium-90. Source: Explorations in College Algebra, by Kime and Clark      After 28 years, how many milligrams of strontium-90 remains in the person's body? After 56 years? Hint: Both 28 and 56 are easy multiples of the half-life.       Find the annual percentage decrease of strontium-90.      Name the variables and write an equation relating them.      Suppose that any amount under 20 milligrams of strontium-90 is considered acceptable in humans. Will it have reached acceptable levels after 70 years?       "
},
{
  "id": "leopard-hat-PE5A",
  "level": "2",
  "url": "sec-PE5A.html#leopard-hat-PE5A",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": "  Leopard print hat. Originally 5 out of 1,000 women shopping at a major retail store even looked twice. But that number grew and grew, by my estimate around 40% a week, thanks to carefully placed ads in fashion magazines.     Write an equation illustrating the interest in leopard print hats using for the time (in weeks) and for the number of women interested in leopard print hats (women per thousand).      Make a table showing the number of women, per thousand female shoppers, who stop and look at the hat at the start, 1 week, 2 weeks, and 3 weeks after it hits the stores.      The leopard print hat is considered popular when more than 300 out of 1,000 women try it on. According to the equation, approximately when will the hat be considered popular? Use successive approximation to find the answer to the nearest week and display your guesses in a table.      The hat will be considered passé when over 750 out of 1,000 women try it on. I mean - everyone's got one! According to your equation, when will that happen? Set up and solve an equation, again answering to the nearest week.    "
},
{
  "id": "car-investment-PE5A",
  "level": "2",
  "url": "sec-PE5A.html#car-investment-PE5A",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "  HeeChan bought a classic car in 2003 for investment purposes and has been watching the value increase over the years. Based on the data, HeeChan came up with two possible equations      where is the time in years since 2003 and $ is the value of the car.     How much did HeeChan pay for the car in 2003?      What does each equation predict for the value of the car in 2013? In 2020?      What does each equation say will be the eventual value long term? Hint: if you are not sure try 100 years.     "
},
{
  "id": "twin-cities-geese-PE5A",
  "level": "2",
  "url": "sec-PE5A.html#twin-cities-geese-PE5A",
  "type": "Exercise",
  "number": "5.6.3",
  "title": "",
  "body": "  The number of geese in the Twin Cities metropolitan area increased from 480 in 1968 to 25,000 in 1994. Although population is sometimes modeled with exponential models, there are many factors that might make an exponential model inappropriate, such as changes in migration, wetlands, and hunting.     Name the variables, including units and dependence.      Write a linear equation modeling the goose population.      Now write an exponential equation modeling the goose population.      Compare the models' projections for 1968, 1975, 1984, 1994, 2000, 2010, and 2020. Summarize your findings in a table.      Graph each function over the period from 1968 to 2020 on the same set of axes.   Test-taking tip: even if you have trouble with the equations, you should be able to plot the information given in the story and sketch in the appropriate shape curves.       Research indicates that the Twin Cities metropolitan area could support 60,000 geese. Use your graphs to estimate when that will happen.      The actual goose population in 2010 was around 50,000. Which model was closer?    "
},
{
  "id": "strontium-90-PE5A",
  "level": "2",
  "url": "sec-PE5A.html#strontium-90-PE5A",
  "type": "Exercise",
  "number": "5.6.4",
  "title": "",
  "body": "  One of the toxic radioactive elements produced by nuclear power plants is strontium-90. A large amount of strontium-90 was released in the nuclear accident at Chernobyl in the 1980s. The clouds carried the strontium-90 great distances. The rain washed it down into the grass, which was eaten by cows. People then drank the milk from the cows. Unfortunately, strontium-90 causes cancer. Strontium-90 is particularly dangerous because it has a half-life of approximately 28 years, which means that every 28 years half of the existing strontium-90 changes into a safe product; the other half remains strontium-90. Suppose that a person drank milk containing 100 milligrams of strontium-90. Source: Explorations in College Algebra, by Kime and Clark      After 28 years, how many milligrams of strontium-90 remains in the person's body? After 56 years? Hint: Both 28 and 56 are easy multiples of the half-life.       Find the annual percentage decrease of strontium-90.      Name the variables and write an equation relating them.      Suppose that any amount under 20 milligrams of strontium-90 is considered acceptable in humans. Will it have reached acceptable levels after 70 years?    "
},
{
  "id": "sec-PE5B",
  "level": "1",
  "url": "sec-PE5B.html",
  "type": "Section",
  "number": "5.7",
  "title": "Practice Exam 5B",
  "body": " Practice Exam 5B   Practice Exam 5B     Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself one hour to work and wait until you have tried your best on all of the problems before checking any answers.      The number of school children in the district whose first language in not English has been on the rise. The equation describing the situation is where is the number of school children in the district whose first language is not English, and is time measured in years (from now).     Make a table showing the number of school children in the district whose first language is not English now, in one year, in two years, and in ten years. Don't forget now too.       What percent increase is implicit in this equation?      Use successive approximation to determine approximately when there will be over 1,700 school children in the district whose first language is not English. Display your work in a table. Round your answer to the nearest year.      Show how to solve the equation to calculate exactly when there will be over 1,700 school children in the district whose first language is not English.         The lottery jackpot started at $600,000. After 17 days the jackpot had increased to $2.1 million. The lottery is designed so that the jackpot grows exponentially.     Name the variables including units.      Write an equation describing the jackpot. Hint: find the daily growth factor.       By what percentage does the jackpot increase each day?      What will the jackpot be after 20 more days (after 37 days total)?         The creeping vine is taking over Fiona's front lawn. Write for the area covered by the vine (in square feet) and for time in years since she moved into her house.     When Fiona moved in, vine covered about 3 square feet. She believes it has doubled each year since. Write an exponential equation showing how the area covered by the vine is a function of time. Stuck? Try making a table first.       At some point the vine will take over the entire lawn, so perhaps a saturation model would be better. That equation might be Another equation would be a logistic model. Perhaps Fill in the corresponding rows of the table for each model.    years  0  1  2  3  4  5  6    area (exponential)           area (saturation)           area (logistic)               Draw a graph showing all three models on the same set of axes.         Many different agencies are working to lower infant mortality. Infant mortality is measured in deaths per thousand births. The world infant mortality rate in 1955 was around 52 (per thousand births). By the year 2000, it was down to around 23. Source: Wikipedia (Infant Mortality)      Name the variables, including units and dependence.      Write a linear equation modeling infant mortality.      Now write an exponential equation modeling infant mortality.      Compare the models' projections for 1955, 1970, 1990, 2000, 2010, and 2020. Summarize your findings in a table.      The actual rates were 40 deaths per thousand births in 1970 and 28 deaths per thousand births in 1990. Which model fits this additional data better?       "
},
{
  "id": "ELLs-PE5B",
  "level": "2",
  "url": "sec-PE5B.html#ELLs-PE5B",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": "  The number of school children in the district whose first language in not English has been on the rise. The equation describing the situation is where is the number of school children in the district whose first language is not English, and is time measured in years (from now).     Make a table showing the number of school children in the district whose first language is not English now, in one year, in two years, and in ten years. Don't forget now too.       What percent increase is implicit in this equation?      Use successive approximation to determine approximately when there will be over 1,700 school children in the district whose first language is not English. Display your work in a table. Round your answer to the nearest year.      Show how to solve the equation to calculate exactly when there will be over 1,700 school children in the district whose first language is not English.    "
},
{
  "id": "lottery-PE5B",
  "level": "2",
  "url": "sec-PE5B.html#lottery-PE5B",
  "type": "Exercise",
  "number": "5.7.2",
  "title": "",
  "body": "  The lottery jackpot started at $600,000. After 17 days the jackpot had increased to $2.1 million. The lottery is designed so that the jackpot grows exponentially.     Name the variables including units.      Write an equation describing the jackpot. Hint: find the daily growth factor.       By what percentage does the jackpot increase each day?      What will the jackpot be after 20 more days (after 37 days total)?    "
},
{
  "id": "creeping-vine-PE5B",
  "level": "2",
  "url": "sec-PE5B.html#creeping-vine-PE5B",
  "type": "Exercise",
  "number": "5.7.3",
  "title": "",
  "body": "  The creeping vine is taking over Fiona's front lawn. Write for the area covered by the vine (in square feet) and for time in years since she moved into her house.     When Fiona moved in, vine covered about 3 square feet. She believes it has doubled each year since. Write an exponential equation showing how the area covered by the vine is a function of time. Stuck? Try making a table first.       At some point the vine will take over the entire lawn, so perhaps a saturation model would be better. That equation might be Another equation would be a logistic model. Perhaps Fill in the corresponding rows of the table for each model.    years  0  1  2  3  4  5  6    area (exponential)           area (saturation)           area (logistic)               Draw a graph showing all three models on the same set of axes.    "
},
{
  "id": "infant-mortality-PE5B",
  "level": "2",
  "url": "sec-PE5B.html#infant-mortality-PE5B",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "",
  "body": "  Many different agencies are working to lower infant mortality. Infant mortality is measured in deaths per thousand births. The world infant mortality rate in 1955 was around 52 (per thousand births). By the year 2000, it was down to around 23. Source: Wikipedia (Infant Mortality)      Name the variables, including units and dependence.      Write a linear equation modeling infant mortality.      Now write an exponential equation modeling infant mortality.      Compare the models' projections for 1955, 1970, 1990, 2000, 2010, and 2020. Summarize your findings in a table.      The actual rates were 40 deaths per thousand births in 1970 and 28 deaths per thousand births in 1990. Which model fits this additional data better?    "
},
{
  "id": "sec-pfe1",
  "level": "1",
  "url": "sec-pfe1.html",
  "type": "Section",
  "number": "A.1",
  "title": "Practice Final Exam 1",
  "body": " Practice Final Exam 1     Relax. You have done problems like these before. Even if these problems look a bit different, just do what you can. If you're not sure of something, please ask! You may use your calculator. Please show all of your work and write down as many steps as you can. Don't spend too much time on any one problem. Do well. And remember, ask me if you're not sure about something.   As you work, make a don't forget list of any information you need to look up or ask about.    Caution: These review exercises do not include every possible problem you might be asked on a final exam. For example, there are no problems here from Sections , , , , or , so be sure to ask your instructor which of those sections are going to be on your final exam.      Source: Ward's Automotive Yearbooks  The graph shows the number of cars produced in North America (in millions\/year) during 1951-2011.      Identify the variables, including units and dependence.      Approximately when did North American car production first pass 9 million\/year? Indicate the corresponding point on the graph.      In which year were the most cars produced? Again, also indicate the point.      Best as you can tell from your graph, what might be a reasonable estimate of North American car production in 2015? Just guess to the nearest million\/year.      Calculate the rate of change from 1958 when production was 4.57 million cars\/year to 1971 when it was 9.83 cars million\/year. What does that tell you about North American car production during 1958-1971?      Now calculate the rate of change of from 1984 when production was 9.03 million cars\/year to 2006 when it was 6.84 million cars\/year. What does that tell you about North American car production during 1984-2006?         Sarah and Koal are bringing a large basket of stuffed animals to the crisis nursery as gifts for the children. They estimate it will cost $ for stuffed animals where      Make a table showing the cost if Sarah and Koal include 10, 20, or 40 stuffed animals.      Included in the cost is a new toy box for the animals. What does it cost?      What does the 6.95 represent and what are its units?      Draw a detailed graph, starting at 0.      If Sarah and Koal spent $262.39, how many stuffed animals were in the toy box they gave to the crisis nursery? Show how to set up and solve an equation to answer the question.      Solve the inequality What does the answer mean in terms of the story?         My favorite little black dress is machine washable. Unfortunately each time I wash it the color fades a little. The intensity of black color remaining, , is a function of the number of times I have washed the dress, , according to the equation      It will still look new as long as the intensity stays above 90%. Set up and solve an equation to figure out how many times I can wash the dress and keep it looking new. Then check some other way.      By the time only 75% of the color remains, the dress will look too faded to wear formally. How many washes before then? Find the answer to the nearest number of washes by any method you prefer.      Draw a graph showing how the color of my favorite little black dress fades.         Brock is working as the equipment manager at a local gym. They need to replace several weight machines. One option will cost $475 per month to rent the machines plus a delivery\/removal fee of $300. The other option is to buy the machines for $23,600 and pay $92\/month for a service contract.     Name the variables and write an equation for each option.      What should Brock recommend if they plan to have the machines for 3 years?      Set up and solve a system of equations to determine when the options cost the same.      What does the answer tell Brock?         Dwight's company was doing great business in 2000, but a few years later sales began to drop, and have only gotten worse. Their sales $ in millions years from 2000 is given by the following equation       According to this equation, what were the company's sales in 2000, 2004, 2009? You may confirm your answers with the graph, but use the equation to calculate.       The company decided to declare bankruptcy when sales fell below $10 million. In what year was that? Find the answer to the nearest year, showing work to justify your answer. Also, indicate the point on the graph where you can check. You may use successive approximations or the appropriate formula.          Infants are regularly checked to make sure they are growing accordingly. The World Health Organization publishes growth charts to evaluate infant weight in kilograms at a given age in months since birth (for up to three years). An equation that describes an average infant boy is the following:      According to this equation, what is the average infant boy weight at birth, 4 months, a year, and 2 years?      Convert your answer for 4 months to pounds and ounces using  Hint: first convert to pounds. Then convert just the decimal part to ounces.          Gail calculated that number of pieces of fudge she can cut from a square that is inches on each edge is given by the formula      Make a table showing the number of pieces of fudge from a square with edge: 5 inches, 10 inches, and 2 feet. Include the value for a 0 inch square too.      Draw a graph showing how the number of pieces of fudge depends on the length of the edge of the square.      According to your graph, approximately what size square should Gail make if she wants 200 pieces of fudge?      Now set up and solve an equation to find the answer to the nearest one decimal place.         Source: United States Census Bureau  In 2000 there were an estimated 20,851,820 Texans. The population of Texas has grown around 1.89% per year since then.     Name the variables and write an equation relating them.      According to your equation, what was the population of Texas in 2010?      The U.S. Census Bureau counted 25,145,561 Texans in 2010. Does that mean the actual growth rate was slightly more or slightly less than 1.89%? Explain.         Ericson has been lifting weight for the past 12 weeks. He has increased his curl weight by about 1.5 pounds per week and is up to 30 pounds.     What weight could Ericson curl 12 weeks ago?      Name the variables and write a linear equation relating them.      At this rate when will Ericson be able to curl his goal of at least 45 pounds? Set up and solve an inequality.         Source: United States Department of Agriculture  In the United States in 1970, the average person ate 2,169 calories per day. By 2008 that number had increased to 2,674 calories per day. Let be the amount a typical person eats (in calories per day) and the number of years since 1970. Compare what the linear and exponential models project for the years 2015 and 2030. Include both equations and a graph showing both functions on the same axes.      "
},
{
  "id": "ws-PE6A-2-3",
  "level": "2",
  "url": "sec-pfe1.html#ws-PE6A-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Caution: "
},
{
  "id": "car-production-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#car-production-PE6A",
  "type": "Exercise",
  "number": "A.1.1",
  "title": "",
  "body": "  Source: Ward's Automotive Yearbooks  The graph shows the number of cars produced in North America (in millions\/year) during 1951-2011.      Identify the variables, including units and dependence.      Approximately when did North American car production first pass 9 million\/year? Indicate the corresponding point on the graph.      In which year were the most cars produced? Again, also indicate the point.      Best as you can tell from your graph, what might be a reasonable estimate of North American car production in 2015? Just guess to the nearest million\/year.      Calculate the rate of change from 1958 when production was 4.57 million cars\/year to 1971 when it was 9.83 cars million\/year. What does that tell you about North American car production during 1958-1971?      Now calculate the rate of change of from 1984 when production was 9.03 million cars\/year to 2006 when it was 6.84 million cars\/year. What does that tell you about North American car production during 1984-2006?    "
},
{
  "id": "stuffed-animals-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#stuffed-animals-PE6A",
  "type": "Exercise",
  "number": "A.1.2",
  "title": "",
  "body": "  Sarah and Koal are bringing a large basket of stuffed animals to the crisis nursery as gifts for the children. They estimate it will cost $ for stuffed animals where      Make a table showing the cost if Sarah and Koal include 10, 20, or 40 stuffed animals.      Included in the cost is a new toy box for the animals. What does it cost?      What does the 6.95 represent and what are its units?      Draw a detailed graph, starting at 0.      If Sarah and Koal spent $262.39, how many stuffed animals were in the toy box they gave to the crisis nursery? Show how to set up and solve an equation to answer the question.      Solve the inequality What does the answer mean in terms of the story?    "
},
{
  "id": "lbd-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#lbd-PE6A",
  "type": "Exercise",
  "number": "A.1.3",
  "title": "",
  "body": "  My favorite little black dress is machine washable. Unfortunately each time I wash it the color fades a little. The intensity of black color remaining, , is a function of the number of times I have washed the dress, , according to the equation      It will still look new as long as the intensity stays above 90%. Set up and solve an equation to figure out how many times I can wash the dress and keep it looking new. Then check some other way.      By the time only 75% of the color remains, the dress will look too faded to wear formally. How many washes before then? Find the answer to the nearest number of washes by any method you prefer.      Draw a graph showing how the color of my favorite little black dress fades.    "
},
{
  "id": "gym-machines-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#gym-machines-PE6A",
  "type": "Exercise",
  "number": "A.1.4",
  "title": "",
  "body": "  Brock is working as the equipment manager at a local gym. They need to replace several weight machines. One option will cost $475 per month to rent the machines plus a delivery\/removal fee of $300. The other option is to buy the machines for $23,600 and pay $92\/month for a service contract.     Name the variables and write an equation for each option.      What should Brock recommend if they plan to have the machines for 3 years?      Set up and solve a system of equations to determine when the options cost the same.      What does the answer tell Brock?    "
},
{
  "id": "business-sales-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#business-sales-PE6A",
  "type": "Exercise",
  "number": "A.1.5",
  "title": "",
  "body": "  Dwight's company was doing great business in 2000, but a few years later sales began to drop, and have only gotten worse. Their sales $ in millions years from 2000 is given by the following equation       According to this equation, what were the company's sales in 2000, 2004, 2009? You may confirm your answers with the graph, but use the equation to calculate.       The company decided to declare bankruptcy when sales fell below $10 million. In what year was that? Find the answer to the nearest year, showing work to justify your answer. Also, indicate the point on the graph where you can check. You may use successive approximations or the appropriate formula.     "
},
{
  "id": "infant-weight-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#infant-weight-PE6A",
  "type": "Exercise",
  "number": "A.1.6",
  "title": "",
  "body": "  Infants are regularly checked to make sure they are growing accordingly. The World Health Organization publishes growth charts to evaluate infant weight in kilograms at a given age in months since birth (for up to three years). An equation that describes an average infant boy is the following:      According to this equation, what is the average infant boy weight at birth, 4 months, a year, and 2 years?      Convert your answer for 4 months to pounds and ounces using  Hint: first convert to pounds. Then convert just the decimal part to ounces.     "
},
{
  "id": "fudge-square-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#fudge-square-PE6A",
  "type": "Exercise",
  "number": "A.1.7",
  "title": "",
  "body": "  Gail calculated that number of pieces of fudge she can cut from a square that is inches on each edge is given by the formula      Make a table showing the number of pieces of fudge from a square with edge: 5 inches, 10 inches, and 2 feet. Include the value for a 0 inch square too.      Draw a graph showing how the number of pieces of fudge depends on the length of the edge of the square.      According to your graph, approximately what size square should Gail make if she wants 200 pieces of fudge?      Now set up and solve an equation to find the answer to the nearest one decimal place.    "
},
{
  "id": "texas-population-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#texas-population-PE6A",
  "type": "Exercise",
  "number": "A.1.8",
  "title": "",
  "body": "  Source: United States Census Bureau  In 2000 there were an estimated 20,851,820 Texans. The population of Texas has grown around 1.89% per year since then.     Name the variables and write an equation relating them.      According to your equation, what was the population of Texas in 2010?      The U.S. Census Bureau counted 25,145,561 Texans in 2010. Does that mean the actual growth rate was slightly more or slightly less than 1.89%? Explain.    "
},
{
  "id": "curl-weight-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#curl-weight-PE6A",
  "type": "Exercise",
  "number": "A.1.9",
  "title": "",
  "body": "  Ericson has been lifting weight for the past 12 weeks. He has increased his curl weight by about 1.5 pounds per week and is up to 30 pounds.     What weight could Ericson curl 12 weeks ago?      Name the variables and write a linear equation relating them.      At this rate when will Ericson be able to curl his goal of at least 45 pounds? Set up and solve an inequality.    "
},
{
  "id": "calories-PE6A",
  "level": "2",
  "url": "sec-pfe1.html#calories-PE6A",
  "type": "Exercise",
  "number": "A.1.10",
  "title": "",
  "body": "  Source: United States Department of Agriculture  In the United States in 1970, the average person ate 2,169 calories per day. By 2008 that number had increased to 2,674 calories per day. Let be the amount a typical person eats (in calories per day) and the number of years since 1970. Compare what the linear and exponential models project for the years 2015 and 2030. Include both equations and a graph showing both functions on the same axes.   "
},
{
  "id": "sec-pfe2",
  "level": "1",
  "url": "sec-pfe2.html",
  "type": "Section",
  "number": "A.2",
  "title": "Practice Final Exam 2",
  "body": " Practice Final Exam 2      Try taking this version of the practice exam under testing conditions: no book, no notes, no classmate's help, no electronics (computer, cell phone, television). Give yourself two hours to work and wait until you have tried your best on all of the problems before checking any answers.       I love coffee. But not when it gets cold. The graph shows how my cup of coffee cools.      Identify the variables, including units and dependence.      Answer each question and indicate the point on the graph you use.     How hot is my coffee right after I pour it (before it starts cooling)?      I simply will not drink my coffee once it is cooler than 150 F. How long does it take for my coffee to cool off that much?      I prefer to drink my coffee between 160 F and 180 F. What is the corresponding time period during which I should drink my coffee?          Jolene is driving up to Duluth to visit her aunt. Unfortunately it is snowing so traffic is going slowly. Her distance miles to Duluth is described by the equation where is the time in hours since 12:00 noon when Jolene started driving.     Identify the intercept, including units, and explain what it means in the story.      Identify the slope, including units, and explain what it means in the story.      Jolene plans to call her aunt once she is under 20 miles from Duluth. When will that be? Show how to set up and solve an inequality to answer the question. Find the exact time, to the nearest minute.         There sure are a lot of squirrels in my neighborhood. The equation estimates the number of squirrels ( ) where is the time in years since 2005.     Make a table showing the number of squirrels in 2005, 2008, 2013, and 2017.      Draw a graph showing how the squirrel population grew.       Approximately when will the population pass 10,000 squirrels? Guess from the graph. Then refine your answer using successive approximation.      Show how to solve the equation to determine exactly when there will be 10,000 squirrels.      There were 10,000 squirrels in 2011, so our equation is a bit off. Assuming there were still 4,000 squirrels in 2005, revise the equation. Hint: find the new growth factor.          Gail calculated that the number of calories in a cube of fudge depends on how large the cube is, say inches long on each edge. A possible equation is      How many calories are in a cube of fudge that is 1 inch on each edge?      What size cube of fudge has 200 calories? Answer to the nearest tenth (that means to 1 decimal place), showing work to justify your answer.   You may use successive approximations or the appropriate formula.        Convert your answer to millimeters (mm) using .   Test-taking tip: No answer for part (b)? Write down a guess and convert that.           The height feet of a ball seconds after it is thrown straight up in the air is given by the equation       According to the equation, how high up was the ball to start, after 0.5 seconds, and after 1 second? Use the equation to evaluate and check against the graph.       Calculate the speed (rate of change) between 0.7 seconds and 0.8 seconds.      Convert your answer from part (b) to mph. Use 1 mile = 5,280 feet.   Test-taking tip: No answer for part (b)? Write down a guess and convert that.       When will the ball hit the ground? Find the answer to the nearest hundredth (that means to 2 decimal places), showing work to justify your answer.   You may use successive approximations or the appropriate formula.          A local sporting goods store does custom embroidered jerseys for $29 each plus $1.75 per letter. Or you can order the same jerseys online for $18 each plus $2.35 per letter, but it costs another $4.95 for shipping per jersey. If we write for the number of letters on the jersey and for the total cost (in $), then those equations are       If a player named Redeisheimer (12 letters) wants a jersey, which option costs least?      Make a table showing the cost for players named: Buls (4 letters), Schaaf (6 letters), and Johnston (8 letters).      Set up and solve a system of equations to determine when the options cost the same.      Summarize your findings in words.      Graph both functions on the same set of axes. Don't forget 0 letters.       Indicate the point on your graph where you can check your solution to part (c). If it doesn't agree, check your work and\/or your graph again.         For their holiday party at the office, Adriana had a tray of 200 empanadas delivered for $196. They were so good that she had a tray of 72 empanadas delivered to bring to her sister's house on Christmas Eve, which cost $78.24. Assume that the total cost is a linear function of the number of empanadas.   Test-taking tip: Note sure about parts (b) and (c)? Try finding the equation first.      Name the variables, including units and dependence.      What does each empanada cost?      What is the delivery charge?      Write an equation for the function.         Light rail fares are currently $3.00 per ride during rush hour. Two different plans of increasing fares are being debated: 15¢ per year or 4.5% per year.     Name the variables, including units and dependence.      Write an equation describing light rail fares over the next few years, assuming they increase 15¢ per year. What is this type of function called?      Write an equation describing light rail fares over the next few years, assuming they increase 4.5% per year. What is this type of function called?      Compare what each equation tells you light rail fares would be in 1 year, 5 years, and 20 years. List your answers in a table.      Graph both options on the same set of axes. Don't forget now.        "
},
{
  "id": "coffee-temp-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#coffee-temp-PE6B",
  "type": "Exercise",
  "number": "A.2.1",
  "title": "",
  "body": "  I love coffee. But not when it gets cold. The graph shows how my cup of coffee cools.      Identify the variables, including units and dependence.      Answer each question and indicate the point on the graph you use.     How hot is my coffee right after I pour it (before it starts cooling)?      I simply will not drink my coffee once it is cooler than 150 F. How long does it take for my coffee to cool off that much?      I prefer to drink my coffee between 160 F and 180 F. What is the corresponding time period during which I should drink my coffee?     "
},
{
  "id": "traffic-linear-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#traffic-linear-PE6B",
  "type": "Exercise",
  "number": "A.2.2",
  "title": "",
  "body": "  Jolene is driving up to Duluth to visit her aunt. Unfortunately it is snowing so traffic is going slowly. Her distance miles to Duluth is described by the equation where is the time in hours since 12:00 noon when Jolene started driving.     Identify the intercept, including units, and explain what it means in the story.      Identify the slope, including units, and explain what it means in the story.      Jolene plans to call her aunt once she is under 20 miles from Duluth. When will that be? Show how to set up and solve an inequality to answer the question. Find the exact time, to the nearest minute.    "
},
{
  "id": "squirrels-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#squirrels-PE6B",
  "type": "Exercise",
  "number": "A.2.3",
  "title": "",
  "body": "  There sure are a lot of squirrels in my neighborhood. The equation estimates the number of squirrels ( ) where is the time in years since 2005.     Make a table showing the number of squirrels in 2005, 2008, 2013, and 2017.      Draw a graph showing how the squirrel population grew.       Approximately when will the population pass 10,000 squirrels? Guess from the graph. Then refine your answer using successive approximation.      Show how to solve the equation to determine exactly when there will be 10,000 squirrels.      There were 10,000 squirrels in 2011, so our equation is a bit off. Assuming there were still 4,000 squirrels in 2005, revise the equation. Hint: find the new growth factor.     "
},
{
  "id": "fudge-calories-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#fudge-calories-PE6B",
  "type": "Exercise",
  "number": "A.2.4",
  "title": "",
  "body": "  Gail calculated that the number of calories in a cube of fudge depends on how large the cube is, say inches long on each edge. A possible equation is      How many calories are in a cube of fudge that is 1 inch on each edge?      What size cube of fudge has 200 calories? Answer to the nearest tenth (that means to 1 decimal place), showing work to justify your answer.   You may use successive approximations or the appropriate formula.        Convert your answer to millimeters (mm) using .   Test-taking tip: No answer for part (b)? Write down a guess and convert that.      "
},
{
  "id": "ball-in-air-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#ball-in-air-PE6B",
  "type": "Exercise",
  "number": "A.2.5",
  "title": "",
  "body": "  The height feet of a ball seconds after it is thrown straight up in the air is given by the equation       According to the equation, how high up was the ball to start, after 0.5 seconds, and after 1 second? Use the equation to evaluate and check against the graph.       Calculate the speed (rate of change) between 0.7 seconds and 0.8 seconds.      Convert your answer from part (b) to mph. Use 1 mile = 5,280 feet.   Test-taking tip: No answer for part (b)? Write down a guess and convert that.       When will the ball hit the ground? Find the answer to the nearest hundredth (that means to 2 decimal places), showing work to justify your answer.   You may use successive approximations or the appropriate formula.     "
},
{
  "id": "custom-jerseys-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#custom-jerseys-PE6B",
  "type": "Exercise",
  "number": "A.2.6",
  "title": "",
  "body": "  A local sporting goods store does custom embroidered jerseys for $29 each plus $1.75 per letter. Or you can order the same jerseys online for $18 each plus $2.35 per letter, but it costs another $4.95 for shipping per jersey. If we write for the number of letters on the jersey and for the total cost (in $), then those equations are       If a player named Redeisheimer (12 letters) wants a jersey, which option costs least?      Make a table showing the cost for players named: Buls (4 letters), Schaaf (6 letters), and Johnston (8 letters).      Set up and solve a system of equations to determine when the options cost the same.      Summarize your findings in words.      Graph both functions on the same set of axes. Don't forget 0 letters.       Indicate the point on your graph where you can check your solution to part (c). If it doesn't agree, check your work and\/or your graph again.    "
},
{
  "id": "empanadas-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#empanadas-PE6B",
  "type": "Exercise",
  "number": "A.2.7",
  "title": "",
  "body": "  For their holiday party at the office, Adriana had a tray of 200 empanadas delivered for $196. They were so good that she had a tray of 72 empanadas delivered to bring to her sister's house on Christmas Eve, which cost $78.24. Assume that the total cost is a linear function of the number of empanadas.   Test-taking tip: Note sure about parts (b) and (c)? Try finding the equation first.      Name the variables, including units and dependence.      What does each empanada cost?      What is the delivery charge?      Write an equation for the function.    "
},
{
  "id": "light-rail-PE6B",
  "level": "2",
  "url": "sec-pfe2.html#light-rail-PE6B",
  "type": "Exercise",
  "number": "A.2.8",
  "title": "",
  "body": "  Light rail fares are currently $3.00 per ride during rush hour. Two different plans of increasing fares are being debated: 15¢ per year or 4.5% per year.     Name the variables, including units and dependence.      Write an equation describing light rail fares over the next few years, assuming they increase 15¢ per year. What is this type of function called?      Write an equation describing light rail fares over the next few years, assuming they increase 4.5% per year. What is this type of function called?      Compare what each equation tells you light rail fares would be in 1 year, 5 years, and 20 years. List your answers in a table.      Graph both options on the same set of axes. Don't forget now.     "
},
{
  "id": "sec-templates",
  "level": "1",
  "url": "sec-templates.html",
  "type": "Section",
  "number": "B.1",
  "title": "Templates",
  "body": " Templates   Linear Equation Template       Power Equation Template     Quadratic Equation Template     Exponential Equation Template    "
},
{
  "id": "sec-formula-constants",
  "level": "1",
  "url": "sec-formula-constants.html",
  "type": "Section",
  "number": "B.2",
  "title": "Formulas used to find constants",
  "body": " Formulas used to find constants   Rate of Change Formula       Intercept (of Linear) Formula       Percent Change Formula     If a quantity changes by a percentage corresponding to growth rate , then the growth factor is     If the growth factor is , then the growth rate is        Growth Factor Formula  If a quantity is growing (or decaying) exponentially, then the growth (or decay) factor is where is the starting amount and is the amount after time periods.   "
},
{
  "id": "sec-formula-solve",
  "level": "1",
  "url": "sec-formula-solve.html",
  "type": "Section",
  "number": "B.3",
  "title": "Formulas used to solve specific types of equations",
  "body": " Formulas used to solve specific types of equations   Root Formula  The equation has solution     Log-Divides Formula  The equation has solution     Quadratic Formula  The equation has solutions    "
},
{
  "id": "sec-formula-finance",
  "level": "1",
  "url": "sec-formula-finance.html",
  "type": "Section",
  "number": "B.4",
  "title": "Formulas from finance",
  "body": " Formulas from finance   Compound Interest Formula       = account balance ($)     = time invested (years)     = initial deposit or principal      = interest rate compounded monthly (as a decimal)       Equivalent APR Formula   where = interest rate compounded monthly (as a decimal)    Future Value Annuity Formula       = account balance ($)     = time invested (years)     = regular (monthly) deposits ($)     = interest rate compounded monthly (as a decimal)       Loan Payment Formula       = loan amount ($)     = time invested (years)     = regular (monthly) payment ($)     = interest rate compounded monthly (as a decimal)      "
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
