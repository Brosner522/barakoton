puts "Destroying seeds!!"
User.destroy_all
Session.destroy_all
Workout.destroy_all


puts "Seeding users"
u1 = User.create(name: "Barak Rosner", email: "rosnerbb@gmail.com", age: 25, weight: 230, sessions: [], password: "Rosner18")
u2 = User.create(name: "Hannah Hasten", email: "hannahhasten@gmail.com", age: 24, weight: 120, sessions: [], password: "Hasten18")
u3 = User.create(name: "Rae", email: "rae@gmail.com", age: 18, weight: 124, sessions: [], password: "Rae18")
u4 = User.create(name: "Sam Jonas", email: "samjonas@gmail.com", age: 27, weight: 130, sessions: [], password: "Sam18")
u5 = User.create(name: "Jackie Lyn", email: "jackielyn@gmail.com", age: 21, weight: 75, sessions: [], password: "Jackie18")
u6 = User.create(name: "Mollz fillet", email: "mollz@gmail.com", age: 19, weight: 20, sessions: [], password: "Mollz18")


puts "Seeding Workouts"
w1 = Workout.create(video: "UBMk30rjy0o", time: "20 minutes", difficulty: 8, workout_type: "Full body", coach: "Pamela Reif")
w2 = Workout.create(video: "gC_L9qAHVJ8", time: "30 minutes", difficulty: 3, workout_type: "Fat burning", coach: "Body Project")
w3 = Workout.create(video: "3eay48JwTPI", time: "7 minutes", difficulty: 4, workout_type: "Lazy girl workout", coach: "Vicky Justiz")
w4 = Workout.create(video: "ml6cT4AZdqI", time: "30 minutes", difficulty: 7, workout_type: "HIIT cardio", coach: "Lita Lewis")
w5 = Workout.create(video: "tiC0zylTB0w", time: "10 minutes", difficulty: 5, workout_type: "Kettlebell workout", coach: "Body Fit By Amy")
w6 = Workout.create(video: "hnrkkvx4d50", time: "30 minutes", difficulty: 2, workout_type: "Yoga flow", coach: "Jessica Richburg")
w7 = Workout.create(video: "3p8EBPVZ2Iw", time: "12 minutes", difficulty: 6, workout_type: "6 Pack abs", coach: "Thenx")
w8 = Workout.create(video: "L_xrDAtykMI", time: "15 minutes", difficulty: 1, workout_type: "Strech routine", coach: "Tom Merrick")
w9 = Workout.create(video: "U0bhE67HuDY", time: "15 minutes", difficulty: 4, workout_type: "Weight training", coach: "Hasfit")
w10 = Workout.create(video: "JeYP5sySvJs", time: "45 minutes", difficulty: 9, workout_type: "Carido and toning", coach: "Kit Rich")


puts "Seeding Sessions"
Session.create(notes: ["I’ve done this workout 3-4 times now and it never fails to kick my ass! Great workout. I hope to see more workouts soon!"], user_id: u1.id, workout_id: w9.id)
Session.create(notes: ["I loved every second of it!!!! I was sweating like crazy, my legs are on fire, but I love this feeling!"], user_id: u3.id,workout_id: w3.id)
Session.create(notes: ["Doing this workout everyday since lockdown as it’s the only one my kids will do with me."], user_id: u5.id,workout_id: w5.id)
Session.create(notes: ["She makes working out even on Youtube fun! Love her!"], user_id: u1.id,workout_id: w1.id)
Session.create(notes: ["I love these 45 minute workouts!!"], user_id: u2.id,workout_id: w10.id)

puts "✅ Done seeding!"

