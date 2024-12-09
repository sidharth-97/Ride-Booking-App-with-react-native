import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="flex items-end w-full justify-end p-5"
      >
        <Text className="text-black text-md ">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] " />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#028FFF]" />}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="text-black text-3xl font-bold mx-10 text-center">
              <Text>{item.title}</Text>
            </View>
            <View className=" text-lg font-JakartaSemiBold text-center mx-10 mt-3 text-[#858585]">
              <Text>{item.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={() => {
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1);
        }}
        title={isLastSlide ? "Set Started" : "Next"}
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Welcome;
