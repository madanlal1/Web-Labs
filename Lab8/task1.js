const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}