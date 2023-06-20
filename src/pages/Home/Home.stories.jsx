import { Provider } from 'react-redux';
import Home from '.';
import store from '../../store';
import CssBaseLayout from '../../layouts/css';

const WrappedPage = () => {
	return <Provider store={store}>
		<CssBaseLayout><Home /></CssBaseLayout>
	</Provider>
}

export default {
  title: 'Example/Home',
  component: WrappedPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {},
};

export const LoggedOut = {};
