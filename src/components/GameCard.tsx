import React from "react";
import {
  Card,
  Image,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Stack>
            <Box>
              <Heading fontSize="3xl">{game.name}</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fugiat.
              </Text>
                {/* {game.parent_platforms.map((platform)=><Text key={platform.platform.id}>{platform.platform.name}</Text>)} */}
                <PlatformIcons platforms={game.parent_platforms.map((p)=>p.platform)}/>
                
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
