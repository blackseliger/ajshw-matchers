import sortAllHealth from "../js/app"


test('should sort ASC', () => {
    const result = sortAllHealth([
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ])

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    expect(result).toEqual(expected)
})

