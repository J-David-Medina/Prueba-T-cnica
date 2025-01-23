
export const Ejercicio1 = () => {

    //Encontrar el Mayor Palíndromo Producto de Dos Números de Tres Dígitos
    const polindromo = num => {
        const numero = num.toString()
        return numero === numero.split('').reverse().join('')
    }

    const mayorPolindromo = () => {
        let numMax = 0
        for (let i = 999; i >= 100; i--) {
            for (let a = i; a >= 100; a--) {
                const multi = i * a
                if (multi < numMax) break
                if (polindromo(multi)) {
                    numMax = multi
                }
            }
        }
        return numMax
    }

    const numMax = mayorPolindromo()

    return (
        <div className="ejercicio">
            <h4>Ejercicio #1 Nùmeros Palíndromo</h4>
            <p> El mayor número palíndromo producto de dos números de tres dígitos es <strong>{numMax}</strong> </p>

        </div>
    )


}

