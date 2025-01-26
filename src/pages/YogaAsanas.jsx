import { useState, useEffect } from "react";
import Modal from "../components/Dashboard/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownZA,
  faArrowUpAZ,
  faChevronDown,
  faChevronUp,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import exercisesList from "../assets/content/yogaAsanasData";
import ReactPlayer from "react-player/youtube";

export const YogaAsanas = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showingItem, setShowingItem] = useState(null);

  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [filteredExercises, setFilteredExercises] = useState(exercisesList);
  const [sortOrder, setSortOrder] = useState("none");

  const handleToggleAccordion = (exerciseTitle) => {
    setExpandedItems((prev) => ({
      ...prev,
      [exerciseTitle]: !prev[exerciseTitle],
    }));
  };

  const handleOpenModal = (exercise) => {
    setShowingItem(exercise);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowingItem(null);
    setShowModal(false);
  };

  const applyFilterAndSort = (difficulty, sort) => {
    let temp = exercisesList;
    if (difficulty !== "all") {
      temp = temp.filter((ex) => ex.difficulty === difficulty);
    }

    if (sort === "asc") {
      temp = [...temp].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "desc") {
      temp = [...temp].sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredExercises(temp);
  };

  const handleFilterDifficulty = (difficulty) => {
    setSortOrder("none");
    setSelectedDifficulty(difficulty);
    if (difficulty === "all") {
      setFilteredExercises(exercisesList);
    } else {
      const newFiltered = exercisesList.filter(
        (exercise) => exercise.difficulty === difficulty
      );
      setFilteredExercises(newFiltered);
    }
  };

  const handleSortNameAsc = () => {
    setSortOrder("asc");
    applyFilterAndSort(selectedDifficulty, "asc");
  };

  const handleSortNameDesc = () => {
    setSortOrder("desc");
    applyFilterAndSort(selectedDifficulty, "desc");
  };

  return (
    <>
      <div className="w-full h-auto bg-cyan-dark rounded-lg rounded-tl-none px-6 py-4 relative text-white">
        <div className="text-sm w-3/4 my-2">
          <p className="text-lg mb-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Yoga Asanas for Relaxation and Well-Being</span>
          </p>
          <p>
            Practicing yoga asanas helps you build strength and flexibility,
            while promoting relaxation and mental clarity. Choose a difficulty
            level that suits you, and explore these poses for a more balanced
            mind-body experience.
          </p>
        </div>
        <div className="flex justify-start items-center py-2 my-2 text-xs">
          <FontAwesomeIcon
            icon={faArrowUpAZ}
            className={`cursor-pointer text-base mr-3 ${
              sortOrder === "asc" ? "text-cyan-light" : "text-white"
            }`}
            onClick={handleSortNameAsc}
          />
          <FontAwesomeIcon
            icon={faArrowDownZA}
            className={`cursor-pointer text-base mr-3 ${
              sortOrder === "desc" ? "text-cyan-light" : "text-white"
            }`}
            onClick={handleSortNameDesc}
          />
          <button
            onClick={() => handleFilterDifficulty("all")}
            className={`align-middle px-4 py-1 rounded-full bg-white bg-opacity-55 mr-3 ${
              selectedDifficulty === "all" ? "font-semibold" : ""
            }`}
          >
            all
          </button>
          <button
            onClick={() => handleFilterDifficulty("beginner")}
            className={`align-middle px-4 py-1 rounded-full bg-cyan-light bg-opacity-45 mr-3 ${
              selectedDifficulty === "beginner" ? "font-semibold" : ""
            }`}
          >
            beginner
          </button>
          <button
            onClick={() => handleFilterDifficulty("advanced")}
            className={`align-middle px-4 py-1 rounded-full bg-cyan-ultradark bg-opacity-45 mr-3 ${
              selectedDifficulty === "advanced" ? "font-semibold" : ""
            }`}
          >
            advanced
          </button>
          <button
            onClick={() => handleFilterDifficulty("expert")}
            className={`align-middle px-4 py-1 rounded-full bg-cyan-ultradark ${
              selectedDifficulty === "expert" ? "font-semibold" : ""
            }`}
          >
            expert
          </button>
        </div>

        <div className="w-full min-h-[200px] text-white mt-4 space-y-2">
          {filteredExercises.map((exercise) => {
            const isExpanded = expandedItems[exercise.title] || false;
            return (
              <div key={exercise.title}>
                <div
                  className={`w-full grid grid-cols-12 grid-rows-1 bg-white bg-opacity-15 rounded-lg p-4 ${
                    !isExpanded && "mb-1"
                  }`}
                >
                  <p className="font-light col-span-11">{exercise.title}</p>

                  <button
                    className="text-white col-span-1"
                    onClick={() => handleToggleAccordion(exercise.title)}
                  >
                    {isExpanded ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                </div>

                <div
                  className={`
                    /* overflow-hidden  */
                    transition-all 
                    duration-300 
                    ease-in-out
                    ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {isExpanded && (
                    <>
                      <div className="italic text-sm mb-1 p-4 border border-white border-opacity-15 rounded-lg h-[250px] overflow-y-auto">
                        {exercise.detail.description}
                        {exercise.detail.contraindications &&
                        exercise.detail.contraindications.length > 0 ? (
                          <>
                            {" "}
                            <div className="w-fit p-4 bg-white bg-opacity-15 rounded-lg mt-4 not-italic">
                              <h4 className="w-fit py-1 px-2 rounded-lg mb-1 bg-red-alert font-semibold">
                                Contraindications
                              </h4>
                              <ul>
                                {exercise.detail.contraindications.map(
                                  (item, index) => (
                                    <li
                                      className="my-2 list-inside list-image-[url('/src/assets/images/exclamation.png')]"
                                      key={index}
                                    >
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        ) : null}
                        <div className="flex justify-center items-center gap-12 mt-3 ">
                          <ol className="text-white not-italic ">
                            {exercise.detail.instructions.map((step, idx) => (
                              <li
                                key={idx}
                                className="mb-4 list-decimal list-inside text-justify font-light"
                              >
                                {step}
                              </li>
                            ))}
                          </ol>
                          {exercise.url && (
                            <div className="w-full rounded-lg overflow-hidden">
                              <img src={exercise.url} alt={exercise.title} />
                            </div>
                          )}
                        </div>{" "}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* 
        <Modal show={showModal} onClose={handleCloseModal}>
          {showingItem && (
            <div className="px-4 py-2">
              <h3 className="text-6xl font-sanbrainy mb-8 text-white">
                {showingItem.title}
              </h3>
              <div className="flex flex-col justify-center items-center gap-4">
                <ol className="text-white">
                  {showingItem.detail.instructions.map((step, idx) => (
                    <li
                      key={idx}
                      className="mb-4 list-decimal list-inside text-justify font-light"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
                {showingItem.url && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <ReactPlayer
                      url={showingItem.url}
                      width={640 / 1.5}
                      height={360 / 1.5}
                    />
                  </div>
                )}
              </div>{" "}
            </div>
          )}
        </Modal> */}
      </div>
    </>
  );
};

export default YogaAsanas;
