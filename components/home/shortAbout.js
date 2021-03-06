import Link from 'next/link'
import React from 'react'
import Button from 'react-bootstrap/Button';

function ShortAbout() {
    return (
        <div id="ShortAbout">
            <h1>
                Lorem ipsum dolor sit amet.
            </h1>
            <h3>
                Hinc nostrud no vis, sensibus imperdiet his ad. 
                Mei no autem possim perfecto, natum omnium te quo.
            </h3>
            <p>
                Ad facer impedit interesset eum. 
                Et alia graece abhorreant vix, suscipiantur deterruisset mel ne, nusquam mandamus facilisis vix et. 
                Sea tota graeci suscipiantur ea, duis saperet perpetua ei pri. 
                Nec ut tation salutandi incorrupte, vidisse persius id vix, ferri iuvaret expetenda id nam.
            </p>
            <Link href="/about" passHref><Button variant="primary" size="lg">Read more</Button></Link>
        </div>
    )
}

export default ShortAbout;