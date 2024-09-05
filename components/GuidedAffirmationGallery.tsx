import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Href, Link } from "expo-router";

interface GuidedAffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
        <View className="space-y-2">
          <FlatList
            data={previews}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item }) => {
              return (
                <Link href={`/affirmations/${item.id}` as Href} asChild>
                  <Pressable>
                    <View className="h-36 w-32 rounded-md mr-4">
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        className="w-full h-full"
                      />
                    </View>
                  </Pressable>
                </Link>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default GuidedAffirmationGallery;
