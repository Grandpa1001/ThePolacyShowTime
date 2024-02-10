import React, { useState } from "react";
import { Affix, Stack, Image, Button, Drawer } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
  };

  const handleAnimationButtonClick = (index) => {
    setAnimationIndex(index);
    setDrawerOpened(false); // Schowaj Drawer po wybraniu animacji
  };

  return (
    <>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          <a href="https://www.thepolacy.pl/" target="blank">
            <Image src="https://www.thepolacy.pl/_next/static/media/logo.34b813ed.svg" />
          </a>
          <div />
          <a href="https://opensea.io/assets/ethereum/0x99903e8ec87b9987bd6289df8eff178d6e533561/1127" target="blank">
            ThePolak #1127
          </a>

          {/* Przycisk otwierający Drawer */}
          <Button size="md" color="gray" variant="light" onClick={handleDrawerToggle}>
            Wybierz animacje
          </Button>

          {/* Drawer z buttonami */}
          <Drawer
            opened={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            title="Animations"
            position="bottom"
            padding="md"
          >
            {animations.map((animation, index) => (
              <Button
                key={animation}
                size="md"
                color="gray"
                variant={index === animationIndex ? "filled" : "light"}
                onClick={() => handleAnimationButtonClick(index)}
                fullWidth
              >
                {animation}
              </Button>
            ))}
          </Drawer>
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;
