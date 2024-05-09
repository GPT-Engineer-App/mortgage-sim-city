import { useState } from "react";
import { Container, VStack, Text, Input, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box, Heading } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [interestRate, setInterestRate] = useState(null);

  const calculateInterestRate = () => {
    const salary = parseFloat(monthlySalary);
    const price = parseFloat(propertyPrice);
    if (!salary || !price) {
      setInterestRate(null);
      return;
    }

    // Simplified interest rate calculation: the less the salary compared to the property price, the higher the interest rate
    const rate = (price / salary) * 0.5; // This is a dummy formula for demonstration
    setInterestRate(rate.toFixed(2));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="full" height="300px" bgImage="url('/images/couple-house.jpg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
        <VStack spacing={4} p={4} color="white">
          <Heading as="h1" size="2xl">
            Welcome to Skippatopplån
          </Heading>
          <Text fontSize="xl">Your journey to a new home starts here.</Text>
        </VStack>
      </Box>
      <VStack spacing={4} width="full" maxW="md">
        <Heading as="h1" size="xl" textAlign="center">
          Skippatopplån
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover how easy it is to get your dream home in Stockholm with tailored mortgage options for young people.
        </Text>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <NumberInput value={monthlySalary} onChange={(value) => setMonthlySalary(value)}>
              <NumberInputField placeholder="Enter your monthly salary (SEK)" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput value={propertyPrice} onChange={(value) => setPropertyPrice(value)}>
              <NumberInputField placeholder="Target price of the property (SEK)" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateInterestRate}>
              Calculate Interest Rate
            </Button>
            {interestRate !== null && <Text fontSize="lg">Estimated Interest Rate: {interestRate}%</Text>}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
