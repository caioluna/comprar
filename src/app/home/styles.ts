import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2d8",
    alignItems: "center",
    paddingTop: 62,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 42,
    gap: 12
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 24,
    padding: 24,
    paddingTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6EC",
  },
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E4E6EC',
    marginVertical: 16,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 48,
  }
});
