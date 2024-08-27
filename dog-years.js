function dogYears(planet, age) {
    const planetYrs = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    }

    const SEC_PER_YEAR = 31_557_600;
    const DOG_YEARS = 7
    const dogAge = age / planetYrs[planet] * DOG_YEARS / SEC_PER_YEAR


    return Math.round(dogAge * 100) / 100

}
