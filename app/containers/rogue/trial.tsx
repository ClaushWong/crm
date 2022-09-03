import { PortalContent } from "@/app/components/contents";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";

type Props = {};

export const RogueTrial = (props: Props) => {
  const [counter, setCounter] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>("");

  const ROUTES: any = {
    "route-0": {
      name: "You received a mission from the Chief to assasinate Mr. Louis, a illegal merchant who trade drugs to clients around the world. Your source informs you that he is located in Bolivar. In order to reach Bolivar, you have 2 choices: one is by passing through Sargon and another one is by using plane to reach Bolivar directly. Which one will you choose?",
      option: {
        "route-0-1": {
          name: "Pass through Sargon",
          effect: {
            text: "You decide to pass through Sargon and reach Bolivar by land.",
            algo: () => {},
          },
          to: "route-1",
        },
        "route-0-2": {
          name: "Use Plane",
          effect: {
            text: "You decide to use plane to Bolivar.",
            triggerE0: true,
            algo: () => {},
          },
          to: "route-end-1",
        },
      },
    },
    "route-end-1": {
      name: "When you are on plane, your plane got hit by an aircraft from Yen. You managed to survive from the crash but you took a 2 months rest. You failed to execute the assasination within time period. (End 1 - Plane Crash)",
      option: {
        "route-end-1-1": {
          name: "End",
          effect: {
            text: "",
            algo: () => {
              setIsStart(false);
              setIsEnd(false);
              setIsSelected("");
            },
          },
        },
      },
    },
    "route-1": {
      name: "You are presentable with 2 route, one of them lead to a jungle and another one lead to a desert. Which route would you take?",
      option: {
        "route-1-1": {
          name: "To Jungle",
          effect: {
            text: "You choose the route to the jungle. You found out that the jungle have a lot of hostile animals, you successfully exit the jungle and reach Sargon. You are too tired for scouting for potential enemies and ended up dropped your sanity by 5.",
            algo: () => setCounter((curr: number) => curr - 5),
          },
          to: "route-2",
        },
        "route-1-2": {
          name: "To Desert",
          effect: {
            text: "You choose the route to the desert. You found out that the desert have camel that lead you to Sargon, your sanity recovered by 2 after reached to Sargon safety.",
            algo: () => setCounter((curr: number) => curr + 2),
          },
          to: "route-2",
        },
      },
    },
    "route-2": {
      name: "You have reached Sargon, a city in a desert full of adventurers and citizen who hunts in the jungle for resources. When you exploring the city, you saw a man performing music on a street. After his performance, he ask for your opinion about his performance.",
      option: {
        "route-2-1": {
          name: "I think it is amazing, you sure have potential on this field.",
          effect: {
            text: "He is touched by your word and continue his performance. Your sanity recovered by 2.",
            algo: () => setCounter((curr: number) => curr + 2),
          },
          to: "route-3",
        },
        "route-2-2": {
          name: "I think it is okay.",
          effect: {
            text: "He nodded his head and confinue his performance.",
            algo: () => {},
          },
          to: "route-3",
        },
        "route-2-3": {
          name: "I think it is bad, you have no talent.",
          triggerE1: true,
          effect: {
            text: "He nodded his head and confinue his performance.",
            algo: () => {},
          },
          to: "route-3",
        },
      },
    },
  };

  const [choices, setChoices] = useState<string[]>([]);

  const [currentRoute, setCurrentRoute] = useState<any>({});

  const handlers = {
    start: () => {
      // set random choices count
      const randCounter = Math.floor(Math.random() * 10) + 1; // 1 to 10
      setCounter(randCounter);
      setCurrentRoute("route-0");
      setIsStart(true);
    },
    generateRoutes: () => {},
  };

  useEffect(() => {
    if (isStart && currentRoute) {
      handlers.generateRoutes();
    }
  }, [currentRoute, isStart]);

  return (
    <PortalContent title="Rogue - Trial">
      {!isStart && !isEnd && (
        <div
          style={{
            width: `100%`,
            height: `50vh`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type="primary" onClick={handlers.start}>
            Start Explore
          </Button>
        </div>
      )}

      {isStart && !isEnd && (
        <div
          style={{
            width: `100%`,
            height: `50vh`,
          }}
        >
          {isSelected === "" && (
            <>
              <Typography.Text>
                {ROUTES[currentRoute]?.name ||
                  "Currently not available at the moment"}
              </Typography.Text>
              <br /> <br />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingTop: "50px",
                }}
              >
                {ROUTES[currentRoute]?.option
                  ? Object.keys(ROUTES[currentRoute].option)?.map(
                      (key: string) => (
                        <Button
                          key={key}
                          type="primary"
                          onClick={() => {
                            if (["route-end-1-1"].includes(key)) {
                              ROUTES[currentRoute].option[key].effect.algo();
                            } else {
                              setIsSelected(key);
                            }
                          }}
                        >
                          {ROUTES[currentRoute].option[key].name}
                        </Button>
                      )
                    )
                  : ""}
              </div>
            </>
          )}

          {isSelected !== "" && (
            <>
              <Typography.Text>
                {ROUTES[currentRoute].option[isSelected].effect.text}
              </Typography.Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingTop: "50px",
                }}
              >
                <Button
                  type="primary"
                  onClick={() => {
                    ROUTES[currentRoute].option[isSelected].effect.algo();
                    setChoices((curr: string[]) => [...curr, isSelected]);
                    setCurrentRoute(ROUTES[currentRoute].option[isSelected].to);
                    setIsSelected("");
                  }}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </PortalContent>
  );
};
