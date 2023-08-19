import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Doctors collection schema
const doctorsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    subtitle: z.string().optional(),
    address: z.string().optional(),
    clinic: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    image2: z.string().optional(),
    
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    google: z.string().optional(),
    whatsapp: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    specializations: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    testimonial: z.object({
      title: z.string(),
      description: z.string(),
      testimonial_list: z.array(
        z.object({
          author: z.string(),
          avatar: z.string().optional(),
          rating: z.string(), 
          organization: z.string().optional(),
          content: z.string().optional(),
        })
      ),
    }),
  picture: z.object({
    heading: z.string(),
    picture_list: z.array(
      z.object({
        photo: z.string().optional(),
        alternate: z.string().optional(),
        detail: z.string().optional(),
      }),
    ),
  }),

  // video: z.object({
  //   intro: z.string().optional(),
  //   video_list: z.array(
  //     z.object({
  //       video: z.string().optional(),
  //       alternate: z.string().optional(),
  //       comment: z.string().optional(), 
  //     })
  //   ).optional()
  // }).optional()

  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  doctors: doctorsCollection,
};
