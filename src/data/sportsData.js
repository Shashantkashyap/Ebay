const sportsData = [
    {
      id: 35,
      title: "Football",
      price: 29.99,
      description: "Standard size 5 football suitable for all ages.",
      category: "sports",
      image: "https://img.freepik.com/free-photo/success-grass-soccer-ball-generated-by-ai_188544-9819.jpg",
      rating: {
        rate: 4.5,
        count: 100
      }
    },
    {
      id: 36,
      title: "Basketball",
      price: 25.99,
      description: "Indoor/outdoor basketball with excellent grip.",
      category: "sports",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrBPUtbL0gtp8NnLQFlMuZlwXKSsraIM28Q&s",
      rating: {
        rate: 4.2,
        count: 150
      }
    },
    {
      id: 37,
      title: "Tennis Racket",
      price: 89.99,
      description: "Professional-grade tennis racket for competitive play.",
      category: "sports",
      image: "https://w0.peakpx.com/wallpaper/811/334/HD-wallpaper-tennis-tennis-racket-ball-ball-on-racket.jpg",
      rating: {
        rate: 4.8,
        count: 50
      }
    },
    {
      id: 38,
      title: "Golf Club Set",
      price: 299.99,
      description: "Complete golf club set with bag for all skill levels.",
      category: "sports",
      image: "https://hips.hearstapps.com/hmg-prod/images/golf-clubs-1614721390.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
      rating: {
        rate: 4.6,
        count: 80
      }
    },
    {
      id: 39,
      title: "Baseball Glove",
      price: 49.99,
      description: "High-quality leather baseball glove for maximum performance.",
      category: "sports",
      image: "https://images.pexels.com/photos/2868705/pexels-photo-2868705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: {
        rate: 4.3,
        count: 120
      }
    },
    {
      id: 40,
      title: "Soccer Ball",
      price: 19.99,
      description: "Durable soccer ball for practice and match play.",
      category: "sports",
      image: "https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg?cs=srgb&dl=pexels-pixabay-47354.jpg&fm=jpg",
      rating: {
        rate: 4.7,
        count: 200
      }
    },
    {
      id: 41,
      title: "Cricket Bat",
      price: 59.99,
      description: "Professional cricket bat for top-level play.",
      category: "sports",
      image: "https://w0.peakpx.com/wallpaper/490/893/HD-wallpaper-cricket-bat-sports-thumbnail.jpg",
      rating: {
        rate: 4.4,
        count: 75
      }
    },
    {
      id: 42,
      title: "Volleyball",
      price: 22.99,
      description: "Beach and indoor volleyball for recreational use.",
      category: "sports",
      image: "https://img.freepik.com/premium-photo/volley-ball-indoors-still-life_23-2150587335.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
      rating: {
        rate: 4.6,
        count: 90
      }
    },
    {
      id: 43,
      title: "Hockey Stick",
      price: 79.99,
      description: "Lightweight and durable hockey stick for competitive play.",
      category: "sports",
      image: "https://www.shutterstock.com/image-photo/field-hockey-stick-ball-on-260nw-2001229310.jpg",
      rating: {
        rate: 4.5,
        count: 60
      }
    },
    {
      id: 44,
      title: "Badminton Racket",
      price: 29.99,
      description: "High-performance badminton racket for all skill levels.",
      category: "sports",
      image: "https://media.istockphoto.com/id/1761333789/photo/badminton-shuttlecocks-and-racket-placed-in-the-corner-of-a-synthetic-field.jpg?s=612x612&w=0&k=20&c=3rr4BZqe1rDWsCe6LF_YPCXZe6Um5jizc6d6n96U1Q4=",
      rating: {
        rate: 4.3,
        count: 130
      }
    },
    {
      id: 45,
      title: "Table Tennis Paddle",
      price: 24.99,
      description: "Professional table tennis paddle for advanced play.",
      category: "sports",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd9dIR8B2EmJDBnwul4D9FGuLV7JOzER92A&s",
      rating: {
        rate: 4.4,
        count: 110
      }
    },
    {
      id: 46,
      title: "Rugby Ball",
      price: 34.99,
      description: "Durable rugby ball for competitive and recreational use.",
      category: "sports",
      image: "https://images.pexels.com/photos/16566965/pexels-photo-16566965/free-photo-of-rugby-ball-on-grass-pitch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: {
        rate: 4.5,
        count: 95
      }
    },
    {
      id: 47,
      title: "Swimming Goggles",
      price: 14.99,
      description: "Comfortable and adjustable swimming goggles.",
      category: "sports",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT590bn7EznEs4xfsyTPdemm9SyXNlS8glOGQ&s",
      rating: {
        rate: 4.2,
        count: 140
      }
    },
    {
      id: 48,
      title: "Boxing Gloves",
      price: 39.99,
      description: "High-quality boxing gloves for training and competition.",
      category: "sports",
      image: "https://t3.ftcdn.net/jpg/01/92/04/12/360_F_192041265_DRjggn56Ecq98ACGh2VmsTx9spYjX0Fb.jpg",
      rating: {
        rate: 4.6,
        count: 85
      }
    },
    {
      id: 49,
      title: "Skateboard",
      price: 59.99,
      description: "Durable skateboard for all skill levels.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      rating: {
        rate: 4.3,
        count: 160
      }
    }
  ];
  
  export default sportsData;
  