import mixpanel from "mixpanel-browser";

const isProd = process.env.NODE_ENV === "production";

mixpanel.init(process.env.MIXPANEL_TOKEN!);

const actions = {
  track: (name: string, props: object) => {
    if (isProd) mixpanel.track(name, props);
  },
};

export const Mixpanel = actions;
