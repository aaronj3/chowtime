# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
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


    Restaurant.create!(
      name: "Cafe Aaltro Paradiso",
      description: "Café Altro Paradiso offers an all-day Italian-inspired menu. Situated on a sunny corner in West Soho, the expansive windows reflect the light wood and marble throughout the dining room and bar, inviting guests to order a bottle of wine and linger in the space.",
      price_range: "$$$$",
      cuisine: "Italian" ,
      address: "234 Spring St, New York, NY 10013",
      neighborhood: "SoHo",
      menu: "Spaghetti Pomodoro, Rigatoni Alla Gricia, Wagyu Burger"
    )

    Restaurant.create!(
      name: "M Grill",
      description: "For over 19 years, M Grill has served the most traditional and authentic Brazilian Churrasco style BBQ.
      All of our beef are Aged Black Angus, which are seasoned with rock salt only, just as it has been done for centuries in the Pampas of Southern Brazil. We continue following the tradition by slowly cooking them in our open fire charcoal pits.
      Let our meat carvers or Gauchos serve you the most succulent cuts of beef, pork, chicken, lamb and our famous grilled pineapple. They will bring you all of these mouthwatering meats and slice them thinly for your enjoyment through a continuous rotation which we call “Rodizio”.
      Continue your dining experience by stepping to our gourmet salad bar with different salad and authentic Brazilian side dishes, prepared fresh daily.",
      price_range: "$$$",
      cuisine: "Brazilian BBQ",
      address: "3832 Wilshire Blvd Suite 202, Los Angeles, CA 90010",
      neighborhood: "Koreatown",
      menu: "All you can eat"
    )

    Restaurant.create!(
      name: "Yong Su San",
      description: "YongSuSan Restaurant is a fine dining culinary establishment that has been keeping the authenticity of the Korean cuisine alive. With an experience of over 30 years in the food industry, YongSuSan Restaurant features a stylish Korean-inspired interior setting having neutral colors. With a competent and friendly staff to call out to, YongSuSan Restaurant offers comfortable seating with well-spaced tables to boost privacy. Allowing its diners to savor true Korean tastes, like the one in the old Koryo dynasty, the restaurant serves an impressive menu with a myriad of selections including starters, a la carte, mains and desserts for the customers to feast upon. Specialty beverages can also be gulped down once you are done with your meal.",
      price_range: "$$$",
      cuisine: "Korean",
      address: "950 S. Vermont Ave., Los Angeles, 90006",
      neighborhood: "Koreatown",
      menu: "Galbijjim, Kaesung Bossam Kimchi, Yukhoe Bibimbap"
    )

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
  end
