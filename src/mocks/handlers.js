import { rest } from "msw";

const baseURL = "https://wsiapi2023-b84941ad1c92.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 10,
        username: "damon",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 10,
        profile_image:
          "https://res.cloudinary.com/dhign8ar8/image/upload/v1/media/../default_profile_tbdgzv",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
