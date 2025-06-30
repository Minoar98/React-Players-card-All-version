App.jsx
- [1] Component er kothay ki thake 
- [2] jsx koto tuku & ki ki diye make kori
- [3] players.map er description
- [4] key={player.id} ki & keno likhi
- [5] {...player} keno likhi & likhle ki hoy
- [6] onClickHandler={clickHandler} diye ki bujhai

Card.jsx
- [1] props kun gula? kunta variable props & kunta funciton props 
- [2] variable props k likhi kivabe
- [3] onClick={onClickHandler} kokhon likhi 
- [4] onClick={onClickHandler(id)} likhle ki hoy 
- [5] onClick={() => onClickHandler(id)} keno likhi
- [6] clickHandler function er kaj ki hoy
- [7] setPlayers((prevState) => {}) ei format e keno likhi
- [7] className={`text-red-600 hover:fill-red-600 ${isFavorite ? "fill-red-600" : ""}`} bolte ki bujhai


1. answer
- first e state declare/define
- majhe conditions, variables (const, let), functions
- last e must jsx return korte hoy
- overall: component is nothing but a function that must return jsx

2. jsx
- html + css + js code