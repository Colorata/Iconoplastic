import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.span
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import org.w3c.dom.get
import org.w3c.dom.set

private var _selectedListStorage: List<String>? = null

var selectedListStorage: List<String>
    get() {
        if (_selectedListStorage == null) _selectedListStorage =
            localStorage["selectedList"]?.let { kotlinx.serialization.json.Json.decodeFromString(it) } ?: listOf()
        return _selectedListStorage as List<String>
    }
    set(value) {
        _selectedListStorage = value
        localStorage["selectedList"] = kotlinx.serialization.json.Json.encodeToString(value)
    }

fun addToBars(item: Map.Entry<String, String>) {
    console.log("AAAAAAAAAAAAAAAAA")
    fun addRow(prefix: String = "") {
        document.getElementById("${prefix}selected-icons")?.append {
            div("row") {
                id = "${prefix}selected-item-${item.key}"
                span("icon") {
                    +item.value.toSymbol()
                }
                span {
                    +item.key.replace("_", " ").split(" ").joinToString { value ->
                        value.replaceFirstChar { it.uppercaseChar() }
                    }.replace(",", "")
                }
            }
        }
    }
    addRow()
    addRow("bar-")
    console.log(document.getElementById("bottom-bar"))
    document.getElementById("bottom-bar")?.append {
        div {
            console.log("AAAA")
            id = "bottom-item-${item.key}"
            span("icon") {
                +item.value.toSymbol()
            }
        }
    }
}

fun removeFromBars(item: Map.Entry<String, String>) {
    document.getElementById("selected-item-${item.key}")?.remove()
    document.getElementById("bottom-item-${item.key}")?.remove()
}