# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do

require "open-uri"

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Restaurant.destroy_all
    User.destroy_all


    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('users')


    puts "Creating users..."
    puts "Creating restaurants..."
    puts "Creating reviews..."
    # Create one user with an easy to remember username, email, and password:

    User.create!(
      first_name: 'Demo',
      last_name: 'Account',
      email: 'demo@gmail.com',
      password: 'password'
    )

    User.create!(
      first_name: 'Aaron',
      last_name: 'Jung',
      email: 'aaronjung3@gmail.com',
      password: 'password'
    )

    User.create!(
      first_name: 'Kevin',
      last_name: 'Choe',
      email: 'kchoe@gmail.com',
      password: 'password'
    )

    User.create!(
      first_name: 'Brian',
      last_name: 'Song',
      email: 'bsong@medallion.com',
      password: 'password'
    )

    User.create!(
      first_name: 'Kara',
      last_name: 'Lee',
      email: 'karaskye@gmail.com',
      password: 'password'
    )

    User.create!(
      first_name: 'John',
      last_name: 'Kirby',
      email: 'jck@gmail.com',
      password: 'password'
    )


    rest1 = Restaurant.create!(
      name: "Cafe Altro Paradiso",
      description: "Café Altro Paradiso offers an all-day Italian-inspired menu. Situated on a sunny corner in West Soho, the expansive windows reflect the light wood and marble throughout the dining room and bar, inviting guests to order a bottle of wine and linger in the space.",
      price_range: "$$$$",
      cuisine: "Italian" ,
      address: "234 Spring St, New York, NY 10013",
      neighborhood: "SoHo",
      menu: "Spaghetti Pomodoro, Rigatoni Alla Gricia, Wagyu Burger"
    )

    file1a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro_thumbnail.jpeg")
    rest1.photos.attach(io: file1a, filename: 'altro_thumbnail.jpeg')

    file1b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro_header.jpeg")
    rest1.photos.attach(io: file1b, filename: 'altro_header.jpeg')

    file1c = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro1.jpeg")
    rest1.photos.attach(io: file1c, filename: 'altro1.jpeg')

    file1d = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro2.jpeg")
    rest1.photos.attach(io: file1d, filename: 'altro2.jpeg')

    file1e = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro3.jpeg")
    rest1.photos.attach(io: file1e, filename: 'altro3.jpeg')

    file1f = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/aaltroparadiso/altro4.jpeg")
    rest1.photos.attach(io: file1f, filename: 'altro4.jpeg')


    rest2 = Restaurant.create!(
      name: "M Grill",
      description: "For over 19 years, M Grill has served the most traditional and authentic Brazilian Churrasco style BBQ.
      All of our beef are Aged Black Angus, which are seasoned with rock salt only, just as it has been done for centuries in the Pampas of Southern Brazil. We continue following the tradition by slowly cooking them in our URI.open fire charcoal pits.
      Let our meat carvers or Gauchos serve you the most succulent cuts of beef, pork, chicken, lamb and our famous grilled pineapple. They will bring you all of these mouthwatering meats and slice them thinly for your enjoyment through a continuous rotation which we call “Rodizio”.
      Continue your dining experience by stepping to our gourmet salad bar with different salad and authentic Brazilian side dishes, prepared fresh daily.",
      price_range: "$$$",
      cuisine: "Brazilian BBQ",
      address: "3832 Wilshire Blvd Suite 202, Los Angeles, CA 90010",
      neighborhood: "Koreatown",
      menu: "All you can eat"
    )

    file2a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/mgrill/mgrill_thumbnail.jpeg")
    rest2.photos.attach(io: file2a, filename: 'mgrill_thumbnail.jpeg')

    file2b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/mgrill/mgrill_header.jpeg")
    rest2.photos.attach(io: file2b, filename: 'mgrill_header.jpeg')

    file2c = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/mgrill/mgrill1.jpeg")
    rest2.photos.attach(io: file2c, filename: 'mgrill1.jpeg')

    file2d = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/mgrill/mgrill2.jpeg")
    rest2.photos.attach(io: file2d, filename: 'mgrill2.jpeg')

    file2e = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/mgrill/mgrill3.jpeg")
    rest2.photos.attach(io: file2e, filename: 'mgrill3.jpeg')


    rest3 = Restaurant.create!(
      name: "Yong Su San",
      description: "YongSuSan Restaurant is a fine dining culinary establishment that has been keeping the authenticity of the Korean cuisine alive. With an experience of over 30 years in the food industry, YongSuSan Restaurant features a stylish Korean-inspired interior setting having neutral colors. With a competent and friendly staff to call out to, YongSuSan Restaurant offers comfortable seating with well-spaced tables to boost privacy. Allowing its diners to savor true Korean tastes, like the one in the old Koryo dynasty, the restaurant serves an impressive menu with a myriad of selections including starters, a la carte, mains and desserts for the customers to feast upon. Specialty beverages can also be gulped down once you are done with your meal.",
      price_range: "$$$",
      cuisine: "Korean",
      address: "950 S. Vermont Ave., Los Angeles, 90006",
      neighborhood: "Koreatown",
      menu: "Galbijjim, Kaesung Bossam Kimchi, Yukhoe Bibimbap"
    )

    file3a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/yongsusan/yongsusan_thumbnail.jpeg")
    rest3.photos.attach(io: file3a, filename: 'yongsusan_thumbnail.jpeg')

    file3b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/yongsusan/yongsusan_header.jpeg")
    rest3.photos.attach(io: file3b, filename: 'yongsusan_header.jpeg')

    file3c = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/yongsusan/yongsusan1.jpeg")
    rest3.photos.attach(io: file3c, filename: 'yongsusan1.jpeg')

    file3d = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/yongsusan/yongsusan2.jpeg")
    rest3.photos.attach(io: file3d, filename: 'yongsusan2.jpeg')

    rest4 = Restaurant.create!(
      name: "Mo-Mo-Paradise",
      description: "Since its first restaurant opening in 1993, Mo-Mo-Paradise has expanded its presence to over 20 cities throughout Asia with plans to expand further throughout the rest of the world. Currently, Mo-Mo-Paradise can be found in Japan, Taiwan, China, Thailand, Vietnam, USA, Cambodia, Malaysia, and Indonesia.

      Our Mo-Mo-Paradise brand focuses on traditional Japanese “hot pot” with a modern twist. We offer a wide variety of quality international and local meats and vegetables that is cooked shabu-shabu or sukiyaki style at your table. Throughout Asia, Mo-Mo-Paradise has established a strong fan base due to our focus on fresh and varietal selections that are unmatched compared to other establishments. Our goal is to bring you the same quality and selections currently not offered at western shabu-shabu restaurants.",
      price_range: "$$",
      cuisine: "Japanese",
      address: "21641 S Western Ave unit a, Torrance, CA 90501",
      neighborhood: "Torrance",
      menu: "Shabu-Shabu, Sukiyaki, Kimchi, Tonkotsu"
    )

    file4a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/momoparadise/momoparadise_thumbnail.jpeg")
    rest4.photos.attach(io: file4a, filename: 'momoparadise_thumbnail.jpeg')

    file4b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/momoparadise/momoparadise_header.jpeg")
    rest4.photos.attach(io: file4b, filename: 'momoparadise_header.jpeg')




    rest5 = Restaurant.create!(
      name: "Gaetano's Restaurant",
      description: "Back to back winner of the Daily Breeze's 'Best Italian Restaurant in the South Bay', Gaetano's Restaurant is a family owned operation that emphasizes food quality and radiant guest service. We feel the most important part of Gaetano's is the experience. From the second you walk through our door, it is our duty to make your visit memorable.

      All of our food is handmade from the Butternut Squash Ravioli to the Tagliatelle and Chianti Ribs. Our Authentic Italian dishes with a modern touch sends guests home happy and wanting more.",
      price_range: "$$",
      cuisine: "Italian",
      address: "2731 E Pacific Coast Hwy, Torrance, CA 90505",
      neighborhood: "Torrance",
      menu: "Lasagna, Tagliatelle & Chianti Short Ribs, Linguini Pesto Chicken"
    )

    file5a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/gaetanos/gaetanos_thumbnail.jpeg")
    rest5.photos.attach(io: file5a, filename: 'gaetanos_thumbnail.jpeg')

    file5b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/gaetanos/gaetanos_header.jpeg")
    rest5.photos.attach(io: file5b, filename: 'gaetanos_header.jpeg')

    rest6 = Restaurant.create!(
      name: "Tamaen Japanese BBQ",
      description: "Welcome to Tamaen.
      Enjoy a dining experience with friends & family!",
      price_range: "$$$",
      cuisine: "Japanese",
      address: "1935 Pacific Coast Hwy Lomita, CA 90717",
      neighborhood: "Lomita",
      menu: "Ball Tip Beef Tartar with Truffle, A5 Wagyu Ribeye"
    )

    file6a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/tamaen/tamaen_thumbnail.jpeg")
    rest6.photos.attach(io: file6a, filename: 'tamaen_thumbnail.jpeg')

    file6b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/tamaen/tamaen_header.jpeg")
    rest6.photos.attach(io: file6b, filename: 'tamaen_header.jpeg')


    rest7 = Restaurant.create!(
      name: "Izakaya Hachi",
      description: "Izakaya Hachi is an authentic Japanese restaurant serving Japanese tapas, Yakitori, fresh oysters, ShabuShabu, traditional Sushi, and a unique variety of Sake.

      To maintain the social distance guideline, we will check all customer's temperature and ask to sanitize your hands before entering the restaurant.

      We have a 15 minutes grace period. Please call us if you are running later than 15 minutes after your reservation time. Party of 1 or 2 may go to a bar counter seat when a busy hour. If you prefer a table seat, please tell a representative or leave a comment about it. However, we may not be able to honor all requests. We look forward to serving you!",
      price_range: "$$$",
      cuisine: "Japanese",
      address: "1880A W. Carson, Carson, CA 90501",
      neighborhood: "Carson",
      menu: "Raw Oyster, Uni & Kobe Beef Sashimi, Assorted Beef Sashimi"
    )

    file7a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/izakaya_hachi/izakaya_hachi_thumbnail.jpeg")
    rest7.photos.attach(io: file7a, filename: 'izakaya_hachi_thumbnail.jpeg')

    file7b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/izakaya_hachi/izakaya_hachi_header.jpeg")
    rest7.photos.attach(io: file7b, filename: 'izakaya_hachi_header.jpeg')

    rest8 = Restaurant.create!(
      name: "Girl & the Goat L.A.",
      description: "Chef Stephanie Izard and her team are thrilled to join LA’s vibrant restaurant community and continue our tradition of serving tasty, bold-flavored foods in a fun and lively family-style setting. A few favorites, like goat empanadas and sautéed green beans, will be back on the menu. Stephanie and her team have also crafted new dishes inspired by California produce and local flavors, like carrot-tahini dip with tahini tofu, and curried goat with radishes, pickled vegetables, and masa chips. To enhance the experience we offer a selection of wines from around the world with a focus on small producers, a rotating list of craft beers, and a list of fun cocktails created by our bartenders.

      Located in the Arts District at 555 Mateo, Girl & the Goat offers dinner service Monday through Sunday, plus brunch Sunday. Girl & the Goat accepts reservations but always welcomes walk-ins, nomads and adventurers!",
      price_range: "$$$",
      cuisine: "Contemporary American",
      address: "555 Mateo St, Los Angeles, CA 90013",
      neighborhood: "Downtown",
      menu: "Pork Belly Salad, Fritters, Shrimp Salad, Mango Sticky Rice"
    )

    file8a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/girlgoat/girlgoat_thumbnail.jpeg")
    rest8.photos.attach(io: file8a, filename: 'girlgoat_thumbnail.jpeg')

    file8b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/girlgoat/girlgoat_header.jpeg")
    rest8.photos.attach(io: file8b, filename: 'girlgoat_header.jpeg')

    rest9 = Restaurant.create!(
      name: "Love and Salt",
      description: "Love and Salt is a story that begins with Cafe Pierre, a restaurant birthed by Guy Gabriele in 1977 to bring a taste of France to Los Angeles’ South Bay. While Cafe Pierre was a beloved part of the community for nearly 37 years, in 2014, Guy and his daughter Sylvie Gabriele, now the owner of Love and Salt, closed the restaurant to bring new life to the iconic space.
      Love and Salt is a philosophy: that food needs only two ingredients to be great. It’s a sensibility that informs the feeling in the restaurant and the dishes on the menu — Italian-inspired with Southern California soul. An approachable wine list and classic cocktail program similarly reflect the vibrant SoCal setting of the restaurant, located just steps from the Manhattan Beach pier.",
      price_range: "$$",
      cuisine: "Italian",
      address: "317 Manhattan Beach Blvd, Manhattan Beach, CA 90266",
      neighborhood: "Manhattan Beach",
      menu: "Wood Oven Meatballs, Japanese Mushrooms, Shaved Fennel Salad"
    )

    file9a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/lovesalt/lovesalt_thumbnail.jpeg")
    rest9.photos.attach(io: file9a, filename: 'lovesalt_thumbnail.jpeg')

    file9b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/lovesalt/lovesalt_header.jpeg")
    rest9.photos.attach(io: file9b, filename: 'lovesalt_header.jpeg')


    rest10 = Restaurant.create!(
      name: "catalina kitchen at Terranea Resort",
      description: "Set against the scenic views of Terranea Resort, Catalina Island and the Pacific Coast, catalina kitchen hosts a spirited dining experience in a vibrant and modern setting.",
      price_range: "$$$",
      cuisine: "Comtemporary American",
      address: "100 Terranea Way, Rancho Palos Verdes, CA 90275",
      neighborhood: "Palos Verdes",
      menu: "Avocado on Toast, Fried Chicken and Waffles, Huevos Rancheros"
    )

    file10a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/catalina_kitchen/catalina_kitchen_thumbnail.jpeg")
    rest10.photos.attach(io: file10a, filename: 'catalina_kitchen_thumbnail.jpeg')

    file10b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/catalina_kitchen/catalina_kitchen_header.jpeg")
    rest10.photos.attach(io: file10b, filename: 'catalina_kitchen_header.jpeg')

    rest11 = Restaurant.create!(
      name: "Little Sister",
      description: "Little Sister Redondo Beach features East-meets-West inspired dishes served in a
      relaxed social environment that feels more residential than
      restaurant, as if you're being invited into the Chef Tin's home.
      Little Sister's menu showcases Chef Tin's take on one of the more
      interesting and rich collisions of food and culture that was borne out
      of the European colonization of Southeast Asia. Dishes blend and
      balance the spices and flavors of Southeast Asia with French
      techniques and Dutch and British colonial influences. The menu is
      continually and progressively evolving, reflecting inspiration and the
      seasons.Little Sister Redondo Beach offers straight-up, honest, home-style Vietnamese cuisine—the type of food I grew up eating with my grandparents in the San Gabriel Valley.",
      price_range: "$$",
      cuisine: "Southeast Asian",
      address: "247 Ave Del Norte, Redondo Beach, CA 90277",
      neighborhood: "Redondo Beach",
      menu: "Lemongrass Chicken, Papaya Salad, Octopus Salad"
    )

    file11a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/littlesister/littlesister_thumbnail.jpeg")
    rest11.photos.attach(io: file11a, filename: 'littlesister_thumbnail.jpeg')

    file11b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/littlesister/littlesister_header.jpeg")
    rest11.photos.attach(io: file11b, filename: 'littlesister_header.jpeg')

    rest12 = Restaurant.create!(
      name: "Bestia",
      description: "A multi-regional Italian restaurant in the Arts District of downtown Los Angeles.",
      price_range: "$$$",
      cuisine: "Italian",
      address: "2121 E. 7th Place, Los Angeles, CA 90021",
      neighborhood: "Downtown",
      menu: "Roasted Marrow Bone, Mussels, Slow Roasted Lamb Neck"
    )

    file12a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/bestia/bestia_thumbnail.jpeg")
    rest12.photos.attach(io: file12a, filename: 'bestia_thumbnail.jpeg')

    file12b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/bestia/bestia_header.jpeg")
    rest12.photos.attach(io: file12b, filename: 'bestia_header.jpeg')

    rest13 = Restaurant.create!(
      name: "Ospi",
      description: "Ospi is the sophomore restaurant of Jackson & Melissa Kalb, focused on Southern Italian cooking and way of life. The name derives from ospitante (“host” in Italian), with the expectation that guests will feel as comfortable at Ospi as they would at a friend’s dinner party. There will be plenty of house-made pastas as well as an expanded offering of pizzas. The beverage program crafted by Kalb features mostly Californian and Southern Italian wines and a full bar with a special negroni section. At Ospi, the pizza is inspired by the techniques of Antico Forno Roscioli which Jackson and Melissa frequented while visiting Rome. Focusing on Romana Tonda-style crusts that are cracker-thin, he is adapting a recipe that he feels will resonate with the LA diner. Jackson feels it extremely important to not take food too seriously. Take a trip to Southern Italy and be a guest in our home.",
      price_range: "$$$$",
      cuisine: "Italian",
      address: "2025 Pacific Ave, Venice, CA 90291",
      neighborhood: "Venice",
      menu: "Caio e Pepe, Neapolitan Meatballs, Spicy Rigatoni "
    )

    file13a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/ospi/ospi_thumbnail.jpeg")
    rest13.photos.attach(io: file13a, filename: 'ospi_thumbnail.jpeg')

    file13b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/ospi/ospi_header.jpeg")
    rest13.photos.attach(io: file13b, filename: 'ospi_header.jpeg')

    rest14 = Restaurant.create!(
      name: "Frida Mexican Cuisine",
      description: "We are open for curbside pickup, takeout and delivery - we care for you! Take care of yourselves and eat Mexican food! We are open during normal business hours.
      Monday-Thursday, 11am-10pm
      Friday & Saturday, 11am-11pm
      Sunday, 10am-9pm",
      price_range: "$$",
      cuisine: "Mexican",
      address: "21438 Hawthorne Blvd, 21438 Hawthorne Blvd, Torrance, CA 90503",
      neighborhood: "Torrance",
      menu: "Tacos De Rib Eye, Fajitas De Pollo, Ceviche"
    )

    file14a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/frida/frida_thumbnail.jpeg")
    rest14.photos.attach(io: file14a, filename: 'frida_thumbnail.jpeg')

    file14b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/frida/frida_header.jpeg")
    rest14.photos.attach(io: file14b, filename: 'frida_header.jpeg')

    rest15 = Restaurant.create!(
      name: "Gjelina",
      description: "Gjelina is a restaurant specializing in New American cuisine. Open every day from 8 a.m. until 11pm, serving breakfast, brunch, lunch, and dinner.
      For breakfast, try 9 grain pancakes with butter and maple syrup or warm banana buckwheat loaf with butter and jam of the day. Brunch options include Moroccan baked eggs and 7 grain porridge. Gjelina offers a variety of oysters, crudo, charcuterie and salad options to start at lunch and dinner. Main courses include pizzas from our wood fired oven and entrees like duck confit, house made pastas and roasted organic half chicken.
      *Only ADA certified animals are allowed in Gjelina
      *A 20% Mandatory Service Charge is added to your check. Our belief is that every hourly Gjelina employee contributes to your service and 100% of the MSC will be distributed amongst them.",
      price_range: "$$$",
      cuisine: "American",
      address: "1427 Abbot Kinney Blvd, Venice, CA 90291",
      neighborhood: "Venice",
      menu: "Mushroom Pizza, Lamb Sausage Pizza, Lamb Burger"
    )

    file15a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/gjelina/gjelina_thumbnail.jpeg")
    rest15.photos.attach(io: file15a, filename: 'gjelina_thumbnail.jpeg')

    file15b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/gjelina/gjelina_header.jpeg")
    rest15.photos.attach(io: file15b, filename: 'gjelina_header.jpeg')

    rest16 = Restaurant.create!(
      name: "Marlou DTLA",
      description: "Located in the heart of Downtown Los Angeles, Chefs / Owners Louis Huh and Marcos Spaziani are serving up delicious fusion faire. Chef Marcos was the new chef of Below Deck Sailing Yacht, a popular show on Bravo TV and NBC. Chef Louis has competed and won on the Food Network. Together, they created ML Eats, a food truck in Los Angeles, that catered to community events, sporting events, the Grammys, etc. Now their brick & mortar, Marlou LA, is a destination restaurant for all visiting foodies and locals. Marlou LA will be opening a second location in Koreatown in the coming months. Stay tuned!",
      price_range: "$$$",
      cuisine: "American",
      address: "819 Flower St, Los Angeles, CA 90017-4607",
      neighborhood: "Little Tokyo",
      menu: "Heirloom Tomato & Buratta, Meatballs, Hamachi Tiradito"
    )

    file16a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/marlou/marlou_thumbnail.jpeg")
    rest16.photos.attach(io: file16a, filename: 'marlou_thumbnail.jpeg')

    file16b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/marlou/marlou_header.jpeg")
    rest16.photos.attach(io: file16b, filename: 'marlou_header.jpeg')

    rest17 = Restaurant.create!(
      name: "Bacari - Silver Lake",
      description: "Bacari Silverlake is a Venetian-inspired small plates restaurant featuring Mediterranean-influenced dishes by Chef Lior Hillel. We are the 5th restaurant of the Kronfli Brothers, a family-owned, growing group of restaurants in the Los Angeles area. Offering a rotating curation of craft cocktails, small-production wines, and eclectic beers from around the world. Our team provides warm hospitality in our comfortable, dining room marked by our beautiful main garden & deck, outer herb garden, and spacious lounge and bar area. We look forward to seeing you soon!",
      price_range: "$$$",
      cuisine: "Italian",
      address: "3626 Sunset Blvd, Los Angeles, CA 90026-1059",
      neighborhood: "Silver Lake",
      menu: "Sea Bass, Shrimp Ceviche, Bacari Frieds"
    )

    file17a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/bacari/bacari_thumbnail.jpeg")
    rest17.photos.attach(io: file17a, filename: 'bacari_thumbnail.jpeg')

    file17b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/bacari/bacari_header.jpeg")
    rest17.photos.attach(io: file17b, filename: 'bacari_header.jpeg')

    rest18 = Restaurant.create!(
      name: "Fogo de Chao - Los Angeles",
      description: "Fogo de Chão is an internationally-renowned steakhouse from Brazil that allows guests to discover what’s next at every turn. Founded in Southern Brazil in 1979, Fogo elevates the centuries-old culinary art of churrasco – roasting high-quality cuts of meat over an open flame – into a cultural dining experience of discovery. Please join us in our dining room, in our more casual Bar Fogo, or bring the Fogo Experience to you with Fogo To-Go or Catering. Visit our website to make a reservation or place an order.",
      price_range: "$$",
      cuisine: "Brazilian",
      address: "800 S. Figueroa, Los Angeles, CA 90017",
      neighborhood: "Downtown",
      menu: "Churrasco"
    )

    file18a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/fogo/fogo_thumbnail.jpeg")
    rest18.photos.attach(io: file18a, filename: 'fogo_thumbnail.jpeg')

    file18b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/fogo/fogo_header.jpg")
    rest18.photos.attach(io: file18b, filename: 'fogo_header.jpg')

    rest19 = Restaurant.create!(
      name: "Beauty & Essex - Los Angeles",
      description: "The third location of Beauty & Essex occupies 10,000 square feet of space on North Cahuenga Boulevard. The menu features Chef Santos’ signature multi-ethnic dishes including: Grilled Cheese and Tomato Soup Dumplings, Tuna Poke Wonton Tacos, and Oven Braised Chicken Meatballs. For the first time, outdoor seating has been introduced to the brand with a ground floor courtyard and a patio on the second level. Not to be outdone, the double-height main dining room offers natural light from a 20-foot oval skylight, while an opulent private dining room that allows for a more intimate dining experience.",
      price_range: "$$$",
      cuisine: "American",
      address: "1615 Cahuenga Blvd, Los Angeles, CA 90028",
      neighborhood: "Hollywood",
      menu: "Grilled Cheese, Over Braised Chicken Meatballs, Tomato Soup Dumplings"
    )

    file19a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/beautyessex/beautyessex_thumbnail.jpeg")
    rest19.photos.attach(io: file19a, filename: 'beautyessex_thumbnail.jpeg')

    file19b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/beautyessex/beautyessex_header.jpeg")
    rest19.photos.attach(io: file19b, filename: 'beautyessex_header.jpeg')

    rest20 = Restaurant.create!(
      name: "The Little Door",
      description: "Two simple wooden doors open up to quite a buzz in an otherwise romantic courtyard, where a colorful crowd hangs at the bar and lingers at coveted patio tables. Inside, seats spread throughout the candlelit house-turned-restaurant with intimate furniture. Organic seasonal ingredients, creatively prepared and impeccably presented, characterize our unique menu. If you do not see a reservation time for the time you would like please also check on Tock at exploretock.com/thelittledoor",
      price_range: "$$$",
      cuisine: "Contemporary French",
      address: "8164 West 3rd Street, Los Angeles, CA 90048",
      neighborhood: "West Hollywood",
      menu: "Couscous Royale, Oysters, Steak Tartare"
    )

    file20a = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/littledoor/littledoor_thumbnail.jpg")
    rest20.photos.attach(io: file20a, filename: 'littledoor_thumbnail.jpeg')

    file20b = URI.open("https://chowtime-seeds.s3.us-west-1.amazonaws.com/assetsforChowtime/littledoor/littledoor_thumbnail.jpg")
    rest20.photos.attach(io: file20b, filename: 'littledoor_thumbnail.jpeg')


    Review.create!(
      author_id: 1,
      restaurant_id: 1,
      overall: 5,
      food: 5,
      service: 5,
      ambience: 5,
      body: "One of my favorite restaurants in Manhattan south of Houston. Immaculate vibes"
    )

    Review.create!(
      author_id: 2,
      restaurant_id: 1,
      overall: 4,
      food: 5,
      service: 5,
      ambience: 5,
      body: "The oysters man IM TELLING YOU"
    )

    Review.create!(
      author_id: 2,
      restaurant_id: 2,
      overall: 4,
      food: 5,
      service: 5,
      ambience: 4,
      body: "No frills sushi by some of the most dedicated chefs. Recommend the softshell crab."
    )

    Review.create!(
      author_id: 3,
      restaurant_id: 2,
      overall: 5,
      food: 5,
      service: 5,
      ambience: 5,
      body: "Arigato!"
    )

    Review.create!(
      author_id: 4,
      restaurant_id: 3,
      overall: 5,
      food: 5,
      service: 5,
      ambience: 5,
      body: "That shit was bussin fr fr"
    )

    Review.create!(
      author_id: 2,
      restaurant_id: 3,
      overall: 5,
      food: 5,
      service: 5,
      ambience: 5,
      body: "Truly a great dining experience."
    )

    puts "Done!"
