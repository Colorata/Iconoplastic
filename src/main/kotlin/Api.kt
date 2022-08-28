import kotlinx.browser.window
import kotlinx.serialization.Serializable
import org.w3c.fetch.RequestInit

@Serializable
data class Unicodes(
    val unicodes: List<String>
) {
    fun toJson(): String {
        return """
            {
                "unicodes": [
                    ${
            unicodes.joinToString {
                "\"${it.fromSymbol()}\""
            }
        }
                ]
            }
        """.trimIndent()
    }
}

class Api {
    val baseUrl = "https://iconoplastic-api.herokuapp.com"

    // TODO: Move to Coroutines when it will be fixed for Kotlin/JS
    fun getCodepoints(onLoad: (Map<String, String>) -> Unit) {
        window.fetch("$baseUrl/download/codepoints").then {
            it.text().then {
                onLoad(it.split("\n").associate {
                    kotlin.runCatching {
                        val final = it.split(' ')
                        final[0] to final[1]
                    }.getOrDefault("10mp" to "E8B8")
                }.toMap())
            }
        }
    }

    fun getFontUrl(unicodes: Unicodes, onLoad: (url: String?) -> Unit) {
        console.log(unicodes.toJson())
        window.fetch(
            "$baseUrl/icons_configure", init = RequestInit(
                method = "POST", headers = mapOf(
                    "Accept" to "application/json",
                    "Content-Type" to "application/json"
                ),
                body = unicodes.toJson()
            )
        ).then {
            console.log("${baseUrl}/cache/")
            it.text().then { response ->
                console.log(response)
                onLoad(
                    response.substringAfter("{\"link\":\"").substringBefore("\"}").replace("cache/", "")
                )
            }
        }
    }

    fun downloadToLocal(url: String) {
        window.open("$baseUrl/download/$url")?.focus()
    }
}