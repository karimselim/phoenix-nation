import React from 'react';
const loadernums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const PreLoader = () => {
  return (
    <div className="pre-loader fixed right-0 top-0 z-10 h-full items-end justify-end gap-2 overflow-hidden p-8">
      <p>Loading</p>
      <div className="counter">
        <div className="digit-one">
          <div className="num">0</div>
          <div className="num">1</div>
        </div>
        <div className="digit-two">
          {loadernums.map((num) =>
            num === 1 ? (
              <div key={num} className="num bg-red-600">
                {num}
              </div>
            ) : (
              <div key={num} className="num">
                {num}
              </div>
            )
          )}
          <div className="num">0</div>
        </div>
        <div className="digit-three">
          {loadernums.map((num) =>
            num === 1 ? (
              <div key={num} className="num bg-red-600">
                {num}
              </div>
            ) : (
              <div key={num} className="num">
                {num}
              </div>
            )
          )}
        </div>
        <div className="digit-four">%</div>
      </div>
    </div>
  );
};

export default PreLoader;
