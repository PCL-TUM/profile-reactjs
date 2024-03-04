import React from 'react'
//import icons


function Skills() {
  return (
    <div>
      <div id="Skills" className="bg-white px-10">
        <div className="md:container md:mx-auto md:py-5 md:px-24">
          <div className="justify-center md:flex pt-5">
            <h1 className="snap-always snap-start text-center text-5xl text-blue-950 uppercase font-bold md:text-left md:ps-10 ">
              Skill & Tools
            </h1>
          </div>
          <div className="justify-between py-10 md:pt-14 md:flex md:flex-row">
            <div className="pb-5 md:px-10 md:w-1/2">
              <h1 className="text-xl font-bold">Programming Language</h1>
              <div className="border-b-2 border-blue-950 pt-5 shadow-md "></div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          HTML
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "95%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        95%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          CSS
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "80%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        80%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          PHP
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "75%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        75%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          SQL
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "60%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        60%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          jQuery
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "80%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        80%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX///9lmtIARIIAWZxdldC80eoAUJeat9IAVpoAQoEydKxhmNFmm9MATpcAQIAANnuvxtwAO30ASJQAMnmrxuUAOHwAVJnx9vrQ3/DG0+LS3uqoutLb5/RXks8AR5R4ptePtN1/qtnm7vciY6FgjLkALnhwodWfvuK+0+sASomVq8Tt8vaRtd7J2u4AKna5yNikwuNLh8Exc7GIqMl0l74TaaZCapnd5e2DnLpUd6E4b6ghVY1yj7GdsMciV456lbVggKeBpMZNf7A+fbo4ZZdcfKVrUblwAAAMu0lEQVR4nN2de3eiOhfGR6WdckKhDFrUlqPS0VZta9+5eJm22pmx3/8rHcBLRYHsJDsB3+ePc9Ysl+jP5En23tnQT5+Uya1X262e0Wu1q3VX3ccq0/W9phFCSqVS8F9Nu7/O+wshy7/XQrgPEa3t5/2lMFXd41sxPuX9tdD0YGgHfKE04y7vr4ai607CAG6GsXX8dnRvU/lWjPdHvqwmGXCfsZr3lxTQQy/ZgHt27D3k/UU55XcgfNEwdo7RjhQD7jPeHp0dTzTgAG4ZT/L+ykyqt9j4Qmm9et5fGyy/zTBBdxmPJZB74uMrRYHcEdjxrsQ+QXeGkRTdjhkhGnQYW0W2o8tpwD3G9jBvkDRVPXG+iNErZiAHC9FgKmJeJWzAuAoXyDGFaFDGIuVVJ0gG3GMsjB3riAaMqxh5FThH4mPs5B3ISTBgXHnnVXdE5gCulGcgF+RIcgdwpdwCuSFGiAZl7KgP5NwnKTtEKqOnOq+6Syljy5PaQA45RINJYYEcJUfiY2wrmar0MrZMxqp0RswciUeyAzm5IRpIUvMq91bpDpEm4snKq05IEfhCESmBnKIQDSaCb0e/nbsB94SbVxXEgHERDy+vEitjyxNWXlUoA8aFklcpzJF4JJxXubghGolavsL/IF5T6LwqrdWH+VsQTdM8j/RarU6n02r1Sp636XITF39ehZIjhXAe6VTv6r778Vu7rl+/e+qQiFP8M/jyKvceYYcgWqmT1Wrp1qutEgIk8djPq6rCHxsMXusW0Ejq1m974pCseVWQIwl+JPF6VfjUuX4yhGcMSyDnioZoRPParBtVve0JHx9DSwC+IfpJBlcmPnwyRBlLoFjVF/NEwHfCu0G5VdHtiQAQ3Z4QYBArisTDQYghxEh69E9viwBinKOInfWQNu36d54IH0pTky8UaWiUAMcVMCEhWFXpO/5vYZT+Zs+iKr8LtA5efWjY4ZtKhvG/yvnvrCvzDyF29+QJx0w1DO3mslI5zfql73iHkPSwi5jXzKVng3w7O6sEhFcZl+VdSGUcKDBGVobxtxLyVSqXfzIuyhnNeLfofKGe4GYMDHiz4guVnmdcc01SeQ3MUDMGBvx5ueWrnDdTr/jAQ0g0eWclD6CVLzBg5WMAA8KL1AvyLDREk9lGUKeP4ocBNzr9nHq9E3ZCosk9mL2mIMYNKIFQ7ghGiJkT1dC+XVb2hUoo0YMbZSwOQYhW2R9AZEJPRbvSScqmEYZoCXyohJqcfXBficGyYXg3hxMUmZCeiyEpIboJQ7RkPkRCSD6No4O6w+EOIYVQ8j6xKz/2xVINiEyo9GazndLDXogmj5B0FALuZD2bHEk6ISFqewXdElkNYJYBUQlpBR90hRs/zYCYhIrnaKg2SQzRZBFq6lvoh3s5klxCrmDm+qF63+50Ou3b6gPHRnMB5EMhJISZrtrytOhgm0QPb/G8FsPhW6DmP1+AfCiEjFuhX+15B1cmmterQue6/+MLyIFYhGzhmt8maVmsRu5BjJ8rp3A+DEKWIaT040DuUGvcnEIdiERIDPgQQp78kf17Xf/5wsaHQAh/GAmspTiry9D9fc5gQCxCDzqE9RKs3ElIWrGH0YBIhOC8F37fJUmuhtRvzlknKAqhB6yuVVkOyBJuF518ZTYgDiHpAQHZKiIH5v5+yTNBMQiB60xagSz9urGJenHDzSdOCAq26uxnuDuzv/mLd4JiELYggDw9OWTTC+P/4Ngh8AgJ6EF5HZ5zyHXOybdD4BGCzik4Tniia1ejEE2QT5CQlADb/ZC7G6DOHqKhE0KqF5zdAIb2TdCAGISQvcLnGkJQFU0FIcCGPEMIrKIpIARE3T5Pq493cJCbEyGkQMPeOEYtY5+eR0pcZdev7RpYiBCw0LD2p9INePr9ItLnBMTT1UsXP3YQRQgBC801W7wGMeB5Y3XpZkK57cvaNlc79EKE9Fo+2yQ1tJ90AyolpC+lLRa+EvUcSTWhRy/+sfSiAXdApYTUzQLcGhe2+gAjGJWE9ENDaGtcEKIBxu8s0pct4erfu6/9uyE8/3hNgBBQwYAtNMEEhRiw8k+kn2vCyc/Vv6OXbtavrQkv1q+dCY4hPf29B+yG0BDt7Cb5M0KMy6/Jr/0rnZAelGa0+ogTuoKEgJCGmt0DOg2OmtAwwHxHSRgYsG+Wi0wo5sOA79ksB+oXd5YKraUG+aXr5ZX6sghF11KB/dAw/tHN8odgjOr3Q96YJjKgXo4JtCOqjmkgcWlS5G1oN/t8DHYsfm6xa8A9xuIRcuSHQQhaTuaDTtVi5/jbHSJNkKmqlJCxTmOQJAOyMirND5lqbYEBqXwQO6qstbHUSwMD9jMnKNyOCuul8Jo31YCsU5VBSs4tIAZkm6rKCEFnT0YJZkBJjArOD+EGjOuyAOeHoDNgv8s+gJFqjfzPgGHn+AOLC9AafPo0qpznTEhAHd5jmwPQHEfv/X6Wby8GrJ9mwrHQ6OZk9Wafu6ENhxDWEzV6ZCZ8HG3f3fzJ15SIRAj725oDhxHQGey+/UqkbUhRb+KUbbWxpvG3u79PuXcOVf2lU5ZRdKYH75985Z2qynqEB4/Q5UZ/HCRdoMG5c6jr8x6ZsE3DNkcpV8inzxu61gSajC3AMFrjSeoVhjydmErvtxg4lGHUbSdxhm7V/MNsR7X3zPjvjp0xjrb1Ri3fjVinKsJ9TwyDGAzCzK4lpxp6zX5Pf5TMjhgDOfX3rk2mz4cDadrd+TTdgHH5P1gCuVzuP2xM54+OZdtmKNu2nMflFDR82wv8gu8cGPeQwjKMuNzG1fRtvFwux2/Tqwb7+y8UEhqlvzWmAUDRxITuG6KEURXNHitkW2lmAw8BBAmN9TmS9aoQLtRVFMmDqlVChNsytm6rvV99uMmpAYwChLtlbFPtPJ19xEbynhqxV8amRFu4et1NxWgFck5CY/8gV1e4njZr8XAhm5GPMOEg13xW9efe3MMjkCw78hCuWn32pWzLmCUlKJhPUTIML/kcyXpRArhILvmkDiMzoUFu0hIgJavNa1rBR09hZCQ0Sr/KqecsupX1vFccjbLqBImMTITJBtxRLa3EgqVGLbsQIvZUwWCHmFPq87rDkSawADrsnQ4ZhHvPL4V1GjgyR3FEBSwfTtUMwlhTWhiiQQqeek2eFy+yajypjBnPoN25WYJqwB1ZslbUAaQYuUKMPWU3PdjaPgv6IETLlO7I2RcXkCm6ZdxBzIi11h2+6b12KbLG+AHccMZ4krxhzHqe92qpYWn12cjuY4fhzWf2c+TVVM18Jvsnwtrqs5FewzXjwOJq54hahDOruVUtPUSjIDpjvKzfH7NYcPdb9M/Ov2df+5vO1wpTDmu8WNvGq839Jcp69hBmhLmQi1tjDDc2x3zNKis51J85MReDyrReRB/66b7wOXAte0b9hCHPOrOVbtsDob8VNLD4loG1QHWHiYAJQtX6A97NcTjti0zQANAEnfU0yyITNbRjecGzrE4WZUqmRJNdBq4D7gwcD6Yw2t0xa8YxGmcepUI+1ZrBJ8/oWWy2BPPF6S/AC6vbXJQdMW8E7nhm2qzcQU1sqoYDac1fRvRfdTh6SThAZZVdm7KucMP3ruivGkLqy2kGpT+aLnVLcGkLZHZnPM5vLAXtuPpw2+ra4+nraDJ013+JNPj/sDl6XYxrXQS60IBL3lLKVV9wcdvItGuW07X78/lyvFzO+2bXsWoYcKFqfYFo0Z3S+mGYpOu6aZo6W+5JkeksxHLTyUwoiJItM6uhCqoRih2lSLfmOIW+Vx1zquLJNtGO2ocv4jsHuszuC2ZxqHB21DEMGNdoLhrIYcp6llBpRwjksGTXhJLQdA3fhMNjDJnOm7zj9Sao6VcuH04xKF1Xz0iBHJ90iy1H4hFyIMcm22HOkXg0fM9p5zAtrhyJRzh5FaMEciQeBXmVYkBbV9wN6S6UBnLIIRpMvrpADiVH4lGQVykBxMqRePRqCxfJaNJt5JNJRg1fJAdyppODAeOa8B5mQqQ7kkM0mIK8Sg6jLiVH4tKgK8GOut2VlCPxaPiGvnOYgLvalKo5Rl1ydEdpiAbTleDp5q6Eytjy5E6R7Gh3leRIPPIx8qogR8onRIOpsRTdHa1lUXaINL2aAmUO3bZV3zHGIXdh8ZY5ENpx1IizQK4X24BxcRTICxSiwcTY20R98EAB5b6k3IWfpCBEyztH4lETmldJL2PL0whSINet/nEZMK4pzY6BAQ8fvnNUouRVhcuReJQRyBUyR+LRVXJXpV7TC5kjcWmaEMjZ1uI4QjSYJu/xJUe3rffjCdFgarxblh3dS6WbtmW9/38YMC53NJ3Nn8vP89l0pHB+/geBSpvCv9pHpQAAAABJRU5ErkJggg=="
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          C++
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "55%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        55%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          C#
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "50%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        50%
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                      <img
                          className="w-8 h-auto"
                          src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Python
                        </p>
                        <div className="w-full bg-blue-950 rounded-full dark:bg-blue-950">
                          <div
                            className="bg-orange-500 mt-3 font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                            style={{ width: "60%" }}
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-blue-950">
                        60%
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-5 md:px-10 md:w-1/2">
              <h1 className="text-xl font-bold">Tools</h1>
              <div className="border-b-2 border-blue-950 pt-5 shadow-md"></div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Visual Studio Code
                        </p>
                        <p className="truncate text-sm">
                          Code editor redefined and optimized for building and
                          debugging modern web and cloud applications
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Node.js
                        </p>
                        <p className="truncate text-sm">
                          Node.js® is a JavaScript runtime built on Chrome's V8
                          JavaScript engine.
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8XFRUAAAATEREKBgYRDg7t7e2BgIA3NjbZ2dlTUlLq6urCwsKJiIjGxsb39/ebm5uPj492dXVwcHC5ubnMzMyqqqo+PT1OTU0lJCRYWFiysrIwLy/j4+NIR0d7e3tkY2MdGxs/J1iEAAAB9klEQVRIie2W23aDIBBFdUCNmqjUaDRGY/7/JztcvOFg0qeurtXzZIFNYWY4E8/71x9QXtWFEEVd5T+hevGAWQ/Rf4hVDUDgzwoAhuoDLEyA+5Y4NOE7rttjGu2OuSdQmBR8HXGjk0NydHPlAYdk6eIK0EEEtiUY6DBDQXO94k5eLAC/GJdJ5LgHgIi9QZExCbbLrgUySfmMygQ/xHKaF8XV6oJwVX+k6TQc6q+znq0JUN8MzvQ9KtC33c9cdURdiXZPD/ww5qYy+GBP5CaF4HgK6TRvP7PpKILmTFjn4C26AL3hIrPgYg3f1RWDm5PzErWC363hF3v3BCKdELsGHAdZSZglNPh0g5cjkI9usKRBn5E3WOmkDIz51nDC36TDVAhPrPHIHIQqf6XOLIjoccZdoL7LvsrDqRYdmZzsD3YGq+4eEGdRMrmQzmJLGkCA5u/Dbecs8W2yPyoG4PNSbR1gn8nm19Vnol1aCeEA8t3AoA+FFjnX8rjuQLRBoulIsoVNDKYX7rIcT/sRvtN8QEtsl+HH6h862h0WgYpaWqWr0fvcvuiASzVAeMcMQuPiPA/DDols+/0ehAN3wFrHpMiesdrcgGBXtyWhgr92FgUGbvubFLeYFgtk0NJ9aquObY6KZcje/ACYlZWr1nMusw+xf/2evgEGFBJqrqKT4AAAAABJRU5ErkJggg=="
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          GitHub
                        </p>
                        <p className="truncate text-sm">
                          GitHub is where over 100 million developers shape the
                          future of software, together. Contribute to the open
                          source community, manage your Git repositories
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Bootstrap
                        </p>
                        <p className="truncate text-sm">
                          Framework for building responsive, mobile-first sites,
                          with jsDelivr and a template starter page
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Tailwind CSS
                        </p>
                        <p className="truncate text-sm">
                          Framework for rapidly building modern websites without
                          ever leaving your HTML.
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAD/cED/ajX/azf/bDf/bDb/bDf/azb/aDj/bDf/bTf/bTX/azf/bDf/ajX/bDb/cDD/bDf/bDb/bTX/bDf/azf/bTf/bDb/bDb/azb/bDj/bDb/bjf/bDj/ajhLM8F2AAAAH3RSTlMAEGCfz+//XyCQj4/fvzCgEO/PYK9w34BQoIB/T0Bgzb7ZEAAAAN1JREFUeAF1kolugzAQRMcYT5dkUyhtQ3r+/2dWGalaQbxPJ7zZw7IRlKGOjWxjfTI8YlNjUI+RcuKBc9mVOx+4IHjueLesPrwZRMm8e1HglHnyrAF9r71oAOa+b7wzAUvmxUvBkPrVSb5iznyFacaaeL4BF3JF63uNfyevyDxp2g+pd2AjiZZ4btrhqiXj1xJ54KZL/9i/gE/+83VzHXNgUJXY8a2mecIBTMwT+jbmCRrUIk1suLN4lnBAWJJwS569EuGzHmN4qOKYKNhjM4P2gw7ld14b2dY6RDX+ALhIFgGJ//ETAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                         Postman
                        </p>
                        <p className="truncate text-sm">
                        Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="https://seeklogo.com/images/X/xampp-logo-1C1A9E3689-seeklogo.com.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          XAMPP
                        </p>
                        <p className="truncate text-sm">
                          Apache distribution containing MariaDB, PHP, and Perl.
                          Just download and start the installer. It's that easy
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">
                        <img
                          className="w-8 h-auto"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAflBMVEX/////VyL/SAD/4t3/TQj/t6n/QwD/UBP/VR7/Uxv/Uhf//Pv/+ff/TAD/y7//1Mf/mXv/5d3/Xyn/ZDf/sJr/7un/jGr/sqD/b0n/4Nf/j2//hWj/bT//lXv/wLD/fFn/oIf/dUn/d1P/fFL/oo7/uaX/qZP/MAD/hmL/xrcQOfS6AAACfElEQVRoge3a3ZqqIBQGYDMaEEEUxNQoncom7/8Gt9puz4zbHzA7Y533gi6l51mfjrOoyLYUSRCRZb+eLFndEUQY8GTP/FVlkiUCY7RpCmHI05CRtRbIdoo+5EchD7o8r7MVblCQC/BDfi6AoTjE2SswicoNwP/TTx/wkMllFyDrZANH5OcCkKrjyfgC/CxUaGzTv31PFHFk0ODopOjMpn/6HnBVKfVodlTA05WfC3xs52ESxQLrb/q73FlcBjkfePDWwGWZzj0eC/Eo+HSht5SexNk1Ne6hFu7LSm3ga/QITljIqcbtaI4rAM1wGZ9nX3EPQwgBuoT1dULv45IVLpjadHs2IVXkZcW642kHdPEsPkM8gra7BS5V91vNsu/3WhvfwsEeNrcWYi7SIjxlpP9/o4+7Ay6l4pzfKjZyyC3HEW5alkVTh/9y/GMctbjFLW5xi1vc4ha3uMUtbnGLW9ziFp/AEQZfb8I9yA9x9AYceQBcdkxrxG6Gd/FGrB3PmOAIcLPcQR//cNV+axY4aOOyzTIM0x79uaJkcZ7fdu3gUHcNfdxxiAzuG4yESov8VgUR8WdWMcG7BU6logBjCKhL+WdS7gM2Ov8zxZ12LB8Ct5sWd1NWirkqDsdrVbN+gLIAb8oP8hT9m0Z3o1yIMUZIXJLbiUkpCVmMO20WEgraS53Q34kxaK7l2PT+aDDi7m9fBgnHw+Pjdn48HcPMRzmOXx9TuCRx0Qqhuv5i18g3is8cEuRKNzEyD/7avLJU/f4OyYsiy7a/7I7BeMTzWtjqdP09D/Z3hZi4reb557/7u2LA7XT9Fc/+rh3Nt9X2F+C3fFTw8Fmu8TnEHwgtOEeUPXayAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-lg font-medium text-blue-950 truncate">
                          Microsoft Office
                        </p>
                        <p className="truncate text-sm">
                          Software and services developed by Microsoft
                        </p>
                      </div>
                      <div className="inline-flex ps-3 items-center text-base font-semibold text-lime-500">
                        <span className="text-2xl">
                          
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Skills
