import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pageHeader: {
    marginBottom: 34,
  },
  pageHeaderText: {
    fontSize: 34,
  },
  pageHeaderBack: {
    marginBottom: 34,
  },
  pageHeaderBackIcon: {
    left: -10,
  },
  pageSubtitleText: {
    fontSize: 24,
    marginBottom: 24,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
  },
  iconCircleBackground: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSquareBackground: {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  usernameText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
  },
  userSubtitleText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
  },
  itemTitleText: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  darkMode: {
    position: 'absolute',
    right: 50,
  },
});
