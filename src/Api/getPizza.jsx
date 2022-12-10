import React from 'react';

export default async function GetPizza() {
  let arr = []
  await fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas")
    .then(res => res.json())
    .then((res) => arr = [...res],
      (error, res) => {
        alert(error)
      }
    )
  return arr
}
