import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*

class Api {
    val client = HttpClient()
    val baseUrl = "https://iconoplastic-api.herokuapp.com/"
    suspend fun getMainFont(): ByteArray {
        val response = client.get("$baseUrl/download/main_font")
        return response.body()
    }

    suspend fun getCodepoints(): Map<String, String> {
        val response = client.get("$baseUrl/download/codepoints").body<String>()
        return response.split("\n").associate {
            kotlin.runCatching {
                val final = it.split(' ')
                final[0] to final[1]
            }.getOrDefault("10mp" to "E8B8")
        }.toMap()
    }
}