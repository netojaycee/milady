import Image from 'next/image';
import React, { Component } from 'react';

class Preloader extends Component {
    render() {
        return (
            <div id='spinner' className='containerr'>
                {/* <div className='loading'></div> */}
                <Image className='loading' src="/images/preloader.png" width={223} height={126} />
            </div>
        );
    }
}

export default Preloader;