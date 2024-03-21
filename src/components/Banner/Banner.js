import React from 'react';

function Banner({ status, guesses, answer }) {
  function BannerBody({status}) {
    return (<>
      {status === 'WIN' && (
      <p><strong>Congratulations!</strong> Got it in
      <strong> {guesses.length} guesses</strong>.</p>)}
      {status === 'LOSE' && (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>)}
    </>
    )
  }
  const data = {
    "WIN": {
      class: "happy",
      message: `<strong>Congratulations!</strong> Got it in
      <strong>${guesses.length} guesses</strong>.`
    },
    "LOSE": {
      class: "sad",
      message: `Sorry, the correct answer is <strong> ${answer}</strong>.`
    }
  }
  return (
    <div className={`banner ${data[status].class}`}>
      <BannerBody status={status}/>
    </div>
  )
}

export default Banner;
