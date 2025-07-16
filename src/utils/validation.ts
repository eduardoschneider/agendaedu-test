import { Alert } from "react-native";

export function validateObjectFields(obj: Record<string, any>): boolean {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      if (value.trim() === "") {
        Alert.alert("Validação", `O campo ${key} não pode ser vazio.`);
        return false;
      }

      if (key.toLowerCase().includes("email")) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          Alert.alert("Validação", `O campo ${key} não é um e-mail válido.`);
          return false;
        }
      }
    }

    if (typeof value === "number") {
      if (value === 0) {
        Alert.alert("Validação", `O campo ${key} não pode ser 0.`);
        return false
      }
    }
  }

  return true;
}