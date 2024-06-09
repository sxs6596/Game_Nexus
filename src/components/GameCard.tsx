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
  HStack
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden" width='400px'>
        <Image src={game.background_image} />
        <CardBody>
          <Stack>
            <Box>
              <Heading fontSize="3xl">{game.name}</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fugiat.
              </Text>
                {/* {game.parent_platforms.map((platform)=><Text key={platform.platform.id}>{platform.platform.name}</Text>)} */}
                <HStack justifyContent='space-between'>
                <PlatformIcons platforms={game.parent_platforms.map((p)=>p.platform)}/>
                <CriticScore score={game.metacritic}/>
                </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
