import { Affix, Button } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
    const { animations } = useCharacterAnimations();
    return (
        <Affix position={{ bottom: 50, right: 20 }}>
   {animations.map((animation) => (
                    <Button key={animation}>Dance</Button>
                ))}
                Taniec Polaka
        </Affix>
    )
}


export default Interface;