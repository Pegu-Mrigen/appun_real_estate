import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import defaultImage from "../assets/images/1.jpg";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    title,
    rentFrequency,
    rooms,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          width={400}
          height={260}
          alt="Default Image"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Rs-{millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
            <Box>
              <Avatar size="sm" src={agency?.logo.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.legnth > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Link>
);

export default Property;
