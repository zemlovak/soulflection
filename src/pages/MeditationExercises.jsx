import { useState } from "react";
import exercisesList from "../assets/content/meditationExercicesData";
import Modal from "../components/Dashboard/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const MeditationExercises = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showingItem, setShowingItem] = useState(null);

  const handleToggleAccordion = (categoryName, exerciseTitle) => {
    setExpandedItems((prev) => {
      const categoryAccordions = prev[categoryName] || {};
      return {
        ...prev,
        [categoryName]: {
          ...categoryAccordions,
          [exerciseTitle]: !categoryAccordions[exerciseTitle],
        },
      };
    });
  };

  const handleOpenModal = (exercise) => {
    setShowingItem(exercise);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowingItem(null);
    setShowModal(false);
  };

  return (
    <>
      <h2 className="my-6 text-white">
        Choose a meditation exercise for today ...
      </h2>

      <div className="w-full grid lg:grid-cols-12 sm:grid-cols-4 min-h-[200px] gap-4 text-white">
        {exercisesList.map((categoryObj) => (
          <div
            className="row-span-2 col-span-4 bg-white bg-opacity-15 p-4 rounded-lg"
            key={categoryObj.category}
          >
            <h4 className="my-2 font-semibold mb-6">{categoryObj.category}</h4>

            <div className="grid grid-cols-1 gap-2" key={categoryObj.category}>
              {categoryObj.exercises.map((exercise) => {
                const isExpanded =
                  expandedItems[categoryObj.category]?.[exercise.title] ||
                  false;
                return (
                  <div
                    className="transition-all ease-in-out duration-[1s]"
                    key={exercise.title}
                  >
                    <div
                      className="w-full grid grid-cols-12 grid-rows-1 mb-1"
                      key={exercise.title}
                    >
                      <p className="font-light col-span-8">{exercise.title}</p>

                      <button
                        className="rounded-full col-span-3 bg-cyan-light px-4 py-1 text-white text-sm"
                        onClick={() => handleOpenModal(exercise)}
                      >
                        How to
                      </button>

                      <button
                        className="text-white col-span-1"
                        onClick={() =>
                          handleToggleAccordion(
                            categoryObj.category,
                            exercise.title
                          )
                        }
                      >
                        {isExpanded ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </button>
                    </div>
                    <>
                      <div
                        className={`
                            overflow-hidden 
                            transition-all 
                            duration-300 
                            ease-in-out
                            ${
                              isExpanded
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }
                            `}
                      >
                        {isExpanded && (
                          <>
                            <p className="italic text-sm my-4">
                              {exercise.detail.description}
                            </p>
                          </>
                        )}
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onClose={handleCloseModal}>
        {showingItem && (
          <>
          <div className="px-4 py-2">
            <h3 className="text-6xl font-sanbrainy mb-8 text-white">{showingItem.title}</h3>
            <ol className="text-white">
              {showingItem.detail.instructions.map((step, idx) => (
                <li key={idx} className="mb-4 list-decimal list-inside text-justify font-light">
                  {step}
                </li>
              ))}
            </ol>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default MeditationExercises;
