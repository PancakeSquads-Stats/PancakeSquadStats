import React from 'react';
import './BunnyCard.module.scss'
export function BunnyCard(props) {
    console.log(props)

    const bunnyId = props.bunnyId;

    return (
        <div onClick={e => window.location.href = "https://pancakeswap.finance/nfts/collections/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/" + bunnyId} className={"Container"}>
            <img src={"https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-"+bunnyId+"-1000.png"} alt={"Bunny"}/>
            Bunny ID: {bunnyId}
        </div>
    )
}
