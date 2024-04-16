import { defineField, defineType } from "sanity";

export const threeFlatType = defineType({
  name: "3-bedroom-flat",
  title: "3-Bedroom Flat",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    // Split the images field into three separate fields
    defineField({
      name: "fullImage",
      title: "Full Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "leftViewImage",
      title: "Left View Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "rightViewImage",
      title: "Right View Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "drawingRefNo",
      title: "Drawing Reference Number",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0.image", // Display the first image as the preview media
    },
  },
});
