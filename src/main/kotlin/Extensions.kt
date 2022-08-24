import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

fun isSystemInDarkTheme() =
    window.matchMedia("(prefers-color-scheme: dark)").matches

