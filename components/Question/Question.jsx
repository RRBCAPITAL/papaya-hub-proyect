"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const Question = ({ Qfiltered, setIndexQ, indexQ, filteredQ, category }) => {

    const user = useUser()

  const [score, setScore] = useState(0);
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [activeResult, setActiveResult] = useState(false);
  const [answerRandom, setAnswerRandom] = useState([]);

  useEffect(() => {
    const answers = [...Qfiltered.incorrect, Qfiltered.correct];

    setAnswerRandom(answers.sort(() => Math.random() - 0.5));
  }, [Qfiltered]);

  const checkAnswer = (answerTxt, index) => {
    if (answerTxt === Qfiltered.correct) setScore(score + 1);
    
    setSelectAnsIndex(index);
    setAnswered(true);
  };

  return (
    <>
      { activeResult ? (
        <div className="flex flex-col justify-evenly mx-6 mt-20 mb-6 bg-[#170528] text-white items-center shadow-xl rounded-lg max-w-[500px] h-full p-10 gap-10">
            
            <div className="flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl  font-medium px-2 text-center border-b-2 border-slate-500">Prueba de admisión {category}.js</h3>
            <h1 className="text-5xl font-bold px-2 text-center">Resultados:</h1>
            </div>

            <div className="flex flex-col gap-5 text-center text-lg font-bold">
                <span>{ score > 1 ? "Aprobaste" : "Desaprobaste"} con el</span>
                <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
                    {((score / filteredQ.length) * 100).toFixed(0)}%
                </span>
                de las preguntas ({score} de {filteredQ.length})
            </div>

            { score > 1 ? <h3 className="flex flex-col items-center text-sm"><strong className="text-3xl">FELICITACIONES {user?.user?.firstName}</strong > PASASTE A LA SIGUIENTE ETAPA!!</h3> : <h3 className="flex flex-col items-center text-sm"><strong className="text-3xl">NO TE DESANIMES {user?.user?.firstName}</strong>(INTENTALO DE NUEVO EN 3 DIAS.)</h3>}
            <button className="bg-[#28ff45] px-4 py-2 rounded text-xl text-black font-bold">Continuar</button>
        </div>
      ) : (
        <div className="mt-20 mb-6 flex flex-col justify-between bg-[#320958] text-white mx-4 max-w-[500px] h-full p-10 rounded-lg gap-10">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between">
            <span className="text-xl sm:text-2xl  font-bold text-slate-300 border-b-2 border-slate-500">Prueba de admisión {category}.js</span>
          <span className="text-xl font-bold">
            {indexQ + 1} / {filteredQ.length}
          </span>
        </div>

        <div>
          <h1 className="font-bold text-xl">{Qfiltered.question}</h1>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {answerRandom.map((ans, index) => (
            <button
              className={`focus:bg-[#6f01ffd4] border-[#6f01ffd4] border-2  text-[15px] p-4 rounded-lg flex justify-center items-center  hover:scale-105 hover:bg-[#6f01ff3c]`}
              key={ans}
              onClick={() => checkAnswer(ans, index)}
            >
              <p className="font-medium text-center text-sm">{ans}</p>
            </button>
          ))}
        </div>

        {indexQ + 1 === filteredQ.length ? (
          <button
            className="hover:border-2 hover:border-[#28ff45] hover:bg-transparent hover:text-white rounded-md px-5 py-2
        bg-[#28ff45] text-black font-medium"
            onClick={() => {
                setAnswered(false);
                setActiveResult(true);
            }}
          >
            FINALIZAR
          </button>
        ) : (
          <button
            className="hover:border-2 hover:border-[#28ff45] hover:bg-transparent hover:text-white rounded-md px-5 py-2
        bg-[#28ff45] text-black hover:font-extrabold font-mono font-medium"
            onClick={() => {
                setIndexQ(indexQ + 1);
                setSelectAnsIndex(null);
                setAnswered(false)
            }}
          >
            SIGUIENTE PREGUNTA
          </button>
        )}
      </div>
      )}
    </>
  );
};

export default Question;
