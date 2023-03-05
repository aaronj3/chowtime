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
    User.destroy_all
    Restaurant.destroy_all
    Review.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."
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
      name: "Aaltro Paradiso",
      price_range: "$$$$",
      cuisine: "Italian" ,
      address: "234 Spring St, New York, NY 10013",
      neighborhood: "SoHo",
      menu: "Spaghetti Pomodoro, Rigatoni Alla Gricia, Wagyu Burger"
    )

    Restaurant.create!(
      name: "Hama Sushi",
      price_range: "$$",
      cuisine: "Japanese",
      address: "347 E 2nd St, Los Angeles, CA 90012",
      neighborhood: "Little Tokyo",
      menu: "Omakase"
    )

    Restaurant.create!(
      name: "Yong Su San",
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
      restaurant_id: 2,
      overall: 4,
      food: 5,
      service: 5,
      ambience: 4,
      body: "No frills sushi by some of the most dedicated chefs. Recommend the softshell crab."
    )

    Review.create!(
      author_id: 5,
      restaurant_id: 3,
      overall: 5,
      food: 5,
      service: 5,
      ambience: 5,
      body: "That shit was bussin fr fr"
    )



    puts "Done!"
  end
